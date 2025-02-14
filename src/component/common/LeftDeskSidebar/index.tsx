import React from 'react'
import { IoStarOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { BiSolidCricketBall } from "react-icons/bi";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Color } from 'antd/es/color-picker';



interface Props{
  label: any
}
const LeftDeskSideBar: React.FC<Props> = ({label}) => {
       const Navigate = useNavigate();
  const siderbar = [{
    title: "Favourites",
    icon: <IoStarOutline stroke="#DFC548" size={20}/>,
   bg:"bg-bg_Quaternary",
   color:"#0000"
  },
{
  title: "Sports",
    icon: <FaHome size={20}/>,
   bg:"bg-bg_Quaternary",
   color:"#000",
  route:'/',

},
{
  title: label?.sportsName,
    icon: label?.sidebarIcon,
    bg:"bg-bg_Secondary",
   color:"text-text_Quaternary"
},
{
  title: "Previous",
    icon: <FaChevronCircleLeft fill="var(--color-secondary)" size={20}/>,
    bg:"bg-bg_SideBarDeskBg",
   color:"text-text_Secondary",
   route:'/'
   
}
]

  const matches = [{
    league:"Twenty20 Big Bash"
  },
  {
    league:"Test Matches"
  },
  {
    league:"Women's Test Matches"
  },
  {
    league:"One day Internationals"
  },
  {
    league:"Pakistan Champions T20 Cup"
  },
  {
    league:"Gulf Cricket T20I"
  },
  {
    league:"Lanka T10 Super League"
  },
  {
    league:"Women's One day Internationals"
  },
]
  return (
    <div title="Menu" id="leftDeskSideBar"
            className="hidden lg:flex p-2 overflow-y-auto z-10 w-[20%] h-[calc(100dvh-120px)] sticky top-[54px] lg:top-[110px]">
              <div className='flex flex-col items-start border rounded-lg border-ternary3 overflow-x-hidden no-scrollbar'>
              <ul
                className="flex bg-bg_Quaternary flex-col w-full border-b border-ternary2">
               
                  {
                    (siderbar||[]).map((item,i)=>{
                      return(
<li
                        className={`text-sm cursor-pointer py-4 text-nowrap  whitespace-nowrap autoAnimate font-semibold w-full border-b ${item?.bg} ${i==0||i==1 ? ' hover:bg-bg_MenuHoverColor':''}  hover:scale-[102%]` }
                         key={`leftsidebar${i}`}
                         onClick={()=>{
                          if(item?.route){
                            Navigate(item?.route);
                          }
                         }}
                        >
                        <span className="flex w-full items-center h-full px-6 justify-start gap-3">
                          {item?.icon}
                         <span
                                className={`font-medium text-start ${item?.color} `}>{item?.title}</span></span>
                    </li>
                      )
                    })
                  }
                    
                   
                  
               
            </ul>

            <ul
                className="flex  bg-bg_Quaternary  flex-col w-full ">
              
              
              {
                matches.map((item,i)=>{
                  return(
<li
                        className="text-sm cursor-pointer py-4 text-nowrap  whitespace-nowrap autoAnimate font-semibold w-full border-b  hover:bg-bg_MenuHoverColor hover:scale-[102%] ">
                        <span className="flex w-full items-center h-full pl-6 pr-2 justify-between gap-3"><span
                                className=" font-medium text-start text-text_Ternary  text-wrap">{item?.league}</span><span className="opacity-50">
                                  <FaChevronRight size={16}  stroke="var(--color-secondary)" />
                                </span></span>
                    </li>
                  )
                })
              }
                
    </ul>
  
              </div>
           
        </div>
  )
}

export default LeftDeskSideBar