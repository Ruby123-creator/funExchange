import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiShoppingCart } from 'react-icons/fi';
import { FaShopify } from 'react-icons/fa';
import { useCart } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { TbLogin } from "react-icons/tb";
import { AiOutlineUserAdd } from "react-icons/ai";
import { PiHandDepositLight } from "react-icons/pi";

import { format } from 'date-fns';
import { Drawer, Modal } from 'antd';
import LoginModal from '../modals/login';
import AccountDrawer from '../Drawer/accountDrawer';

const Header: React.FC = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin , setIsLogin] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };
  useEffect(()=>{
     const isLoginVal = Boolean(localStorage.getItem('isLogin')) || false;
     setIsLogin(isLoginVal)
  },[])
   
  // Function to format the date and time using date-fns
  const getFormattedDateTime = (val:string) => {
    const now = new Date();

    // Format the date and time
    const formattedDate = format(now, 'MMM do, yyyy'); // e.g., "Dec 20th, 2024"
    const formattedTime = format(now, 'HH:mm:ss'); // e.g., "10:34:13"

    // Get the timezone offset in GMT format
    const timezoneOffset = now.getTimezoneOffset();
    const timezoneHours = Math.abs(Math.floor(timezoneOffset / 60));
    const timezoneMinutes = Math.abs(timezoneOffset % 60);
    const timezoneSign = timezoneOffset > 0 ? '-' : '+';
    const timezone = `GMT ${timezoneSign}${timezoneHours}:${String(timezoneMinutes).padStart(2, '0')}`;

    // Combine everything into the desired format
    return val === 'date' ? `${formattedDate} (${timezone})` : ` ${formattedTime}`;
  };

  // Update the date and time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(getFormattedDateTime('date'));
      setCurrentTime(getFormattedDateTime('time'));
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  console.log(currentDate,"gfjerfr")
  return(
    <div className='header'>
  {/* <div className="divLoader" >
        <img alt="logo" className="loader-img" id="logoImage" src="/assets/images/logo.webp" />
    </div> */}

  <div id="header" title="header" className="fixed top-0 w-full z-[100]" >
  <header>
      <div className="flex flex-col">
          <div className="flex flex-col shadow-lg autoAnimate">


              <div id="beforelogin"
                  className="w-full bg-headerBg h-[54px] lg:h-[72px] pr-[4px] md:px-4 flex items-center justify-between gap-1   relative ">
                  <div id="logoContainer" className="logo flex w-full   h-full md:w-fit ">
                      <div id="beforelogin"
                          className=" flex items-center w-[40px] md:w-fit justify-center lg:hidden ">
                          <button 
                              className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-none border-none h-full flex items-center justify-center active:scale-150  w-[100%] shadow-none px-1 cursor-pointer"
                              type="button"><span><svg height="19" width="16"
                                      fill="var(--color-quaternary)" xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512">
                                      <path
                                          d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z">
                                      </path>
                                  </svg>
                              </span>
                          </button>
                      </div>
                      <div className="flex items-center"><a href="index.html">
                              <div className="cursor-pointer">
                                  <img src="/assets/images/logo.webp" width="124" alt=""
                                      className="hidden sm:block" /><img src="/assets/images/logo.webp"
                                      width="100" className="sm:hidden mobileLogoHeight" alt="" />
                              </div>
                          </a>
                      </div>
                  </div>
                  <div id="searchBox"
                      className="text-text_Quaternary relative hidden max-w-96 font-lato lg:block flex-grow">
                      <div className=" relative w-full max-w-[450px]">
                        <input
                              className="border-1 peer w-full  appearance-none text-xs pl-9 py-2 border  rounded-full md:text-[14px]  bg-bg_Quaternary  text-text_Ternary "
                              placeholder="Search Events(At least 3 letters)..." type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                              <IoIosSearch className="absolute top-1/2 left-3 -translate-y-1/2" width={16} height={16} fill='#999'/>
                                
                          </div>
                  </div>
                  <div id="currentDateTime" className=" hidden font-lato lg:block ">
                      <div
                          className=" w-full text-text_Quaternary1 text-[10px] lg:text-[12px] flex flex-col px-2">
                          <div className="flex gap-1 items-center text-nowrap whitespace-nowrap">{currentDate}</div><span
                              className="text-text_Quaternary text-xs lg:text-[14px] text-nowrap whitespace-nowrap font-semibold ">
                              {currentTime} </span>
                      </div>
                  </div>

                  <div className="w-max flex items-center justify-center">
                      <div id="mobileSearchIcon"
                          className="lg:hidden mr-[2px] flex items-center justify-center">
                          <span className="bg-none border-none shadow-none px-1"><svg fill="#fff" className=""
                                  width="20" height="20" viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z">
                                  </path>
                              </svg></span>
                      </div>

                      {
                        isLogin ? <>  <div id="loginName"
                        className=" text-text_Quaternary text-[10px] lg:text-[12px] xl:flex flex-col px-2 hidden">
                        <div className="flex gap-0.5 text-white/80  text-nowrap whitespace-nowrap">Login as<span
                                className="font-medium text-text_Quaternary">DEMO</span></div>
                        <div className="flex  gap-0.5 text-white/80  text-nowrap whitespace-nowrap">Last logged
                            in<span className="font-medium text-text_Quaternary">20/12/2024, 07:55:30 PM</span>
                        </div>
                    </div>
                    <div id="loginName"
                        className=" text-text_Quaternary text-[10px] lg:text-[12px] lg:flex flex-col px-2 hidden">
                        <div className="flex gap-0.5 text-white/80  xl:text-nowrap whitespace-nowrap">Available
                            balance:<span className="font-medium text-text_Quaternary">₹ 0</span></div>
                    </div>
                    <div id="deposit_withdraw_btn"
                        className=" hidden lg:flex items-center justify-center gap-1"><button
                            className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-none border-none shadow-none cursor-pointer"
                            type="button"><span
                                className="text-white capitalize border  flex rounded px-3 py-1  flex-col text-[10px]  hover:opacity-100 w-max font-semibold items-center justify-center  bg-bg_HeaderDepositBtnBgColor border-depositBtn ">
                                 
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg" width="21" height="19"
                                    viewBox="0 0 21 19" fill="none">
                                    <path
                                        d="M3.62143 4.52979C3.52275 4.52988 3.42507 4.54945 3.33397 4.58737C3.24287 4.62528 3.16014 4.68079 3.09054 4.75074C3.02094 4.82068 2.96584 4.90368 2.92837 4.99496C2.8909 5.08624 2.87181 5.18402 2.8722 5.28269C2.8724 5.48134 2.95139 5.67179 3.09185 5.81225C3.23232 5.95271 3.42278 6.03171 3.62143 6.03191H16.6423C17.4549 6.03191 18.0115 6.5801 18.0115 7.19078V8.50099C18.0111 8.59998 18.0303 8.69805 18.068 8.78958C18.1057 8.8811 18.1612 8.96425 18.2312 9.03424C18.3012 9.10424 18.3843 9.15969 18.4758 9.19739C18.5674 9.23508 18.6654 9.25429 18.7644 9.2539C18.8631 9.2538 18.9608 9.23424 19.0519 9.19632C19.143 9.1584 19.2257 9.10288 19.2953 9.03293C19.3649 8.96299 19.42 8.87999 19.4575 8.78871C19.4949 8.69743 19.514 8.59966 19.5136 8.50099V7.19078C19.5136 5.6859 18.1796 4.52979 16.6423 4.52979H3.62143Z"
                                        fill="var(--color-quaternary)"></path>
                                    <path
                                        d="M16.6606 7.75177C15.5639 7.75177 14.6603 8.65906 14.6603 9.75583V11.2579C14.6603 12.3547 15.5639 13.262 16.6606 13.262H18.7459C19.8427 13.262 20.75 12.3547 20.75 11.2579V9.75583C20.75 8.65906 19.8427 7.75177 18.7459 7.75177H16.6606ZM16.6606 9.25389H18.7459C19.032 9.25389 19.2478 9.46966 19.2478 9.75583V11.2579C19.2478 11.5441 19.032 11.7599 18.7459 11.7599H16.6606C16.3745 11.7599 16.1587 11.5441 16.1587 11.2579V9.75583C16.1587 9.46966 16.3745 9.25389 16.6606 9.25389Z"
                                        fill="var(--color-quaternary)"></path>
                                    <path
                                        d="M10.2315 13.0663C10.0329 13.0665 9.84242 13.1455 9.70195 13.286C9.56149 13.4265 9.4825 13.6169 9.4823 13.8156V17.7499C9.4825 17.9485 9.56149 18.139 9.70195 18.2794C9.84242 18.4199 10.0329 18.4989 10.2315 18.4991C10.4302 18.4989 10.6206 18.4199 10.7611 18.2794C10.9015 18.139 10.9805 17.9485 10.9807 17.7499V13.8156C10.9805 13.6169 10.9015 13.4265 10.7611 13.286C10.6206 13.1455 10.4302 13.0665 10.2315 13.0663Z"
                                        fill="var(--color-quaternary)"></path>
                                    <path
                                        d="M10.2315 13.0663C10.1327 13.0664 10.0348 13.086 9.94364 13.124C9.85243 13.162 9.76964 13.2177 9.70001 13.2878L7.72179 15.2771C7.58156 15.4177 7.50281 15.6081 7.50281 15.8067C7.50281 16.0053 7.58156 16.1957 7.72179 16.3363C7.79147 16.4063 7.8743 16.4619 7.9655 16.4997C8.05671 16.5376 8.15449 16.5571 8.25325 16.5571C8.35201 16.5571 8.44981 16.5376 8.54101 16.4997C8.63221 16.4619 8.71503 16.4063 8.78471 16.3363L10.7629 14.347C10.8327 14.2771 10.8879 14.1941 10.9255 14.1027C10.9631 14.0114 10.9822 13.9135 10.9819 13.8148C10.9815 13.716 10.9617 13.6183 10.9234 13.5272C10.8852 13.4361 10.8294 13.3535 10.7592 13.2841C10.6188 13.1448 10.4292 13.0665 10.2315 13.0663Z"
                                        fill="var(--color-quaternary)"></path>
                                    <path
                                        d="M10.2353 13.0664C10.1367 13.0659 10.0391 13.085 9.94786 13.1223C9.85667 13.1597 9.77374 13.2147 9.70381 13.2841C9.63357 13.3535 9.57774 13.4361 9.53952 13.5272C9.5013 13.6183 9.48143 13.716 9.48108 13.8148C9.48073 13.9135 9.4999 14.0114 9.53747 14.1027C9.57504 14.1941 9.63028 14.2771 9.70002 14.347L11.6783 16.3363C11.7479 16.4063 11.8308 16.4619 11.922 16.4998C12.0132 16.5376 12.111 16.5571 12.2097 16.5571C12.3085 16.5571 12.4063 16.5376 12.4975 16.4998C12.5887 16.4619 12.6715 16.4063 12.7412 16.3363C12.8819 16.1962 12.9614 16.0061 12.9621 15.8075C12.9628 15.6089 12.8847 15.4182 12.745 15.2771L10.763 13.2878C10.6233 13.1471 10.4335 13.0675 10.2353 13.0664Z"
                                        fill="var(--color-quaternary)"></path>
                                    <path
                                        d="M1.49923 2.62171C1.30058 2.6219 1.11013 2.70089 0.96967 2.84135C0.829205 2.98181 0.750198 3.17227 0.75 3.37091V13.8747C0.75 15.3796 2.08406 16.532 3.6214 16.532H5.75093C5.94957 16.5318 6.14003 16.4528 6.28049 16.3123C6.42095 16.1719 6.49995 15.9814 6.50015 15.7828C6.49995 15.5841 6.42095 15.3937 6.28049 15.2532C6.14003 15.1128 5.94957 15.0338 5.75093 15.0336H3.6214C2.8088 15.0336 2.25214 14.4854 2.25214 13.8747V3.37091C2.25204 3.27224 2.23247 3.17456 2.19455 3.08347C2.15664 2.99237 2.10113 2.90965 2.03118 2.84005C1.96124 2.77045 1.87824 2.71533 1.78696 2.67786C1.69568 2.6404 1.5979 2.62132 1.49923 2.62171ZM18.7644 11.7599C18.6654 11.7595 18.5673 11.7787 18.4758 11.8164C18.3843 11.8541 18.3011 11.9096 18.2311 11.9795C18.1611 12.0495 18.1057 12.1327 18.068 12.2242C18.0303 12.3157 18.0111 12.4138 18.0115 12.5128V13.8747C18.0115 14.4854 17.4548 15.0336 16.6422 15.0336H14.7489C14.5503 15.0338 14.3598 15.1128 14.2193 15.2532C14.0789 15.3937 13.9999 15.5841 13.9997 15.7828C13.9999 15.9814 14.0789 16.1719 14.2193 16.3123C14.3598 16.4528 14.5503 16.5318 14.7489 16.532H16.6422C18.1796 16.532 19.5136 15.3796 19.5136 13.8747V12.5128C19.514 12.4141 19.4949 12.3164 19.4574 12.2251C19.42 12.1338 19.3649 12.0508 19.2953 11.9809C19.2257 11.9109 19.1429 11.8554 19.0518 11.8175C18.9608 11.7796 18.8631 11.76 18.7644 11.7599Z"
                                        fill="var(--color-quaternary)"></path>
                                    <path
                                        d="M3.6214 0.713562C2.08514 0.713543 0.75 1.86619 0.75 3.37088C0.75 4.87556 2.08514 6.03188 3.6214 6.03188C3.82005 6.03168 4.01049 5.95269 4.15095 5.81223C4.29141 5.67177 4.37041 5.48131 4.37061 5.28267C4.37099 5.184 4.35191 5.08622 4.31444 4.99493C4.27697 4.90365 4.22186 4.82067 4.15226 4.75073C4.08266 4.68078 3.99994 4.62526 3.90885 4.58734C3.81775 4.54942 3.72008 4.52986 3.6214 4.52976C2.81475 4.52976 2.25214 3.97492 2.25214 3.37088C2.25214 2.76683 2.81475 2.21197 3.6214 2.21199H14.963C15.4851 2.21199 15.893 2.61991 15.893 3.14205V5.28267C15.8932 5.48131 15.9722 5.67177 16.1127 5.81223C16.2531 5.95269 16.4436 6.03168 16.6422 6.03188C16.7409 6.03227 16.8387 6.01318 16.93 5.97571C17.0212 5.93825 17.1042 5.88314 17.1742 5.81354C17.2441 5.74394 17.2996 5.66122 17.3376 5.57012C17.3755 5.47903 17.395 5.38134 17.3951 5.28267V3.14205C17.3951 1.8093 16.2957 0.713562 14.963 0.713562H3.6214Z"
                                        fill="var(--color-quaternary)"></path>
                                </svg>deposit</span></button><button
                            className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-none border-none shadow-none  cursor-pointer"
                            type="button"><span
                                className="text-white capitalize border  flex rounded px-3 py-1  flex-col text-[10px]  hover:opacity-100 w-max font-semibold items-center justify-center  bg-bg_HeaderWithdrawBtnBgColor border-withDrawBtn "><svg
                                    xmlns="http://www.w3.org/2000/svg" width="21" height="19"
                                    viewBox="0 0 21 19" fill="none">
                                    <path
                                        d="M3.11825 4.52979C3.01958 4.52988 2.92189 4.54945 2.8308 4.58737C2.7397 4.62528 2.65697 4.68079 2.58737 4.75074C2.51777 4.82068 2.46266 4.90368 2.42519 4.99496C2.38772 5.08624 2.36864 5.18402 2.36902 5.28269C2.36922 5.48134 2.44821 5.67179 2.58868 5.81225C2.72914 5.95271 2.91961 6.03171 3.11825 6.03191H16.1391C16.9517 6.03191 17.5083 6.5801 17.5083 7.19078V8.50099C17.5079 8.59998 17.5272 8.69805 17.5649 8.78958C17.6026 8.8811 17.658 8.96425 17.728 9.03425C17.798 9.10424 17.8811 9.15969 17.9727 9.19739C18.0642 9.23508 18.1623 9.25429 18.2612 9.2539C18.3599 9.2538 18.4576 9.23424 18.5487 9.19632C18.6398 9.1584 18.7225 9.10288 18.7921 9.03293C18.8617 8.96299 18.9168 8.87999 18.9543 8.78871C18.9918 8.69743 19.0108 8.59967 19.0105 8.50099V7.19078C19.0105 5.6859 17.6764 4.52979 16.1391 4.52979H3.11825Z"
                                        fill="var(--color-quaternary)"></path>
                                    <path
                                        d="M16.1575 7.75177C15.0607 7.75177 14.1571 8.65906 14.1571 9.75583V11.2579C14.1571 12.3547 15.0607 13.262 16.1575 13.262H18.2427C19.3395 13.262 20.2468 12.3547 20.2468 11.2579V9.75583C20.2468 8.65906 19.3395 7.75177 18.2427 7.75177H16.1575ZM16.1575 9.25389H18.2427C18.5289 9.25389 18.7447 9.46966 18.7447 9.75583V11.2579C18.7447 11.5441 18.5289 11.7599 18.2427 11.7599H16.1575C15.8713 11.7599 15.6555 11.5441 15.6555 11.2579V9.75583C15.6555 9.46966 15.8713 9.25389 16.1575 9.25389Z"
                                        fill="var(--color-quaternary)"></path>
                                    <path
                                        d="M9.73015 18.4992C9.9288 18.499 10.1193 18.42 10.2597 18.2796C10.4002 18.1391 10.4792 17.9486 10.4794 17.75L10.4794 13.8157C10.4792 13.617 10.4002 13.4266 10.2597 13.2861C10.1193 13.1457 9.9288 13.0667 9.73016 13.0665C9.53151 13.0667 9.34106 13.1457 9.2006 13.2861C9.06013 13.4266 8.98114 13.617 8.98094 13.8157L8.98094 17.75C8.98114 17.9486 9.06013 18.1391 9.2006 18.2796C9.34106 18.42 9.53151 18.499 9.73015 18.4992Z"
                                        fill="var(--color-quaternary)"></path>
                                    <path
                                        d="M9.7302 18.4992C9.82901 18.4991 9.92683 18.4795 10.018 18.4415C10.1092 18.4035 10.192 18.3479 10.2617 18.2778L12.2399 16.2885C12.3801 16.1479 12.4589 15.9574 12.4589 15.7589C12.4589 15.5603 12.3801 15.3698 12.2399 15.2292C12.1702 15.1592 12.0874 15.1037 11.9962 15.0658C11.905 15.0279 11.8072 15.0084 11.7084 15.0084C11.6097 15.0084 11.5119 15.0279 11.4207 15.0658C11.3295 15.1037 11.2466 15.1592 11.177 15.2292L9.19874 17.2185C9.12899 17.2885 9.07376 17.3715 9.03619 17.4628C8.99861 17.5542 8.97945 17.652 8.9798 17.7508C8.98015 17.8495 9.00001 17.9473 9.03823 18.0383C9.07645 18.1294 9.13227 18.212 9.20251 18.2815C9.34285 18.4208 9.53244 18.499 9.7302 18.4992Z"
                                        fill="var(--color-quaternary)"></path>
                                    <path
                                        d="M9.7264 18.4992C9.82495 18.4996 9.92262 18.4806 10.0138 18.4432C10.105 18.4059 10.1879 18.3509 10.2579 18.2814C10.3281 18.212 10.3839 18.1294 10.4222 18.0383C10.4604 17.9473 10.4802 17.8495 10.4806 17.7508C10.4809 17.652 10.4618 17.5542 10.4242 17.4628C10.3866 17.3715 10.3314 17.2885 10.2617 17.2185L8.28341 15.2292C8.21373 15.1592 8.13092 15.1037 8.03971 15.0658C7.94851 15.0279 7.85071 15.0084 7.75195 15.0084C7.65319 15.0084 7.55539 15.0279 7.46419 15.0658C7.37299 15.1037 7.29017 15.1592 7.22049 15.2292C7.07976 15.3693 7.00032 15.5595 6.99961 15.7581C6.9989 15.9566 7.07698 16.1474 7.21671 16.2885L9.19862 18.2778C9.33835 18.4184 9.52812 18.4981 9.7264 18.4992Z"
                                        fill="var(--color-quaternary)"></path>
                                    <path
                                        d="M0.996056 2.62171C0.797411 2.6219 0.606961 2.70089 0.466496 2.84135C0.326031 2.98181 0.247024 3.17227 0.246826 3.37091V13.8747C0.246826 15.3796 1.58089 16.532 3.11823 16.532H5.24776C5.4464 16.5318 5.63686 16.4528 5.77732 16.3123C5.91778 16.1719 5.99678 15.9814 5.99697 15.7828C5.99678 15.5841 5.91778 15.3937 5.77732 15.2532C5.63686 15.1128 5.4464 15.0338 5.24776 15.0336H3.11823C2.30563 15.0336 1.74896 14.4854 1.74896 13.8747V3.37091C1.74886 3.27224 1.7293 3.17456 1.69138 3.08347C1.65346 2.99237 1.59795 2.90965 1.52801 2.84005C1.45807 2.77045 1.37507 2.71533 1.28379 2.67786C1.19251 2.6404 1.09473 2.62132 0.996056 2.62171ZM18.2612 11.7599C18.1622 11.7595 18.0642 11.7787 17.9726 11.8164C17.8811 11.8541 17.798 11.9096 17.728 11.9795C17.658 12.0495 17.6025 12.1327 17.5648 12.2242C17.5271 12.3157 17.5079 12.4138 17.5083 12.5128V13.8747C17.5083 14.4854 16.9517 15.0336 16.1391 15.0336H14.2457C14.0471 15.0338 13.8566 15.1128 13.7162 15.2532C13.5757 15.3937 13.4967 15.5841 13.4965 15.7828C13.4967 15.9814 13.5757 16.1719 13.7162 16.3123C13.8566 16.4528 14.0471 16.5318 14.2457 16.532H16.1391C17.6764 16.532 19.0104 15.3796 19.0104 13.8747V12.5128C19.0108 12.4141 18.9917 12.3164 18.9543 12.2251C18.9168 12.1338 18.8617 12.0508 18.7921 11.9809C18.7225 11.9109 18.6398 11.8554 18.5487 11.8175C18.4576 11.7796 18.3599 11.76 18.2612 11.7599Z"
                                        fill="var(--color-quaternary)"></path>
                                    <path
                                        d="M3.11823 0.713562C1.58197 0.713543 0.246826 1.86619 0.246826 3.37088C0.246826 4.87556 1.58197 6.03188 3.11823 6.03188C3.31687 6.03168 3.50732 5.95269 3.64778 5.81223C3.78824 5.67177 3.86723 5.48131 3.86743 5.28267C3.86782 5.184 3.84873 5.08622 3.81126 4.99494C3.7738 4.90365 3.71869 4.82067 3.64909 4.75073C3.57949 4.68078 3.49677 4.62526 3.40567 4.58734C3.31458 4.54942 3.2169 4.52986 3.11823 4.52976C2.31158 4.52976 1.74896 3.97492 1.74896 3.37088C1.74896 2.76683 2.31158 2.21197 3.11823 2.21199H14.4598C14.9819 2.21199 15.3898 2.61991 15.3898 3.14205V5.28267C15.39 5.48131 15.4691 5.67177 15.6095 5.81223C15.75 5.95269 15.9404 6.03168 16.1391 6.03188C16.2377 6.03227 16.3355 6.01318 16.4268 5.97571C16.5181 5.93825 16.6011 5.88314 16.671 5.81354C16.7409 5.74394 16.7965 5.66122 16.8344 5.57012C16.8723 5.47903 16.8919 5.38134 16.892 5.28267V3.14205C16.892 1.8093 15.7925 0.713562 14.4598 0.713562H3.11823Z"
                                        fill="var(--color-quaternary)"></path>
                                </svg>withdraw</span></button></div>
                    <div className=" w-max hidden items-center justify-center gap-1 rounded-full  lg:flex"
                   >
                        <button
                        onClick={()=>setOpenDrawer(true)}
                            className="relative flex rounded-full gap-1 border border-quaternary hover:opacity-100 w-max font-extrabold items-center justify-center pr-4 pl-3 py-2 bg-bg_Secondary"><span
                                className=" w-max text-text_LoginTextColor hidden md:block"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--color-quaternary)"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z">
                                    </path>
                                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                </svg></span><span
                                className=" text-xxs text-text_LoginTextColor  md:text-text_LoginTextColor  font-normal font-lato md:font-semibold md:text-xs xs:text-xs ">Account</span></button>
                    </div>
                    <div className=" w-max flex items-center justify-center">
                        <div id="mobileSearchIcon"
                            className=" lg:hidden mr-[2px] flex items-center justify-center"><span
                                className="bg-none border-none shadow-none px-1"><svg fill="#fff" className=""
                                    width="20" height="20" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z">
                                    </path>
                                </svg></span></div>
                        <div className=" flex justify-between items-center gap-x-1 h-max lg:hidden"><a
                                href="deposit/"><button type="button"
                                    className=" leading-normal  transition duration-150 ease-in-out overflow-hidden relative active:scale-95 hidden xxs:flex items-center h-fit justify-center bg-bg_Quaternary rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-text_Primary   text-sm   text-center  cursor-pointer"><span
                                        className="  font-semibold flex flex-row font-lato md:font-normal sm:text-base xs:text-sm"><span>Deposit</span></span><span
                                        className="shimmer"></span></button></a>
                            <button title="Balance" 
                                className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out  rounded-full text-text_Quaternary  pl-3 bg-bg_Secondary flex items-center justify-center pr-1 py-1 xs:py-1 sm:py-2  gap-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)]  cursor-pointer"
                                type="button"><span
                                    className="text-xs sm:text-base font-semibold bg-transparent">₹0</span><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--color-quaternary)"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855">
                                    </path>
                                </svg></button>
                        </div>
                    </div></>:<div
                          className="w-max items-center justify-center gap-1 lg:rounded-full flex -lg:rounded">
                          <button id="loginButton"
                              onClick={()=>setIsModalOpen(true)}
                              className="flex rounded-full border border-quaternary hover:opacity-100 w-max font-extrabold items-center justify-center py-2 bg-bg_Secondary lg:relative lg:gap-1 lg:pr-4 lg:pl-3 -lg:px-4">
                            
                              <span className="w-max text-text_LoginTextColor hidden lg:block">
                              <TbLogin width={18} height={18} fill='none' color="white" viewBox="0 0 24 24" stroke-width="1.5"/>
                            
                                  </span><span
                                  className="text-x lg:text-xxs text-text_LoginHeadercolor lg:text-text_LoginTextColor font-normal font-lato md:font-semibold lg:text-xs md:text-sm xs:text-xs -lg:font-[800]">Log
                                  In</span></button><button
                              className="flex rounded-full lg:border lg:border-secondary gap-1 hover:opacity-100 w-max font-extrabold items-center justify-center lg:pr-4 lg:pl-3 py-2 -lg:px-4 bg-bg_Quaternary">
                              <span className="w-max hidden lg:block">
                                <AiOutlineUserAdd  color='var(--color-primary)' width={18} height={18}/>
                              </span><span
                                  className="text-x lg:text-xxs text-text_Primary md:text-text_Secondary font-lato md:font-semibold lg:text-xs md:text-sm xs:text-xs">Sign
                                  Up</span>
                          </button>
                      </div>
                      }
                      
                  </div>
              </div>


              {/* <div id="afterlogin"
                  className="w-full bg-headerBg h-[54px] lg:h-[72px] pr-[4px] md:px-4 flex items-center justify-between gap-1   relative ">
                  <div id="logoContainer" className="logo flex w-full   h-full md:w-fit ">
                      <div className=" flex items-center w-[40px] md:w-fit justify-center lg:hidden ">
                          <button
                              className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-none border-none h-full flex items-center justify-center active:scale-150  w-[100%] shadow-none px-1 cursor-pointer"
                              type="button"><span><svg height="19" width="16"
                                      fill="var(--color-quaternary)" xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512">
                                      <path
                                          d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z">
                                      </path>
                                  </svg></span>
                          </button>
                      </div>
                      <div className="flex items-center"><a href="index.html">
                              <div className="cursor-pointer">
                                  <img src="/assets/images/logo.webp" width="124" alt=""
                                      className="hidden sm:block" /><img src="/assets/images/logo.webp"
                                      width="100" className="sm:hidden mobileLogoHeight" alt="" />
                              </div>
                          </a>
                      </div>
                  </div>
                  <div id="searchBox"
                      className="text-text_Quaternary relative hidden max-w-96 font-lato lg:block flex-grow">
                      <div className=" relative w-full max-w-[450px]"><input
                              className="border-1 peer w-full  appearance-none text-xs pl-9 py-2 border  rounded-full md:text-[14px]  bg-bg_Quaternary  text-text_Ternary "
                              placeholder="Search Events(At least 3 letters)..." type="text" value=""/><svg
                              fill="#999" className="absolute top-1/2 left-3 -translate-y-1/2" width="16"
                              height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z">
                              </path>
                          </svg></div>
                  </div>
                  <div id="currentDateTime" className=" hidden font-lato lg:block ">
                      <div
                          className=" w-full text-text_Quaternary1 text-[10px] lg:text-[12px] flex flex-col px-2">
                          <div className="flex gap-1 items-center text-nowrap whitespace-nowrap">Dec 20th,
                              2024 ( GMT +5.5:30 )</div><span
                              className="text-text_Quaternary text-xs lg:text-[14px] text-nowrap whitespace-nowrap font-semibold ">
                              19:56:07 </span>
                      </div>
                  </div>
                  <div id="loginName"
                      className=" text-text_Quaternary text-[10px] lg:text-[12px] xl:flex flex-col px-2 hidden">
                      <div className="flex gap-0.5 text-white/80  text-nowrap whitespace-nowrap">Login as<span
                              className="font-medium text-text_Quaternary">DEMO</span></div>
                      <div className="flex  gap-0.5 text-white/80  text-nowrap whitespace-nowrap">Last logged
                          in<span className="font-medium text-text_Quaternary">20/12/2024, 07:55:30 PM</span>
                      </div>
                  </div>
                  <div id="loginName"
                      className=" text-text_Quaternary text-[10px] lg:text-[12px] lg:flex flex-col px-2 hidden">
                      <div className="flex gap-0.5 text-white/80  xl:text-nowrap whitespace-nowrap">Available
                          balance:<span className="font-medium text-text_Quaternary">₹ 0</span></div>
                  </div>
                  <div id="deposit_withdraw_btn"
                      className=" hidden lg:flex items-center justify-center gap-1"><button
                          className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-none border-none shadow-none cursor-pointer"
                          type="button"><span
                              className="text-white capitalize border  flex rounded px-3 py-1  flex-col text-[10px]  hover:opacity-100 w-max font-semibold items-center justify-center  bg-bg_HeaderDepositBtnBgColor border-depositBtn "><svg
                                  xmlns="http://www.w3.org/2000/svg" width="21" height="19"
                                  viewBox="0 0 21 19" fill="none">
                                  <path
                                      d="M3.62143 4.52979C3.52275 4.52988 3.42507 4.54945 3.33397 4.58737C3.24287 4.62528 3.16014 4.68079 3.09054 4.75074C3.02094 4.82068 2.96584 4.90368 2.92837 4.99496C2.8909 5.08624 2.87181 5.18402 2.8722 5.28269C2.8724 5.48134 2.95139 5.67179 3.09185 5.81225C3.23232 5.95271 3.42278 6.03171 3.62143 6.03191H16.6423C17.4549 6.03191 18.0115 6.5801 18.0115 7.19078V8.50099C18.0111 8.59998 18.0303 8.69805 18.068 8.78958C18.1057 8.8811 18.1612 8.96425 18.2312 9.03424C18.3012 9.10424 18.3843 9.15969 18.4758 9.19739C18.5674 9.23508 18.6654 9.25429 18.7644 9.2539C18.8631 9.2538 18.9608 9.23424 19.0519 9.19632C19.143 9.1584 19.2257 9.10288 19.2953 9.03293C19.3649 8.96299 19.42 8.87999 19.4575 8.78871C19.4949 8.69743 19.514 8.59966 19.5136 8.50099V7.19078C19.5136 5.6859 18.1796 4.52979 16.6423 4.52979H3.62143Z"
                                      fill="var(--color-quaternary)"></path>
                                  <path
                                      d="M16.6606 7.75177C15.5639 7.75177 14.6603 8.65906 14.6603 9.75583V11.2579C14.6603 12.3547 15.5639 13.262 16.6606 13.262H18.7459C19.8427 13.262 20.75 12.3547 20.75 11.2579V9.75583C20.75 8.65906 19.8427 7.75177 18.7459 7.75177H16.6606ZM16.6606 9.25389H18.7459C19.032 9.25389 19.2478 9.46966 19.2478 9.75583V11.2579C19.2478 11.5441 19.032 11.7599 18.7459 11.7599H16.6606C16.3745 11.7599 16.1587 11.5441 16.1587 11.2579V9.75583C16.1587 9.46966 16.3745 9.25389 16.6606 9.25389Z"
                                      fill="var(--color-quaternary)"></path>
                                  <path
                                      d="M10.2315 13.0663C10.0329 13.0665 9.84242 13.1455 9.70195 13.286C9.56149 13.4265 9.4825 13.6169 9.4823 13.8156V17.7499C9.4825 17.9485 9.56149 18.139 9.70195 18.2794C9.84242 18.4199 10.0329 18.4989 10.2315 18.4991C10.4302 18.4989 10.6206 18.4199 10.7611 18.2794C10.9015 18.139 10.9805 17.9485 10.9807 17.7499V13.8156C10.9805 13.6169 10.9015 13.4265 10.7611 13.286C10.6206 13.1455 10.4302 13.0665 10.2315 13.0663Z"
                                      fill="var(--color-quaternary)"></path>
                                  <path
                                      d="M10.2315 13.0663C10.1327 13.0664 10.0348 13.086 9.94364 13.124C9.85243 13.162 9.76964 13.2177 9.70001 13.2878L7.72179 15.2771C7.58156 15.4177 7.50281 15.6081 7.50281 15.8067C7.50281 16.0053 7.58156 16.1957 7.72179 16.3363C7.79147 16.4063 7.8743 16.4619 7.9655 16.4997C8.05671 16.5376 8.15449 16.5571 8.25325 16.5571C8.35201 16.5571 8.44981 16.5376 8.54101 16.4997C8.63221 16.4619 8.71503 16.4063 8.78471 16.3363L10.7629 14.347C10.8327 14.2771 10.8879 14.1941 10.9255 14.1027C10.9631 14.0114 10.9822 13.9135 10.9819 13.8148C10.9815 13.716 10.9617 13.6183 10.9234 13.5272C10.8852 13.4361 10.8294 13.3535 10.7592 13.2841C10.6188 13.1448 10.4292 13.0665 10.2315 13.0663Z"
                                      fill="var(--color-quaternary)"></path>
                                  <path
                                      d="M10.2353 13.0664C10.1367 13.0659 10.0391 13.085 9.94786 13.1223C9.85667 13.1597 9.77374 13.2147 9.70381 13.2841C9.63357 13.3535 9.57774 13.4361 9.53952 13.5272C9.5013 13.6183 9.48143 13.716 9.48108 13.8148C9.48073 13.9135 9.4999 14.0114 9.53747 14.1027C9.57504 14.1941 9.63028 14.2771 9.70002 14.347L11.6783 16.3363C11.7479 16.4063 11.8308 16.4619 11.922 16.4998C12.0132 16.5376 12.111 16.5571 12.2097 16.5571C12.3085 16.5571 12.4063 16.5376 12.4975 16.4998C12.5887 16.4619 12.6715 16.4063 12.7412 16.3363C12.8819 16.1962 12.9614 16.0061 12.9621 15.8075C12.9628 15.6089 12.8847 15.4182 12.745 15.2771L10.763 13.2878C10.6233 13.1471 10.4335 13.0675 10.2353 13.0664Z"
                                      fill="var(--color-quaternary)"></path>
                                  <path
                                      d="M1.49923 2.62171C1.30058 2.6219 1.11013 2.70089 0.96967 2.84135C0.829205 2.98181 0.750198 3.17227 0.75 3.37091V13.8747C0.75 15.3796 2.08406 16.532 3.6214 16.532H5.75093C5.94957 16.5318 6.14003 16.4528 6.28049 16.3123C6.42095 16.1719 6.49995 15.9814 6.50015 15.7828C6.49995 15.5841 6.42095 15.3937 6.28049 15.2532C6.14003 15.1128 5.94957 15.0338 5.75093 15.0336H3.6214C2.8088 15.0336 2.25214 14.4854 2.25214 13.8747V3.37091C2.25204 3.27224 2.23247 3.17456 2.19455 3.08347C2.15664 2.99237 2.10113 2.90965 2.03118 2.84005C1.96124 2.77045 1.87824 2.71533 1.78696 2.67786C1.69568 2.6404 1.5979 2.62132 1.49923 2.62171ZM18.7644 11.7599C18.6654 11.7595 18.5673 11.7787 18.4758 11.8164C18.3843 11.8541 18.3011 11.9096 18.2311 11.9795C18.1611 12.0495 18.1057 12.1327 18.068 12.2242C18.0303 12.3157 18.0111 12.4138 18.0115 12.5128V13.8747C18.0115 14.4854 17.4548 15.0336 16.6422 15.0336H14.7489C14.5503 15.0338 14.3598 15.1128 14.2193 15.2532C14.0789 15.3937 13.9999 15.5841 13.9997 15.7828C13.9999 15.9814 14.0789 16.1719 14.2193 16.3123C14.3598 16.4528 14.5503 16.5318 14.7489 16.532H16.6422C18.1796 16.532 19.5136 15.3796 19.5136 13.8747V12.5128C19.514 12.4141 19.4949 12.3164 19.4574 12.2251C19.42 12.1338 19.3649 12.0508 19.2953 11.9809C19.2257 11.9109 19.1429 11.8554 19.0518 11.8175C18.9608 11.7796 18.8631 11.76 18.7644 11.7599Z"
                                      fill="var(--color-quaternary)"></path>
                                  <path
                                      d="M3.6214 0.713562C2.08514 0.713543 0.75 1.86619 0.75 3.37088C0.75 4.87556 2.08514 6.03188 3.6214 6.03188C3.82005 6.03168 4.01049 5.95269 4.15095 5.81223C4.29141 5.67177 4.37041 5.48131 4.37061 5.28267C4.37099 5.184 4.35191 5.08622 4.31444 4.99493C4.27697 4.90365 4.22186 4.82067 4.15226 4.75073C4.08266 4.68078 3.99994 4.62526 3.90885 4.58734C3.81775 4.54942 3.72008 4.52986 3.6214 4.52976C2.81475 4.52976 2.25214 3.97492 2.25214 3.37088C2.25214 2.76683 2.81475 2.21197 3.6214 2.21199H14.963C15.4851 2.21199 15.893 2.61991 15.893 3.14205V5.28267C15.8932 5.48131 15.9722 5.67177 16.1127 5.81223C16.2531 5.95269 16.4436 6.03168 16.6422 6.03188C16.7409 6.03227 16.8387 6.01318 16.93 5.97571C17.0212 5.93825 17.1042 5.88314 17.1742 5.81354C17.2441 5.74394 17.2996 5.66122 17.3376 5.57012C17.3755 5.47903 17.395 5.38134 17.3951 5.28267V3.14205C17.3951 1.8093 16.2957 0.713562 14.963 0.713562H3.6214Z"
                                      fill="var(--color-quaternary)"></path>
                              </svg>deposit</span></button><button
                          className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-none border-none shadow-none  cursor-pointer"
                          type="button"><span
                              className="text-white capitalize border  flex rounded px-3 py-1  flex-col text-[10px]  hover:opacity-100 w-max font-semibold items-center justify-center  bg-bg_HeaderWithdrawBtnBgColor border-withDrawBtn "><svg
                                  xmlns="http://www.w3.org/2000/svg" width="21" height="19"
                                  viewBox="0 0 21 19" fill="none">
                                  <path
                                      d="M3.11825 4.52979C3.01958 4.52988 2.92189 4.54945 2.8308 4.58737C2.7397 4.62528 2.65697 4.68079 2.58737 4.75074C2.51777 4.82068 2.46266 4.90368 2.42519 4.99496C2.38772 5.08624 2.36864 5.18402 2.36902 5.28269C2.36922 5.48134 2.44821 5.67179 2.58868 5.81225C2.72914 5.95271 2.91961 6.03171 3.11825 6.03191H16.1391C16.9517 6.03191 17.5083 6.5801 17.5083 7.19078V8.50099C17.5079 8.59998 17.5272 8.69805 17.5649 8.78958C17.6026 8.8811 17.658 8.96425 17.728 9.03425C17.798 9.10424 17.8811 9.15969 17.9727 9.19739C18.0642 9.23508 18.1623 9.25429 18.2612 9.2539C18.3599 9.2538 18.4576 9.23424 18.5487 9.19632C18.6398 9.1584 18.7225 9.10288 18.7921 9.03293C18.8617 8.96299 18.9168 8.87999 18.9543 8.78871C18.9918 8.69743 19.0108 8.59967 19.0105 8.50099V7.19078C19.0105 5.6859 17.6764 4.52979 16.1391 4.52979H3.11825Z"
                                      fill="var(--color-quaternary)"></path>
                                  <path
                                      d="M16.1575 7.75177C15.0607 7.75177 14.1571 8.65906 14.1571 9.75583V11.2579C14.1571 12.3547 15.0607 13.262 16.1575 13.262H18.2427C19.3395 13.262 20.2468 12.3547 20.2468 11.2579V9.75583C20.2468 8.65906 19.3395 7.75177 18.2427 7.75177H16.1575ZM16.1575 9.25389H18.2427C18.5289 9.25389 18.7447 9.46966 18.7447 9.75583V11.2579C18.7447 11.5441 18.5289 11.7599 18.2427 11.7599H16.1575C15.8713 11.7599 15.6555 11.5441 15.6555 11.2579V9.75583C15.6555 9.46966 15.8713 9.25389 16.1575 9.25389Z"
                                      fill="var(--color-quaternary)"></path>
                                  <path
                                      d="M9.73015 18.4992C9.9288 18.499 10.1193 18.42 10.2597 18.2796C10.4002 18.1391 10.4792 17.9486 10.4794 17.75L10.4794 13.8157C10.4792 13.617 10.4002 13.4266 10.2597 13.2861C10.1193 13.1457 9.9288 13.0667 9.73016 13.0665C9.53151 13.0667 9.34106 13.1457 9.2006 13.2861C9.06013 13.4266 8.98114 13.617 8.98094 13.8157L8.98094 17.75C8.98114 17.9486 9.06013 18.1391 9.2006 18.2796C9.34106 18.42 9.53151 18.499 9.73015 18.4992Z"
                                      fill="var(--color-quaternary)"></path>
                                  <path
                                      d="M9.7302 18.4992C9.82901 18.4991 9.92683 18.4795 10.018 18.4415C10.1092 18.4035 10.192 18.3479 10.2617 18.2778L12.2399 16.2885C12.3801 16.1479 12.4589 15.9574 12.4589 15.7589C12.4589 15.5603 12.3801 15.3698 12.2399 15.2292C12.1702 15.1592 12.0874 15.1037 11.9962 15.0658C11.905 15.0279 11.8072 15.0084 11.7084 15.0084C11.6097 15.0084 11.5119 15.0279 11.4207 15.0658C11.3295 15.1037 11.2466 15.1592 11.177 15.2292L9.19874 17.2185C9.12899 17.2885 9.07376 17.3715 9.03619 17.4628C8.99861 17.5542 8.97945 17.652 8.9798 17.7508C8.98015 17.8495 9.00001 17.9473 9.03823 18.0383C9.07645 18.1294 9.13227 18.212 9.20251 18.2815C9.34285 18.4208 9.53244 18.499 9.7302 18.4992Z"
                                      fill="var(--color-quaternary)"></path>
                                  <path
                                      d="M9.7264 18.4992C9.82495 18.4996 9.92262 18.4806 10.0138 18.4432C10.105 18.4059 10.1879 18.3509 10.2579 18.2814C10.3281 18.212 10.3839 18.1294 10.4222 18.0383C10.4604 17.9473 10.4802 17.8495 10.4806 17.7508C10.4809 17.652 10.4618 17.5542 10.4242 17.4628C10.3866 17.3715 10.3314 17.2885 10.2617 17.2185L8.28341 15.2292C8.21373 15.1592 8.13092 15.1037 8.03971 15.0658C7.94851 15.0279 7.85071 15.0084 7.75195 15.0084C7.65319 15.0084 7.55539 15.0279 7.46419 15.0658C7.37299 15.1037 7.29017 15.1592 7.22049 15.2292C7.07976 15.3693 7.00032 15.5595 6.99961 15.7581C6.9989 15.9566 7.07698 16.1474 7.21671 16.2885L9.19862 18.2778C9.33835 18.4184 9.52812 18.4981 9.7264 18.4992Z"
                                      fill="var(--color-quaternary)"></path>
                                  <path
                                      d="M0.996056 2.62171C0.797411 2.6219 0.606961 2.70089 0.466496 2.84135C0.326031 2.98181 0.247024 3.17227 0.246826 3.37091V13.8747C0.246826 15.3796 1.58089 16.532 3.11823 16.532H5.24776C5.4464 16.5318 5.63686 16.4528 5.77732 16.3123C5.91778 16.1719 5.99678 15.9814 5.99697 15.7828C5.99678 15.5841 5.91778 15.3937 5.77732 15.2532C5.63686 15.1128 5.4464 15.0338 5.24776 15.0336H3.11823C2.30563 15.0336 1.74896 14.4854 1.74896 13.8747V3.37091C1.74886 3.27224 1.7293 3.17456 1.69138 3.08347C1.65346 2.99237 1.59795 2.90965 1.52801 2.84005C1.45807 2.77045 1.37507 2.71533 1.28379 2.67786C1.19251 2.6404 1.09473 2.62132 0.996056 2.62171ZM18.2612 11.7599C18.1622 11.7595 18.0642 11.7787 17.9726 11.8164C17.8811 11.8541 17.798 11.9096 17.728 11.9795C17.658 12.0495 17.6025 12.1327 17.5648 12.2242C17.5271 12.3157 17.5079 12.4138 17.5083 12.5128V13.8747C17.5083 14.4854 16.9517 15.0336 16.1391 15.0336H14.2457C14.0471 15.0338 13.8566 15.1128 13.7162 15.2532C13.5757 15.3937 13.4967 15.5841 13.4965 15.7828C13.4967 15.9814 13.5757 16.1719 13.7162 16.3123C13.8566 16.4528 14.0471 16.5318 14.2457 16.532H16.1391C17.6764 16.532 19.0104 15.3796 19.0104 13.8747V12.5128C19.0108 12.4141 18.9917 12.3164 18.9543 12.2251C18.9168 12.1338 18.8617 12.0508 18.7921 11.9809C18.7225 11.9109 18.6398 11.8554 18.5487 11.8175C18.4576 11.7796 18.3599 11.76 18.2612 11.7599Z"
                                      fill="var(--color-quaternary)"></path>
                                  <path
                                      d="M3.11823 0.713562C1.58197 0.713543 0.246826 1.86619 0.246826 3.37088C0.246826 4.87556 1.58197 6.03188 3.11823 6.03188C3.31687 6.03168 3.50732 5.95269 3.64778 5.81223C3.78824 5.67177 3.86723 5.48131 3.86743 5.28267C3.86782 5.184 3.84873 5.08622 3.81126 4.99494C3.7738 4.90365 3.71869 4.82067 3.64909 4.75073C3.57949 4.68078 3.49677 4.62526 3.40567 4.58734C3.31458 4.54942 3.2169 4.52986 3.11823 4.52976C2.31158 4.52976 1.74896 3.97492 1.74896 3.37088C1.74896 2.76683 2.31158 2.21197 3.11823 2.21199H14.4598C14.9819 2.21199 15.3898 2.61991 15.3898 3.14205V5.28267C15.39 5.48131 15.4691 5.67177 15.6095 5.81223C15.75 5.95269 15.9404 6.03168 16.1391 6.03188C16.2377 6.03227 16.3355 6.01318 16.4268 5.97571C16.5181 5.93825 16.6011 5.88314 16.671 5.81354C16.7409 5.74394 16.7965 5.66122 16.8344 5.57012C16.8723 5.47903 16.8919 5.38134 16.892 5.28267V3.14205C16.892 1.8093 15.7925 0.713562 14.4598 0.713562H3.11823Z"
                                      fill="var(--color-quaternary)"></path>
                              </svg>withdraw</span></button></div>
                  <div className=" w-max hidden items-center justify-center gap-1 rounded-full  lg:flex"
                 >
                      <button
                          className="relative flex rounded-full gap-1 border border-quaternary hover:opacity-100 w-max font-extrabold items-center justify-center pr-4 pl-3 py-2 bg-bg_Secondary"><span
                              className=" w-max text-text_LoginTextColor hidden md:block"><svg
                                  xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                  viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--color-quaternary)"
                                  fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                  <path
                                      d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z">
                                  </path>
                                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                              </svg></span><span
                              className=" text-xxs text-text_LoginTextColor  md:text-text_LoginTextColor  font-normal font-lato md:font-semibold md:text-xs xs:text-xs ">Account</span></button>
                  </div>
                  <div className=" w-max flex items-center justify-center">
                      <div id="mobileSearchIcon"
                          className=" lg:hidden mr-[2px] flex items-center justify-center"><span
                              className="bg-none border-none shadow-none px-1"><svg fill="#fff" className=""
                                  width="20" height="20" viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z">
                                  </path>
                              </svg></span></div>
                      <div className=" flex justify-between items-center gap-x-1 h-max lg:hidden"><a
                              href="deposit/"><button type="button"
                                  className=" leading-normal  transition duration-150 ease-in-out overflow-hidden relative active:scale-95 hidden xxs:flex items-center h-fit justify-center bg-bg_Quaternary rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-text_Primary   text-sm   text-center  cursor-pointer"><span
                                      className="  font-semibold flex flex-row font-lato md:font-normal sm:text-base xs:text-sm"><span>Deposit</span></span><span
                                      className="shimmer"></span></button></a>
                          <button title="Balance" 
                              className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out  rounded-full text-text_Quaternary  pl-3 bg-bg_Secondary flex items-center justify-center pr-1 py-1 xs:py-1 sm:py-2  gap-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)]  cursor-pointer"
                              type="button"><span
                                  className="text-xs sm:text-base font-semibold bg-transparent">₹0</span><svg
                                  xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                  viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--color-quaternary)"
                                  fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                  <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855">
                                  </path>
                              </svg></button>
                      </div>
                  </div>
              </div> */}
              <div className="">
                  <div
                      className="flex w-full overflow-x-auto no-scrollbar bg-bg_Quaternary p-1 items-start md:items-center md:justify-center">
                      <a href="#"><button 
                              className="text-xs cursor-pointer uppercase mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9 border w-max px-3 py-1 text-text_HeaderDeskNavMenuHover md:hidden">
                              <span className="font font-lato text-[12px]">Home</span>
                          </button></a><a href="sports-page/Cricket/"><button
                              className="text-xs cursor-pointer uppercase mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9 border w-max px-3 py-1 text-text_HeaderDeskNavMenu hidden md:block">
                              <span className="font font-lato text-[12px]">Cricket</span>
                          </button></a><a href="sports-page/football/"><button
                              className="text-xs cursor-pointer uppercase mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9 border w-max px-3 py-1 text-text_HeaderDeskNavMenu hidden md:block">
                              <span className="font font-lato text-[12px]">Football</span>
                          </button></a><a href="sports-page/tennis/"><button
                              className="text-xs cursor-pointer uppercase mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9 border w-max px-3 py-1 text-text_HeaderDeskNavMenu hidden md:block">
                              <span className="font font-lato text-[12px]">Tennis</span>
                          </button></a><a href="#"><button 
                              className="text-xs cursor-pointer uppercase border mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9 w-max px-3 py-1 text-text_HeaderDeskNavMenu hidden md:block">
                              <span className="font font-lato text-[12px]">Horse Racing</span>
                          </button></a><a href="#"><button 
                              className="text-xs cursor-pointer uppercase border mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9 w-max px-3 py-1 text-text_HeaderDeskNavMenuHover hidden md:block">
                              <span className="font font-lato text-[12px]">GreyHound Racing</span>
                          </button></a><a href="/sports-page/indian-card-games/"><button
                              className="text-xs cursor-pointer uppercase border mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9 w-max px-3 py-1 text-text_HeaderDeskNavMenuHover">
                              <span className="flex w-full items-center h-full gap-3"><span
                                      className="flex flex-row items-center justify-center"><span
                                          className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg"
                                            width="15"
                                              height="15" x="0" y="0" viewBox="0 0 511.643 511.643"
                                              fill="var(--color-secondary)">
                                              <g>
                                                  <path
                                                      d="M453.209 184.081C373.725 121.725 300.804 41.437 270.565 6.713c-7.795-8.951-21.691-8.951-29.486 0-30.24 34.723-103.16 115.011-182.644 177.368C22.372 212.373 1.267 254.915 1.267 299.99c0 80 66.652 144.853 148.871 144.853 27.807 0 53.101-10.455 71.97-27.539v28.247c0 34.386-24.644 38.65-43.766 54.707-4.599 3.862-1.775 11.384 4.23 11.384h145.994c5.984 0 8.811-7.47 4.262-11.358-18.926-16.176-43.294-19.786-43.294-54.478v-28.503c18.869 17.084 44.163 27.539 71.97 27.539 82.219 0 148.871-64.853 148.871-144.853.001-45.074-21.104-87.616-57.166-115.908z"
                                                      fill="var(--color-iconsColor)" opacity="1"></path>
                                              </g>
                                          </svg></span><span
                                          className="font font-lato text-[12px] ml-[4px]">Aura</span></span></span>
                          </button></a>

                      <button 
                          className="text-xs cursor-pointer uppercase border mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9 w-max px-3 py-1 text-text_HeaderDeskNavMenu">
                          <span className="flex w-full items-center h-full gap-3"><span
                                  className="flex flex-row items-center justify-center"><span
                                      className="md:hidden"><svg width="16" height="16" viewBox="0 0 64 64"
                                          fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M10.2208 25.2081C8.58995 23.849 8.72593 21.3034 10.4923 20.1258L22.5839 12.7529L30.5466 12.458L39.7792 6.91839C46.1332 3.10599 53.757 2.0196 60.923 3.90539C62.9758 10.2502 62.0646 17.1819 58.4418 22.7807L51.1908 33.9869L50.6009 42.2446L42.3433 54.3361C41.4141 55.0795 40.1911 55.3464 39.0367 55.0578L38.8483 55.0107C38.6265 54.9553 38.424 54.8406 38.2623 54.6789L37.9195 54.3361L32.611 45.7836L26.1229 46.6683L21.1093 41.6547L16.6855 36.9361L17.8652 30.153L10.4923 25.4343L10.2208 25.2081ZM52.9603 19.2411C52.9603 23.4759 49.5273 26.9089 45.2925 26.9089C41.0576 26.9089 37.6246 23.4759 37.6246 19.2411C37.6246 15.0062 41.0576 11.5732 45.2925 11.5732C49.5273 11.5732 52.9603 15.0062 52.9603 19.2411ZM17.376 44.2883L2 58.9329L4.01489 61.0484L19.3909 46.4039L17.376 44.2883ZM10.2577 58.9316L21.2972 48.4172L23.3121 50.5327L12.2725 61.0471L10.2577 58.9316ZM13.0396 40.1595L2 50.6739L4.01489 52.7894L15.0545 42.275L13.0396 40.1595Z"
                                              fill="#c10931"></path>
                                      </svg></span><span
                                      className="font font-lato text-[12px] ml-[4px]">Aviator
                                  </span>
                              </span>
                          </span>
                      </button>

                      <a href="#">
                          <button
                            
                              className="text-xs cursor-pointer uppercase border mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9 w-max px-3 py-1 text-text_HeaderDeskNavMenu">
                              <span className="flex w-full items-center h-full gap-3"><span
                                      className="flex flex-row items-center justify-center"><span
                                          className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg"
                                              width="16" height="16" viewBox="0 0 48 48">
                                              <path fill="#333"
                                                  d="M43.8 31.1 25.4 1.4c-.2-.3-.5-.6-.9-.7-.4-.1-.8 0-1.1.2L.8 14.8c-.3.2-.6.5-.7.9-.1.4 0 .8.2 1.1l18.3 29.8c.3.5.8.7 1.3.7.3 0 .5-.1.8-.2l22.6-13.9c.3-.2.6-.5.7-.9.1-.4 0-.8-.2-1.2z">
                                              </path>
                                              <path fill="#d2d2d2" d="M8.7 6.5h26.6v35H8.7z"
                                                  transform="rotate(-31.647 22.023 23.998)"></path>
                                              <path fill="#333"
                                                  d="M46.9 38.2 37.4 4.6c-.2-.8-1.1-1.3-1.9-1L9.9 10.8c-.4.1-.7.4-.9.7s-.2.8-.1 1.1l9.5 33.6c.2.7.8 1.1 1.4 1.1.1 0 .3 0 .4-.1L45.9 40c.4-.1.7-.4.9-.7s.2-.7.1-1.1z">
                                              </path>
                                              <path fill="#333"
                                                  d="M8.9 12.6c-.1-.4-.1-.8.1-1.1l-2.2 1.3c0 .1 0 .3.1.4l6.2 21.7 3.8 6.2-8-28.5zM26.6 6.1l-1.1-1.8-8.9 2.5-6.2 3.9z"
                                                  opacity="0.15"></path>
                                              <path fill="#e9e9e9" d="M14.6 7.9h26.6v35H14.6z"
                                                  transform="rotate(-15.825 27.896 25.408)"></path>
                                              <path fill="#333"
                                                  d="M46.5 9.4H19.9c-.8 0-1.5.7-1.5 1.5v35c0 .8.7 1.5 1.5 1.5h26.6c.8 0 1.5-.7 1.5-1.5v-35c0-.8-.7-1.5-1.5-1.5z">
                                              </path>
                                              <path fill="#fff" d="M19.9 10.9h26.6v35H19.9z"></path>
                                              <path fill="#333"
                                                  d="m37.2 9.4-.6-2h-9.2l-7.1 2zM18.4 10.9c0-.4.2-.8.5-1.1l-2.4.7v23l2 7.1V10.9z"
                                                  opacity="0.15"></path>
                                              <path fill="#333"
                                                  d="M36.1 21.6c-1.1 0-2.1.4-2.9 1-.8-.6-1.8-1-2.9-1-2.6 0-4.8 2.1-4.8 4.8 0 4.4 6.2 8.2 6.9 8.6l.8.4.8-.4c.7-.4 6.9-4.2 6.9-8.6-.1-2.7-2.2-4.8-4.8-4.8z">
                                              </path>
                                              <path fill="#e44b4b"
                                                  d="M39.3 26.4c0 3.7-6.2 7.3-6.2 7.3S27 30.1 27 26.4c0-1.8 1.5-3.3 3.3-3.3 1.3 0 2.3.7 2.9 1.8.5-1 1.6-1.8 2.9-1.8 1.8 0 3.2 1.4 3.2 3.3z">
                                              </path>
                                              <path fill="#333"
                                                  d="M24.5 12.9h-.9l-1.7 5h.9l.5-1.5h1.5l.5 1.5h1l-1.8-5zm.1 2.8h-1l.4-1.2c0-.1.1-.2.1-.4 0 .1.1.2.1.4l.4 1.2zM42.7 38.8h-.9l-1.7 5h.9l.5-1.5H43l.5 1.5h1l-1.8-5zm.1 2.8h-1l.4-1.2c0-.1.1-.2.1-.4 0 .1.1.2.1.4l.4 1.2z">
                                              </path>
                                          </svg></span><span className="font font-lato text-[12px] ml-[4px]">
                                          Live Casino
                                      </span></span></span>
                          </button></a><a href="#">
                          <button
                             
                              className="text-xs cursor-pointer uppercase border mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9 w-max px-3 py-1 text-text_HeaderDeskNavMenu">
                              <span className="flex w-full items-center h-full gap-3"><span
                                      className="flex flex-row items-center justify-center"><span
                                          className="md:hidden"><svg width="16" height="16"
                                              viewBox="0 0 17 16" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                                              <g clip-path="url(#clip0_1245_1520)">
                                                  <path
                                                      d="M13.5056 3H5.50562C4.13062 3 3.00562 4.125 3.00562 5.5V13.5C3.00562 14.875 4.13062 16 5.50562 16H13.5056C14.8806 16 16.0056 14.875 16.0056 13.5V5.5C16.0056 4.125 14.8806 3 13.5056 3ZM6.50562 14C5.67762 14 5.00562 13.328 5.00562 12.5C5.00562 11.672 5.67762 11 6.50562 11C7.33362 11 8.00562 11.672 8.00562 12.5C8.00562 13.328 7.33362 14 6.50562 14ZM6.50562 8C5.67762 8 5.00562 7.328 5.00562 6.5C5.00562 5.672 5.67762 5 6.50562 5C7.33362 5 8.00562 5.672 8.00562 6.5C8.00562 7.328 7.33362 8 6.50562 8ZM9.50562 11C8.67762 11 8.00562 10.328 8.00562 9.5C8.00562 8.672 8.67762 8 9.50562 8C10.3336 8 11.0056 8.672 11.0056 9.5C11.0056 10.328 10.3336 11 9.50562 11ZM12.5056 14C11.6776 14 11.0056 13.328 11.0056 12.5C11.0056 11.672 11.6776 11 12.5056 11C13.3336 11 14.0056 11.672 14.0056 12.5C14.0056 13.328 13.3336 14 12.5056 14ZM12.5056 8C11.6776 8 11.0056 7.328 11.0056 6.5C11.0056 5.672 11.6776 5 12.5056 5C13.3336 5 14.0056 5.672 14.0056 6.5C14.0056 7.328 13.3336 8 12.5056 8ZM12.9546 2C12.7216 0.862 11.7096 0 10.5056 0H2.50562C1.13062 0 0.00561523 1.125 0.00561523 2.5V10.5C0.00561523 11.704 0.867615 12.716 2.00562 12.949V3C2.00562 2.45 2.45562 2 3.00562 2H12.9546Z"
                                                      fill="#E84C4D"></path>
                                              </g>
                                              <defs>
                                                  <clipPath id="clip0_1245_1520">
                                                      <rect width="16" height="16" fill="white"
                                                          transform="translate(0.00561523)"></rect>
                                                  </clipPath>
                                              </defs>
                                          </svg></span><span
                                          className="font font-lato text-[12px] ml-[4px]">Slots</span></span></span>
                          </button></a><a href="#"><button
                              className="text-xs cursor-pointer uppercase border mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9 w-max px-3 py-1 text-text_HeaderDeskNavMenu">
                              <span className="flex w-full items-center h-full gap-3"><span
                                      className="flex flex-row items-center justify-center"><span
                                          className="md:hidden"><svg width="16" height="16"
                                              viewBox="0 0 64 64" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M10.2208 25.2081C8.58995 23.849 8.72593 21.3034 10.4923 20.1258L22.5839 12.7529L30.5466 12.458L39.7792 6.91839C46.1332 3.10599 53.757 2.0196 60.923 3.90539C62.9758 10.2502 62.0646 17.1819 58.4418 22.7807L51.1908 33.9869L50.6009 42.2446L42.3433 54.3361C41.4141 55.0795 40.1911 55.3464 39.0367 55.0578L38.8483 55.0107C38.6265 54.9553 38.424 54.8406 38.2623 54.6789L37.9195 54.3361L32.611 45.7836L26.1229 46.6683L21.1093 41.6547L16.6855 36.9361L17.8652 30.153L10.4923 25.4343L10.2208 25.2081ZM52.9603 19.2411C52.9603 23.4759 49.5273 26.9089 45.2925 26.9089C41.0576 26.9089 37.6246 23.4759 37.6246 19.2411C37.6246 15.0062 41.0576 11.5732 45.2925 11.5732C49.5273 11.5732 52.9603 15.0062 52.9603 19.2411ZM17.376 44.2883L2 58.9329L4.01489 61.0484L19.3909 46.4039L17.376 44.2883ZM10.2577 58.9316L21.2972 48.4172L23.3121 50.5327L12.2725 61.0471L10.2577 58.9316ZM13.0396 40.1595L2 50.6739L4.01489 52.7894L15.0545 42.275L13.0396 40.1595Z"
                                                  fill="#c10931"></path>
                                          </svg></span><span
                                          className="font font-lato text-[12px] ml-[4px]">crash-games</span></span></span>
                          </button></a><a href="#"><button
                             
                              className="text-xs cursor-pointer uppercase border mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9 w-max px-3 py-1 text-text_HeaderDeskNavMenu">
                              <span className="flex w-full items-center h-full gap-3"><span
                                      className="flex flex-row items-center justify-center"><span
                                          className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg"
                                              width="18" height="18" viewBox="0 0 18 18" fill="#C10B32">
                                              <path
                                                  d="M14.0677 6.78931C13.764 6.78931 13.5361 7.03169 13.5361 7.31645C13.5361 7.60076 13.7636 7.8436 14.0677 7.8436C14.3589 7.8436 14.5949 7.60758 14.5949 7.31645C14.5949 7.02533 14.3589 6.78931 14.0677 6.78931Z"
                                                  fill="#C10B32"></path>
                                              <path
                                                  d="M17.9927 10.608C17.3779 6.60243 15.2538 3.55168 11.2754 2.78131C11.0004 2.24463 10.49 1.45676 9.65215 0.856723C8.16433 -0.208889 6.37751 -0.190158 4.62924 0.419718C4.10434 0.602814 4.17347 1.3327 4.69046 1.43694C5.934 1.71661 6.45616 2.33934 6.75814 2.88185C5.69534 3.11886 5.04765 3.40974 4.30441 3.90093C0.575223 6.36261 -0.490635 9.70072 0.196696 12.5027C0.196766 12.503 0.196871 12.5032 0.196942 12.5035C1.0026 15.7845 4.37097 17.8389 4.51397 17.9248C4.59427 17.973 4.68645 18 4.78974 18C4.93744 18 5.86487 17.9688 6.50863 17.2105C7.07759 16.5404 7.23953 15.5428 6.98981 14.2455C6.92655 13.9165 6.57143 13.7262 6.25939 13.8628C6.25067 13.8666 5.37593 14.2436 4.30919 14.2036C3.02762 14.1553 2.02007 13.5383 1.31067 12.3683C1.49369 12.0502 1.87731 11.4606 2.45169 10.9593C3.4991 10.0452 4.69267 9.83606 5.9993 10.3378C6.11035 10.3818 7.85978 11.0678 10.1471 11.5235C12.4952 11.9913 15.2903 12.201 17.5028 11.2536C17.6866 11.1748 17.8174 11.1289 17.9163 10.9739C17.9857 10.8651 18.0128 10.7353 17.9927 10.608ZM6.03718 15.0466C6.08635 15.6984 5.97666 16.2013 5.71235 16.5193C5.45967 16.8233 5.11084 16.9106 4.92409 16.9357C4.5664 16.699 3.55133 15.9814 2.6543 14.9149C3.72662 15.3561 4.92672 15.3477 6.03718 15.0466ZM11.6569 10.7071C11.2047 9.8608 10.4759 8.15252 10.9224 6.57776C11.1772 5.67946 11.7958 4.93351 12.7628 4.35751C15.1666 5.47429 16.3896 7.74209 16.8815 10.3682C15.2907 10.978 13.3386 10.9364 11.6569 10.7071ZM9.94338 2.61662C9.14714 2.57122 8.42337 2.61937 7.84579 2.69232C7.6247 2.23131 7.27194 1.58573 6.51696 1.07155C8.28589 0.925534 9.34609 1.7968 9.94338 2.61662ZM6.38594 9.35699C4.52834 8.61395 2.57909 9.05591 1.06923 10.875C1.08424 9.29942 1.72061 6.8698 4.88547 4.78067C5.26168 4.53203 5.57698 4.36275 5.90768 4.23191C6.69728 3.91956 7.68339 3.74644 8.5268 3.68305C9.53808 3.60882 10.5715 3.67134 11.5376 3.92118C9.44157 5.57547 9.32665 8.0427 10.3851 10.4933C8.16001 10.0519 6.42031 9.37062 6.38594 9.35699Z"
                                                  fill="#C10B32"></path>
                                          </svg></span><span
                                          className="font font-lato text-[12px] ml-[4px]">fishing-games</span></span></span>
                          </button></a>
                  </div>
              </div>
          </div>
      </div>
  </header>
</div>
<Modal open={isModalOpen} footer={null} onCancel={()=>setIsModalOpen(false)}
  
  >
  
        <LoginModal/>
      </Modal>

      <Drawer title="Demo" onClose={onClose} open={openDrawer}>
       <AccountDrawer/>
      </Drawer>
</div>
  )
};

export default Header;
