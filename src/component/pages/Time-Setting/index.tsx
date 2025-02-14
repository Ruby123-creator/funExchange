import React, { useState } from "react";
import SidebarComp from "../Home/sidebar";
import RightDeskSidebar from "../../common/RightDeskSidebar.tsx";

const TimeSetting: React.FC = () => {
    const [timeFormat,setTimeFormat] = useState('')
  return (
    <div className="flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 pt-[94px]">
      <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <SidebarComp />
        <div
          className="w-full md:mt-[0px]   lg:overflow-auto lg:w-[54%]"
          style={{ minHeight: "calc(-110px + 100dvh)" }}
        >
          <div className="p-2 flex flex-col gap-1 w-full">
            <div className="w-full bg-bg_Quaternary border-2 divide-y rounded-lg">
              <div className=" px-4 w-full py-2 font-semibold divide-x flex justify-between items-center">
                <span className="font-lato text-sm mr-1">
                  February 11th, 2025
                </span>
                <span className="pl-2 text-[15px] font-lato">19:39:03</span>
              </div>
              <div className="space-y-1 p-2">
                <div className="flex cursor-pointer items-center font-semibold p-3 font-lato my-1s border rounded justify-start text-sm ">
                  <span>System Time (GMT +00:00)</span>
                </div>
                <div className="flex cursor-pointer items-center font-semibold p-3 font-lato my-1s border rounded justify-start text-sm ">
                  <span>Your Device Time (GMT +05:30)</span>
                </div>
                <div className="flex cursor-pointer items-center font-semibold p-3 font-lato my-1s border rounded justify-start text-sm bg-bg_Ternary10 text-blue-500 border-secondary1">
                  <span>Your Timezone (GMT +05:30)</span>
                  <span className="ml-auto w-3 h-3 bg-bg_Secondary2 rounded-full ring-1 ring-offset-1 ring-blue-400"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RightDeskSidebar />
      </div>
    </div>
  );
};

export default TimeSetting;
