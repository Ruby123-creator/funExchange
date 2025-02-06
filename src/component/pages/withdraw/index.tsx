import React from "react";
import SidebarComp from "../Home/sidebar";
import RightDeskSidebar from "../../common/RightDeskSidebar.tsx";
import BankDetails from "./bankInfo";

const WithdrawComponent: React.FC = () => {
  return (
    <div className="flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 pt-[94px]">
      <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <SidebarComp />
        <div
          className="w-full md:mt-[0px]   lg:overflow-auto lg:w-[54%]"
          style={{ minHeight: "calc(-110px + 100dvh)" }}
        >
          <div className="px-2 pb-2 flex flex-col items-start justify-start gap-y-2 mt-1  md:mt-[0px]">
            <div className="w-full flex flex-col gap-2 pt-2 pb-1 px-4 rounded-lg bg-bg_Quaternary">
              <div className="font-lato font-[600] text-base leading-5">
                Withdraw Funds
              </div>
              <div className=" w-full flex flex-col text-xs text-text_Ternary  transition-all ease-in-out duration-100">
                <div className="text-xs md:text-sm font-lato pt-1  font-semibold leading-4">
                  1. This form is for withdrawing the amount from the main
                  wallet only.
                </div>
                <div className="pt-1 w-full">See More..</div>
              </div>
            </div>
            <div className="text-base text-text_Ternary  font-roboto w-full font-[700] flex flex-col items-start justify-start gap-y-1">
              <span className="font-lato">
                Please fill in all required fields*
              </span>
              <div className=" font-lato text-sm w-full">
                <div
                  id="step-selectMode"
                  className="relative flex w-[100%] rounded-lg border shadow bg-bg_Quaternary overflow-clip undefined"
                >
                  <button
                    className="flex items-center justify-center w-full gap-1.5 tracking-wider undefined p-3 text-sm font-semibold text-text_Quaternary text-text_Quaternary  undefined "
                    style={{ zIndex: "10" }}
                  >
                    Use New Account
                  </button>
                  <button
                    className="flex items-center justify-center w-full gap-1.5 tracking-wider undefined p-3 text-sm font-semibold text-text_Quinary undefined"
                    style={{ zIndex: "10" }}
                  >
                    Use Previous Account
                  </button>
                  <div
                    className="w-[48%] absolute z-10 h-full transition-all ease-in-out p-1"
                    style={{
                      zIndex: "9",
                      width: "50%",
                      left: "0%",
                      bottom: "0px",
                    }}
                  >
                    <div className="w-full h-full bg-bg_Primary rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center gap-x-2 overflow-x-auto scroll-smooth no-scrollbar whitespace-nowrap cursor-pointer"></div>
            <BankDetails/>
          </div>
        </div>
        <RightDeskSidebar />
      </div>
    </div>
  );
};

export default WithdrawComponent;
