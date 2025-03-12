import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { useUI } from '../../../context/ui.context';
import { useNavigate } from 'react-router-dom';



const imgArray = [{
    imgPath:"assets/images/MINES.jpg",
    url:"/casino-lobby/slot-games"
},

{
    imgPath:"assets/images/cricket.jpg",
    url:"/casino-lobby/slot-games"

},{
    imgPath:"assets/images/Aviator-1726845520975.jpg",
    url:"/aviator"

},{
    imgPath:"assets/images/crash.jpg",
    url:"/casino-lobby/crash"

},{
    imgPath:"assets/images/coin-toss.jpg",
    url:"/casino-lobby/crash"

},{
    imgPath:"assets/images/slot-game.jpg",
    url:"/casino-lobby/slot-games"

},{
    imgPath:"assets/images/classic-dice.jpg",
    url:"/casino-lobby/crash"

},{
    imgPath:"assets/images/fortune-wheel.jpg",
    url:"/casino-lobby/crash"

},{
    imgPath:"assets/images/aviator-2.webp",
    url:"/aviator"

},
{
    imgPath:"assets/images/jetx.webp",
    url:"/casino-lobby/lottery"

},{
    imgPath:"assets/images/balloon.webp",
    url:"/casino-lobby/lottery"

},{
    imgPath:"assets/images/cricketx.webp",
    url:"/casino-lobby/lottery"

},{
    imgPath:"assets/images/cash-galaxy.png",
    url:"/casino-lobby/lottery"

},{
    imgPath:"assets/images/pilot.webp",
    url:"/casino-lobby/crash"

},{
    imgPath:"assets/images/pilot-cup.webp",
    url:"/casino-lobby/crash"

},
{
    imgPath:"assets/images/footballx.webp",
    url:"/casino-lobby/crash"

},
{
    imgPath:"assets/images/pilot-coin.webp",
    url:"/casino-lobby/crash"

},
{
    imgPath:"assets/images/jet-lucky-2.png",
    url:"/casino-lobby/slot-games"

},
{
    imgPath:"assets/images/ho-ho.png",
    url:"/casino-lobby/slot-games"

},{
    imgPath:"assets/images/mars.png",
    url:"/casino-lobby/slot-games"

},
{
    imgPath:"assets/images/cash-it.webp",
    url:"/casino-lobby/shooting"

},{
    imgPath:"assets/images/galaxy-blast.png",
    url:"/casino-lobby/shooting"

},{
    imgPath:"assets/images/speed-crash.png",
    url:"/casino-lobby/shooting"

},{
    imgPath:"assets/images/sky-ward.png",
    url:"/casino-lobby/shooting"

},{
    imgPath:"assets/images/mriya.png",
    url:"/casino-lobby/shooting"

},
]





const TrendingGames: React.FC = () => 
  
  {
    const {isLogin,setLoginModal} = useUI();
    const naviagte = useNavigate();


    const items: TabsProps['items'] = [
      {
        key: '1',
        label: <span className="text-sm capitalize whitespace-nowrap font-medium">Originals</span>,
        children: (
          <div className="py-2.5 px-2.5 transition-all ease-in-out duration-200 w-full h-max overflow-x-auto">
            <div className="w-full max-w-full overflow-x-auto no-scrollbar">
              <div className="flex gap-2 flex-nowrap">
                {(imgArray || []).slice(0, 4).map((item, i) => (
                  <div key={i} className="w-[117px] md:w-[135px] flex-shrink-0"  onClick={()=>{
                    if(isLogin){
                      naviagte(item?.url)
                    }
                    else{
                      setLoginModal(true);
                    }
                    }}>
                    <div className="flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                      <div className="relative rounded-[8px] w-full aspect-[0.75] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                        <img
                          src={item?.imgPath}
                          className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                          alt="casino-event-image"
                          loading="lazy"
                          title="MINES"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ),
      },
      {
        key: '2',
        label: <span className="text-sm capitalize whitespace-nowrap font-medium">Crash Games</span>,
        children: (
          <div className="py-2.5 px-2.5 transition-all ease-in-out duration-200 w-full h-max overflow-x-auto">
            <div className="flex gap-2 flex-nowrap w-full max-w-full overflow-x-auto no-scrollbar">
              {(imgArray || []).slice(4, 8).map((item, i) => (
                <div key={i} className="w-[117px] md:w-[135px] flex-shrink-0"
                onClick={()=>{
                  if(isLogin){
                    naviagte(item?.url)
                  }
                  else{
                    setLoginModal(true);
                  }
                  }}
                >
                  <div className="flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                    <div className="relative rounded-[8px] w-full aspect-[0.75] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                      <img
                        src={item?.imgPath}
                        className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                        alt="casino-event-image"
                        loading="lazy"
                        title="MINES"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        key: '3',
        label: <span className="text-sm capitalize whitespace-nowrap font-medium">Lottery</span>,
        children: (
          <div className="py-2.5 px-2.5 transition-all ease-in-out duration-200 w-full h-max overflow-x-auto">
            <div className="flex gap-2 flex-nowrap w-full max-w-full overflow-x-auto no-scrollbar">
              {(imgArray || []).slice(8, 12).map((item, i) => (
                <div key={i} className="w-[117px] md:w-[135px] flex-shrink-0"
                onClick={()=>{
                  if(isLogin){
                    naviagte(item?.url)
                  }
                  else{
                    setLoginModal(true);
                  }
                  }}
                >
                  <div className="flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                    <div className="relative rounded-[8px] w-full aspect-[0.75] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                      <img
                        src={item?.imgPath}
                        className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                        alt="casino-event-image"
                        loading="lazy"
                        title="MINES"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        key: '4',
        label: <span className="text-sm capitalize whitespace-nowrap font-medium">Scratch Card</span>,
        children: (
          <div className="py-2.5 px-2.5 transition-all ease-in-out duration-200 w-full h-max overflow-x-auto">
            <div className="flex gap-2 flex-nowrap w-full max-w-full overflow-x-auto no-scrollbar">
              {(imgArray || []).slice(12, 16).map((item, i) => (
                <div key={i} className="w-[117px] md:w-[135px] flex-shrink-0"
                onClick={()=>{
                  if(isLogin){
                    naviagte(item?.url)
                  }
                  else{
                    setLoginModal(true);
                  }
                  }}
                >
                  <div className="flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                    <div className="relative rounded-[8px] w-full aspect-[0.75] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                      <img
                        src={item?.imgPath}
                        className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                        alt="casino-event-image"
                        loading="lazy"
                        title="MINES"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
    ];
    return(
  <div className="w-full">
    {/* Tab container should be scrollable on smaller screens */}
    <div className="overflow-x-auto no-scrollbar">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  </div>
);}

export default TrendingGames;
