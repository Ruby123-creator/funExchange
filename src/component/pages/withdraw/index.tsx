import React, { useState } from "react";
import SidebarComp from "../Home/sidebar";
import RightDeskSidebar from "../../common/RightDeskSidebar.tsx";
import BankDetails from "./bankInfo";
import WithdrawHistory from "./withdrawHistory";
import { useWithdrawAmount } from "../../../Framework/transfer";

const WithdrawComponent: React.FC = () => {
  const [toggle,setToggle] = useState(0);
 
  return (
    <div className="flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 pt-[94px]">
      <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <SidebarComp />
        <div
          className="w-full lg:w-[50%] px-2 py-4 pt-[18px] my-[13px] lg:pt-0 lg:my-0"
          style={{ minHeight: "calc(-110px + 100dvh)" }}
        >
          <div className="px-2 pb-2 flex flex-col items-start justify-start gap-y-2 mt-1  md:mt-[0px]">
            
            <div className="text-base text-text_Ternary  font-roboto w-full font-[700] flex flex-col items-start justify-start gap-y-1">
              <span className="font-lato">
                Please fill in all required fields*
              </span>
              <div className=" font-lato text-sm w-full">
                <div
                  id="step-selectMode"
                  className="relative flex w-[100%] px-2 rounded-lg border shadow bg-bg_Quaternary overflow-clip undefined"
                >
                  {
                    ["Withdrawal Request","Withdrawal History"].map((val,i)=>{
                      return( <button
                        key={"account"+i}

                        className={`flex items-center justify-center w-full gap-1.5 tracking-wider undefined p-3 text-sm font-semibold   my-2 ${toggle === i ? 'bg-bg_Primary rounded-lg text-text_Quaternary':'text-text_Quinary'}   undefined `}
                        style={{ zIndex: "10" }}
                        onClick={()=>setToggle(i)}
                      >
                       
                        {val}
                      </button>)
                    })
                  }
                 
               
                </div>
              </div>
            </div>
            <div className="w-full flex items-center gap-x-2 overflow-x-auto scroll-smooth no-scrollbar whitespace-nowrap cursor-pointer"></div>
            {toggle === 0 ? <BankDetails active={toggle}/>: <WithdrawHistory/>} 
          </div>
        </div>
        <RightDeskSidebar />
      </div>
    </div>
  );
};

export default WithdrawComponent;
