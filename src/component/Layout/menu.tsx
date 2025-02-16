import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { headerMenu, mobileHeaderMenu } from "../../Framework/utils/static";
import { useUI } from "../../context/ui.context";
import { useNavigate } from "react-router-dom";

const HeaderMenu = () => {
  const Navigate = useNavigate();
  const { isLogin, setLoginModal } = useUI();
  const [active, setActive] = useState("Cricket");
  return (
    <div className="flex flex-col">
      <div className="flex w-full overflow-x-auto no-scrollbar bg-bg_Quaternary p-1 items-start md:items-center md:justify-center">
        <a href="/">
          <button className="text-xs cursor-pointer uppercase mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9 border w-max px-3  py-1  text-text_HeaderDeskNavMenuHover  md:hidden ">
            <span className="font font-lato text-[12px]">Home</span>
          </button>
        </a>
        {(headerMenu || []).map((item, i) => {
          return (
            <span key={`header${i}`}>
              <button
                onClick={(e) => {
                  if (isLogin) {
                    setActive(item?.title);
                    Navigate(item?.routing);
                  } else {
                    setLoginModal(true);
                  }
                }}
                className={`text-xs cursor-pointer uppercase mr-1 ${
                  item?.title === active ? "border-primary" : ""
                }  rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9 border w-max px-3 py-1 text-text_HeaderDeskNavMenu hidden md:block`}
              >
                <span className="font font-lato text-[12px]">
                  {item?.title}
                </span>
              </button>
            </span>
          );
        })}
        {(mobileHeaderMenu || []).map((item, i) => {
          return (
            <span>
              <button className="text-xs cursor-pointer uppercase border mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9  w-max px-3  py-1  text-text_HeaderDeskNavMenu   "
               onClick={(e) => {
                if (isLogin) {
                  setActive(item?.title);
                  Navigate(item?.routing);
                } else {
                  setLoginModal(true);
                }
              }}
              >
                <span className="flex w-full items-center h-full gap-3">
                  <span className=" flex flex-row items-center justify-center">
                    <span className="md:hidden">{item?.icon}</span>
                    <span className="font font-lato text-[12px] ml-[4px]">
                      {item?.title}
                    </span>
                  </span>
                </span>
              </button>
            </span>
          );
        })}
      </div>
      <div className="lg:hidden flex flex-col  ">
        <div className="w-full h-[34px] pr-[4px] flex items-center justify-between gap-1  relative ">
          <div className="app-bg flex-row w-full h-full flex cursor-pointer ">
            <div className="w-[34px] h-full flex items-center justify-center   ">
              <button
                className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out w-8 rounded-sm h-6 flex ml-[4px] items-center justify-center bg-bg_Primary2 active:scale-150 cursor-pointer"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="var(--color-primary)"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M15 6l-6 6l6 6"></path>
                </svg>
              </button>
            </div>
            <span className=" w-full h-full capitalize ml-[4px] flex items-center  text-text_Ternary  font-lato font-bold text-[16px] leading-5 ">
              <span className="">
                <span>Cricket</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
