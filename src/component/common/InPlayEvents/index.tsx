import React, { useState } from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import { BiSolidCricketBall } from "react-icons/bi";
import { MdLiveTv } from "react-icons/md";
import { extractEventDetails } from '../../../Framework/utils/constant';
import LayBack from '../LayBack';
import { useNavigate } from 'react-router-dom';
import { useUI } from '../../../context/ui.context';
interface Props{
    events:any
}
const InPlayEvents: React.FC<Props> = ({events}) => {
    const {isLogin, setLoginModal} = useUI();
     const Navigate =  useNavigate();
     console.log(events,"mojjjjiiiii")
   
  return (
    
    <div className="w-full h-full pt-[130px]" >
    <div className="px-2 w-full lg:hidden">
        <div
            className="flex flex-row font-manrope-regular items-center justify-start gap-2.5 relative">
            <div className="cursor-pointer flex flex-row items-center justify-center">
                <span
                    className="text-text_Quaternary px-[25px] py-2 text-[13px] md:text-sm lg:text-base font-bold leading-4 active:scale-95 block z-10">In
                    Play</span>
            </div>
            <div className="cursor-pointer flex flex-row items-center justify-center">
                <span
                    className="text-text_Ternary bg-bg_Quaternary rounded-full border border-ternary6 px-[25px] py-2 text-[13px] md:text-sm lg:text-base font-bold leading-4 active:scale-95 block z-10">Competitions</span>
            </div>
            <div className="absolute z-1 w-full h-full transition-all ease-in-out duration-150 bg-bg_Primary text-sm bg-bg_Primary rounded-full border border-primary"
                style={{width: "0px", top: "1px", left: '0px', height: '0px'}}></div>
        </div>
    </div>
    <div className="w-full mt-[15px]">
        <div className="py-1 px-[6px] w-full">
            <div className="w-full font-helvetica-neue">
                <div
                    className="w-full flex items-center justify-between rounded-t-[3px] py-1.5 px-[7px] bg-inPlayBlockBg">
                    <div
                        className="flex items-center text-text_Quaternary font-semibold text-[18px] tracking-wide justify-start w-full gap-[5px]">
                            <FaCirclePlay size={24} fill='white'/>
                        <span>In Play</span>
                    </div>
                    <div className="w-max text-nowrap">
                        <span
                            className="text-xs tracking-wide text-text_Quaternary text-nowrap whitespace-nowrap font-normal">Open
                            Bets</span><sup className="font-features sups"><span
                                className="text-x font-normal tracking-wide text-text_Ternary bg-bg_Warning min-w-4 min-h-4 text-center px-1 py-0.5 font-lato rounded-full">0</span></sup>
                    </div>
                </div>
                {
                    events.map((val: any,i: number)=>{
                        return(
                            <div
                            className="bg-bg_Quaternary rounded-b border border-ternary4 border-t-0 border-b-0 shadow-lg">
                            <div className="eventHeadName grid grid-cols-12">
                                <div
                                    className="text-text_Ternary px-2 h-full py-2.5 col-span-6 lg:col-span-5 pl-2 flex items-center justify-start w-full gap-x-2">
                                    <span>
                                        {
                                            val?.icon
                                        }
                                       </span>
                                    <div
                                        className="text-text_Ternary md:text-[18px] text-base font-semibold leading-3 tracking-wide text-center">
                                        {
                                            val?.sportsName
                                        }
                                    </div>
                                </div>
                                <div className="col-span-6 py-2.5 lg:col-span-7 grid grid-cols-12 h-full">
                                    <span
                                        className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">1</span><span
                                        className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">X</span><span
                                        className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">2</span>
                                </div>
                                {
                                  ((val?.eventSchedule)||[]).map((item: any,i: any)=>{
                                    console.log(item,"huddaa");
                                     const detail = extractEventDetails(item?.eventName)
                                     console.log(item,"gwdjgwdg")
                                    return(
                                        <div className="col-span-12 grid grid-cols-12" key={`events${i}`}>
                                        <div
                                            className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket ">
                                            <span id="inPlayTime"
                                                className="flex  items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100">
                                                <span
                                                    className=" text-text_InPlayEventsScoreAndTime text-[6px] xs:text-[8px] md:text-[10px] font-semibold  w-full text-center">{detail?.date}
                                                </span>
                                                <span
                                                    className=" text-text_InPlayEventsScoreAndTime text-[6px] xs:text-[8px] md:text-[10px] font-semibold  w-full text-center uppercase">{detail?.time}
                                                </span>
                                            </span>
            
                                            <span id="inPlayTeamName"
                                                className=" text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100 cursor-pointer" onClick={()=>{
                                                   if(isLogin){

                                                    Navigate(`/event-page/${val?.sportsId}/${item?.gameId}`);
                                                   }
                                                    else{
                                                        setLoginModal(true);
                                                    }
                                                }}>
                                               
                                                <span
                                                   
                                                    className="flex flex-col items-center justify-start w-[87%]">
                                                    <span
                                                        className=" text-selection-none w-full flex items-center justify-start">
                                                        <span
                                                            className=" w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                                                        <span
                                                            className=" text-[11px] font-bold text-text_Ternary  truncate sm:text-xs md:text-sm">{detail?.team1}</span>
                                                    </span>
                                                    <span
                                                        className=" text-selection-none w-full flex items-center justify-start">
                                                        <span className=" w-[5px] h-[5px] p-[1px] mr-[2px]">
                                                        </span>
                                                        <span
                                                            className=" text-[11px] font-bold text-text_Ternary  truncate sm:text-xs md:text-sm">
                                                            {detail?.team2}
                                                        </span>
                                                    </span>
                                                </span>
                                                <span className=" absolute top-0.5 right-0.5">
                                                    <MdLiveTv fill="#257B24"/>
                                                  
                                                </span>
                                              
                                            </span>
                                        </div>
            
                                        <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-x-auto border-t border-borderColorOfMarket no-scrollbar">
  <div className="flex md:grid md:grid-cols-6 grid-flow-row overflow-x-auto h-full flex-nowrap">
    <LayBack val={item?.lay1} allowed={true} className="bg-bg_BackBtnBg border-backBtn "/>
    <LayBack val={item?.back1} allowed={true} className="bg-bg_LayBtnBg border-layBtn "/>
    <LayBack val={item?.lay11} allowed={true} className="bg-bg_BackBtnBg border-backBtn "/>
    <LayBack val={item?.back11} allowed={true} className="bg-bg_LayBtnBg border-layBtn "/>
    <LayBack val={item?.lay12} allowed={true} className="bg-bg_BackBtnBg border-backBtn "/>
    <LayBack val={item?.back12} allowed={true} className="bg-bg_LayBtnBg border-layBtn "/>
  </div>
</span>
                                    </div>
                                    )
                                  })
                                }
                               
                               
                            </div>
                        </div>
                        )
                    })
                }
               
            </div>
        </div>
     
    </div>
    </div>
  )
}

export default InPlayEvents;