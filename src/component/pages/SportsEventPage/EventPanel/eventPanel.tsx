import React, { useEffect, useState } from 'react'
import { LiveShowComp } from './liveshow'
import { useSportDetailsById } from '../../../../Framework/sportsData';
import MatchOddBookmaker from './MatchOddBookmaker';
import FancyComp from './fancy';
import { useParams } from 'react-router-dom';
import RacingBet from './RacingBet/racingbet';
import PageLoader from '../../../common/pageLoader';



const EventPanel: React.FC = () => {
  const { sport, eventId }: any = useParams();
  const [val,setValue] = useState('');

  // useEffect(()=>{
    
  //   if(sport === 'horseRacing_racecard'){
  //    setValue("racecard") 
  //   }else if(sport === 'greyhound_racecard'){
  //     setValue("racecard/greyhound") 
      
  //   }
  //   else{
  //     setValue(sport);
  //   }
  //  },[sport])
     const {data,isLoading,isError} = useSportDetailsById({id:eventId,sport});
    
     
     
    //  if (isError) return <p>Error fetching data</p>;
     
     const matchOdds = (((data?.market||[])[0])?.events);
     const bookMaker = data?.bookmaker;
    console.log(data,"matchessss::::::::::::")
    //  if (isLoading) return <p>Loading...</p>;
    //  if (isError) return <p>Error fetching data</p>;
  return (
    <div className="w-full md:mt-[0px]   lg:overflow-auto pt-[130px] lg:pt-0"
    style={{minHeight: "calc(-110px + 100dvh)"}}>
      {
        data ? <div className="no-scrollbar min-h-[calc(100dvh-56px)] md:mb-3">
        <LiveShowComp data={data}/>
       
        {
          (sport === 'horseRacing_racecard' || sport === 'greyhound_racecard') ? <>{(data?.data||[])?.length ? <RacingBet data={data}/>: ""}</>: <>
          {
            (matchOdds||[])?.length ? <MatchOddBookmaker title="Match Odds" data={matchOdds} updatedTime={data?.updateTime}/>: ""
          }
          {
            (bookMaker||[])?.length ? <MatchOddBookmaker title="Bookmaker" data={bookMaker} updatedTime={data?.updateTime}/>: ""
          }
          {
            sport === "cricket" ?  <FancyComp/>
            :""
          }
          
          </>
        }
      
       
  </div>:
  <>
  {
    (sport === "horseRacing_racecard" || sport === "greyhound_racecard") ?  <div className='flex justify center items-center p-[15px]'>
    <span
                      className=" w-full bg-titleGrd flex flex-col text-transparent text-start bg-clip-text font-lato text-xl  font-bold">
                          <span
                          className=" capitalize break-words">Match Starts soon......</span>
                          </span>
    </div>: <PageLoader/>
  }
  </>
 
      }
    
</div>
  )
}

export default EventPanel