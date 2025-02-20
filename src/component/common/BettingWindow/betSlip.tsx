import React, { useState } from "react";
import { useUI } from "../../../context/ui.context";
import EditStack from "./editStacks";
import { Modal } from "antd";
import { CiStopwatch } from "react-icons/ci";
const BetSlip = () => {
  const { betOdds, setMatchedBets, stacks } = useUI();
  console.log(betOdds, "MInkaiiii hosting");
  const [sum, setSum] = useState(0);
  const [edit, setEdit] = useState(false);
  console.log(
    Number(betOdds?.odds) * sum - sum,
    betOdds?.odds,
    parseInt(betOdds?.odds),
    "HOME::::::::::::::SICK"
  );
  return (
    <div className="relative">
      <div
        title="Bet Slip"
        id="betSlipPlaceorder"
        className="w-full bg-bg_BetSlipBgColor text-selection-none border-[2px] border-b-[5px] font-lato  origin-top transition-all ease-in-out p-2 rounded-sm scaleVerticalOpen border-backBtn"
      >
        <div
          id="topPartOfBetSlip"
          title="Bet Slip Top Part"
          className=" grid grid-cols-12 pt-[2px] gap-x-[15px]"
        >
          {betOdds?.betType === "fancy" ? (
            <>
              <span className=" col-span-3  text-[10px]  text-text_Ternary  font-normal  text-center">
                ODDS(H-J)
              </span>
              <span className=" col-span-3  text-[10px]  text-text_Ternary  font-normal  text-center">
                RUNS
              </span>{" "}
            </>
          ) : (
            <span className=" col-span-6  text-[10px]  text-text_Ternary  font-normal">
              ODDS
            </span>
          )}

          <div className=" col-span-6 w-full flex items-center justify-between">
            <span className="text-[10px]  text-text_Ternary  font-normal text-start pl-1">
              STAKE
            </span>
            <span className=" text-[10px] float-right capitalize text-text_Ternary 5 font-normal text-center">
              Max Mkt : 0
            </span>
          </div>
          {betOdds?.betType === "fancy" ? (
            <span title="Odds" className=" col-span-6 pt-1.5 w-full">
              <div className=" w-full grid grid-cols-2 gap-x-2 min-h-[35px]">
                <span className=" col-span-1 overflow-hidden h-full">
                  <input
                    id="oddInput"
                    inputMode="numeric"
                    className=" focus:outline-none  text-sm w-full h-full text-center rounded-[4px] flex items-center justify-center text-text_Ternary  focus:border-oddInputBorderActive active:border-oddInputBorderActive"
                    disabled={true}
                    autoComplete="off"
                    max="1000"
                    min="0"
                    pattern="^[+-ed]+$"
                    type="number"
                    value={betOdds?.size}
                  />
                </span>
                <span className=" col-span-1 h-full overflow-hidden">
                  <input
                    id="oddInput"
                    inputMode="numeric"
                    className=" w-full focus:outline-none  text-sm h-full text-center rounded-[4px] flex items-center justify-center text-text_Primary border-oddInputColor focus:border-oddInputBorderActive active:border-oddInputBorderActive"
                    autoComplete="off"
                    max="1000"
                    min="0"
                    pattern="^[+-ed]+$"
                    type="number"
                    disabled={true}
                    value={betOdds?.odds}
                  />
                </span>
              </div>
            </span>
          ) : (
            <span title="Odds" className=" col-span-6 pt-1.5 w-full">
              <div className=" grid grid-cols-12 min-h-[35px]">
                <span className="col-span-12 h-full pr-1 overflow-hidden">
                  <span className=" focus:outline-none  text-sm w-full h-full text-center py-1 flex items-center justify-center border-[0.25px] text-text_Ternary   border-oddInputBorder focus:border-oddInputBorderActive active:border-oddInputBorderActive">
                    {betOdds?.odds || "0"}
                  </span>
                </span>
              </div>
            </span>
          )}

          <span
            title="Stakes"
            className=" col-span-6 pt-1.5 w-full px-[1px] overflow-hidden"
          >
            <input
              id="stakeInput"
              inputMode="numeric"
              className=" focus:outline-none  text-md w-full h-full text-center bg-bg_Quaternary flex items-center justify-center border-[0.75px]  text-text_Ternary  placeholder:text-text_Ternary 5 rounded-sm  text-text_Ternary 5 focus:border-oddInputBorderActive active:border-oddInputBorderActive "
              placeholder="Max : 5,000"
              autoComplete="off"
              pattern="d*"
              type="number"
              onChange={(e) => {
                setSum(Number(e.target.value));
              }}
              value={sum || betOdds?.max}
            />
          </span>
        </div>
        <div className=" mt-[15px] p-2.5 rounded-md border border-borderColorOfMarket bg-bg_InActivePlaceBtnColor">
          {edit ? (
            <EditStack edit={edit} />
          ) : (
            <div className=" grid grid-cols-12 gap-x-1 gap-y-1">
              {stacks.map((val: number, i: number) => {
                return (
                  <button
                    className="inline-block  leading-normal relative  transition duration-150 ease-in-out col-span-4 w-full overflow-hidden border border-primary text-[12px] font-semibold rounded-[4px] bg-bg_Primary text-text_Quaternary text-center py-1.5  cursor-pointer "
                    type="button"
                    onClick={() => {
                      setSum((e) => e + val);
                      setMatchedBets({...betOdds,amount:sum})
                    }}
                  >
                    <span>+ {val}</span>
                  </button>
                );
              })}
            </div>
          )}
          <div className=" grid grid-cols-12 gap-x-1 gap-y-1 pt-[15px]">
            <button
              className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out col-span-3 w-full text-[10px] min-h-[26px]  font-semibold  rounded-[4px] bg-minBtnGrd text-text_Quaternary py-2  cursor-pointer"
              type="button"
            >
              MIN
            </button>
            <button
              className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out col-span-3 w-full text-[10px] font-semibold rounded-[4px] bg-maxBtnGrd text-text_Quaternary py-2  cursor-pointer"
              type="button"
            >
              MAX
            </button>
            <button
              className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out col-span-3 w-full text-[10px]  font-semibold rounded-[4px] text-text_Quaternary py-2  bg-editStakesGrd cursor-pointer"
              type="button"
              onClick={() => setEdit(!edit)}
            >
              {!edit ? "EDIT STAKES" : "UPDATE"}
            </button>
            <button
              className="inline-block  relative overflow-hidden  transition duration-150 ease-in-out col-span-3 w-full text-[10px] font-semibold rounded-[4px] bg-clearBtnGrd text-text_Quaternary leading-4 py-2  cursor-pointer"
              id="clearBtn"
              type="button"
              onClick={() => {
                setSum(0);
              }}
            >
              CLEAR
            </button>
          </div>
        </div>
        <div className=" flex items-center justify-center gap-x-[13px] pt-3.5 w-full">
          <button
            type="button"
            className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out  px-2 py-2.5 w-[40%] max-w-[156px] flex items-center justify-center min-h-[46px] text-sm bg-transperent text-text_BetSlipCancelBtnColor font-medium border border-danger rounded-md  cursor-pointer"
          >
            <span
              className=" text-text_Danger font-bold text-xs leading-5"
              onClick={() => {
                setMatchedBets({ ...betOdds, odds: "" });
              }}
            >
              Cancel Bet
            </span>
          </button>
          <div className="w-[50%] max-w-[170px] h-max">
            <button
              disabled={true}
              type="button"
              className="  leading-normal  overflow-hidden  transition duration-150 ease-in-out py-1 relative w-full flex  min-h-[46px] px-2.5 rounded-md  font-medium border  flex-row items-center justify-between  bg-placeBetBtnGrd text-text_Quaternary border-primary  cursor-pointer"
            >
              <div className=" flex items-start justify-start flex-col">
                <span className="  font-bold text-xs sm:text-sm">
                  Place Bet
                </span>
                <span className="font-semibold text-[10px] sm:text-xs">
                  <div>
                    <span>
                      {betOdds?.type === "lay" ? "Liability" : "Profit"} :{" "}
                    </span>
                    <span>{betOdds?.betType === "fancy" ? Number(betOdds?.odds):Number(betOdds?.odds) * sum - sum}</span>
                  </div>
                </span>
              </div>
              <span className="text-[10px] flex items-center justify-center gap-x-[1px]">
                <span>
                  <CiStopwatch fill="var(--color-quaternary)" size={16} fontSize={20}/>
                </span>
                <span className="font-normal text-text_Quaternary">7s</span>
              </span>
            </button>
          </div>
        </div>
        <div className=" flex items-center justify-between w-full px-1 pt-3.5">
          <span className=" text-[13px] text-text_Ternary  font-medium">
            Confirm bet before placing
          </span>
          <label className="inline-flex items-center cursor-pointer relative">
            <input className="sr-only peer" type="checkbox" />
            <div className="relative  bg-bg_Ternary9 border-[0.5px] font-lato border-betSlipCancelBtnColor rounded-full peer-checked:bg-bg_SwitchCheckedBg h-7 w-14">
              <span className="absolute top-1/2 right-[5px] transform  -translate-y-1/2  font-bold text-text_Primary text-[10px]">
                OFF
              </span>
              <div className="bg-bg_Quaternary h-full border-[0.5px] border-betSlipCancelBtnColor transition-all  ease-in-out aspect-square absolute left-0 rounded-full "></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
