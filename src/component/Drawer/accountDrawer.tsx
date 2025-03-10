import { title } from 'process';
import React from 'react'
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CiBank } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

import { GoDownload } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { TbStars } from "react-icons/tb";
import { CgSpaceBetween } from "react-icons/cg";
import { GoProjectRoadmap } from "react-icons/go";
import { GrDocumentTransfer } from "react-icons/gr";
import { LuTimerReset } from "react-icons/lu";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineRule } from "react-icons/md";
import { FaFacebook, FaRegHand } from "react-icons/fa6";
import { IoIosCheckmarkCircleOutline, IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { FiSmartphone } from "react-icons/fi";

import { MdOutlinePolicy } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { FaTelegramPlane } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import {useNavigate } from 'react-router-dom';
import { useAdminDetails } from '../../Framework/login';
import { useUI } from '../../context/ui.context';
import { logOut } from '../../Framework/utils/constant';

interface Props{
    openDrawer:any
}
const drawerElement = [
    {
    title:"Help & Support",
    id:1,
    items:[
        {
        title:"Chat With Us",
        icon: <IoChatboxEllipsesOutline stroke="var(--color-iconsColor)" size={20}/>,
        id:11,
        route:"/"
    },
    // {
    //     title:"Download APK",
    //     icon: <GoDownload stroke="var(--color-iconsColor)" size={20}/>,
    //     id:12,
    //     route:"/"
    // },
]
},

{
    title:"Statements",
    id:2,
    items:[
        {
        title:"Transactions",
        icon: <GrTransaction stroke="var(--color-iconsColor)" size={20}/>,
        id:21,
        route:"/transactions"
    },
    {
        title:"Open Bets",
        icon: <TbStars stroke="var(--color-iconsColor)" size={20}/>,
        id:22,
        route:"/open-bets"
    },
    {
        title:"Declare Bets",
        icon: <TbStars stroke="var(--color-iconsColor)" size={20}/>,
        id:22,
        route:"/declare-bets"
    },
    // {
    //     title:"Betting Profit & Loss",
    //     icon: <CgSpaceBetween stroke="var(--color-iconsColor)" size={20}/>,
    //     id:23,
    //     route:"/betting-profit-loss"
    // },
    {
        title:"Account Statement",
        icon: <GoProjectRoadmap stroke="var(--color-iconsColor)" size={20}/>,
        id:24,
        route:"/account-statement"
    },
    {
        title:"Transfer Statement",
        icon: <GrDocumentTransfer stroke="var(--color-iconsColor)" size={20}/>,
        id:25,
        route:"/transfer-statement"
    },
]
},
// {
//     title:"Account Settings",
//     id:3,
//     items:[
//     //     {
//     //     title:"Time Settings",
//     //     icon: <LuTimerReset stroke="var(--color-iconsColor)" size={20}/>,
//     //     id:31,
//     //     route:"/time-setting"
//     // },
//     {
//         title:"Settings",
//         icon: <AiOutlineSetting stroke="var(--color-iconsColor)" size={20}/>,
//         id:32,
//         route:"/settings"
//     },
// ]
// },
// {
//     title:"Legal & Compliance",
//     id:4,
//     items:[
//         {
//         title:"Rules & Regulations",
//         icon: <MdOutlineRule stroke="var(--color-iconsColor)" size={20}/>,
//         id:41,
//         route:"/rules-regulations"
//     },
//     {
//         title:"Exclusion Policy",
//         icon: <FaRegHand stroke="var(--color-iconsColor)" size={20}/>,
//         id:42,
//         route:"/exclusion-policy"
//     },
//     {
//         title:"Responsible Gambling",
//         icon: <IoIosCheckmarkCircleOutline stroke="var(--color-iconsColor)" size={20}/>,
//         id:43,
//         route:"/responsible-gambling"
//     },
//     {
//         title:"Privacy Policy",
//         icon: <MdOutlinePolicy stroke="var(--color-iconsColor)" size={20}/>,
//         id:44,
//         route:"/privacy-policy"
//     },
// ]
// },
{
    title:"Account Actions",
    id:5,
    items:[
        {
        title:"Change Password",
        icon: <RiLockPasswordLine stroke="var(--color-iconsColor)" size={20}/>,
        id:51,
        route:"/change-password"
    },
    {
        title:"Sign Out",
        icon: <CiLogout stroke="var(--color-iconsColor)" size={20}/>,
        id:52,
        route:"/"
    },
]
},
]
  const socialLinks = [{
    title:"",
    icon: <FaTelegramPlane size={25} fill="var(--color-quaternary)" />
  },
  {
    title:"",
    icon: <IoLogoWhatsapp size={25} fill="var(--color-quaternary)"/>
  },
  {
    title:"",
    icon: <IoIosMail size={30} fill="var(--color-quaternary)"/>
  },
  {
    title:"",
    icon: <FaFacebook size={25} fill="var(--color-quaternary)"/>
  },
  {
    title:"",
    icon: <BsInstagram size={25} fill="var(--color-quaternary)"/>
  },
]
const AccountDrawer : React.FC<Props> = ({openDrawer}) => {
    const Navigate = useNavigate();
    const {userData} = useUI();
  return (
    <div
                className="fixed transition-all ease-in-out openDrawerFromRight origin-left top-0 right-0 z-50 w-[70%] max-w-sm h-full  overflow-y-auto bg-bg_Quaternary shadow-lg "
                onClick={(e) => {
                    e.stopPropagation();
                    openDrawer(false)}} 
                >
                <ul className=" overflow-y-auto h-max divide-y">
                    <li className="px-3 py-2 flex items-center justify-between">
                        <div className="flex items-center justify-start gap-x-1.5"><span>
                           <FiSmartphone stroke="var(--color-iconsColor)" size={20}/> 
                           </span><span
                                className="font-lato-bold font-semibold text-sm xs:text-base text-text_Ternary ">{userData?.UserName ? userData?.UserName : "DEMO"}</span>
                        </div>
                       <div className='cursor-pointer' onClick={()=>openDrawer(false)}>
                        <IoCloseOutline size={20}/>
                       </div>
                    </li>
                    <li className="px-3 py-2  flex items-start justify-start flex-col gap-2">
                        <div className="flex items-center justify-start gap-2.5"><span>
                            <CiBank size={20} fill="var(--color-iconsColor)"/>
                            </span><span
                                className="font-lato-bold font-semibold text-sm xs:text-base text-text_Ternary ">Balance
                                Information</span></div>
                        <div className=" grid grid-cols-2 gap-0.5 w-full">
                            <div
                                className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1 col-span-2">
                                <span className="uppercase font-normal text-xxs">Balance</span><span
                                    className=" font-lato text-sm font-medium text-text_Success">₹ {(userData?.Balance||0).toFixed(2)}</span>
                            </div>
                            <div
                                className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1 col-span-1">
                                <span className="uppercase font-normal text-xxs">Free Cash</span><span
                                    className=" font-lato text-sm font-medium text-text_Ternary ">₹ 0.00</span>
                            </div>
                            <div
                                className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1 col-span-1">
                                <span className="uppercase font-normal text-xxs">Net Exposure</span><span
                                    className=" font-lato text-sm font-medium text-text_Danger">₹ {((userData?.Exposure||0)>0 ? 0 : (userData?.Exposure||0)).toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="flex col-span-2 items-center justify-center  w-full ">
                            <div id="deposit_withdraw_btn" className="flex items-center justify-center w-full gap-1"><button
                                    className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out  flex bg-none border-none shadow-none w-full cursor-pointer"
                                    type="button"
                                    onClick={()=>{
                                        Navigate('/deposit');
                                        openDrawer(false);
                                    }}
                                    ><span
                                        className="text-text_Quaternary capitalize border  flex rounded px-3 py-1 flex-col text-[10px]  hover:opacity-100 w-full font-semibold items-center justify-center  bg-bg_HomeDepositBtnBgColor border-depositBtn ">
                                            <img src="/icons/deposit.svg" alt="My Icon" width={20} height={20} />
                                           
                                            deposit</span></button><button
                                            onClick={()=>{Navigate('/withdraw')
                                                openDrawer(false);
                                            }}
                                    className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out  flex bg-none border-none shadow-none    w-full  cursor-pointer"
                                    type="button"><span
                                        className="text-text_Quaternary capitalize border  flex rounded px-3 py-1 flex-col text-[10px]  hover:opacity-100 w-full font-semibold items-center justify-center  bg-bg_HomeWithdrawBtnBgColor border-withDrawBtn ">
                                          <img src="/icons/withdraw.svg" alt="My Icon" width={20} height={20} />
                                           withdraw</span></button></div>
                        </div>
                    </li>
                    <div className="flex flex-wrap p-2 w-full gap-2 items-center justify-center font-roboto"></div>
                   
                   
                   {
                    (drawerElement||[]).map((item,i)=>{
                        return(
<li className="divide-y flex items-start justify-start flex-col"><span
                            className="font-lato-bold font-semibold px-3 py-1 w-full bg-bg_Ternary8 text-xs xs:text-sm text-text_Ternary ">{item?.title}</span>
                        <div className="divide-y pl-5 flex items-start justify-start w-full flex-col">
                          {
                            (item?.items||[]).map((val)=>{
                                return(<div className="w-full">
                                    <div
                                        className="flex transition-all px-0.5 rounded-sm ease-in-out duration-150 hover:bg-bg_Ternary6  active:scale-[99%] items-center justify-start gap-3 w-full py-2 cursor-pointer" onClick={()=>{
                                            if(val?.title === "Sign Out"){
                                                logOut(userData?.UserName);

                                            }
                                            // Navigate(val?.route)
                                            // openDrawer(false);
                                            }}>
                                        <span className="w-4 h-auto xs:w-5 text-text_Primary">
                                           {val?.icon}
                                           </span><span className="font-medium text-sm xs:text-base">{val?.title}</span>
                                    </div>
                                </div>)
                            })
                          }
                            
                           
                        </div>
                    </li>
                        )
                    })
                   } 
                   
                    <li className=" px-3 py-2"><span
                            className="flex text-center text-text_Primary text-sm xs:text-base font-medium">Register online
                            and play online</span></li>
                    <li className="p-1">
                        <div className="flex flex-col gap-1 p-3 items-center bg-bg_contactUsCard rounded"><span
                                className="text-text_Quaternary font-semibold">Contact Us</span>
                            <div className="flex w-full items-center justify-center gap-1 ">
                                {
                                    socialLinks.map((item:any,i)=>{
                                     return <a title="whatsapp"
                                     href="https://wa.me/0000000000?text=Hello%20there!" target="_blank"
                                     className="flex items-center justify-center gap-1 w-10 h-10 ">
                                       {item?.icon}
                                       </a>
                                    })
                                }
                               
                                    </div>
                        </div>
                    </li>
                </ul>
            </div>
  )
}

export default AccountDrawer