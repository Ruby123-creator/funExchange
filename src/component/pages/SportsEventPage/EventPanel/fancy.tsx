import React from 'react'

const FancyComp: React.FC = () => {
  return (
    <div> <div className="text-base font-medium text-center py-1.5">
    <ul className="flex flex-wrap items-center justify-start gap-x-3">
        <li
            className="px-[15px] py-2 rounded-[100px] flex items-center justify-center cursor-pointer active:scale-95 transition-all ease-in-out duration-100  bg-bg_Primary text-text_Quaternary border-borderOfFancyPremiumTab">
            <span
                className="inline-block font-bold text-xs sm:text-sm md:text-base leading-4 ">Fancy</span>
        </li>
    </ul>
</div>
<div className=" py-1.5">
    <div
        className=" bg-bg_Quaternary rounded-[3px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-[1px] cursor-pointer">
        <div className="grid grid-cols-12  border-b border-borderColorOfMarket">
            <div
                className="w-full  md:col-span-6  col-span-7 h-12 grid grid-cols-12 grid-flow-col pl-2.5 md:pl-2 py-0.5 pr-[3px]">
                <div
                    className=" col-span-8 md:col-span-10 flex items-start justify-center h-full flex-col">
                    <div className=" w-full flex flex-nowrap gap-x-2"><span
                            className=" truncate w-full capitalize text-text_Ternary  text-[13px] md:text-sm  font-semibold">S
                            Harper boundaries</span></div><span
                        className="text-[12px] font-bold text-text_Success"></span>
                </div><span
                    className=" col-span-2 md:col-span-1 flex flex-row items-center justify-center gap-x-[2px]"><svg
                        height="15" width="15" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 840.000000 936.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,936.000000) scale(0.100000,-0.100000)"
                            fill="var(--color-fancyStopwatchIconColor)"
                            stroke="none">
                            <path
                                d="M3472 8818 l3 -243 243 -3 242 -2 0 -244 0 -243 -122 -12 c-1359 -130 -2543 -950 -3143 -2176 -155 -318 -271 -677 -334 -1035 -75 -424 -73 -934 5 -1360 226 -1229 1014 -2267 2136 -2810 694 -335 1447 -455 2228 -354 567 74 1147 294 1640 624 792 530 1374 1353 1605 2270 133 529 156 1092 65 1627 -175 1029 -775 1959 -1645 2552 -539 367 -1135 586 -1792 657 l-163 18 0 243 0 243 243 2 242 3 3 243 2 242 -730 0 -730 0 2 -242z m1138 -1242 c478 -59 937 -216 1346 -463 765 -461 1323 -1208 1543 -2067 190 -738 131 -1502 -171 -2206 -175 -408 -460 -814 -789 -1122 -519 -487 -1138 -787 -1845 -895 -164 -25 -204 -27 -484 -27 -325 -1 -422 7 -685 60 -1170 231 -2155 1089 -2543 2214 -222 647 -250 1318 -82 1975 283 1104 1112 1999 2195 2372 215 74 531 144 735 162 63 6 133 13 155 15 85 9 506 -4 625 -18z">
                            </path>
                            <path
                                d="M3960 5620 c0 -654 -3 -1010 -10 -1010 -5 0 -41 -30 -80 -66 -51 -49 -80 -86 -105 -138 -133 -272 18 -605 310 -681 132 -34 277 -11 391 63 202 131 276 400 169 618 -25 52 -54 89 -105 138 -39 36 -75 66 -80 66 -7 0 -10 356 -10 1010 l0 1010 -240 0 -240 0 0 -1010z">
                            </path>
                        </g>
                    </svg><span
                        className=" font-[480] text-sm text-text_Ternary ">4s</span></span><span
                    className=" col-span-2 md:col-span-1 flex flex-row items-center justify-center">
                    <div className=" opacity-50 cursor-not-allowed"><svg height="18"
                            width="18" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="63d691358b4e4026f6539708_stairs 1">
                                <path id="Vector" d="M5.21875 3.13672V13.1367"
                                    stroke="var(--color-ternary4)"></path>
                                <path id="Vector_2" d="M5.21875 5.48047H10.5312"
                                    stroke="var(--color-ternary4)"></path>
                                <path id="Vector_3" d="M5.21875 8.13672H10.5312"
                                    stroke="var(--color-ternary4)"></path>
                                <path id="Vector_4" d="M5.21875 11.1055H10.5312"
                                    stroke="var(--color-ternary4)"></path>
                                <path id="Vector_5" d="M10.5312 3.13672V13.1367"
                                    stroke="var(--color-ternary4)"></path>
                            </g>
                        </svg></div>
                </span>
            </div>
            <div
                className=" col-span-5 md:col-span-6  h-12 grid grid-cols-2 md:grid-cols-6 relative">
                <span className=" text-center min-h-12 cols-span-1 md:col-span-2"><span
                        className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div
                            className=" overflow-hidden relative    opacity-100 cursor-pointer active:scale-95    w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn  undefined">
                            <span id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold ">3</span><span
                                id="oddBtnSize"
                                className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal "><span
                                    className="w-max break-all truncate">
                                    <div className="odd-button__volume">100</div>
                                </span></span>
                        </div>
                    </span></span><span
                    className=" text-center min-h-12 cols-span-1 md:col-span-2"><span
                        className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div
                            className=" overflow-hidden relative    opacity-100 cursor-pointer active:scale-95    w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn  undefined">
                            <span id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold ">4</span><span
                                id="oddBtnSize"
                                className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal "><span
                                    className="w-max break-all truncate">
                                    <div className="odd-button__volume">100</div>
                                </span></span>
                        </div>
                    </span></span><span
                    className=" hidden md:block col-span-2 text-center min-h-12">
                    <div
                        className=" flex flex-col gap-y-1 items-center h-full w-full  justify-center  px-1">
                        <div className=" flex items-center justify-center"><span
                                className=" text-[10px] text-center  text-text_MaxMarketTextColor">Min
                                Bet :</span><span
                                className=" text-[10px] text-center text-text_MaxMarketTextColor">
                                1</span></div>
                        <div className=" flex items-center justify-start"><span
                                className=" text-[10px] text-center text-text_MaxMarketTextColor ">Max
                                Bet :</span><span
                                className=" text-[10px] text-center text-text_MaxMarketTextColor">
                                1,00,000</span></div>
                    </div>
                </span>
            </div>
            <div className="col-span-12 h-max"></div>
        </div>
       
    </div>
</div></div>
  )
}

export default FancyComp