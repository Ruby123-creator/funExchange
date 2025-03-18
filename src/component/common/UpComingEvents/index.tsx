import React from 'react'
import { MdOutlineErrorOutline } from "react-icons/md";
import { BiSolidCricketBall } from "react-icons/bi";
import LayBack from '../LayBack';
import { useNavigate } from 'react-router-dom';
import { extractEventDetails } from '../../../Framework/utils/constant';
import { useUI } from '../../../context/ui.context';
interface Props{
    events:any
}
const UpcomingEvents: React.FC<Props> = ({events}) => {
    
   const {isLogin ,setLoginModal} = useUI();
    const Navigate = useNavigate();
    const isAllEmpty = (events||[]).every((event: { eventSchedule: string | any[]; }) => event.eventSchedule.length === 0);

    
  return (
    <div className="py-1 px-[6px] w-full">
        {
            !isAllEmpty ? <div className="w-full font-helvetica-neue">
            <div
                className="w-full flex items-center justify-between rounded-t-[3px] py-1.5 px-[7px] bg-UpcomingBg">
                <div
                    className="flex items-center text-text_Quaternary font-semibold text-[18px] tracking-wide justify-start w-full gap-[5px]">
                   <MdOutlineErrorOutline size={20}  fill="var(--color-quaternary)"/><span>Upcoming Events</span>
                </div>
            </div>
            {
                (events||[]).map((val: any,i: number)=>{
                    return(
                       
                            (val?.eventSchedule||[])?.length ? <div
                            key={"upComingEvents"+i}

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
                                    (val?.eventSchedule||[]).map((item:any,i:number)=>{
                
                                        const details = extractEventDetails(item?.eventName)
                                        return( <div className="col-span-12 grid grid-cols-12" key={`eventDetails${i}`}>
                                            <div
                                                className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket">
                                                <span id="inPlayTime"
                                                    className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"><span
                                                        className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center">{details?.date}</span><span
                                                        className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center uppercase">{details?.time}</span></span>
                                                        <span
                                                    id="inPlayTeamName"
                                                    className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100 cursor-pointer" ><span
                                                        className="flex flex-col items-center justify-start w-[87%]"><span
                                                            className="text-selection-none w-full flex items-center justify-start"><span
                                                                className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span><span
                                                                className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">{details?.team1}
                                                                </span></span><span
                                                            className="text-selection-none w-full flex items-center justify-start"><span
                                                                className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span><span
                                                                className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">{details?.team2}
                                                                </span></span></span></span>
                                            </div>
                                            <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-x-auto border-t border-borderColorOfMarket no-scrollbar">
                                            <div className="flex md:grid md:grid-cols-6 grid-flow-row  h-full flex-nowrap">
                                                        <LayBack val={item?.lay1} allowed={false} className={'bg-bg_BackBtnBg border-backBtn'}/>
                                                             <LayBack val={item?.back1} allowed={false} className={'bg-bg_LayBtnBg border-layBtn'}/>
                                                             <LayBack val={item?.lay11} allowed={false} className={'bg-bg_BackBtnBg border-backBtn'}/>
                                                             <LayBack val={item?.back11} allowed={false} className={'bg-bg_LayBtnBg border-layBtn'}/>
                                                             <LayBack val={item?.lay12} allowed={false} className={'bg-bg_BackBtnBg border-backBtn'}/>
                                                             <LayBack val={item?.back12} allowed={false} className={'bg-bg_LayBtnBg border-layBtn'}/>
                                                    
                                                   
                                                </div>
                                            </span>
                                        </div>)
                                    })
                                }
                               
                
                             
                            </div>
                        </div>: ""
                       
                        
                    )
                })
            }
           
        </div>: ""
        }
    
</div>
  )
}

export default UpcomingEvents