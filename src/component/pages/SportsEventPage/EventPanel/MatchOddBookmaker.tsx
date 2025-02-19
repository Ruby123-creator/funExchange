import React, { useEffect, useState } from "react";
import { useUI } from "../../../../context/ui.context";
import LayBack from "../../../common/LayBack";
import BetSlip from "../../../common/BettingWindow/betSlip";

interface Props {
  title: string;
  data: any;
}
// Define the expected API response type
interface DataItem {
  RunnerName: string;
  status: string;
  title: string;
  max: string;
  min: number;
  BackPrice1: string;
  BackPrice2: string;
  BackPrice3: string;
  BackSize1: string;
  BackSize2: string;
  BackSize3: string;
  LayPrice1: string;
  LayPrice2: string;
  LayPrice3: string;
  LaySize1: string;
  LaySize2: string;
  LaySize3: string;
}

// Type to track which fields should blink
type BlinkState = Record<string, boolean>;
const MatchOddBookmaker: React.FC<Props> = ({ title, data }) => {
  const { setMatchedBets, betOdds } = useUI();
  const [betwindow, setBetWindow] = useState(-1);

  const [prevData, setPrevData] = useState<DataItem[]>([]);
  const [blinkFields, setBlinkFields] = useState<BlinkState[]>([]);

  useEffect(() => {
    if (data && prevData.length === data.length) {
      let newBlinkFields = data.map((item:any, index:number) => {
        let changes: BlinkState = {};

        Object.keys(item).forEach((key) => {
          if (item[key as keyof DataItem] !== prevData[index]?.[key as keyof DataItem]) {
            changes[key] = true;
          } else {
            changes[key] = false;
          }
        });
        console.log(changes,"GONOPP:::::::::");

        return changes;
      });
      console.log(newBlinkFields ,"GONOPP");

      setBlinkFields(newBlinkFields);

      // Reset blinking effect after 1 second
      setTimeout(() => {
        setBlinkFields(data.map(() => ({})));
      }, 6000);
    }

    if (data) {
      setPrevData([...data]); // Store a new reference to avoid shallow comparison issues
    }
  }, [data]);



  console.log(blinkFields,":::::CHECKKK")

  return (
    <div className=" w-full text-selection-none pb-3 lg:pb-0">
      <div className=" px-2 font-helvetica-neue">
        <div className=" py-1.5">
          <div className=" grid grid-flow-col grid-cols-12  text-xs font-[500] mb-1.5">
            <div className="pl-1 flex items-center justify-start gap-x-1 md:gap-x-1 col-span-7 md:col-span-5 ">
              <span className=" cursor-pointer transition-all ease-in-out duration-300 hover:scale-105"></span>
              <span className=" capitalize  font-bold text-xs sm:text-sm md:text-[15px]">
                {title}
              </span>

              <button
                className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-cashout-btn-gradient rounded-md px-2.5 py-1 text-center shadow-[inset_-12px_-8px_40px_#46464620] flex items-center justify-center flex-row h-max  max-w-[74%] mr-1 cursor-pointer"
                type="button"
              >
                <div className="text-[10px] md:text-sm text-text_Quaternary whitespace-nowrap  font-semibold">
                  Cashout
                </div>
              </button>
            </div>
            <div className=" col-span-5 md:col-span-7 grid grid-cols-2 md:grid-cols-6 pb-[2px]">
              <span className=" hidden md:flex col-span-1 text-center  font-semibold h-full  items-end justify-center"></span>
              <span className=" col-span-1 text-center  font-semibold h-full  hidden md:flex  items-end justify-center"></span>
              <span className=" col-span-1 text-center text-[10px] sm:text-xs md:text-sm leading-3 text-text_Ternary   font-bold h-full flex items-end justify-center">
                BACK
              </span>
              <span className=" col-span-1 text-center text-[10px] sm:text-xs md:text-sm  leading-3   font-bold h-full flex items-end justify-center">
                LAY
              </span>
              <span className=" col-span-1 text-center font-semibold  h-full  hidden md:flex  items-end justify-center"></span>
              <span className=" col-span-1 text-center font-semibold  h-full  hidden md:flex  items-end justify-center"></span>
            </div>
          </div>
          <div className=" bg-bg_Quaternary rounded-[3px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-[1px] cursor-pointer">
            {(data || []).map((item: any, i: number) => {
              return (
                <>
                  <div
                    className="col-span-12 grid grid-cols-12 border-b border-borderColorOfMarket"
                    key={`events${i}`}
                  >
                    <div className="col-span-4 h-12 lg:col-span-5 grid grid-cols-7 ">
                      <span
                        id="inPlayTeamName"
                        className=" text-selection-none flex items-center justify-start col-span-5 px-1 relative active:scale-[94%] transition-all px-5 ease-in-out duration-100 cursor-pointer  truncate w-full capitalize text-text_Ternary  text-[13px] md:text-sm  font-semibold"
                      >
                       {item?.RunnerName}
                      </span>
                    </div>
                    <span className="col-span-8 h-12 lg:col-span-7 w-full overflow-x-auto no-scrollbar">
                      {
                        item?.status === "ACTIVE" ? 
                        <div
                        className="flex grid md:grid-cols-6 grid-cols-2 grid-flow-row h-full flex-nowrap"
                        onClick={() => setBetWindow(i)}
                      >
                        <LayBack
                          val={item?.BackPrice2}
                          allowed={true}
                          size={item?.BackSize2}
                          max={item?.max}
                          betTrue={true}
                          className={`bg-bg_BackBtnBg border-backBtn ${blinkFields[i]?.BackPrice2||blinkFields[i]?.BackSize2 ? "blink" : ""} md:block hidden`}
                        />
                        <LayBack
                          val={item?.BackPrice3}
                          allowed={true}
                          max={item?.max}
                          betTrue={true}
                          size={item?.BackSize3}
                          className={`bg-bg_BackBtnBg border-backBtn md:block hidden ${(blinkFields[i]?.BackPrice3||blinkFields[i]?.BackSize3) ? "blink" : ""}`}
                        />
                        <LayBack
                          val={item?.BackPrice1}
                          size={item?.BackSize1}
                          max={item?.max}
                          allowed={true}
                          betTrue={true}
                          className={`bg-bg_BackBtnBg border-backBtn ${(blinkFields[i]?.BackPrice1||blinkFields[i]?.BackSize1) ? "blink" : ""}`}
                        />
                        <LayBack
                          val={item?.LayPrice1}
                          allowed={true}
                          max={item?.max}
                          betTrue={true}
                          size={item?.LaySize1}
                          className={`bg-bg_LayBtnBg border-layBtn ${(blinkFields[i]?.LayPrice1||blinkFields[i]?.LaySize1) ? "blink" : ""}`}
                        />

                        <LayBack
                          val={item?.LayPrice2}
                          size={item?.LaySize2}
                          max={item?.max}
                          betTrue={true}
                          allowed={true}
                          className={`bg-bg_LayBtnBg border-layBtn md:block hidden ${(blinkFields[i]?.LayPrice2||blinkFields[i]?.LaySize2) ? "blink" : ""}`}
                        />

                        <LayBack
                          val={item?.LayPrice3}
                          size={item?.LaySize3}
                          max={item?.max}
                          betTrue={true}
                          allowed={true}
                          className={`bg-bg_LayBtnBg border-layBtn md:block hidden ${(blinkFields[i]?.LayPrice1||blinkFields[i]?.LaySize1) ? "blink" : ""}`}
                        />
                      </div>: 
                      <div
                                                    className=" col-span-5 md:col-span-7  h-12 grid grid-cols-2 md:grid-cols-6 relative">
                                                    <span
                                                        className=" col-span-6 text-center min-h-12 py-[1px] px-[1px]"><span
                                                            className="  text-center bg-bg_ballRunning cursor-not-allowed w-full h-full rounded-sm flex text-xs flex-col items-center justify-center">SUSPENDED</span></span>
                                                </div>
                      }
                      
                    </span>
                  </div>

                  {betOdds?.odds && i === betwindow ? (
                    <div className="col-span-12 h-max lg:hidden">
                      <span className=" col-span-12 h-max w-full">
                        <BetSlip />
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchOddBookmaker;
