import React, { useEffect, useRef, useState } from "react";
import { useUI } from "../../../context/ui.context";
import EditStack from "./editStacks";
import { Modal } from "antd";
import { CiStopwatch } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { useSportDetailsById, useCricketFancyData } from "../../../Framework/sportsData";
import { fetchIPAdress, useAdminDetails, useIPDetails } from "../../../Framework/login";
import { checkTimeDifference, extractDetails, extractEventDetails, showToasterMessage } from "../../../Framework/utils/constant";
import { usePlaceBet } from "../../../Framework/placeBet";
import { format, isToday, isTomorrow, parse } from "date-fns";
import { useCurrentBetsData } from "../../../Framework/placeBet";

interface BetOdds {
  betType: string;
  runnerName: string;
  key: string;
  odds: string;
  type: "back" | "lay";
  time: string;
}

interface EventData {
  RunnerName: string;
  [key: string]: any; // Allow dynamic keys
}

interface UserData {
  status: string;
  Balance: number;
  ExposureLimit: number;
  UserName: string;
}

const BetSlip: React.FC = () => {
  const { betOdds, stacks ,setMatchedBets,userData} = useUI();
  const { sport, eventId }: any = useParams();
   const [val,setValue] = useState('');
   
   useEffect(()=>{
     
     if(sport === 'horseRacing_racecard'){
      setValue("racecard") 
     }else if(sport === 'greyhound_racecard'){
       setValue("racecard/greyhound") 
       
     }
     else{
       setValue(sport);
     }
    },[sport])
      const {data,isLoading,isError} = useSportDetailsById({id:eventId,sport:val});
     console.log(userData,"gfdsfdgsdfg");
  const {data:fancyData} = useCricketFancyData(eventId);
  const { data:ipAddress} = useIPDetails();
  const { mutate: placingBet, isError: error } = usePlaceBet();
  
  const [sum, setSum] = useState<number>(0);
  const [edit, setEdit] = useState<boolean>(false);
  const [betProcessed, setBetProcessed] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(2);
 
   
   const getEventData = () =>{
    let eventData: EventData[] =[]; 
         if(sport === "greyhound_racecard" || sport === "horseRacing_racecard"){
            eventData = data?.data;
           
         }
         else{
            if(betOdds?.betType === "session"){
              eventData = fancyData?.session;
            }
            else{
              if(betOdds?.betType === "odd"){
                 eventData = ((data?.market||[])[0])?.events;
              }
              else{
                
                eventData = data?.bookmaker;
               
              }
            }
         }

         return eventData;
   }
  
  // const eventData = betOdds?.betType === "session" ? fancyData?.session as EventData[] :(betOdds?.betType === "odd" ? ((matchData||[])[0]?.events) as EventData[]:matchData as EventData[]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
   
  const isPlacingBet = useRef(false); // Track ongoing API request

   
  const checkBetCondition = (): boolean => {
    
    const checkCurrentBet = (getEventData()||[])?.find((item) => (item?.RunnerName === betOdds?.runnerName||item?.nation === betOdds?.runnerName));
   console.log(checkCurrentBet,"CUrrent")
    if (!userData || !betOdds || !checkCurrentBet) return false;
    if(!(Object.keys(userData||{})?.length)){
      showToasterMessage({ messageType: "error", description: "LOGIN WITH REALID" });
      return false;
    }
    // Check user status and balance
    if (userData.status === "deactive" || (Number(userData?.Balance)-Number(Math.abs(userData?.Exposure))) < sum ) {
      showToasterMessage({ messageType: "error", description: "LOW BALANCE" });
      return false;
    }
      
    if((sum<Number(betOdds?.min))|| sum>Number(calculateMaxAmount(betOdds?.max)) || sum<100){
      showToasterMessage({ messageType: "error", description: "INVALID BET AMOUNT" });
      return false;
    }
  
    // Check odds validity
    const currentOdds = parseFloat(checkCurrentBet[`${betOdds?.key}`]);
    const betOddsValue = parseFloat(betOdds.odds);
     const currentsize = parseFloat(checkCurrentBet[`${betOdds?.sizeKey}`])

   

    if(betOdds?.betType === 'session'){
        if(Number(betOdds?.size) !== Number(currentsize)){
          showToasterMessage({ messageType: "error", description: "size invalid" });

          return false;
        }

        if((betOdds.type === "lay" && currentOdds < betOddsValue) ||
        (betOdds.type === "back" && currentOdds > betOddsValue)){
          showToasterMessage({ messageType: "error", description: "Odds invalid" });

          return false;
        }
    }

    
    else{
      if (
        (betOdds.type === "lay" && currentOdds > betOddsValue) ||
        (betOdds.type === "back" && currentOdds < betOddsValue) || (checkCurrentBet?.status === "SUSPENDED" || (checkCurrentBet?.status === "Ball Running"))
      ) {
        showToasterMessage({ messageType: "error", description: "Odds invalid" });
        return false;
      }
    }
    // Check timeout condition
    // const updatedTime = (betOdds.time||"").replace(" ", "T"); // Convert to ISO format
    // const isWithin10Seconds = checkTimeDifference(updatedTime);
  
    // if (!isWithin10Seconds) {
    //   showToasterMessage({ messageType: "error", description: "Timeout" });
    //   return false;
    // }

    const givenTimestamp = ( data?.update_time) * 1000;

    // Format the date
    const formattedDate = data?.update_time ?  format(new Date(givenTimestamp||""), 'yyyy-MM-dd HH:mm:ss'): data?.updateTime;
    const time =  (formattedDate||"").replace(" ", "T"); // Convert to ISO format
    

// Current timestamp

    const isWithin10Second = checkTimeDifference(time);
  
    if (!isWithin10Second) {
      showToasterMessage({ messageType: "error", description: "data Timeout!!" });
      return false;
    }
  
    return true; // All conditions are valid
  };
    const calculateProfitLoss = (type:string)=>{

      if(type === "session"){
          return(
            (Number(betOdds.size) * sum)/100
          )
      }
      else if( type === "bookmaker"){
        return(
          (Number(betOdds.odds) * sum)/100
        )  
      }
      else{
         return ( Number(betOdds.odds) * sum - sum);  
      }

    }
    
  // Helper function to place a bet
  const placeBet = () => {
    if (isPlacingBet.current) return; // Prevent duplicate API calls
  isPlacingBet.current = true; // Set flag
    if (!userData || !betOdds || !data) return;
    const checkCurrentBet = (getEventData()||[])?.find((item) => (item?.RunnerName === betOdds?.runnerName||item?.nation === betOdds?.runnerName));
    const eventInfo = extractDetails(checkCurrentBet?.title||data?.title)
     console.log(eventInfo,checkCurrentBet,"eventsss","fitnesss")
    const now = new Date();
    setBetProcessed(false);

    const bettingData = {
      userName: userData.UserName,
      eventName: `${eventInfo?.team1} ${eventInfo?.team2 ? `v ${eventInfo?.team2}`:''}` ,
      profitloss: betOdds?.type === "back" ? calculateProfitLoss(betOdds?.betType) : sum,
      betTypes: betOdds?.type,
      amount: sum,
      placeDate: format(now, "yyyy-MM-dd hh:mm:ssa"),
      MatchDate: eventInfo?.date|| data?.time,
      accountType: "User",
      userRate: betOdds?.odds,
      ip: ipAddress?.ip, // IP address
      exposure:  betOdds?.type === "back" ? sum :calculateProfitLoss(betOdds?.betType),
      time: format(now, "yyyy-MM-dd hh:mm:ssa"),
      gameid: eventId,
      evetsType: betOdds?.betType,
      nation: betOdds?.runnerName,
      section: sport === "greyhound_racecard"? "greyhound" : sport === "horseRacing_racecard" ? "horserace" : sport,
      bhav: betOdds?.size
    };
    placingBet(
      { data: bettingData, sport },
      {
        onSuccess: () => {

          isPlacingBet.current = false; // Reset flag after success

        },
        onError: () => {

          isPlacingBet.current = false; // Reset flag after failure

        }
      }
    );
    setMatchedBets({...betOdds,odds:0,amount:0})
  };
  
  // Handle bet confirmation
  const handleConfirmBet = () => {
    if (betProcessed || isPlacingBet.current) return; // Prevent duplicate triggers
  
    const canPlaceBet = checkBetCondition();
    if (!canPlaceBet) return;
  
    setBetProcessed(true);
    setTimer(2);
  
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(intervalRef.current!);
          if (!isPlacingBet.current) {
            placeBet();
          }
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };
  
  const calculateMaxAmount = (val: string | number): number => {
    if (typeof val === "number") {
      return val;
    }
  
    if (typeof val === "string") {
      let num = parseFloat(val);
      
      if (val.toUpperCase().includes("L")) {
        return num * 100000; // Convert Lakh to numeric value
      } 
      if (val.toUpperCase().includes("K")) {
        return num * 1000; // Convert Thousand to numeric value
      }
    }
  
    return 0; // Default return value
  };
  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  const handleStakeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSum(Number(e.target.value));
  };

  const handleStackClick = (e: any, val: number) => {
    e.preventDefault();
    setSum(val=>sum+val);
    setSum((prevSum) => {
      const newSum = Number(prevSum) + val;
      
      // Use the latest sum inside setSum callback
    
  
      return newSum;
    });
    // setMatchedBets({...betOdds,amount:Number(sum+val)});
    console.log(betOdds, "MATCHODDS");
  };


  return (
    <div className="relative">
      <div
        title="Bet Slip"
        id="betSlipPlaceorder"
        className="w-full bg-bg_BetSlipBgColor text-selection-none border-[2px] border-b-[5px] font-lato origin-top transition-all ease-in-out p-2 rounded-sm scaleVerticalOpen border-backBtn"
      >
        {/* Top Part of Bet Slip */}
        <div id="topPartOfBetSlip" title="Bet Slip Top Part" className="grid grid-cols-12 pt-[2px] gap-x-[15px]">
          {betOdds?.betType === "session" ? (
            <>
              <span className="col-span-3 text-[10px] text-text_Ternary font-normal text-center">ODDS(H-J)</span>
              <span className="col-span-3 text-[10px] text-text_Ternary font-normal text-center">RUNS</span>
            </>
          ) : (
            <span className="col-span-6 text-[10px] text-text_Ternary font-normal">ODDS</span>
          )}

          <div className="col-span-6 w-full flex items-center justify-between">
            <span className="text-[10px] text-text_Ternary font-normal text-start pl-1">STAKE</span>
            <span className="text-[10px] float-right capitalize text-text_Ternary font-normal text-center">
              Max Mkt : {calculateMaxAmount(betOdds?.max)}
            </span>
          </div>

          {betOdds?.betType === "session" ? (
            <span title="Odds" className="col-span-6 pt-1.5 w-full">
              <div className="w-full grid grid-cols-2 gap-x-2 min-h-[35px]">
                <span className="col-span-1 overflow-hidden h-full">
                  <input
                    id="oddInput"
                    inputMode="numeric"
                    className="focus:outline-none text-sm w-full h-full text-center rounded-[4px] flex items-center justify-center text-text_Ternary focus:border-oddInputBorderActive active:border-oddInputBorderActive"
                    disabled={true}
                    autoComplete="off"
                    max="1000"
                    min="0"
                    pattern="^[+-ed]+$"
                    type="number"
                    value={betOdds?.size}
                  />
                </span>
                <span className="col-span-1 h-full overflow-hidden">
                  <input
                    id="oddInput"
                    inputMode="numeric"
                    className="w-full focus:outline-none text-sm h-full text-center rounded-[4px] flex items-center justify-center text-text_Primary border-oddInputColor focus:border-oddInputBorderActive active:border-oddInputBorderActive"
                    autoComplete="off"
                    max="1000"
                    min="0"
                    pattern="^[+-ed]+$"
                    type="number"
                    disabled={true}
                    value={betOdds?.odds}
                  />
                </span>
              </div>
            </span>
          ) : (
            <span title="Odds" className="col-span-6 pt-1.5 w-full">
              <div className="grid grid-cols-12 min-h-[35px]">
                <span className="col-span-12 h-full pr-1 overflow-hidden">
                  <span className="focus:outline-none text-sm w-full h-full text-center py-1 flex items-center justify-center border-[0.25px] text-text_Ternary border-oddInputBorder focus:border-oddInputBorderActive active:border-oddInputBorderActive">
                    {betOdds?.odds || "0"}
                  </span>
                </span>
              </div>
            </span>
          )}

          <span title="Stakes" className="col-span-6 pt-1.5 w-full px-[1px] overflow-hidden">
            <input
              id="stakeInput"
              inputMode="numeric"
              className="focus:outline-none text-md w-full h-full text-center bg-bg_Quaternary flex items-center justify-center border-[0.75px] text-text_Ternary placeholder:text-text_Ternary rounded-sm focus:border-oddInputBorderActive active:border-oddInputBorderActive"
              placeholder="Max : 5,000"
              autoComplete="off"
              pattern="d*"
              type="number"
              onChange={handleStakeChange}
              value={sum}
            />
          </span>
        </div>

        {/* Stack Buttons */}
        <div className="mt-[15px] p-2.5 rounded-md border border-borderColorOfMarket bg-bg_InActivePlaceBtnColor">
          {edit ? (
            <EditStack edit={edit} />
          ) : (
            <div className="grid grid-cols-12 gap-x-1 gap-y-1">
              {stacks.map((val:number, i:number) => (
                <button
                  key={"stackAmount"+i}
                  className="inline-block leading-normal relative transition duration-150 ease-in-out col-span-4 w-full overflow-hidden border border-primary text-[12px] font-semibold rounded-[4px] bg-bg_Primary text-text_Quaternary text-center py-1.5 cursor-pointer"
                  onClick={(e) => handleStackClick(e,val)}
                >
                  <span>+ {val}</span>
                </button>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="grid grid-cols-12 gap-x-1 gap-y-1 pt-[15px]">
            <button className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out col-span-3 w-full text-[10px] min-h-[26px] font-semibold rounded-[4px] bg-minBtnGrd text-text_Quaternary py-2 cursor-pointer"
              onClick={() => setSum(Number(betOdds?.min))}
            
            >
              MIN
            </button>
            <button className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out col-span-3 w-full text-[10px] font-semibold rounded-[4px] bg-maxBtnGrd text-text_Quaternary py-2 cursor-pointer"
              onClick={() => setSum(calculateMaxAmount(betOdds?.max))}
            
            >
              MAX
            </button>
            <button
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out col-span-3 w-full text-[10px] font-semibold rounded-[4px] text-text_Quaternary py-2 bg-editStakesGrd cursor-pointer"
              type="button"
              onClick={() => setEdit(!edit)}
            >
              {!edit ? "EDIT STAKES" : "UPDATE"}
            </button>
            <button
              className="inline-block relative overflow-hidden transition duration-150 ease-in-out col-span-3 w-full text-[10px] font-semibold rounded-[4px] bg-clearBtnGrd text-text_Quaternary leading-4 py-2 cursor-pointer"
              type="button"
              onClick={() => setSum(0)}
            >
              CLEAR
            </button>
          </div>
        </div>

        {/* Confirm and Cancel Buttons */}
        <div className="flex items-center justify-center gap-x-[13px] pt-3.5 w-full">
          <button
            type="button"
            className="leading-normal relative overflow-hidden transition duration-150 ease-in-out px-2 py-2.5 w-[40%] max-w-[156px] flex items-center justify-center min-h-[46px] text-sm bg-transperent text-text_BetSlipCancelBtnColor font-medium border border-danger rounded-md cursor-pointer"
            onClick={() => setMatchedBets({ ...betOdds, odds: "" })}
          >
            <span className="text-text_Danger font-bold text-xs leading-5">Cancel Bet</span>
          </button>
          <div className="w-[50%] max-w-[170px] h-max">
            <button
              disabled={!sum||betProcessed}
              onClick={()=>handleConfirmBet()}
              type="button"
              className={`leading-normal overflow-hidden transition duration-150 ease-in-out py-1 relative w-full flex min-h-[46px] px-2.5 rounded-md font-medium border flex-row items-center justify-between ${
                sum
                  ? "bg-placeBetBtnGrd text-text_Quaternary border-primary cursor-pointer"
                  : "bg-bg_InActivePlaceBtnColor text-text_Ternary border-inActivePlaceBtnColor disabled"
              }`}
            >
              <div className="flex items-start justify-start flex-col">
                <span className="font-bold text-xs sm:text-sm">Place Bet</span>
                <span className="font-semibold text-[10px] sm:text-xs">
                  {betOdds?.type === "lay" ? "Liability" : "Profit"} :{" "}
                  {/* { betOdds?.type === "back" ? calculateProfitLoss(betOdds?.betType) : sum} */}
                  { (calculateProfitLoss(betOdds?.betType)||0).toFixed(2)  }
                </span>
              </div>
              <span className="text-[10px] flex items-center justify-center gap-x-[1px]">
                <span>
                  <CiStopwatch fill="var(--color-quaternary)" size={16} fontSize={20} />
                </span>
                <span className={`font-normal ${sum ? "text-text_Quaternary" : "text-text_Ternary"}`}>7s</span>
              </span>
            </button>
          </div>
        </div>

        {/* Confirm Bet Toggle */}
        <div className="flex items-center justify-between w-full px-1 pt-3.5">
          <span className="text-[13px] text-text_Ternary font-medium">Confirm bet before placing</span>
          <label className="inline-flex items-center cursor-pointer relative">
            <input className="sr-only peer" type="checkbox" />
            <div className="relative bg-bg_Ternary9 border-[0.5px] font-lato border-betSlipCancelBtnColor rounded-full peer-checked:bg-bg_SwitchCheckedBg h-7 w-14">
              <span className="absolute top-1/2 right-[5px] transform -translate-y-1/2 font-bold text-text_Primary text-[10px]">
                OFF
              </span>
              <div className="bg-bg_Quaternary h-full border-[0.5px] border-betSlipCancelBtnColor transition-all ease-in-out aspect-square absolute left-0 rounded-full"></div>
            </div>
          </label>
        </div>
      </div>

      {/* Bet Processing Modal */}
      <Modal open={betProcessed} closeIcon={null}>
        <div className="z-2 popUpBoxShadow popUpOpenAnimation absolute w-[95%] z-[900] bg-bg_Quaternary p-2 xs:p-5 rounded-md">
          <div className="flex flex-col gap-1 align-top items-center">
            <span className="relative w-max min-w-6 min-h-6 flex items-center justify-center p-2 pt-6">
              <span className="absolute min-w-14 min-h-14 animate-spin rounded-full border-[2px] border-primary border-dashed"></span>
              <span className="font-semibold text-text_Ternary">{Number(timer)}</span>
            </span>
            <span className="font-semibold mt-[4px]">Your bet is being processed...</span>
            <span className="font-semibold">Please Wait...</span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BetSlip;
