import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { TbLogin } from "react-icons/tb";
import { AiOutlineUserAdd } from "react-icons/ai";
import { PiHandDepositLight } from "react-icons/pi";
import { headerMenu } from "../../Framework/utils/static";
import { format } from "date-fns";
import { Drawer, Modal } from "antd";
import LoginModal from "../modals/login";
import AccountDrawer from "../Drawer/accountDrawer";
import { useUI } from "../../context/ui.context";
import { getFormattedDateTime } from "../../Framework/utils/constant";
import { useAdminDetails } from "../../Framework/login";

const Header: React.FC = () => {
  const {isLogin,setLoginModal} = useUI();
  console.log(isLogin,"Check::::::::::")
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
    const {data} = useAdminDetails();
    const [userData,setUserData] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [active , setActive] = useState('Cricket');
  const showDrawer = () => {
    setOpenDrawer(true);
  };
  const Navigate = useNavigate();
  const onClose = () => {
    setOpenDrawer(false);
  };
 

  // Function to format the date and time using date-fns

  useEffect(()=>{
    if(typeof window !== "undefined"){
      console.log(localStorage.getItem('credential'),"Majn");

        if(localStorage.getItem('credential')){
          console.log(localStorage.getItem('credential'));
          setUserData(true);
        }
       
    }
  },[userData])
  // Update the date and time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(getFormattedDateTime("date"));
      setCurrentTime(getFormattedDateTime("time"));
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  console.log(currentDate, "gfjerfr");
  return (
    <div className="header">
      {/* <div className="divLoader" >
        <img alt="logo" className="loader-img" id="logoImage" src="/assets/images/logo.webp" />
    </div> */}

      <div id="header" title="header" className="fixed top-0 w-full z-[100]">
        <header>
          <div className="flex flex-col">
            <div className="flex flex-col shadow-lg autoAnimate">
              <div
                id="beforelogin"
                className="w-full bg-headerBg h-[54px] lg:h-[72px] pr-[4px] md:px-4 flex items-center justify-between gap-1   relative "
              >
                <div
                  id="logoContainer"
                  className="logo flex w-full   h-full md:w-fit "
                >
                  <div
                    id="beforelogin"
                    className=" flex items-center w-[40px] md:w-fit justify-center lg:hidden "
                  >
                    <button
                      className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-none border-none h-full flex items-center justify-center active:scale-150  w-[100%] shadow-none px-1 cursor-pointer"
                      type="button"
                    >
                      <span>
                        <svg
                          height="19"
                          width="16"
                          fill="var(--color-quaternary)"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center">
                    <a href="/">
                      <div className="cursor-pointer">
                        <img
                          src="/assets/images/logo.webp"
                          width="124"
                          alt=""
                          className="hidden sm:block"
                        />
                        <img
                          src="/assets/images/logo.webp"
                          width="100"
                          className="sm:hidden mobileLogoHeight"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  id="searchBox"
                  className="text-text_Quaternary relative hidden max-w-96 font-lato lg:block flex-grow"
                >
                  <div className=" relative w-full max-w-[450px]">
                    <input
                      className="border-1 peer w-full  appearance-none text-xs pl-9 py-2 border  rounded-full md:text-[14px]  bg-bg_Quaternary  text-text_Ternary "
                      placeholder="Search Events(At least 3 letters)..."
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <IoIosSearch
                      className="absolute top-1/2 left-3 -translate-y-1/2"
                      width={16}
                      height={16}
                      fill="#999"
                    />
                  </div>
                </div>
                <div
                  id="currentDateTime"
                  className=" hidden font-lato lg:block "
                >
                  <div className=" w-full text-text_Quaternary1 text-[10px] lg:text-[12px] flex flex-col px-2">
                    <div className="flex gap-1 items-center text-nowrap whitespace-nowrap">
                      {currentDate}
                    </div>
                    <span className="text-text_Quaternary text-xs lg:text-[14px] text-nowrap whitespace-nowrap font-semibold ">
                      {currentTime}{" "}
                    </span>
                  </div>
                </div>

                <div className="w-max flex items-center justify-center">
                  <div
                    id="mobileSearchIcon"
                    className="lg:hidden mr-[2px] flex items-center justify-center"
                  >
                    <span className="bg-none border-none shadow-none px-1">
                      <svg
                        fill="#fff"
                        className=""
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path>
                      </svg>
                    </span>
                  </div>

                  {isLogin ? (
                    <>
                      {" "}
                      <div
                        id="loginName"
                        className=" text-text_Quaternary text-[10px] lg:text-[12px] xl:flex flex-col px-2 hidden"
                      >
                        <div className="flex gap-0.5 text-white/80  text-nowrap whitespace-nowrap">
                          Login as
                          <span className="font-medium text-text_Quaternary">
                            {userData ? data?.UserName :'DEMO'}
                          </span>
                        </div>
                        <div className="flex  gap-0.5 text-white/80  text-nowrap whitespace-nowrap">
                          Last logged in
                          <span className="font-medium text-text_Quaternary">
                            20/12/2024, 07:55:30 PM
                          </span>
                        </div>
                      </div>
                      <div
                        id="loginName"
                        className=" text-text_Quaternary text-[10px] lg:text-[12px] lg:flex flex-col px-2 hidden"
                      >
                        <div className="flex gap-0.5 text-white/80  xl:text-nowrap whitespace-nowrap">
                          Available balance:
                          <span className="font-medium text-text_Quaternary">
                            ₹ 0
                          </span>
                        </div>
                      </div>
                      <div
                        id="deposit_withdraw_btn"
                        className=" hidden lg:flex items-center justify-center gap-1"
                      >
                        <button
                          className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-none border-none shadow-none cursor-pointer"
                          type="button"
                          onClick={()=>Navigate("/deposit")}
                        >
                          <span className="text-white capitalize border  flex rounded px-3 py-1  flex-col text-[10px]  hover:opacity-100 w-max font-semibold items-center justify-center  bg-bg_HeaderDepositBtnBgColor border-depositBtn ">
                          <img src="/icons/deposit.svg" alt="My Icon" width={20} height={20} />

                          
                            deposit
                          </span>
                        </button>
                        <button
                          className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-none border-none shadow-none  cursor-pointer"
                          type="button"
                          onClick={()=>Navigate("/withdraw")}
                        >
                          <span className="text-white capitalize border  flex rounded px-3 py-1  flex-col text-[10px]  hover:opacity-100 w-max font-semibold items-center justify-center  bg-bg_HeaderWithdrawBtnBgColor border-withDrawBtn ">
                          <img src="/icons/withdraw.svg" alt="My Icon" width={20} height={20} />

                            withdraw
                          </span>
                        </button>
                      </div>
                      <div className=" w-max hidden items-center justify-center gap-1 rounded-full  lg:flex">
                        <button
                          onClick={() => setOpenDrawer(true)}
                          className="relative flex rounded-full gap-1 border border-quaternary hover:opacity-100 w-max font-extrabold items-center justify-center pr-4 pl-3 py-2 bg-bg_Secondary"
                        >
                          <span className=" w-max text-text_LoginTextColor hidden md:block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="var(--color-quaternary)"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                            </svg>
                          </span>
                          <span className=" text-xxs text-text_LoginTextColor  md:text-text_LoginTextColor  font-normal font-lato md:font-semibold md:text-xs xs:text-xs ">
                            Account
                          </span>
                        </button>
                      </div>
                      <div className=" w-max flex items-center justify-center">
                        <div
                          id="mobileSearchIcon"
                          className=" lg:hidden mr-[2px] flex items-center justify-center"
                        >
                          <span className="bg-none border-none shadow-none px-1">
                            <svg
                              fill="#fff"
                              className=""
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path>
                            </svg>
                          </span>
                        </div>
                        <div className=" flex justify-between items-center gap-x-1 h-max lg:hidden">
                          <a href="deposit/">
                            <button
                              type="button"
                              className=" leading-normal  transition duration-150 ease-in-out overflow-hidden relative active:scale-95 hidden xxs:flex items-center h-fit justify-center bg-bg_Quaternary rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-text_Primary   text-sm   text-center  cursor-pointer"
                            >
                              <span className="  font-semibold flex flex-row font-lato md:font-normal sm:text-base xs:text-sm">
                                <span>Deposit</span>
                              </span>
                              <span className="shimmer"></span>
                            </button>
                          </a>
                          <button
                            title="Balance"
                            className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out  rounded-full text-text_Quaternary  pl-3 bg-bg_Secondary flex items-center justify-center pr-1 py-1 xs:py-1 sm:py-2  gap-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)]  cursor-pointer"
                            type="button"
                          >
                            <span className="text-xs sm:text-base font-semibold bg-transparent">
                              ₹0
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="var(--color-quaternary)"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="w-max items-center justify-center gap-1 lg:rounded-full flex -lg:rounded">
                      <button
                        id="loginButton"
                        onClick={() => setLoginModal(true)}
                        className="flex rounded-full border border-quaternary hover:opacity-100 w-max font-extrabold items-center justify-center py-2 bg-bg_Secondary lg:relative lg:gap-1 lg:pr-4 lg:pl-3 -lg:px-4"
                      >
                        <span className="w-max text-text_LoginTextColor hidden lg:block">
                          <TbLogin
                            width={18}
                            height={18}
                            fill="none"
                            color="white"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                          />
                        </span>
                        <span className="text-x lg:text-xxs text-text_LoginHeadercolor lg:text-text_LoginTextColor font-normal font-lato md:font-semibold lg:text-xs md:text-sm xs:text-xs -lg:font-[800]">
                          Log In
                        </span>
                      </button>
                      <button className="flex rounded-full lg:border lg:border-secondary gap-1 hover:opacity-100 w-max font-extrabold items-center justify-center lg:pr-4 lg:pl-3 py-2 -lg:px-4 bg-bg_Quaternary">
                        <span className="w-max hidden lg:block">
                          <AiOutlineUserAdd
                            color="var(--color-primary)"
                            width={18}
                            height={18}
                          />
                        </span>
                        <span className="text-x lg:text-xxs text-text_Primary md:text-text_Secondary font-lato md:font-semibold lg:text-xs md:text-sm xs:text-xs">
                          Sign Up
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="">
                <div className="flex w-full overflow-x-auto no-scrollbar bg-bg_Quaternary p-1 items-start md:items-center md:justify-center">
                  {(headerMenu || []).map((item, i) => {
                    return (
                        <a key={`header${i}`}>
                        <button  onClick={(e)=>{
                            if(isLogin){
                              setActive(item?.title);
                              Navigate(item?.routing);
                            }
                            else{
                              setLoginModal(true)
                            }
                          

                        }} className={`text-xs cursor-pointer uppercase mr-1 ${ item?.title === active ? 'border-primary':''}  rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9 border w-max px-3 py-1 text-text_HeaderDeskNavMenu hidden md:block`}>
                          <span className="font font-lato text-[12px]">
                            {item?.title}
                          </span>
                        </button>
                      </a>
                    );
                  })}
               
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
     <LoginModal/>

      <Drawer closeIcon={null} open={openDrawer}>
        <AccountDrawer openDrawer = {(e:any)=>setOpenDrawer(e)}/>
      </Drawer>
    </div>
  );
};

export default Header;
