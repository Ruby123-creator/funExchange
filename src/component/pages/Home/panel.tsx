import React from "react";
import Accordian from "../../common/Accordian";
import CarousalComp from "../../common/carousal";
import { BsSuitSpadeFill } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import UpcomingEvents from "../../common/UpComingEvents";
import {
  bannerImages,
  cardGames,
  carousalImages,
  casinoProviders,
  popularGames,
} from "../../../Framework/utils/static";
import { Carousel } from "antd";
import TrendingGames from "../../common/Tabs";
import InPlayEvents from "../../common/InPlayEvents";
import { BiFootball, BiSolidCricketBall } from "react-icons/bi";
import { IoTennisball } from "react-icons/io5";
import CasinoProvider from "../../common/casinoProvider";
import { useSportFixture } from "../../../Framework/sportsData";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
const PanelComp: React.FC = () => {
   const uiLabel = {
      sidebarIcon:<BiSolidCricketBall fill="var(--color-quaternary)" size={20}/>,
      sportsName: "Football",
       icon: <BiFootball  size={20}/>,
  
    }
  const { data:cricket, isLoading:loading, isError:error } = useSportFixture("cricket");
  const { data:football, isLoading:l, isError:e } = useSportFixture("soccer");
  const { data:tennis, isLoading, isError } = useSportFixture("tennis");


    const inPlayEvents =[{
      sportsName:"Cricket",
      sportsId:"cricket",
      icon: <BiSolidCricketBall fill="#8B191B" size={20}/>,
      eventSchedule:(cricket || []).filter(
        (item: any) => item?.inPlay === "True"
      ),
    },{
      sportsName:"Football",
      sportsId:"soccer",
      icon: <BiFootball  size={20}/>,
      eventSchedule:(football || []).filter(
        (item: any) => item?.inPlay === "True"
      ),
    },{
      sportsName:"Tennis",
      sportsId:"tennis",
      icon: <IoTennisball fill="#7FBA42" size={20}/>,
      eventSchedule:(tennis || []).filter(
        (item: any) => item?.inPlay === "True"
      ),
    }]


    const upComingEvents =[{
      sportsName:"Cricket",
      sportsId:"cricket",
      icon: <BiSolidCricketBall fill="#8B191B" size={20}/>,
      eventSchedule:(cricket || []).filter(
        (item: any) => item?.inPlay === "False"
      ),
    },{
      sportsName:"Football",
      sportsId:"football",
      icon: <BiFootball  size={20}/>,
      eventSchedule:(football || []).filter(
        (item: any) => item?.inPlay === "False"
      ),
    },{
      sportsName:"Tennis",
      sportsId:"tennis",
      icon: <IoTennisball fill="#7FBA42" size={20}/>,
      eventSchedule:(tennis || []).filter(
        (item: any) => item?.inPlay === "False"
      ),
    }]
  return (
    <div
      className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
      style={{ minHeight: "calc(-54px + 100dvh)" }}
    >
      <div id="home" className="py-1 flex flex-col items-start justify-start">
        <div
          id="banners"
          className="w-full px-[6px] rounded-md overflow-hidden"
          style={{ aspectRatio: "2.00561 / 1", maxHeight: "350px" }}
        >
          <div className="w-full relative h-full z-10 rounded-md overflow-hidden">
            <CarousalComp
              content={bannerImages}
              className="min-w-full min-h-full top-0 left-0 transition-transform duration-500 ease-in-out -translate-x-full"
            />
          </div>
        </div>
        <div className="py-1 px-[2px] w-full">
          <div className="w-full relative h-full z-10 rounded-md overflow-hidden flex flex-col">
          <Carousel autoplay dots={false}>
  {carousalImages.map((item,i) => {
    return (
      <div className=" grid grid-cols-2"
      key={"banner"+i}

      >
<div title="QuickButtons-8" className="grid grid-cols-2 gap-2 ">
        <span title="Fishing games" className="px-[3px] py-[3px]">
          <div
            className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden"
            style={{ backgroundImage: `url(${item?.bgUrl1})` }}
          >
            <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
              <img
                src={item?.iconUrl1}
                width="16"
                height="16"
                className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                alt="Fishing games-image"
                loading="lazy"
                title="Fishing games"
              />
              <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                {item?.title1}
              </span>
            </div>
          </div>
        </span>
        <span title="Color Game" className="px-[3px] py-[3px]">
          <div
            className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden"
            style={{ backgroundImage: `url(${item?.bgUrl3})` }}
          >
            <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
              <img
                src={item?.iconUrl3}
                width="16"
                height="16"
                className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                alt="Color Game-image"
                loading="lazy"
                title="Color Game"
              />
              <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                {item?.title3}
              </span>
            </div>
          </div>
        </span>
      </div>
      <div title="QuickButtons-8" className="grid grid-cols-2 gap-2 ">
        <span title="Fishing games" className="px-[3px] py-[3px]">
          <div
            className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden"
            style={{ backgroundImage: `url(${item?.bgUrl2})` }}
          >
            <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
              <img
                src={item?.iconUrl2}
                width="16"
                height="16"
                className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                alt="Fishing games-image"
                loading="lazy"
                title="Fishing games"
              />
              <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                {item?.title2}
              </span>
            </div>
          </div>
        </span>
        <span title="Color Game" className="px-[3px] py-[3px]">
          <div
            className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden"
            style={{ backgroundImage: `url(${item?.bgUrl4})` }}
          >
            <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
              <img
                src={item?.iconUrl4}
                width="16"
                height="16"
                className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                alt="Color Game-image"
                loading="lazy"
                title="Color Game"
              />
              <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                {item?.title4}
              </span>
            </div>
          </div>
        </span>
      </div>
      </div>
      
    );
  })}
</Carousel>

          </div>
        </div>
        <div title="Trending Games" className="py-1 px-[6px] w-full">
          <div className="flex flex-col w-full bg-bg_Quaternary rounded-[4px] shadow-homeCasinoCardGamesShadow divide-y">
            <div className="flex items-center justify-between w-full pt-0.5 rounded-t-[4px] px-0.5 bg-bg_Quaternary">
              <TrendingGames />
            </div>
          </div>
        </div>
        {/* InPlay Events */}
        <div className="py-1 px-[6px] w-full">
          <div className="w-full font-helvetica-neue">
            <InPlayEvents events={inPlayEvents}/>
          </div>
        </div>
        {/* Casino Providers */}
        <div title="casino Providers" className="py-1 px-[6px] w-full">
          <div className="flex flex-col w-full bg-bg_Quaternary rounded-[4px] shadow-homeCasinoCardGamesShadow divide-y">
            <div className="flex items-center w-full py-2 px-2.5 gap-2.5 rounded-t-[4px] bg-bg_Quaternary">
                <AiOutlineFire fill="var(--color-iconsColor)"/>
            
              <div className="w-[100%] flex flex-row justify-between">
                <span className="text-text_Ternary font-semibold capitalize">
                  casino Providers
                </span>
                <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
                  <button
                    className="inline-block relative overflow-hidden font-lato text-text_DepositTextColor font-semibold text-[12px] leading-[18px] transition-all ease-in-out duration-200 cursor-pointer"
                    type="button"
                  >
                    See All
                  </button>
                  <button
                    className="leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                    type="button"
                  >
                    <FaAngleLeft stroke="var(--color-primary)" size={10}/>

                   
                  </button>
                  <button
                    className="leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                    type="button"
                  >
                    <FaAngleRight stroke="var(--color-primary)" size={10}/>

                    
                  </button>
                </div>
              </div>
            </div>
          <CasinoProvider/>
          </div>
        </div>
        <div title="Indian Card Games" className="py-1 px-[6px] w-full">
          <div className="flex flex-col w-full bg-bg_Quaternary rounded-[4px] shadow-homeCasinoCardGamesShadow divide-y">
            <div className="flex items-center w-full py-2 px-2.5 gap-2.5 rounded-t-[4px] bg-bg_Quaternary">
              <BsSuitSpadeFill fill="var(--color-iconsColor)" />

              <div className="w-[100%] flex flex-row justify-between">
                <span className="text-text_Ternary font-semibold capitalize">
                  Indian Card Games
                </span>
                <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
                  <button
                    className="inline-block relative overflow-hidden font-lato text-text_DepositTextColor font-semibold text-[12px] leading-[18px] transition-all ease-in-out duration-200 cursor-pointer"
                    type="button"
                  >
                    See All
                  </button>
                  <button
                    className="leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                    type="button"
                  >
                    <FaAngleLeft stroke="var(--color-primary)" size={10}/>

                   
                  </button>
                  <button
                    className="leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                    type="button"
                  >
                    <FaAngleRight stroke="var(--color-primary)" size={10}/>

                    
                  </button>
                </div>
              </div>
            </div>

            <div
              id="scrollShow"
              className="py-2.5 px-2.5 transition-all ease-in-out duration-200 w-full h-max overflow-x-auto"
            >
              <div className="grid grid-rows-3 grid-flow-col gap-y-2 w-max md:w-full gap-x-[6px]">
                {(cardGames || []).map((item, i) => {
                  return (
                    <div
                    key={"cardGames"+i}

                    className="flex w-[120px] sm:w-[180px] md:w-[140px] flex-col items-center justify-center cursor-pointer transition-all ease-in-out duration-100">
                      <div className="w-full bg-transparent flex flex-col transition-all ease-in-out duration-200 relative overflow-hidden rounded-[4px]">
                        <div className="aspect-[1.00] w-[120px] sm:w-[180px] md:w-[140px]">
                          <img
                            src={item?.imgPath}
                            width="500"
                            height="auto"
                            className="w-full h-full object-cover rounded-[6px] hover:scale-[103%] transition-all ease-in-out duration-200"
                            alt="Super Over"
                            loading="lazy"
                            title="Super Over"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div title="Popular Games" className="py-1 px-[6px] w-full">
          <div className="flex flex-col w-full bg-bg_Quaternary rounded-[4px] shadow-homeCasinoCardGamesShadow divide-y">
            <div className="flex items-center w-full py-2 px-2.5 gap-2.5 rounded-t-[4px] bg-bg_Quaternary">
              <AiOutlineFire fill="var(--color-iconsColor)" />

              <div className="w-[100%] flex flex-row justify-between">
                <span className="text-text_Ternary font-semibold capitalize">
                  Popular Games
                </span>
                <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
                  <button
                    className="inline-block relative overflow-hidden font-lato text-text_DepositTextColor font-semibold text-[12px] leading-[18px] transition-all ease-in-out duration-200 cursor-pointer"
                    type="button"
                  >
                    See All
                  </button>
                  <button
                    className="leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                    type="button"
                  >
                    <FaAngleLeft stroke="var(--color-primary)" size={10}/>

                   
                  </button>
                  <button
                    className="leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                    type="button"
                  >
                    <FaAngleRight stroke="var(--color-primary)" size={10}/>

                    
                  </button>
                </div>
              </div>
            </div>
            <div
              id="scrollShow"
              className="py-2.5 px-2.5 transition-all ease-in-out duration-200 w-full h-max overflow-x-auto"
            >
              <div className="grid grid-rows-2 grid-flow-col gap-y-2 w-max md:w-full gap-x-[6px]">
                {(popularGames || []).map((item, i) => {
                  return (
                    <div className="flex w-[112px] sm:w-[120px] md:w-[130px] flex-col items-center justify-center cursor-pointer transition-all ease-in-out duration-100"
                    key={"popularGames"+i}

                    >
                      <div className="w-full bg-transparent flex flex-col transition-all ease-in-out duration-200 relative overflow-hidden rounded-[4px]">
                        <div className="w-full h-full">
                          <img
                            src={item?.imgPath}
                            width="200"
                            height="auto"
                            className="w-full h-full object-cover rounded-[4px]"
                            alt="casino-event-image"
                            loading="lazy"
                            title="JetX"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* UpComing Events */}
        <div className="w-full">
          <UpcomingEvents events={upComingEvents}/>
        </div>
      </div>
      <Accordian />
    </div>
  );
};

export default PanelComp;
