import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Accordian from '../../common/Accordian';
import LeftDeskSideBar from '../../common/LeftDeskSidebar';
import InPlayEvents from '../../common/InPlayEvents';
import UpcomingEvents from '../../common/UpComingEvents';
import RightDeskSidebar from '../../common/RightDeskSidebar.tsx';
import { BiSolidCricketBall } from 'react-icons/bi';
import { IoTennisball } from 'react-icons/io5';
import { useTennisFixture } from '../../../Framework/tennisFixture';


const Tennis: React.FC = () => {

   const {data,isLoading,isError} = useTennisFixture();
    
  
    const playingEvents = (data||[]).filter((item:any)=>item?.inPlay === "True");
    const upComingScheduleEvents = (data||[]).filter((item:any)=>(item?.inPlay === "False"));
    const uiLabel = {
        sidebarIcon:<IoTennisball fill="var(--color-quaternary)" size={20}/>,
        sportsName: "Tennis",
      icon: <IoTennisball fill="#7FBA42" size={20}/>,
    
      }

      const inPlayEvents =[{
        sportsName:"Tennis",
        sportsId:"tennis",

        icon: <IoTennisball fill="#7FBA42" size={20}/>,
        eventSchedule:playingEvents,
      }]

      const upComingEvents =[{
        sportsName:"Tennis",
        sportsId:"tennis",
        icon: <IoTennisball fill="#7FBA42" size={20}/>,
        eventSchedule:upComingScheduleEvents,
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

export default Tennis;
