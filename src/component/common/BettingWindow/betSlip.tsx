import React, { useState } from "react";
import { useUI } from "../../../context/ui.context";
import EditStack from "./editStacks";
import { Modal } from "antd";
const BetSlip = () => {
  const { betOdds, setBetOdds, stacks } = useUI();
  console.log(betOdds, "MInkaiiii hosting");
  const [sum, setSum] = useState(0);
  const [edit, setEdit] = useState(false);
 
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
          <span className=" col-span-6  text-[10px]  text-text_Ternary  font-normal">
            ODDS
          </span>
          <div className=" col-span-6 w-full flex items-center justify-between">
            <span className="text-[10px]  text-text_Ternary  font-normal text-start pl-1">
              STAKE
            </span>
            <span className=" text-[10px] float-right capitalize text-text_Ternary 5 font-normal text-center">
              Max Mkt : 0
            </span>
          </div>
          <span title="Odds" className=" col-span-6 pt-1.5 w-full">
            <div className=" grid grid-cols-12 min-h-[35px]">
              <span className="col-span-12 h-full pr-1 overflow-hidden">
                <span className=" focus:outline-none  text-sm w-full h-full text-center py-1 flex items-center justify-center border-[0.25px] text-text_Ternary   border-oddInputBorder focus:border-oddInputBorderActive active:border-oddInputBorderActive">
                  {betOdds?.odds || "0"}
                </span>
              </span>
            </div>
          </span>
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
              value={betOdds?.max || sum}
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
            className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out  px-5 py-2.5 w-[50%] max-w-[156px] flex items-center justify-center min-h-[46px] text-sm bg-transperent text-text_BetSlipCancelBtnColor font-medium border border-danger rounded-md  cursor-pointer"
          >
            <span
              className=" text-text_Danger font-bold text-xs leading-5"
              onClick={() => {
                setBetOdds({});
              }}
            >
              Cancel Bet
            </span>
          </button>
          <div className="w-[50%] max-w-[156px] h-max">
            <button
              disabled={true}
              type="button"
              className=" leading-normal  overflow-hidden  transition duration-150 ease-in-out py-1 relative w-full flex  min-h-[46px] px-2.5 rounded-md  font-medium border  flex-row items-center justify-between  bg-bg_InActivePlaceBtnColor text-text_Ternary 5 border-inActivePlaceBtnColor  cursor-pointer"
            >
              <div className=" flex items-start justify-start flex-col">
                <span className="  font-bold text-xs sm:text-sm">
                  Place Bet
                </span>
                <span className="font-semibold text-[10px] sm:text-xs">
                  <div>
                    <span>Profit : </span>
                    <span>0.00</span>
                  </div>
                </span>
              </div>
              <span className="text-[10px] flex items-center justify-center gap-x-[1px]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2144_3162)">
                      <path
                        d="M9.91095 3.68857L10.3814 3.21808C10.5643 3.03525 10.5643 2.7388 10.3814 2.55606C10.1986 2.37323 9.90225 2.37323 9.71942 2.55606L9.24893 3.02655C8.45956 2.36884 7.50037 1.9715 6.47717 1.87848V0.93631H6.92972C7.18826 0.93631 7.39783 0.726654 7.39783 0.468109C7.39783 0.209564 7.18826 0 6.92972 0H5.08832C4.82977 0 4.62021 0.209564 4.62021 0.468109C4.62021 0.726654 4.82977 0.93631 5.08832 0.93631H5.54086V1.87848C2.97958 2.11139 0.9375 4.26306 0.9375 6.92844C0.9375 9.73141 3.20572 12 6.00906 12C8.81195 12 11.0805 9.73178 11.0805 6.92844C11.0805 5.73111 10.6682 4.59723 9.91095 3.68857ZM6.00897 11.0637C3.72885 11.0637 1.87372 9.20865 1.87372 6.92844C1.87372 4.64832 3.72885 2.79327 6.00897 2.79327C8.28918 2.79327 10.1442 4.64832 10.1442 6.92844C10.1442 9.20865 8.28918 11.0637 6.00897 11.0637ZM8.1785 4.759C8.36133 4.94183 8.36133 5.23828 8.1785 5.42102L6.34003 7.25949C6.1572 7.44232 5.86075 7.44232 5.67801 7.25949C5.49518 7.07666 5.49518 6.78021 5.67801 6.59747L7.51639 4.759C7.69922 4.57617 7.99567 4.57617 8.1785 4.759Z"
                        fill="var(--color-betSlipStopWatchIconColor)"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_2144_3162">
                        <rect width="12" height="12" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="font-normal text-text_Ternary">7s</span>
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
