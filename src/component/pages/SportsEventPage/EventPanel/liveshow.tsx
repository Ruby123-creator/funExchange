import { Modal } from 'antd';
import { format } from 'date-fns';
import React, { useEffect, useRef, useState } from 'react';
import { FaRegCirclePlay, FaAngleLeft } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import GeneralRules from '../../../modals/generalRules';
import MatchedBets from '../../../common/BettingWindow/matchedBet';
import { useNavigate, useParams } from 'react-router-dom';
import ScoreCard from './scoreCard';
import { useCurrentBetsData } from '../../../../Framework/placeBet';
import { useScoreCardData } from '../../../../Framework/scorecard';
import NoFound from '../../../common/NoFound';

interface Props {
    data: any;
}

export const LiveShowComp: React.FC<Props> = ({ data }) => {
    const [open, setOpen] = useState('scoreCard');
    const { sport, eventId }: any = useParams();
    const [active, setActive] = useState('live');
    const [isModalOpen, setIsModalOpen] = useState(false);
   
    const navigate = useNavigate();
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const [iframeHeight, setIframeHeight] = useState("150px");
   console.log(iframeHeight,"HEIGHT:::::::::::::::")
//     useEffect(() => {
//         const adjustHeight = () => {
//             try {
//                 const newHeight = iframeRef.current?.contentWindow?.document.body.scrollHeight;
//                 console.log(newHeight,"HEIGHT?????????")
//                 if (newHeight) setIframeHeight(`${newHeight}px`);
//             } catch (error) {
//                 console.warn("Cross-origin restriction prevents reading iframe content.");
//             }
//         };

//         iframeRef.current?.addEventListener("load", adjustHeight);
//         return () => {
//             iframeRef.current?.removeEventListener("load", adjustHeight);
//         };
//     }, []);

    useEffect(() => {
        const handleMessage = (event:any) => {
            if (event.data?.height) {
                setIframeHeight(event.data.height + "px");
            }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    const { data: currentBets } = useCurrentBetsData();
    const { data: scoreCard } = useScoreCardData(`${sport}_url`);
    const sportScoreCard = (scoreCard || []).find((val: any) => val?.game_id === eventId);

    const renderScoreCard = () => {
        if (sport === "cricket") {
            return <ScoreCard data={data} />;
        }
        else{
            return (     <NoFound text={"No Scorecard Found..."} image={'/icons/cricket.svg'}/>)
        }
    };

    return (
        <>
            <div className="w-full flex flex-col items-center" id="eventDetails" style={{ zIndex: 20 }}>
                <div className="w-full px-4 py-1.5 bg-bg_Quaternary flex flex-col items-center" id="eventPageHeader">
                    <div className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-x-3 w-max max-w-[92%]">
                            <div
                                onClick={() => navigate(`/sports-page/${sport}`)}
                                className="w-8 h-6 flex items-center justify-center bg-bg_Primary2 cursor-pointer rounded-sm active:scale-110">
                                <FaAngleLeft size={14} fill="#c10931" />
                            </div>
                            <span className="mt-0.5">
                                {(data?.inplay || data?.status === "active") ? <FaRegCirclePlay size={20} fill="#c10931" /> : <MdOutlineWatchLater size={20} fill="#c10931" />}
                            </span>
                            <div className="flex flex-col items-start w-[95%] break-words">
                                <span className="w-full bg-titleGrd text-transparent bg-clip-text font-lato text-sm font-bold">
                                    <span className="capitalize break-words">{data?.title}</span>
                                    {data?.race_card && <span className="capitalize break-words text-xs">{data?.race_card.split(" ").slice(0, -2).join(" ")}</span>}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="w-full" />
                <div className="w-full bg-bg_Quaternary shadow-sm">
                    <div className="relative flex border-none bg-bg_Quaternary w-full gap-x-2.5">
                        <button
                            className={`w-full py-2.5 uppercase text-sm font-semibold ${active === 'live' ? 'text-text_Primary' : 'text-text_Quinary'}`}
                            onClick={() => setActive('live')}>Live</button>
                        <button
                            className={`w-full py-2.5 uppercase text-sm font-semibold ${active === 'bets' ? 'text-text_Primary' : 'text-text_Quinary'}`}
                            onClick={() => setActive('bets')}>Open Bets ({(currentBets || []).length})</button>
                        <div className={`w-[48%] absolute bottom-0 transition-all bg-bg_Primary rounded-lg h-[2px] ${active === "live" ? 'left-0' : 'right-0'}`}></div>
                    </div>
                </div>
                {
                    // renderScoreCard()
                }
                {active === "live" ? (
                    <div className="grid grid-cols-1 p-2 min-h-[124px] sm:grid-cols-2 lg:grid-cols-1 w-full flex-grow">
                    
                    {
                        (open==="scoreCard" )? ( sportScoreCard?.url ? <div className="col-span-1 w-full">
                        <iframe
                            ref={iframeRef}
                            src={sportScoreCard?.url}
                            style={{ width: "100%", height: iframeHeight, border: "none", transition: "height 0.3s ease" }}
                        />
                    </div>:                   renderScoreCard()
):<div
          className=" relative  overflow-hidden bg-transparent ">
          <div draggable="false"
              className="  w-full relative z-10  flex items-center justify-center overflow-y-auto bg-transparent transition-all ease-in-out duration-100">
              <div
                  className="absolute top-1 right-1 z-10 active:scale-90 transition-all duration-300 ease-in-out cursor-pointer" onClick={()=>{setOpen('scoreCard')}}>
                      <RxCross2 stroke='#fff' style={{color:"white"}}/>
                 
              </div>
              <iframe id="videoComponent"
                  className=" w-full bg-transparent relative overflow-hidden "
                  scrolling="no"          style={{width: "100%",height:"auto",overflow:"auto"}}

                  src="https://dpmatka.in/dd.php?sportId=1&amp;eventId=33869620"></iframe>
          </div>
         
         
      </div>
                    }
                       
                        <div className='flex gap-2 mx-2 my-2'>
                            <button className="w-[50%] py-2 text-sm font-semibold bg-bg_Primary rounded-md h-[50px]" onClick={() => setOpen('live')}>Watch Live TV</button>
                            <button className="w-[50%] py-2 text-sm font-semibold bg-bg_Primary rounded-md h-[50px]" onClick={() => setOpen('scoreCard')}>Live Updates</button>
                        </div>
                    </div>
                ) : (
                    <div className='w-full p-2'>
                        <MatchedBets render={1} data={currentBets} />
                    </div>
                )}
            </div>
            <Modal open={isModalOpen} footer={null} onCancel={() => setIsModalOpen(false)}>
                <GeneralRules />
            </Modal>
        </>
    );
};