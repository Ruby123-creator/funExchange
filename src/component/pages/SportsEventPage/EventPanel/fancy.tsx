import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCricketFancyData } from "../../../../Framework/sportsData";
import { useUI } from "../../../../context/ui.context";
import BetSlip from "../../../common/BettingWindow/betSlip";
import { CiStopwatch } from "react-icons/ci";

const FancyComp: React.FC = () => {
  const { sport, eventId }: any = useParams();
  const { setMatchedBets, betOdds,betWindow,setBetWindow } = useUI();
 
  const { data } = useCricketFancyData(eventId);
  return (
    <div>
      {(data?.session || [])?.length ? (
        <>
          {" "}
          <div className="text-base font-medium text-center py-1.5">
            <ul className="flex flex-wrap items-center justify-start gap-x-3">
              <li className="px-[15px] py-2 rounded-[100px] flex items-center justify-center cursor-pointer active:scale-95 transition-all ease-in-out duration-100  bg-bg_Primary text-text_Quaternary border-borderOfFancyPremiumTab">
                <span className="inline-block font-bold text-xs sm:text-sm md:text-base leading-4 ">
                  Fancy
                </span>
              </li>
            </ul>
          </div>
          <div className=" py-1.5">
            <div className=" bg-bg_Quaternary rounded-[3px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-[1px] cursor-pointer">
              {(data?.session || []).map((item: any, i: number) => {
                return (
                  <>
                    <div className="grid grid-cols-12  border-b border-borderColorOfMarket"
                                      key={"session"+i}

                    >
                      <div className="w-full  md:col-span-6  col-span-7 h-12 pl-2.5 md:pl-2 py-0.5 pr-[3px]">
                        <div className=" flex items-start justify-center h-full flex-col">
                          <div className=" w-full flex flex-nowrap gap-x-2">
                            <span className=" truncate w-full capitalize text-text_Ternary  text-[13px] md:text-sm  font-semibold">
                              {item?.RunnerName}
                            </span>
                          </div>
                          {
                            (betOdds?.amount && item?.RunnerName === betWindow) ?  <div className=" w-full flex items-center text-[10px] md:text-[12px]">
                            <span className=" from-neutral-600">
                              Max exposure:{" "}
                            </span>
                            <div className=" text-text_Success">
                              &nbsp; &gt;&gt; {betOdds?.amount}
                            </div>
                          </div>: ""
                          }
                         
                        </div>
                        {/* <span className=" col-span-3 md:col-span-1 flex flex-row items-center justify-center gap-x-[2px]">
                         <CiStopwatch size={20}/>
                          <span className=" font-[480] text-sm text-text_Ternary ">
                            1s
                          </span>
                        </span> */}
                       
                      </div>

                      {item?.GameStatus ? (
                        <div className=" col-span-5 md:col-span-6  h-12 grid grid-cols-2 md:grid-cols-6 relative">
                          <span className=" col-span-6 text-center min-h-12 py-[1px] px-[1px]">
                            <span className="  text-center bg-bg_ballRunning cursor-not-allowed w-full h-full rounded-sm flex text-xs flex-col items-center justify-center capitalize">
                              {item?.GameStatus}
                            </span>
                          </span>
                        </div>
                      ) : (
                        <div
                          className=" col-span-5 md:col-span-6  h-12 grid grid-cols-2 md:grid-cols-6 relative"
                          onClick={() => setBetWindow(`session${i}`)}
                          >
                           
                          <span className=" text-center min-h-12 cols-span-1 md:col-span-2">
                            <span
                              className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden"
                              onClick={() => {
                                setMatchedBets({
                                  ...betOdds,
                                  odds: item?.LayPrice1,
                                  size: item?.LaySize1,
                                  key: "LayPrice1",
                                  sizeKey:"LaySize1",
                                  type: "lay",
                                  betType: "session",
                                  min: item?.min,
                                  max: item?.max,
                                  runnerName: item?.RunnerName,
                                });
                              }}
                            >
                              <div className=" overflow-hidden relative    opacity-100 cursor-pointer active:scale-95    w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn   undefined">
                                <span
                                  id="oddBtnPrice"
                                  className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold "
                                >
                                  {item?.LayPrice1}
                                </span>
                                <span
                                  id="oddBtnSize"
                                  className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal "
                                >
                                  <span className="w-max break-all truncate">
                                    <div className="odd-button__volume">
                                      {item?.LaySize1}
                                    </div>
                                  </span>
                                </span>
                              </div>
                            </span>
                          </span>
                          <span className=" text-center min-h-12 cols-span-1 md:col-span-2">
                            <span
                              className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden"
                              onClick={() => {
                                setMatchedBets({
                                  ...betOdds,
                                  odds: item?.BackPrice1,
                                  size: item?.BackSize1,
                                  key: "BackPrice1",
                                  sizeKey:"BackSize1",
                                  type: "back",
                                  betType: "session",
                                  min: Number(item?.min),
                                  max: Number(item?.max),
                                  runnerName: item?.RunnerName,
                                });
                               
                              }}
                            >
                              <div className=" overflow-hidden relative    opacity-100 cursor-pointer active:scale-95    w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn   undefined">
                                <span
                                  id="oddBtnPrice"
                                  className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold "
                                >
                                  {item?.BackPrice1}
                                </span>
                                <span
                                  id="oddBtnSize"
                                  className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal "
                                >
                                  <span className="w-max break-all truncate">
                                    <div className="odd-button__volume">
                                      {item?.BackSize1}
                                    </div>
                                  </span>
                                </span>
                              </div>
                            </span>
                          </span>
                          <span className=" hidden md:block col-span-2 text-center min-h-12">
                            <div className=" flex flex-col gap-y-1 items-center h-full w-full  justify-center  px-1">
                              <div className=" flex items-center justify-center">
                                <span className=" text-[10px] text-center  text-text_MaxMarketTextColor">
                                  Min Bet :
                                </span>
                                <span className=" text-[10px] text-center text-text_MaxMarketTextColor">
                                  {" "}
                                  {item?.min}
                                </span>
                              </div>
                              <div className=" flex items-center justify-start">
                                <span className=" text-[10px] text-center text-text_MaxMarketTextColor ">
                                  Max Bet :
                                </span>
                                <span className=" text-[10px] text-center text-text_MaxMarketTextColor">
                                  {" "}
                                  {item?.max}
                                </span>
                              </div>
                            </div>
                          </span>
                        </div>
                        
                      )}
                    </div>

                    {(betOdds?.odds && `session${i}` === betWindow) ? (
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
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default FancyComp;
