import React, { useState } from 'react';

import Accordian from '../../common/Accordian';
import LeftDeskSideBar from '../../common/LeftDeskSidebar';
import InPlayEvents from '../../common/InPlayEvents';
import UpcomingEvents from '../../common/UpComingEvents';
import RightDeskSidebar from '../../common/RightDeskSidebar.tsx';
import { BiFootball, BiSolidCricketBall } from 'react-icons/bi';
import { GiHound } from 'react-icons/gi';
import { useGreyhoundRacingFixture } from '../../../Framework/greyHound';
import RacingFixture from '../../common/RacingFixture';


const GreyHoundRacing: React.FC = () => {
    const {data,isLoading,isError} = useGreyhoundRacingFixture();
  
    const uiLabel = {
        sidebarIcon:<GiHound fill="var(--color-quaternary)" size={20}/>,
        sportsName: "Greyhound Racing",
      icon: <GiHound fill="#305765" size={20}/>,
    
      }

  return (
    <div className="flex flex-col  transition-all lg:pt-[110px] ease-in-out duration-100 pt-0">
    <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <LeftDeskSideBar label={uiLabel}/>
        <div className=' flex items-center flex-col w-[50%]'>
        <RacingFixture data={data} sportsId="greyhound"/>
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
