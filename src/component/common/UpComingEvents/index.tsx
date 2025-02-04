import React from 'react'
import { MdOutlineErrorOutline } from "react-icons/md";
import { BiSolidCricketBall } from "react-icons/bi";
import LayBack from '../LayBack';
import { extractEventDetails } from '../../../Framework/utils/constant';
const UpcomingEvents: React.FC = () => {
    const cricketUpcomingEvents: any = [
        {
         "gameId": "596854126",
         "marketId": "4.596854126",
         "eid": "4",
         "eventName": "Sri Lanka v Australia\u00a0/\u00a029/01/2025 10:00:00",
         "inPlay": "False",
         "tv": "False",
         "back1": "410",
         "lay1": "500",
         "back11": "3.7",
         "lay11": "3.75",
         "back12": "1.37",
         "lay12": "1.38",
         "m1": "False",
         "f": "False",
         "vir": 10
        }
       ]


      
    
  return (
    <div className="py-1 px-[6px] w-full">
    <div className="w-full font-helvetica-neue">
        <div
            className="w-full flex items-center justify-between rounded-t-[3px] py-1.5 px-[7px] bg-UpcomingBg">
            <div
                className="flex items-center text-text_Quaternary font-semibold text-[18px] tracking-wide justify-start w-full gap-[5px]">
               <MdOutlineErrorOutline size={20}  fill="var(--color-quaternary)"/><span>Upcoming Events</span>
            </div>
        </div>
        <div
            className="bg-bg_Quaternary rounded-b border border-ternary4 border-t-0 border-b-0 shadow-lg">
            <div className="eventHeadName grid grid-cols-12">
                <div
                    className="text-text_Ternary px-2 h-full py-2.5 col-span-6 lg:col-span-5 pl-2 flex items-center justify-start w-full gap-x-2">
                    <span>
                        <BiSolidCricketBall size={20} fill="#8B191B"/>
                       </span>
                    <div
                        className="text-text_Ternary md:text-[18px] text-base font-semibold leading-3 tracking-wide text-center">
                        Cricket
                    </div>
                </div>
                <div className="col-span-6 py-2.5 lg:col-span-7 grid grid-cols-12 h-full">
                    <span
                        className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">1</span><span
                        className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">X</span><span
                        className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">2</span>
                </div>
                {
                    cricketUpcomingEvents.map((item:any,i:number)=>{

                        const val = extractEventDetails(item?.eventName)
                        return( <div className="col-span-12 grid grid-cols-12" key={`eventDetails${i}`}>
                            <div
                                className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket">
                                <span id="inPlayTime"
                                    className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"><span
                                        className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center">{val?.date}</span><span
                                        className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center uppercase">{val?.time}</span></span><span
                                    id="inPlayTeamName"
                                    className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"><span
                                        className="flex flex-col items-center justify-start w-[87%]"><span
                                            className="text-selection-none w-full flex items-center justify-start"><span
                                                className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span><span
                                                className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">{val?.team1}
                                                </span></span><span
                                            className="text-selection-none w-full flex items-center justify-start"><span
                                                className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span><span
                                                className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">{val?.team2}
                                                </span></span></span></span>
                            </div>
                            <span
                                className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket">
                                <div
                                    className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full">
                                      <LayBack lay={item?.lay11} back={item?.back11} allowed={false} laycount={item?.lay1} backcount={item?.back1}/>
                                      <LayBack lay={'-'} back={'-'} laycount={''} allowed={false} backcount={''}/>
                                   
                                      <LayBack lay={item?.lay12} back={item?.back12} allowed={false} laycount={''} backcount={''}/>
                                    
                                   
                                </div>
                            </span>
                        </div>)
                    })
                }
               

             
            </div>
        </div>
    </div>
</div>
  )
}

export default UpcomingEvents