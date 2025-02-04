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
const PanelComp: React.FC = () => {
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
          <div className="w-full relative h-full z-10 rounded-md overflow-hidden grid grid-cols-2">
            <Carousel autoplay>
              {carousalImages.map((item) => {
                return (
                  <div title="QuickButtons-8" className="grid grid-row-2">
                    <span
                      title="Fishing games"
                      className="col-span-1 px-[3px] py-[3px]"
                    >
                      <div
                        className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
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
                        <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
                      </div>
                    </span>
                    <span
                      title="Color Game"
                      className="col-span-1 px-[3px] py-[3px]"
                    >
                      <div
                        className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                        style={{ backgroundImage: `url(${item?.bgUrl2})` }}
                      >
                        <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                          <img
                            src={item?.iconUrl2}
                            width="16"
                            height="16"
                            className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                            alt="Color Game-image"
                            loading="lazy"
                            title="Color Game"
                          />
                          <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                            {item?.title2}
                          </span>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
                      </div>
                    </span>
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
        <div className="py-1 px-[6px] w-full">
          <div className="w-full font-helvetica-neue">
            <InPlayEvents />
          </div>
        </div>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="var(--color-primary)"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M15 6l-6 6l6 6"></path>
                    </svg>
                  </button>
                  <button
                    className="leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="var(--color-primary)"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 6l6 6l-6 6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div
              id="scrollShow"
              className="py-2.5 px-2.5 transition-all ease-in-out duration-200 w-full h-max overflow-x-auto"
            >
              <div className="min-w-full grid grid-rows-3 grid-flow-col gap-2">
               
                
                
             {
                (casinoProviders||[]).map((item,i)=>{
                    return(
                        <button
                        className="leading-normal relative overflow-hidden transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
                        type="button"
                        title="Yggdrasil"
                      >
                        <div
                          title="InPlayAndPopulars"
                          id="banners"
                          className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
                        >
                          <img
                            src={item?.imgPath}
                            width="80"
                            height="40"
                            className="rounded rounded-8"
                            alt="Yggdrasil"
                            loading="lazy"
                            title="Yggdrasil"
                          />
                        </div>
                      </button>
                    )
                })
             }
               
              </div>
            </div>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="var(--color-primary)"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M15 6l-6 6l6 6"></path>
                    </svg>
                  </button>
                  <button
                    className="leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="var(--color-primary)"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 6l6 6l-6 6"></path>
                    </svg>
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
                    <div className="flex w-[120px] sm:w-[180px] md:w-[140px] flex-col items-center justify-center cursor-pointer transition-all ease-in-out duration-100">
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="var(--color-primary)"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M15 6l-6 6l6 6"></path>
                    </svg>
                  </button>
                  <button
                    className="leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="var(--color-primary)"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 6l6 6l-6 6"></path>
                    </svg>
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
                    <div className="flex w-[112px] sm:w-[120px] md:w-[130px] flex-col items-center justify-center cursor-pointer transition-all ease-in-out duration-100">
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
        <div className="w-full">
          <UpcomingEvents />
        </div>
      </div>
      <Accordian />
    </div>
  );
};

export default PanelComp;
