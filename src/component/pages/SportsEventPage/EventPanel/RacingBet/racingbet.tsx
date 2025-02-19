import React, { useState } from 'react'
import { CiStar } from "react-icons/ci";
import BettingBtns from './bettingBtns';
import { Result } from 'antd';
import { useUI } from '../../../../../context/ui.context';
import BetSlip from '../../../../common/BettingWindow/betSlip';

interface Props{
    data:any
}
const RacingBet :React.FC<Props> = ({data}) => {
    
    console.log(data,"apibindss::::")
     const { setMatchedBets, betOdds } = useUI();
      const [betwindow, setBetWindow] = useState(-1);
  return (
    <div className=" w-full text-selection-none pb-3 lg:pb-0">
    <div className=" px-2 font-helvetica-neue">
        <div className=" py-2.5">
        <div className='flex justify-between text-[14px]'>
        <span className='w-[40%]'><CiStar size={20}/></span>
        <div className='flex justify-start w-[60%] gap-10'>
            <span><span>Max:10k</span>{" "}<span>Min:500</span></span>
            <div className='flex justify-around gap-10'><span>Back </span>{""}<span>{" "} Lay</span></div>
        </div>
        </div>
<div
                className=" bg-bg_Quaternary rounded-[3px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-[1px] cursor-pointer">
              
                {
                    (data?.data||[]).map((item: any,i: number)=>{
                        return( (item?.nation && item?.nation !== '-') ?
                        <>
                            <div className="grid grid-cols-12  border-b border-borderColorOfMarket">
                            <div
                                className="w-full col-span-4 h-12 grid grid-cols-12 grid-flow-col pl-2.5 md:pl-2 py-0.5">
                                <div
                                    className=" truncate col-span-12 flex items-start justify-center h-full flex-col">
                                    <div className=" w-full flex flex-nowrap gap-x-2"><span
                                            className=" truncate w-full capitalize text-text_Ternary  text-[13px] md:text-sm  font-semibold">{item?.nation}</span></div><span
                                        className="text-[12px] font-bold text-text_Success"></span>
                                </div>
                            </div>
                            {
                                item?.result ? <div
                                className=" col-span-8  h-12 grid grid-cols-2 md:grid-cols-6 relative">
                                <span
                                    className=" col-span-8 text-center min-h-12 py-[1px] px-[1px]"><span
                                        className="  text-center bg-bg_ballRunning cursor-not-allowed w-full h-full rounded-sm flex text-xs flex-col items-center justify-center capitalize">{item?.result}</span></span>
                            </div> :<div
                                className={`col-span-8 ${item?.result ? 'cursor-not-allowed':''} relative h-12 grid md:grid-cols-6 grid-cols-2 relative`} onClick={()=>setBetWindow(i)}>
                              <BettingBtns data={{price:item?.b2_price,size:item?.b2_size , bg:"bg-bg_betmin md:block hidden",bg1:"bg-bg_Quaternary md:block hidden", result:item?.result}} />
                              <BettingBtns data={{price:item?.b1_price,size:item?.b1_size , bg:"bg-bg_betback md:block hidden",bg1:"bg-bg_BackBtnBg bg-opacity-5 md:block hidden", result:item?.result}}/>
                              <BettingBtns data={{price:item?.b_price,size:item?.b_size , bg:"bg-bg_betmin ",bg1:"bg-bg_Quaternary", result:item?.result}}/>
                              
                              <BettingBtns data={{price:item?.l_price,size:item?.l_size , bg:"bg-bg_betlay",bg1:"bg-bg_LayBtnBg bg-opacity-5", result:item?.result}}/>
                              <BettingBtns data={{price:item?.l1_price,size:item?.l1_size , bg:"bg-bg_betmax md:block hidden",bg1:"bg-bg_Quaternary md:block hidden", result:item?.result}}/>
                              <BettingBtns data={{price:item?.l2_price,size:item?.l2_size , bg:"bg-bg_betmax md:block hidden",bg1:"bg-bg_Quaternary md:block hidden", result:item?.result}}/>
                             
                             
                                   
                            </div>
                               }
                            
                           
                            
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
                        :""
                        )
                    })
                }
              
            </div>
</div>
</div>
</div>
  )
}

export default RacingBet