import { Modal } from 'antd';
import { format, isToday, isTomorrow, parse } from 'date-fns';
import React, { useEffect, useRef, useState } from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import GeneralRules from '../../../modals/generalRules';
import MatchedBets from '../../../common/BettingWindow/matchedBet';
import { useNavigate, useParams } from 'react-router-dom';
import { extractEventDetails } from '../../../../Framework/utils/constant';
import ScoreCard from './scoreCard';
interface Props{
    data:any;
}
export const LiveShowComp: React.FC<Props> = ({data}) => {
    const [open,setOpen] = useState(false);
    const { sport, eventId }: any = useParams();
    const [active,setActive] = useState('live');
    const [isModalOpen ,setIsModalOpen] = useState(false);
    const eventDetails = extractEventDetails(data?.gametitle)
    console.log(eventDetails,data,"tic-tac::::::::::::::::::::")
    const Navigate = useNavigate();
  
    const [expanded, setExpanded] = useState(false);

    
  useEffect(() => {
    // Listen for messages from the iframe
    const handleMessage = (event:any) => {
      if (event.data.action === "toggleIframe") {
        setExpanded((prev) => !prev);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  return (
    <>
    <div className="w-full flex items-center justify-start flex-col"
    id="eventDetails1-33869620" style={{zIndex: "20"}}>
     <div className=" w-full pl-[4px] pr-[4px] py-1.5 bg-bg_Quaternary flex flex-col items-center"
    id="eventPageHeader">
    <div className=" w-full flex  items-center justify-between">
        <div id="playIcon"
            className="flex items-start justify-center gap-x-3  w-max max-w-[92%]">
            <div
            onClick={()=>{
                if(sport === "greyhound_racecard"){
                    Navigate(`/sports-page/Greyhound-Racing`)

                }
                else if(sport === "horseRacing_racecard"){
                    Navigate(`/sports-page/Horse-Racing`)

                }
                else{
                    Navigate(`/sports-page/${sport}`)

                }
            }}
                className="w-8 cursor-pointer rounded-sm h-6 flex items-center justify-center bg-bg_Primary2 active:scale-110 active:opacity-90">
              <FaAngleLeft size={14} fill="#C10B32"/>
             
              
            </div><span className=" max-w-[10%] min-w-[6%] mt-0.5">
                {
                    (data?.inplay||data?.status === "active") ? <FaRegCirclePlay size={20} fill="#C10B32"/>:<MdOutlineWatchLater size={20} fill="#C10B32"/>
                }
            
            
                </span>
            <div
                className=" flex flex-col items-start justify-start w-[95%] break-words gap-y-0">
                <span
                    className=" w-full bg-titleGrd flex flex-col text-transparent text-start bg-clip-text font-lato text-sm font-bold">
                        <span
                        className=" capitalize break-words">{data?.gametitle ?  `${eventDetails?.team1} v ${eventDetails?.team2}`: data?.title}</span>
                        {
                            data?.race_card ? <span
                            className=" capitalize break-words text-xs">{(data?.race_card||"").split(" ").slice(0,-2).join(" ")}</span>:""
                        }
                        </span>
            </div>
        </div>
        <div className=" flex items-center justify-center gap-x-2">
            {
                (data?.inplay||data?.status === "active") ? "":<span  className=" w-full bg-titleGrd text-transparent text-start bg-clip-text font-lato text-[12px] font-semibold">
                {eventDetails?.date} {eventDetails?.time} 
                    </span>
            }
                        {data?.time ? 
                        <span  className=" w-full bg-titleGrd text-transparent text-start bg-clip-text font-lato text-[12px] font-semibold">
                        {data.time}
                         </span>
                         :""}

            <span onClick={()=>setIsModalOpen(true)}>
            <IoInformationCircleOutline stroke="#C10B32" fill="#C10B32" size={20}/>
            </span></div>
    </div>
</div>
    <hr className=" w-full"/>
    <div title="Live And Open Bets" className=" lg:hidden w-full bg-bg_Quaternary shadow-sm">
        <div id="step-selectMode"
            className="relative flex  border  bg-bg_Quaternary  rounded-none bg-bg_Quaternary w-full border-none shadow-none overflow-clip gap-x-2.5">
               
            <button
                className={`flex items-center justify-center w-full gap-1.5 tracking-wider    py-2.5 uppercase  p-3 text-sm font-semibold ${active === 'live' ? 'text-text_Primary':'text-text_Quinary'}   font-bold font-lato text-xs`}
                onClick={()=>setActive('live')}
                style={{zIndex: "10"}}><span>
                    <div className=" w-2 h-2 bg-bg_Success rounded-full mr"></div>
                </span>live</button>
                <button
                className={`flex items-center justify-center w-full gap-1.5 tracking-wider    py-2.5 uppercase  p-3 text-sm font-semibold ${active === 'bets' ? 'text-text_Primary':'text-text_Quinary'}   font-bold font-lato text-xs`}
                onClick={()=>setActive('bets')}
                style={{zIndex: "10"}}>open bets (0)</button>
            <div className={`w-[48%] absolute z-10 ${active === "live"?'left-0':'right-0'} transition-all ease-in-out bg-bg_Primary rounded-lg h-[2px]`}
                style={{zIndex: "9", width: "50%", bottom: "0px"}}></div>
        </div>
    </div>
    {
        active === "live" ?  <div title="Live Score"
        className="  grid grid-cols-1   min-h-[124px]   sm:grid-cols-2 lg:grid-cols-1 sm:gap-x-1 sm:px-0.5 lg:gap-x-0 lg:px-0 w-full  flex-grow">
        <div className=" col-span-1 w-full h-max">
        <div className="container mt-3">
      <div style={{ overflow: "hidden", transition: "height 0.3s ease-in-out" }}>
        <iframe
          id="scorecard-iframe"
          src="https://lmt.ss8055.com/index?Id=52112229&t=d"
          width="100%"
          height={expanded ? "400px" : "140px"}
          frameBorder="0"
          scrolling="no"
          style={{
            border: "1px solid #ccc",
            transition: "height 0.3s ease-in-out",
            overflow: "hidden",
          }}
        ></iframe>
      </div>
    </div>
   <ScoreCard data={data}/>
        <div className="h-max rounded-sm w-full cursor-pointer" 
     role="button" 
     tabIndex={0} 
     onClick={() => setExpanded(!expanded)}>         
        {/* <iframe 
   src="https://lmt.ss8055.com/index?Id=52112229&amp;t=d" 
   id="iFrameResizer0" 
   scrolling="no"
   style={{ width: "100%", overflow: "hidden" }} 
   height={expanded ? "600px" : "140px"} 
   sandbox="allow-scripts allow-same-origin" 
   allow="fullscreen">
</iframe> */}
            {/* <iframe
        src="https://lmt.ss8055.com/index?Id=53562949&t=d"
        id="iFrameResizer2"
        scrolling="no"
        style={{width: "100%",height:"140px",overflow:"auto"}}

        className="w-full"
      ></iframe> */}
       
                    </div>
        </div>
        <div className=" col-span-1 h-full" style={{display: "block"}}>
            {
                open ?  <div
                className=" relative w-full max-h-[309px] sm:max-h-[144px] lg:max-h-[309px] overflow-hidden h-[55vw] md:h-[58vw] bg-transparent ">
                <div draggable="false"
                    className="  w-full relative z-10  flex items-center justify-center overflow-y-auto bg-transparent transition-all ease-in-out duration-100">
                    <div
                        className="absolute top-1 right-1 z-10 active:scale-90 transition-all duration-300 ease-in-out cursor-pointer" onClick={()=>setOpen(false)}>
                            <RxCross2 stroke='#fff' style={{color:"white"}}/>
                       
                    </div>
                    <iframe id="videoComponent"
                        className=" w-full bg-transparent  max-h-[309px] sm:max-h-[144px] lg:max-h-[309px] relative overflow-hidden h-[55vw] md:h-[58vw] "
                        scrolling="no" height="100%" width="100%"
                        src="https://dpmatka.in/dd.php?sportId=1&amp;eventId=33869620"></iframe>
                </div>
               
                <div
                    className=" absolute top-0 w-full max-h-[309px] sm:max-h-[144px] lg:max-h-[309px]  overflow-hidden h-[55vw] md:h-[58vw] bg-transparent z-0">
                </div>
            </div>: <div className=' flex gap-2 mx-2'> <button className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out w-[50%] mx-auto py-2 text-sm my-2 font-semibold text-center text-text_Quaternary bg-bg_Primary rounded-md cursor-pointer" onClick={()=>{setOpen(true)}} type="button">Watch Live TV</button>
            <button className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out w-[50%] mx-auto py-2 text-sm my-2 font-semibold text-center text-text_Quaternary bg-bg_Primary rounded-md cursor-pointer" onClick={()=>{setOpen(true)}} type="button">Live Updates</button>
            
            </div>
            }
           
           
        </div>
    </div> :<div className=' w-full p-2'> <MatchedBets/></div>
    }
   

                           
</div>
<Modal
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <GeneralRules/>
      </Modal>
</>
  )
}
