import React from 'react'
import { andarbhar, baccarats, casinoCards, roulette } from '../../../Framework/utils/static'
import CasinoCard from './casinoCard'
import Card from './card'
import CasinoGames from './casinoGames'

const LiveCasino: React.FC = () => {
  return (
    <div className="flex flex-col  transition-all lg:pt-[110px] ease-in-out duration-100 pt-[130px]">
    <div className="flex items-start justify-start w-full ">
        <div className="w-full md:mt-[0px]   lg:overflow-auto" style={{minHeight: "calc(-110px + 100dvh)"}}>
            <div className=" w-full h-full px-2">
                <div className=" w-full pb-1">
                  <img src="/assets/images/Artboard-nRP4mxMX.webp" width="639"
                        height="100" className="w-full rounded aspect-[3.7409]" alt="CASINO IMAGE"
                        loading="lazy" title="Play Live Casino And Win Big..."/></div><label
                    className="sr-only">Search</label>
                <div className="relative">
                    <div
                        className="absolute left-0 pl-2 h-full flex items-center justify-center  pointer-events-none">
                        <svg fill="#999" className="" width="20" height="20" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z">
                            </path>
                        </svg>
                    </div>
                    <div className="px-[0.1rem] p-0.5 h-fit"><input id="default-search"
                            className="block w-full focus:outline-none   rounded rounded-2 p-2 pl-8 text-sm bg-bg_Quaternary text-text_Ternary  "
                            placeholder="Search Games (Atleast 3 chars.....)" autoComplete="off"
                            type="search"/></div>
                </div>
                <div
                    className="flex items-center  justify-between w-full overflow-x-auto  gap-[3px]  no-scrollbar mt-2 text-center ">
                    <div className=" flex gap-[6px]">
                        <a href="/casino-lobby/casino"><button
                                className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-bg_Primary px-4 py-2 flex items-center justify-center border  rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs  cursor-pointer"
                                type="button" data-tab="Lobby"><span
                                    className="text-text_Quaternary">Lobby</span></button></a>
                        <a href="/casino-lobby/casino/Poker/">
                            <button
                                className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center justify-center border  rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs  cursor-pointer"
                                type="button" data-tab="/casino-lobby/casino/Poker"><span
                                    className="text-text_Quinary">Poker</span></button>
                        </a>
                        <a href="/casino-lobby/casino/Baccarat/"><button
                                className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center justify-center border  rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs  cursor-pointer"
                                type="button" data-tab="/casino-lobby/casino/Baccarat"><span
                                    className="text-text_Quinary">Baccarat</span>
                            </button></a>
                        <a href="/casino-lobby/casino/Roulette/"><button
                                className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center justify-center border  rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs  cursor-pointer"
                                type="button" data-tab="/casino-lobby/casino/Roulette"><span
                                    className="text-text_Quinary">Roulette</span>
                            </button></a>
                        <a href="/casino-lobby/casino/Andar-Bahar/"><button
                                className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center justify-center border  rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs  cursor-pointer"
                                type="button" data-tab="/casino-lobby/casino/Andar Bahar"><span
                                    className="text-text_Quinary">Andar Bahar</span>
                            </button></a>
                        <a href="/casino-lobby/casino/Teen-Patti/"><button
                                className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center justify-center border  rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs  cursor-pointer"
                                type="button" data-tab="/casino-lobby/casino/Teen Patti"><span
                                    className="text-text_Quinary">Teen Patti</span>
                            </button>
                        </a>
                        <a href="/casino-lobby/casino/Blackjack/"><button
                                className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center justify-center border  rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs  cursor-pointer"
                                type="button" data-tab="/casino-lobby/casino/Blackjack"><span
                                    className="text-text_Quinary">Blackjack</span>
                            </button></a>
                        <a href="/casino-lobby/casino/Craps/"><button className="inline-block leading-normal relative overflow-hidden transition
                            duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center
                            justify-center border rounded-full text-text_Quaternary whitespace-nowrap
                            uppercase font-lato font-[700] text-xs cursor-pointer" type="button"
                                data-tab="/casino-lobby/casino/Craps"><span
                                    className="text-text_Quinary">Craps</span>
                            </button></a>
                        <a href="/casino-lobby/casino/War/"><button
                                className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center justify-center border  rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs  cursor-pointer"
                                type="button" data-tab="/casino-lobby/casino/War"><span
                                    className="text-text_Quinary">War</span>
                            </button></a>
                        <a href="/casino-lobby/casino/Baccarat-Dragon-Tiger/"><button
                                className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center justify-center border  rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs  cursor-pointer"
                                type="button" data-tab="/casino-lobby/casino/Baccarat Dragon Tiger"><span
                                    className="text-text_Quinary">Baccarat Dragon Tiger</span>
                            </button></a>
                        <a href="/casino-lobby/casino/Pok-Deng/"><button className="inline-block leading-normal relative overflow-hidden transition
                            duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center
                            justify-center border rounded-full text-text_Quaternary whitespace-nowrap
                            uppercase font-lato font-[700] text-xs cursor-pointer" type="button"
                                data-tab="/casino-lobby/casino/Pok Deng"><span className="text-text_Quinary">Pok
                                    Deng</span>
                            </button></a>
                        <a href="/casino-lobby/casino/Sicbo/"><button className="inline-block leading-normal relative overflow-hidden transition
                            duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center
                            justify-center border rounded-full text-text_Quaternary whitespace-nowrap
                            uppercase font-lato font-[700] text-xs cursor-pointer" type="button"
                                data-tab="/casino-lobby/casino/Sicbo"><span
                                    className="text-text_Quinary">Sicbo</span>
                            </button></a>
                        <a href="/casino-lobby/casino/Xoc-Dia/"><button
                                className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center justify-center border  rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs  cursor-pointer"
                                type="button" data-tab="/casino-lobby/casino/Xoc Dia"><span
                                    className="text-text_Quinary">Xoc Dia</span>
                            </button></a>
                        <a href="/casino-lobby/casino/Lottery/"><button className="inline-block leading-normal relative overflow-hidden transition
                            duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center
                            justify-center border rounded-full text-text_Quaternary whitespace-nowrap
                            uppercase font-lato font-[700] text-xs cursor-pointer" type="button"
                                data-tab="/casino-lobby/casino/Lottery"><span
                                    className="text-text_Quinary">Lottery</span>
                            </button></a>
                        <a href="/casino-lobby/casino/Higher-Lower/"><button className="inline-block leading-normal relative overflow-hidden transition
                            duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center
                            justify-center border rounded-full text-text_Quaternary whitespace-nowrap
                            uppercase font-lato font-[700] text-xs cursor-pointer" type="button"
                                data-tab="/casino-lobby/casino/Higher Lower"><span
                                    className="text-text_Quinary">Higher Lower</span>
                            </button></a>
                        <a href="/casino-lobby/casino/Wheel-Of-Fortune/"><button className="inline-block leading-normal relative overflow-hidden transition
                            duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center
                            justify-center border rounded-full text-text_Quaternary whitespace-nowrap
                            uppercase font-lato font-[700] text-xs cursor-pointer" type="button"
                                data-tab="/casino-lobby/casino/Wheel Of Fortune"><span
                                    className="text-text_Quinary">Wheel Of Fortune</span>
                            </button></a>
                        <a href="/casino-lobby/casino/Other/"><button className="inline-block leading-normal relative overflow-hidden transition
                            duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center
                            justify-center border rounded-full text-text_Quaternary whitespace-nowrap
                            uppercase font-lato font-[700] text-xs cursor-pointer" type="button"
                                data-tab="/casino-lobby/casino/Other"><span
                                    className="text-text_Quinary">Other</span>
                            </button></a>
                    </div>
                </div>
            </div>
            <div className=" bg-transparent w-full h-full">
                <div className=" w-full  px-[6px]">
                    <div className="w-full pb-4 ">
                        <div className="flex flex-col">
                            <div className="w-full overflow-hidden  mt-2 ">
                                <div
                                    className="flex flex-wrap items-center mt-2 mb-2 justify-between gap-[5px] self-stretch text-text_Quaternary">
                                    <div className="flex items-center gap-2 px-1"><span
                                            className="font-lato text-text_Ternary  font-extrabold tracking-[0.3px] text-sm md:text-base lg:text-lg capitalize leading-[18px]">Poker</span>
                                    </div>
                                    <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
                                        <button
                                            className="inline-block  relative overflow-hidden  transition duration-150 ease-in-out font-lato  text-text_DepositTextColor font-semibold text-[12px] leading-[18px]  cursor-pointer"
                                            type="button">See All</button><button
                                            className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border  bg-bg_Foundation rounded  cursor-pointer"
                                            type="button"><svg xmlns="http://www.w3.org/2000/svg" width="27"
                                                height="27" viewBox="0 0 24 24" stroke-width="1.5"
                                                stroke="var(--color-primary)" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M15 6l-6 6l6 6"></path>
                                            </svg></button><button
                                            className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded  cursor-pointer"
                                            type="button"><svg xmlns="http://www.w3.org/2000/svg" width="27"
                                                height="27" viewBox="0 0 24 24" stroke-width="1.5"
                                                stroke="var(--color-primary)" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M9 6l6 6l-6 6"></path>
                                            </svg></button>
                                    </div>
                                </div>
                                <div className="pt-0 w-full h-max overflow-x-auto no-scrollbar"
                                    style={{scrollBehavior: "smooth"}}>
                                    <div className="w-full flex gap-[8px] py-1">
                                        <div className="relative">
                                            <div
                                                className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                                                <div
                                                    className="relative rounded-[8px] w-full  aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                                    <img src="https://client.qtlauncher.com/images/?id=EVO-dhp_en_US&amp;type=logo-square&amp;version=1678359084763"
                                                        width="auto" height="auto"
                                                        className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                                        alt="2 Hand Casino Hold'em" loading="lazy"
                                                        title="2 Hand Casino Hold'em"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div
                                                className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                                                <div
                                                    className="relative rounded-[8px] w-full  aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                                    <img src="https://client.qtlauncher.com/images/?id=BTV-6poker_en_US&amp;type=logo-square&amp;version=1662918821015"
                                                        width="auto" height="auto"
                                                        className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                                        alt="6+ Poker" loading="lazy" title="6+ Poker"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div
                                                className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                                                <div
                                                    className="relative rounded-[8px] w-full  aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                                    <img src="https://client.qtlauncher.com/images/?id=BTV-betonpoker_en_US&amp;type=logo-square&amp;version=1662976432530"
                                                        width="auto" height="auto"
                                                        className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                                        alt="Bet on Poker" loading="lazy"
                                                        title="Bet on Poker"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div
                                                className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                                                <div
                                                    className="relative rounded-[8px] w-full  aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                                    <img src="https://client.qtlauncher.com/images/?id=EVO-csp_en_US&amp;type=logo-square&amp;version=1678359409711"
                                                        width="auto" height="auto"
                                                        className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                                        alt="Caribbean Stud Poker" loading="lazy"
                                                        title="Caribbean Stud Poker"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div
                                                className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                                                <div
                                                    className="relative rounded-[8px] w-full  aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                                    <img src="https://client.qtlauncher.com/images/?id=EVO-holdem_en_US&amp;type=logo-square&amp;version=1678390731862"
                                                        width="auto" height="auto"
                                                        className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                                        alt="Casino Hold'em" loading="lazy"
                                                        title="Casino Hold'em"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div
                                                className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                                                <div
                                                    className="relative rounded-[8px] w-full  aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                                    <img src="https://client.qtlauncher.com/images/?id=EZU-casinoholdem_en_US&amp;type=logo-square&amp;version=1678479919247"
                                                        width="auto" height="auto"
                                                        className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                                        alt="Casino Hold'em" loading="lazy"
                                                        title="Casino Hold'em"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div
                                                className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                                                <div
                                                    className="relative rounded-[8px] w-full  aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                                    <img src="https://client.qtlauncher.com/images/?id=EVO-eth_en_US&amp;type=logo-square&amp;version=1678379518590"
                                                        width="auto" height="auto"
                                                        className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                                        alt="Extreme Texas Hold’em" loading="lazy"
                                                        title="Extreme Texas Hold’em"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div
                                                className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                                                <div
                                                    className="relative rounded-[8px] w-full  aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                                    <img src="https://client.qtlauncher.com/images/?id=EVO-thb_en_US&amp;type=logo-square&amp;version=1678388633007"
                                                        width="auto" height="auto"
                                                        className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                                        alt="Texas Hold'em Bonus Poker" loading="lazy"
                                                        title="Texas Hold'em Bonus Poker"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div
                                                className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                                                <div
                                                    className="relative rounded-[8px] w-full  aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                                    <img src="https://client.qtlauncher.com/images/?id=EVO-trp_en_US&amp;type=logo-square&amp;version=1678388805357"
                                                        width="auto" height="auto"
                                                        className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                                        alt="Triple Card Poker" loading="lazy"
                                                        title="Triple Card Poker"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div
                                                className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                                                <div
                                                    className="relative rounded-[8px] w-full  aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                                    <img src="https://client.qtlauncher.com/images/?id=EVO-videopoker_en_US&amp;type=logo-square&amp;version=1692772144353"
                                                        width="auto" height="auto"
                                                        className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                                        alt="Video Poker" loading="lazy"
                                                        title="Video Poker"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mt-2 flex items-center justify-between">
                                <div
                                    className="flex flex-wrap items-center mt-2 mb-2 justify-between gap-[5px] self-stretch text-text_Quaternary">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex text-text_Primary items-center justify-center gap-1">
                                        </div><span
                                            className="font-lato text-text_Ternary  font-extrabold tracking-[0.3px] text-sm md:text-base lg:text-lg leading-[18px]">Game
                                            Providers</span>
                                    </div>
                                </div>
                                <div className="flex w-[108.75px] items-center justify-end gap-[5px]"><button
                                        className="inline-block relative overflow-hidden  transition duration-150 ease-in-out font-lato  text-text_DepositTextColor font-semibold text-[12px] leading-[18px]  cursor-pointer"
                                        type="button">See All</button><button
                                        className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border  bg-bg_Foundation rounded  cursor-pointer"
                                        type="button"><svg xmlns="http://www.w3.org/2000/svg" width="27"
                                            height="27" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="var(--color-primary)" fill="none" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M15 6l-6 6l6 6"></path>
                                        </svg></button>
                                        <button
                                        className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded  cursor-pointer"
                                        type="button"><svg xmlns="http://www.w3.org/2000/svg" width="27"
                                            height="27" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="var(--color-primary)" fill="none" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M9 6l6 6l-6 6"></path>
                                        </svg></button></div>
                            </div>
                            <div
                                className="flex items-center justify-between w-full overflow-x-auto gap-[3px] no-scrollbar mt-2 text-center">
                                <div className="min-w-full grid grid-rows-3 grid-flow-col  gap-2">
                                  {
                                    casinoCards.map((item)=><CasinoCard img={item?.img}/>)
                                  }
                                </div>
                            </div>
                        </div>
                        <CasinoGames items={baccarats} title="Baccarat"/>
                        <CasinoGames items={roulette} title="Roulette"/>
                        <CasinoGames items={andarbhar} title='Andar Bahar'/>
                        
                        <CasinoGames items={andarbhar} title='Teen Patti'/>
                        <CasinoGames items={andarbhar} title='Blackjack'/>
                        <CasinoGames items={andarbhar} title='Craps'/>
                        <CasinoGames items={andarbhar} title='War'/>
                        <CasinoGames items={andarbhar} title='Baccarat Dragon Tiger'/>
                        <CasinoGames items={andarbhar} title='Pok
                                            Deng'/>
                        <CasinoGames items={andarbhar} title='Sicbo'/>
                        <CasinoGames items={andarbhar} title='Xoc
                                            Dia'/>
                        <CasinoGames items={andarbhar} title='Higher
                                            Lower'/>
                       
                        <CasinoGames items={andarbhar} title='Wheel
                                            Of Fortune'/>
                        <CasinoGames items={andarbhar} title='Other'/>
                       
                       
                       
                      
                        
                        
                       
                        
                        
                     
                       
                    </div>
                </div>
            </div>
         
        </div>
    </div>
</div>
  )
}

export default LiveCasino