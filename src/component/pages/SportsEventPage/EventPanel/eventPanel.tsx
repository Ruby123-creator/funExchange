import React from 'react'
import { LiveShowComp } from './liveshow'
import { useCricketDetailsById } from '../../../../Framework/cricketFixture';
import MatchOddBookmaker from './MatchOddBookmaker';
import FancyComp from './fancy';
import { useParams } from 'react-router-dom';
import RacingBet from './RacingBet/racingbet';
import { useRacingDetailsById } from '../../../../Framework/greyHound';



const EventPanel: React.FC = () => {
  const { sport, eventId }: any = useParams();
     const {data,isLoading,isError} = useCricketDetailsById({id:eventId,sport});
    
     console.log(sport, eventId,"wirking::::")
     console.log(data,"Home:::::::::::");
     const {data:racingData,isLoading:loading,isError:error} = useRacingDetailsById({id:eventId,sport});
     const matchOdds = (((data?.market||[])[0])?.events);
     const bookMaker = data?.bookmaker
     console.log(bookMaker,matchOdds,"Rubyy")
    //  if (isLoading) return <p>Loading...</p>;
    //  if (isError) return <p>Error fetching data</p>;
  return (
    <div className="w-full md:mt-[0px]   lg:overflow-auto pt-[130px] lg:pt-0"
    style={{minHeight: "calc(-110px + 100dvh)"}}>
    <div className="no-scrollbar min-h-[calc(100dvh-56px)] md:mb-3">
          <LiveShowComp data={(data?.market||[])[0]||data}/>
         
          {
            (sport === 'horse-racing' || sport === 'greyhound') ? <>{(racingData?.data||[])?.length ? <RacingBet data={racingData}/>: ""}</>: <>
            {
              (matchOdds||[])?.length ? <MatchOddBookmaker title="Match Odds" data={matchOdds}/>: ""
            }
            {
              (bookMaker||[])?.length ? <MatchOddBookmaker title="Bookmaker" data={bookMaker}/>: ""
            }
            
            {/* <FancyComp/> */}
            
            </>
          }
        
         
    </div>
</div>
  )
}

export default EventPanel