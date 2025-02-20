import React, { useEffect, useState } from 'react'
import { CiStar } from "react-icons/ci";
import BettingBtns from './bettingBtns';
import { Result } from 'antd';
import { useUI } from '../../../../../context/ui.context';
import BetSlip from '../../../../common/BettingWindow/betSlip';

interface Props{
    data:any
}
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
const RacingBet :React.FC<Props> = ({data}) => {
    
    console.log(data,"apibindss::::")
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
                              <BettingBtns data={{price:item?.b2_price,size:item?.b2_size , bg:`bg-bg_betmin md:block hidden ${blinkFields[i]?.b2_price||blinkFields[i]?.b2_size ? "blink" : ""}`, }} />
                              <BettingBtns data={{price:item?.b1_price,size:item?.b1_size , bg:`bg-bg_betback md:block hidden ${blinkFields[i]?.b1_price||blinkFields[i]?.b1_size ? "blink" : ""}`, }}/>
                              <BettingBtns data={{price:item?.b_price,size:item?.b_size , bg:`bg-bg_betmin ${blinkFields[i]?.b_price||blinkFields[i]?.b_size ? "blink" : ""}`, }}/>
                              
                              <BettingBtns data={{price:item?.l_price,size:item?.l_size , bg:`bg-bg_betlay ${blinkFields[i]?.l_price||blinkFields[i]?.l_size ? "blink" : ""}`,}}/>
                              <BettingBtns data={{price:item?.l1_price,size:item?.l1_size , bg:`bg-bg_betmax md:block hidden ${blinkFields[i]?.l1_price||blinkFields[i]?.l1_size ? "blink" : ""}`, }}/>
                              <BettingBtns data={{price:item?.l2_price,size:item?.l2_size , bg:`bg-bg_betmax md:block hidden ${blinkFields[i]?.l2_price||blinkFields[i]?.l2_size ? "blink" : ""}`, }}/>
                             
                             
                                   
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