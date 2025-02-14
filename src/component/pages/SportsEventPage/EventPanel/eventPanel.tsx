import React from 'react'
import { LiveShowComp } from './liveshow'
import { useCricketDetailsById } from '../../../../Framework/cricketFixture';
import MatchOddBookmaker from './MatchOddBookmaker';
import FancyComp from './fancy';
import { useParams } from 'react-router-dom';
import RacingBet from './RacingBet/racingbet';



const EventPanel: React.FC = () => {
  const { sport, eventId }: any = useParams();
     const {data,isLoading,isError} = useCricketDetailsById({id:'33877286',sport});
     console.log(data,"wirking::::")
     console.log(data,"Home:::::::::::");
     const matchOdds = (((data?.market||[])[0])?.events);
     const bookMaker = data?.bookmaker
     if (isLoading) return <p>Loading...</p>;
     if (isError) return <p>Error fetching data</p>;
  return (
    <div className="w-full md:mt-[0px]   lg:overflow-auto"
    style={{minHeight: "calc(-110px + 100dvh)"}}>
    <div className="no-scrollbar min-h-[calc(100dvh-56px)] md:mb-3">
          <LiveShowComp data={(data?.market||[])[0]||data}/>

          {
            (sport === 'horse-racing' || sport === 'greyhound') ? <><RacingBet data={data}/></>: <><MatchOddBookmaker title="Match Odds" data={matchOdds}/>
            <MatchOddBookmaker title="Bookmaker" data={bookMaker}/>
            <FancyComp/></>
          }
        
         
    </div>
</div>
  )
}

export default EventPanel