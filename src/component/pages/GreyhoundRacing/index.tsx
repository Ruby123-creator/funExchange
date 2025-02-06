import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductById } from '../../../Framework/product';
import { useCart } from '../../../context/cart.context';
import Accordian from '../../common/Accordian';
import LeftDeskSideBar from '../../common/LeftDeskSidebar';
import InPlayEvents from '../../common/InPlayEvents';
import UpcomingEvents from '../../common/UpComingEvents';
import RightDeskSidebar from '../../common/RightDeskSidebar.tsx';
import { BiFootball, BiSolidCricketBall } from 'react-icons/bi';
import { GiHound } from 'react-icons/gi';


const GreyHoundRacing: React.FC = () => {
    const uiLabel = {
        sidebarIcon:<GiHound fill="var(--color-quaternary)" size={20}/>,
        sportsName: "Greyhound Racing",
      icon: <GiHound fill="#305765" size={20}/>,
    
      }
 const inPlayEvents =[{
      sportsName:"Greyhound Racing",
      icon: <GiHound fill="#305765" size={20}/>,
      eventSchedule:[
        {
         "gameId": "596854126",
         "marketId": "4.596854126",
         "eid": "4",
         "eventName": "Sri Lanka v Australia\u00a0/\u00a029/01/2025 10:00:00",
         "inPlay": "False",
         "tv": "False",
         "back1": "410",
         "lay1": "500",
         "back11": "3.7",
         "lay11": "3.75",
         "back12": "1.37",
         "lay12": "1.38",
         "m1": "False",
         "f": "False",
         "vir": 10
        }
       ],
    }]

    const upComingEvents =[{
      sportsName:"Greyhound Racing",
      icon: <GiHound fill="#305765" size={20}/>,
      eventSchedule:[
        {
         "gameId": "596854126",
         "marketId": "4.596854126",
         "eid": "4",
         "eventName": "Sri Lanka v Australia\u00a0/\u00a029/01/2025 10:00:00",
         "inPlay": "False",
         "tv": "False",
         "back1": "410",
         "lay1": "500",
         "back11": "3.7",
         "lay11": "3.75",
         "back12": "1.37",
         "lay12": "1.38",
         "m1": "False",
         "f": "False",
         "vir": 10
        }
       ],
    }]
  return (
    <div className="flex flex-col  transition-all lg:pt-[110px] ease-in-out duration-100 pt-0">
    <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <LeftDeskSideBar label={uiLabel}/>
        <div className=' flex items-center flex-col w-[50%]'>
        <InPlayEvents events={inPlayEvents}/>
        <UpcomingEvents events={upComingEvents}/>
        <div className="w-full md:mt-[0px] lg:overflow-auto"
                        style={{minHeight: "calc(-110px + 100dvh)"}}>
                     
                          <Accordian/>
                        </div>
        </div>
       
        <RightDeskSidebar/>
   
                    </div>
       
    </div>

  )
};

export default GreyHoundRacing;
