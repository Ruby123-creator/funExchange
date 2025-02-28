import React, { useEffect, useState } from "react";
import { useUI } from "../../../../context/ui.context";
import LayBack from "../../../common/LayBack";
import BetSlip from "../../../common/BettingWindow/betSlip";

interface DataItem {
  RunnerName: string;
  status: string;
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
  updateTime?: string;
}

type BlinkState = Record<string, boolean>;

interface Props {
  title: string;
  data: DataItem[];
  updatedTime:string;
}

const MatchOddBookmaker: React.FC<Props> = ({ title, data ,updatedTime}) => {
  const { betOdds} = useUI();
  const [prevData, setPrevData] = useState<DataItem[]>([]);
  const [blinkFields, setBlinkFields] = useState<BlinkState[]>([]);
  const[betWindow,setBetWindow] = useState('')
  // Helper function to compare previous and current data
  const getBlinkFields = (
    currentData: DataItem[],
    previousData: DataItem[]
  ): BlinkState[] => {
    return currentData.map((item, index) => {
      const changes: BlinkState = {};
      Object.keys(item).forEach((key) => {
        changes[key] =
          item[key as keyof DataItem] !==
          previousData[index]?.[key as keyof DataItem];
      });
      return changes;
    });
  };

  useEffect(() => {
    if (data && prevData.length === data.length) {
      const newBlinkFields = getBlinkFields(data, prevData);
      setBlinkFields(newBlinkFields);

      // Reset blinking effect after 1 second
      const timeout = setTimeout(() => {
        setBlinkFields(data.map(() => ({})));
      }, 1000);

      return () => clearTimeout(timeout);
    }

    if (data) {
      setPrevData([...data]);
    }
  }, [data]);

  // Helper function to render LayBack components
  const renderLayBack = (
    title:string,
    item: DataItem,
    type: "back" | "lay",
    priceKey: keyof DataItem,
    sizeKey: keyof DataItem,
    className: string,
    index: number
  ) => {
    const price = item[priceKey] as string;
    const size = item[sizeKey] as string;
    const isBlinking =
      blinkFields[index]?.[priceKey] || blinkFields[index]?.[sizeKey];

    return (
      <LayBack
        val={price}
        size={size}
        max={(item.max)}
        type={type}
        eventKey={priceKey}
        runnerName={item.RunnerName}
        time={updatedTime}
        betType={title}
        allowed={true}
        betTrue={true}
        min={Number(item?.min)}
        className={`${className} ${isBlinking ? "blink" : ""}`}
      />
    );
  };
  return (
    <div className="w-full text-selection-none pb-3 lg:pb-0">
      <div className="px-2 font-helvetica-neue">
        <div className="py-1.5">
          <div className="grid grid-flow-col grid-cols-12 text-xs font-[500] mb-1.5">
            <div className="pl-1 flex items-center justify-start gap-x-1 md:gap-x-1 col-span-7 md:col-span-5">
              <span className="cursor-pointer transition-all ease-in-out duration-300 hover:scale-105"></span>
              <span className="capitalize font-bold text-xs sm:text-sm md:text-[15px]">
                {title}
              </span>
              <button
                className="leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-cashout-btn-gradient rounded-md px-2.5 py-1 text-center shadow-[inset_-12px_-8px_40px_#46464620] flex items-center justify-center flex-row h-max max-w-[74%] mr-1 cursor-pointer"
                type="button"
              >
                <div className="text-[10px] md:text-sm text-text_Quaternary whitespace-nowrap font-semibold">
                  Cashout
                </div>
              </button>
            </div>
            <div className="col-span-5 md:col-span-7 grid grid-cols-2 md:grid-cols-6 pb-[2px]">
              <span className="hidden md:flex col-span-1 text-center font-semibold h-full items-end justify-center"></span>
              <span className="col-span-1 text-center font-semibold h-full hidden md:flex items-end justify-center"></span>
              <span className="col-span-1 text-center text-[10px] sm:text-xs md:text-sm leading-3 text-text_Ternary font-bold h-full flex items-end justify-center">
                BACK
              </span>
              <span className="col-span-1 text-center text-[10px] sm:text-xs md:text-sm leading-3 font-bold h-full flex items-end justify-center">
                LAY
              </span>
              <span className="col-span-1 text-center font-semibold h-full hidden md:flex items-end justify-center"></span>
              <span className="col-span-1 text-center font-semibold h-full hidden md:flex items-end justify-center"></span>
            </div>
          </div>
          <div className="bg-bg_Quaternary rounded-[3px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-[1px] cursor-pointer">
            {(data || []).filter((val:DataItem)=>!((val?.RunnerName||"").includes("1 to 10"))).map((item, i) => (
              <React.Fragment key={`events${i}`}>
                <div className="col-span-12 grid grid-cols-12 border-b border-borderColorOfMarket">
                  <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7">
                    <span
                      id="inPlayTeamName"
                      className="text-selection-none flex items-center justify-start col-span-8 px-1 relative active:scale-[94%] transition-all px-1 md:px-5 ease-in-out duration-100 cursor-pointer truncate w-full capitalize text-text_Ternary text-[13px] md:text-sm font-semibold"
                    >
                      {item.RunnerName}
                    </span>
                  </div>
                  <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-x-auto no-scrollbar">
                    {(item.status === "ACTIVE"|| item?.status === "OPEN") ? (
                      <div
                        className="flex grid md:grid-cols-6 grid-cols-2 grid-flow-row h-full flex-nowrap"
                        onClick={() => {setBetWindow(`${title}${i}`)
                        console.log(betWindow,`${title}${i}`,"12344")

                      }}
                      >
                        {renderLayBack(
                          title,
                          item,
                          "back",
                          "BackPrice2",
                          "BackSize2",
                          "bg-bg_BackBtnBg border-backBtn md:block hidden",
                          i
                        )}
                        {renderLayBack(
                          title,
                          item,
                          "back",
                          "BackPrice3",
                          "BackSize3",
                          "bg-bg_BackBtnBg border-backBtn md:block hidden",
                          i
                        )}
                        {renderLayBack(
                          title,
                          item,
                          "back",
                          "BackPrice1",
                          "BackSize1",
                          "bg-bg_BackBtnBg border-backBtn",
                          i
                        )}
                        {renderLayBack(
                          title,
                          item,
                          "lay",
                          "LayPrice1",
                          "LaySize1",
                          "bg-bg_LayBtnBg border-layBtn",
                          i
                        )}
                        {renderLayBack(
                          title,
                          item,
                          "lay",
                          "LayPrice2",
                          "LaySize2",
                          "bg-bg_LayBtnBg border-layBtn md:block hidden",
                          i
                        )}
                        {renderLayBack(
                          title,
                          item,
                          "lay",
                          "LayPrice3",
                          "LaySize3",
                          "bg-bg_LayBtnBg border-layBtn md:block hidden",
                          i
                        )}
                      </div>
                    ) : (
                      <div className="col-span-5 md:col-span-7 h-12 grid grid-cols-2 md:grid-cols-6 relative">
                        <span className="col-span-6 text-center min-h-12 py-[1px] px-[1px]">
                          <span className="text-center bg-bg_ballRunning cursor-not-allowed w-full h-full rounded-sm flex text-xs flex-col items-center justify-center">
                            SUSPENDED
                          </span>
                        </span>
                      </div>
                    )}
                  </span>
                </div>
                {(betOdds?.odds && (`${title}${i}` === betWindow)) ? (
                  <div className="col-span-12 h-max lg:hidden">
                    <span className="col-span-12 h-max w-full">
                      <BetSlip />
                    </span>
                  </div>
                ):""}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchOddBookmaker;
