import React, { useState } from 'react';

import Accordian from '../../common/Accordian';
import LeftDeskSideBar from '../../common/LeftDeskSidebar';
import InPlayEvents from '../../common/InPlayEvents';
import UpcomingEvents from '../../common/UpComingEvents';
import RightDeskSidebar from '../../common/RightDeskSidebar.tsx';
import { BiSolidCricketBall } from 'react-icons/bi';
import { useCricketFixture } from '../../../Framework/cricketFixture';

const CricketDetails: React.FC = () => {

  const {data,isLoading,isError} = useCricketFixture();
  

  const playingEvents = (data||[]).filter((item:any)=>item?.inPlay === "True");
  const upComingScheduleEvents = (data||[]).filter((item:any)=>(item?.inPlay === "False"));
  console.log(data,playingEvents, upComingScheduleEvents,"Hurryeee::::::::")
    const uiLabel = {
        sidebarIcon:<BiSolidCricketBall fill="var(--color-quaternary)" size={20}/>,
        sportsName: "Cricket",
      icon: <BiSolidCricketBall fill="#8B191B" size={20}/>,
    
      }
      const inPlayEvents =[{
        sportsName:"Cricket",
        sportsId:"cricket",
        icon: <BiSolidCricketBall fill="#8B191B" size={20}/>,
        eventSchedule:playingEvents,
      }]
      const upComingEvents =[{
        sportsName:"Cricket",
        sportsId:"cricket",
        icon: <BiSolidCricketBall fill="#8B191B" size={20}/>,
        eventSchedule:upComingScheduleEvents,
      }]

      if (isLoading) return <p>Loading...</p>;
if (isError) return <p>Error fetching data</p>;
  return (
    <div className="flex flex-col  transition-all lg:pt-[110px] ease-in-out duration-100 pt-0" >
    <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <LeftDeskSideBar label={uiLabel}/>
        <div className=' flex items-center flex-col lg:w-[50%] w-full'>
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

export default CricketDetails;
