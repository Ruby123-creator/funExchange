import React, { useEffect, useState } from 'react'
import { LiveShowComp } from './liveshow'
import { useCricketDetailsById } from '../../../../Framework/cricketFixture';
import MatchOddBookmaker from './MatchOddBookmaker';
import FancyComp from './fancy';
import { useParams } from 'react-router-dom';
import RacingBet from './RacingBet/racingbet';
import { useRacingDetailsById } from '../../../../Framework/greyHound';



const EventPanel: React.FC = () => {
  const { sport, eventId }: any = useParams();
  const [val,setValue] = useState('');

  useEffect(()=>{
    
    if(sport === 'horseRacing_racecard'){
     setValue("racecard") 
    }else if(sport === 'greyhound_racecard'){
      setValue("racecard/greyhound") 
      
    }
    else{
      setValue(sport);
    }
   },[sport])
     const {data,isLoading,isError} = useCricketDetailsById({id:eventId,sport:val});
    
     
    
     
     const matchOdds = (((data?.market||[])[0])?.events);
     const bookMaker = data?.bookmaker;
    
    //  if (isLoading) return <p>Loading...</p>;
    //  if (isError) return <p>Error fetching data</p>;
  return (
    <div className="w-full md:mt-[0px]   lg:overflow-auto pt-[130px] lg:pt-0"
    style={{minHeight: "calc(-110px + 100dvh)"}}>
    <div className="no-scrollbar min-h-[calc(100dvh-56px)] md:mb-3">
          <LiveShowComp data={(data?.market||[])[0]||data}/>
         
          {
            (sport === 'horseRacing_racecard' || sport === 'greyhound_racecard') ? <>{(data?.data||[])?.length ? <RacingBet data={data}/>: ""}</>: <>
            {
              (matchOdds||[])?.length ? <MatchOddBookmaker title="Match Odds" data={matchOdds}/>: ""
            }
            {
              (bookMaker||[])?.length ? <MatchOddBookmaker title="Bookmaker" data={bookMaker}/>: ""
            }
            
            <FancyComp/>
            
            </>
          }
        
         
    </div>
</div>
  )
}

export default EventPanel