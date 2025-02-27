import { Collapse, CollapseProps, Modal, Tabs, TabsProps } from "antd";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import BetSlip from "./betSlip";
import MatchedBets from "./matchedBet";
import { useUI } from "../../../context/ui.context";
import EditStack from "./editStacks";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: (
      <div className=" w-full flex gap-x-1 p-2 relative cursor-pointer rounded bg-bg_Secondary">
        <div className="flex flex-col items-start ">
          <span className="uppercase text-text_Quaternary font-normal text-xxs">
            Available Credit
          </span>
          <span className="text-text_Quaternary font-lato text-sm">₹ 0</span>
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer mr-2 flex items-center justify-center autoAnimate  ">
          <FaAngleDown fill="var(--color-quaternary)" size={16} />
        </div>
      </div>
    ),
    children: (
      <div className="overflow-hidden transition-height duration-100 ease-in-out  ">
        <div className="flex flex-col gap-1 border autoAnimate rounded-lg opacity-100">
          <div className=" grid grid-cols-2 gap-1 w-full p-1">
            <div className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1 col-span-2">
              <span className="uppercase  font-normal text-xxs">Balance</span>
              <span className=" font-lato text-sm">₹ 0.00</span>
            </div>
            <div className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1 ">
              <span className="uppercase  font-normal text-xxs">Free Cash</span>
              <span className=" font-lato text-sm">₹ 0.00</span>
            </div>
            <div className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1 ">
              <span className="uppercase  font-normal text-xxs">
                Net Exposure
              </span>
              <span className=" font-lato text-sm">₹ 0.00</span>
            </div>
          </div>
          <div title="sWalletInfo"></div>
        </div>
      </div>
    ),
  },
];
const BettingWindow: React.FC = () => {
  const [toggle, setToggle] = useState(0);
  const [editStack, setEditStack] = useState(false);
  const {betOdds,isLogin,setLoginModal} = useUI();
  return (
    <div
      title="Menu 2"
      id="rightDeskSideBar"
      className="hidden lg:flex p-2 overflow-y-auto no-scrollbar z-10 h-[calc(100dvh-120px)] sticky top-[54px] lg:top-[110px] w-[25%]"
    >
      <div className=" flex p-2 overflow-x-hidden relative no-scrollbar border flex-col w-full rounded-lg bg-bg_Quaternary ">
        {
          isLogin ?  <div className="flex flex-col w-full gap-1 select-none bet-window">
          <Collapse items={items} defaultActiveKey={["0"]} />

          <div
            className="overflow-hidden transition-height duration-100 ease-in-out  "
            style={{ height: "0px" }}
          >
            <div className="flex flex-col gap-1 border autoAnimate rounded-lg opacity-100">
              <div className=" grid grid-cols-2 gap-1 w-full p-1">
                <div className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1 col-span-2">
                  <span className="uppercase  font-normal text-xxs">
                    Balance
                  </span>
                  <span className=" font-lato text-sm">₹ 0.00</span>
                </div>
                <div className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1 ">
                  <span className="uppercase  font-normal text-xxs">
                    Free Cash
                  </span>
                  <span className=" font-lato text-sm">₹ 0.00</span>
                </div>
                <div className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1 ">
                  <span className="uppercase  font-normal text-xxs">
                    Net Exposure
                  </span>
                  <span className=" font-lato text-sm">₹ 0.00</span>
                </div>
              </div>
              <div title="sWalletInfo"></div>
            </div>
          </div>
        </div>:""
        }
       
        <div className=" w-full   flex flex-col gap-y-1 py-2">
          <div className=" w-full flex items-center gap-1">
            <div className="flex gap-1 w-3/4 border rounded-lg p-0.5">
              {["BetSlip", "Open Bets"].map((val, i) => {
                return (
                  <button
                    onClick={() => setToggle(i)}
                    className={`text-xs w-full capitalize whitespace-nowrap rounded p-2 ${
                      i === toggle
                        ? "rounded p-2 bg-bg_Secondary text-text_Quaternary"
                        : "bg-bg_Quaternary text-text_Secondary"
                    } `}
                  >
                    {val}
                  </button>
                )
              })}
            </div>
            {
              isLogin ?  <button
              className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out text-xs  capitalize whitespace-nowrap rounded py-2 px-3 bg-bg_Secondary text-text_Quaternary cursor-pointer"
              type="button"
              onClick={()=>
                
                setEditStack(true)
               }
            >
              Edit Stakes
            </button>: ""
            }
           
          </div>
          <div className=" w-full flex items-center  gap-1">
            {
              isLogin ?  (betOdds?.odds&& toggle ===0) ?  <BetSlip/>:<MatchedBets render={0}/> : <h4 className=" text-sm font-lato text-center py-4">Please login to see your open bets.<span
              
              onClick={()=>{
                setLoginModal(true);

              }}
              className=" text-text_Secondary cursor-pointer hover:underline">Login</span></h4>
            }
         
          </div>
          
        
        </div>
      </div>
      <Modal open={editStack} className="popUpBoxShadow relative origin-center popUpOpenAnimation bg-bg_Quaternary w-[86%] py-3 px-2 rounded " footer={ <div className=" flex item-center justify-center gap-x-2 mt-2">
            <button
              className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out  px-2 py-1.5 h-full text-[13px] min-w-16 rounded bg-bg_Quaternary border border-disableBackGroundColorfForPlaceBetBtn text-text_Ternary  font-lato-bold active:scale-75 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]  cursor-pointer"
              type="button"
            >
              Cancel
            </button>
            <button
            onClick={()=>setEditStack(false)}
              className="  leading-normal relative overflow-hidden  transition duration-150 ease-in-out  px-2 py-1.5 h-full text-[13px] min-w-16 flex items-center justify-center gap-x-1 border border-secondary  rounded bg-bg_Secondary text-text_Quaternary font-lato-bold active:scale-75 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]  cursor-pointer"
              type="button"
            >
              <span>Save</span>
            </button>
          </div>} title={ <h6 className=" text-text_Ternary  text-base font-semibold">
            Edit Stakes
          </h6>} onCancel={() => setEditStack(false)}>
      
          <EditStack edit={true} />
         
         
    
      </Modal>
    </div>
  );
};

export default BettingWindow;
