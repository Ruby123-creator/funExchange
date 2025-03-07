import React, { useState } from "react";
import { Link } from "react-router-dom";

import RightDeskSidebar from "../../common/RightDeskSidebar.tsx";
import SidebarComp from "../Home/sidebar";
import { Dropdown, MenuProps, Select, Space } from "antd";

import { FaAngleDown } from "react-icons/fa6";

const items = [
  {
    label: "All",
    value: "All",
  },

  {
    label: "Pending",

    value: "Pending",
  },

  {
    label: "Approved",

    value: "Approved",
  },

  {
    label: "Decline",

    value: "Decline",
  },
];
const TransactionPage: React.FC = () => {
  return (
    <div className="flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 pt-[94px]">
      <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <SidebarComp />
        <div
          className="w-full lg:w-[50%] px-2 py-4 pt-[18px] my-[13px] lg:pt-0 lg:my-0"
          style={{ minHeight: "calc(-110px + 100dvh)" }}
        >
          <div className="no-scrollbar h-full overflow-y-auto">
            <div className="px-2 w-full">
              <div className=" flex flex-row font-manrope-regular items-center justify-start gap-2.5 relative">
                <div className="cursor-pointer flex flex-row items-center justify-center">
                  <span className=" text-text_Quaternary  px-[25px] py-2  text-[13px] md:text-sm lg:text-base font-bold leading-4 active:scale-95 block z-10 ">
                    Deposit
                  </span>
                </div>
                <div className="cursor-pointer flex flex-row items-center justify-center">
                  <span className=" text-text_Ternary bg-bg_Quaternary rounded-full border border-ternary6  px-[25px] py-2  text-[13px] md:text-sm lg:text-base font-bold leading-4 active:scale-95 block z-10 ">
                    Withdrawal
                  </span>
                </div>
                <div
                  className="absolute z-1 w-full h-full transition-all ease-in-out duration-150 bg-bg_Primary text-sm bg-bg_Primary rounded-full border border-primary"
                  style={{
                    width: "102px",
                    top: "1px",
                    left: "0px",
                    height: "40px",
                  }}
                ></div>
              </div>
            </div>
            <div className=" px-2 w-full mt-2.5 flex flex-1 gap-2 items-center justify-center">
              <div className=" w-full rounded-md bg-bg_Quaternary  font-lato">
                <div className="font-lato font-bold text-base leading-5"></div>
                <div className="statement relative shadow-md">
                  <Select
                    className="w-full rounded-[5px] bg-bg_Quaternary  items-center justify-center border border-ternary6"
                    placeholder="Select a person"
                    options={items}
                    suffixIcon={
                      <button
                        className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out  col-span-1 bg-bg_DropdownAvailableOffers flex items-center justify-center rounded-md min-h-[29px] min-w-[29px]  cursor-pointer"
                        type="button"
                      >
                        <span className=" transform transition-transform duration-300  rotate-0">
                          <FaAngleDown
                            fill="var(--color-quaternary)"
                            size={16}
                          />{" "}
                        </span>
                      </button>
                    }
                  />
                </div>
              </div>
              <button
                className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out  w-max px-2 py-2 h-max rounded-md bg-bg_Success active:opacity-70  cursor-pointer "
                type="button"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21C20.7348 21 20.4804 20.8946 20.2929 20.7071C20.1054 20.5196 20 20.2652 20 20V16H16C15.7348 16 15.4804 15.8946 15.2929 15.7071C15.1054 15.5196 15 15.2652 15 15C15 14.7348 15.1054 14.4804 15.2929 14.2929C15.4804 14.1054 15.7348 14 16 14H21C21.2652 14 21.5196 14.1054 21.7071 14.2929C21.8946 14.4804 22 14.7348 22 15V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21ZM8 10H3C2.73478 10 2.48043 9.89464 2.29289 9.70711C2.10536 9.51957 2 9.26522 2 9V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3C3.26522 3 3.51957 3.10536 3.70711 3.29289C3.89464 3.48043 4 3.73478 4 4V8H8C8.26522 8 8.51957 8.10536 8.70711 8.29289C8.89464 8.48043 9 8.73478 9 9C9 9.26522 8.89464 9.51957 8.70711 9.70711C8.51957 9.89464 8.26522 10 8 10Z"
                    fill="white"
                  ></path>
                  <path
                    d="M12 22C9.53971 22.0004 7.16561 21.0939 5.33178 19.4538C3.49794 17.8137 2.33308 15.5551 2.05999 13.11C2.04554 12.9787 2.0571 12.8458 2.09401 12.7189C2.13092 12.5921 2.19245 12.4738 2.2751 12.3707C2.44201 12.1625 2.68477 12.0292 2.94999 12C3.2152 11.9708 3.48115 12.0482 3.68931 12.2151C3.89748 12.382 4.03081 12.6248 4.05999 12.89C4.25765 14.6927 5.06194 16.3748 6.34099 17.6604C7.62004 18.946 9.29795 19.7589 11.0996 19.9658C12.9013 20.1727 14.7198 19.7613 16.257 18.7991C17.7942 17.8369 18.9588 16.381 19.56 14.67C19.5975 14.5385 19.6616 14.416 19.7482 14.3103C19.8349 14.2045 19.9424 14.1176 20.064 14.055C20.1856 13.9924 20.3188 13.9554 20.4552 13.9463C20.5917 13.9373 20.7286 13.9563 20.8574 14.0022C20.9862 14.0481 21.1042 14.1199 21.2042 14.2133C21.3042 14.3066 21.3839 14.4195 21.4385 14.5449C21.4931 14.6703 21.5214 14.8055 21.5217 14.9423C21.5219 15.079 21.4941 15.2144 21.44 15.34C20.7489 17.2904 19.4698 18.9783 17.779 20.1711C16.0883 21.364 14.0692 22.003 12 22ZM20.94 12C20.6928 12.0015 20.4538 11.9114 20.2691 11.747C20.0844 11.5827 19.9672 11.3557 19.94 11.11C19.7335 9.31593 18.926 7.64451 17.649 6.36761C16.3719 5.0907 14.7004 4.28345 12.9063 4.07715C11.1122 3.87086 9.30113 4.27765 7.76759 5.23137C6.23404 6.18509 5.06831 7.62963 4.45999 9.33C4.42249 9.46153 4.35842 9.58397 4.27173 9.68974C4.18504 9.79552 4.07757 9.88239 3.95597 9.94499C3.83437 10.0076 3.70122 10.0446 3.56476 10.0537C3.4283 10.0627 3.29142 10.0437 3.16259 9.99784C3.03377 9.95192 2.91573 9.88007 2.81577 9.78673C2.71581 9.69338 2.63607 9.58053 2.58146 9.45514C2.52686 9.32975 2.49855 9.19449 2.4983 9.05772C2.49804 8.92096 2.52585 8.7856 2.57999 8.66C3.33292 6.52408 4.78858 4.70698 6.70873 3.50611C8.62889 2.30524 10.8998 1.79172 13.1498 2.0496C15.3998 2.30747 17.4957 3.32147 19.0944 4.92563C20.693 6.5298 21.6998 8.62911 21.95 10.88C21.9781 11.1424 21.9014 11.4052 21.7365 11.6113C21.5717 11.8173 21.3321 11.9498 21.07 11.98L20.94 12Z"
                    fill="white"
                  ></path>
                </svg>
              </button>
            </div>
            <div className=" rounded-lg flex flex-col gap-y-2 px-2 overflow-clip mt-2 font-lato">
              <div className="flex justify-center items-center  sticky  top-12 ">
                <div className=" text-center bg-bg_Quaternary px-2.5 py-1 font-bold  rounded text-[10px]  shadow-sm">
                  25/10/2024
                </div>
              </div>
              <div className="flex active:scale-95 hover:scale-95 flex-col gap-2 border bg-bg_Quaternary rounded overflow-hidden shadow-lg">
                <div className="flex justify-between items-start text-[10px] font-bold h-full">
                  <div className="text-base px-3 py-1">Deposit</div>
                  <div className=" px-3 py-1 text-x xs:text-xs sm:text-sm font-semibold text-text_Quaternary rounded-bl h-full  bg-bg_transactionSuccessBg ">
                    Approved
                  </div>
                </div>
                <div className="flex px-3 justify-between">
                  <span className="flex flex-col  justify-center">
                    <span className="text-xs font-normal">#</span>
                  </span>
                  <span className="text-start text-lg font-roboto flex items-center tracking-tighter font-bold">
                    ₹ 2,000
                  </span>
                </div>
                <div className="text-xs py-1 text-center text-text_Quinary w-full border-t bg-bg_Ternary6">
                  2024-10-25T13:53:31.973Z
                </div>
              </div>
              <div className="flex justify-center items-center  sticky  top-12 ">
                <div className=" text-center bg-bg_Quaternary px-2.5 py-1 font-bold  rounded text-[10px]  shadow-sm">
                  11/06/2024
                </div>
              </div>
              <div className="flex active:scale-95 hover:scale-95 flex-col gap-2 border bg-bg_Quaternary rounded overflow-hidden shadow-lg">
                <div className="flex justify-between items-start text-[10px] font-bold h-full">
                  <div className="text-base px-3 py-1">Deposit</div>
                  <div className=" px-3 py-1 text-x xs:text-xs sm:text-sm font-semibold text-text_Quaternary rounded-bl h-full  bg-bg_transactionSuccessBg ">
                    Approved
                  </div>
                </div>
                <div className="flex px-3 justify-between">
                  <span className="flex flex-col  justify-center">
                    <span className="text-xs font-normal">#</span>
                  </span>
                  <span className="text-start text-lg font-roboto flex items-center tracking-tighter font-bold">
                    ₹ 5,000
                  </span>
                </div>
                <div className="text-xs py-1 text-center text-text_Quinary w-full border-t bg-bg_Ternary6">
                  2024-06-11T08:49:54.536Z
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

export default TransactionPage;
