import React, { useState } from "react";
import { useUI } from "../../../../context/ui.context";
import LayBack from "../../../common/LayBack";
import BetSlip from "../../../common/BettingWindow/betSlip";

interface Props {
  title: string;
  data: any;
}
const MatchOddBookmaker: React.FC<Props> = ({ title, data }) => {
  const { setMatchedBets, betOdds } = useUI();
  const [betwindow,setBetWindow] = useState(-1);
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
                <div className="grid grid-cols-12  border-b border-borderColorOfMarket">
                  <div className="w-full  md:col-span-5  col-span-7 h-12 grid grid-cols-12 grid-flow-col pl-2.5 md:pl-2 py-0.5 pr-[3px]">
                    <div className=" truncate col-span-12 flex items-start justify-center h-full flex-col">
                      <div className=" w-full flex flex-nowrap gap-x-2">
                        <span className=" truncate w-full capitalize text-text_Ternary  text-[13px] md:text-sm  font-semibold">
                          {item?.RunnerName}
                        </span>
                      </div>
                      <span className="text-[12px] font-bold text-text_Success"></span>
                    </div>
                  </div>
                  <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-x-auto border-t border-borderColorOfMarket no-scrollbar">

                  <div className="flex md:grid md:grid-cols-6 grid-flow-row overflow-x-auto h-full flex-nowrap" onClick={()=>setBetWindow(i)}>
                    <LayBack
                      val={item?.BackPrice2}
                      allowed={true}
                      size={item?.BackSize2}
                      max={item?.max}
                      betTrue={true}

                      className={"bg-bg_BackBtnBg border-backBtn"}
                    />
                    <LayBack
                      val={item?.BackPrice3}
                      allowed={true}
                      max={item?.max}
                       betTrue={true}
                      size={item?.BackSize3}
                      className={"bg-bg_BackBtnBg border-backBtn"}
                    />
                     <LayBack
                      val={item?.BackPrice1}
                      size={item?.BackSize1}
                      max={item?.max}
                      allowed={true}
                      betTrue={true}

                      className={"bg-bg_BackBtnBg border-backBtn"}
                    />
                    <LayBack
                      val={item?.LayPrice1}
                      allowed={true}
                      max={item?.max}
                      betTrue={true}

                      size={item?.item?.LaySize1}
                      className={"bg-bg_LayBtnBg border-layBtn"}
                    />

                    <LayBack
                      val={item?.LayPrice2}
                      size={item?.item?.LaySize2}
                      max={item?.max}
                      betTrue={true}

                      allowed={true}
                      className={"bg-bg_LayBtnBg border-layBtn"}
                    />

                    <LayBack
                      val={item?.LayPrice3}
                      size={item?.item?.LaySize3}
                      max={item?.max}
                      betTrue={true}

                      allowed={true}
                      className={"bg-bg_LayBtnBg border-layBtn"}
                    />
                   

                   
                  </div>
                  </span>
                  <div className="col-span-12 h-max"></div>
                </div>
                {
                  (betOdds?.odds && i === betwindow) ?  <div className="col-span-12 h-max lg:hidden"><span className=" col-span-12 h-max w-full">

                  <BetSlip/>

           </span></div>:""
                }
               
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
