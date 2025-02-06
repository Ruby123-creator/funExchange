import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductById } from '../../../Framework/product';
import { useCart } from '../../../context/cart.context';
import Accordian from '../../common/Accordian';
import LeftDeskSideBar from '../../common/LeftDeskSidebar';
import InPlayEvents from '../../common/InPlayEvents';
import UpcomingEvents from '../../common/UpComingEvents';
import RightDeskSidebar from '../../common/RightDeskSidebar.tsx';
import { BiSolidCricketBall } from 'react-icons/bi';
import { GiHorseHead } from 'react-icons/gi';
import { useHorseRacingFixture } from '../../../Framework/horseRacing';
import RacingFixture from '../../common/RacingFixture';


const HorseRacing: React.FC = () => {

  const {data,isLoading,isError} = useHorseRacingFixture();
  

    const uiLabel = {
        sidebarIcon:<GiHorseHead fill="var(--color-quaternary)" size={20}/>,
        sportsName: "Horse Racing",
      icon: <GiHorseHead fill="#864D44" size={20}/>,
    
      }
    
  return (
    <div className="flex flex-col  transition-all lg:pt-[110px] ease-in-out duration-100 pt-0">
    <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <LeftDeskSideBar label={uiLabel}/>
        <div className=' flex items-center flex-col w-[50%]'>
          <RacingFixture data={data}/>
       
       
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

export default HorseRacing;
