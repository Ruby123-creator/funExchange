import React from 'react'
import { BiSolidCricketBall } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { BiFootball } from "react-icons/bi";
import { IoTennisball } from "react-icons/io5";
import { GiHorseHead } from "react-icons/gi";
import { LiaHorseHeadSolid } from "react-icons/lia";
import { GiHound } from "react-icons/gi";

import { GiCardKingDiamonds } from "react-icons/gi";
import { IoIosJet } from "react-icons/io";
import { useUI } from '../../../context/ui.context';

const SidebarComp: React.FC = () => {
    const Navigate = useNavigate();
    const {isLogin,setLoginModal} = useUI();
    const siderbar = [
 
  {
    title: "Cricket",
      icon: <BiSolidCricketBall fill="#8B191B" size={20}/>,
     routing: "/sports-page/Cricket"
  },
  {
    title: "Football",
      icon: <BiFootball  size={20}/>,
   routing: "/sports-page/Football"
  },
  {
    title: "Tennis",
      icon: <IoTennisball fill="#7FBA42" size={20}/>,
     routing: "/sports-page/Tennis"
  },
  {
    title: "Horse Racing",
      icon: <GiHorseHead fill="#864D44" size={20}/>,
    routing: "/sports-page/Horse-racing"
  },
  {
    title: "Greyhound Racing",
      icon: <GiHound fill="#305765" size={20}/>,
    routing: "/sports-page/Greyhound-Racing"
  },
  {
    title: "Indian Card Games",
      icon: <GiCardKingDiamonds fill="#40424F" size={20}/>,
      routing: "/sports-page/indian-card-games"
  },
  {
    title: "Live Casino",
      icon: <GiCardKingDiamonds fill="#40424F" size={20}/>,
     routing: "/casino-lobby/casino"
  },
  {
    title: "Aviator",
      icon: <IoIosJet fill="#c10931" size={20}/>,
       routing: "/aviator"
  },
  {
    title: "Slot Games",
      icon: <IoIosJet fill="#E84C4D" size={20}/>,
routing: "/casino-lobby/slot-games"
  },
 
  ]
  return (
    <div title="Menu" id="leftDeskSideBar"
    className="hidden lg:flex p-2 overflow-y-auto z-10 w-[20%] h-[calc(100dvh-120px)] sticky top-[54px] lg:top-[110px]">
    <ul
        className="flex border rounded-lg border-ternary3 bg-bg_Quaternary overflow-x-hidden flex-col w-full">
        {
            siderbar.map((item,i)=>{
                 return(
                    <li
 className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b hover:bg-bg_MenuHoverColor hover:scale-[102%]">
 <span className="flex w-full items-center h-full px-6 justify-start gap-3"
 onClick={()=>{
  if(isLogin){
    Navigate(item?.routing);
  }
  else{
  setLoginModal(true);
  }

}}
     >
       {item?.icon}
       <span className="font-medium text-start text-text_Ternary">{item?.title}</span></span>
</li>
                 )
            })
 
        }
       
       
      

      

      

       
       
        
      
       
       
       
    </ul>
</div>
  )
}

export default SidebarComp