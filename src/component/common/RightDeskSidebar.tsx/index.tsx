import React from 'react'

const RightDeskSidebar: React.FC = () => {
  return (
    <div title="Menu 2" id="rightDeskSideBar"
    className="hidden lg:flex p-2 overflow-y-auto no-scrollbar z-10 w-[26%] h-[calc(100dvh-120px)] sticky top-[54px] lg:top-[110px]">
    <div
        className=" flex p-2 overflow-x-hidden relative no-scrollbar border flex-col w-full rounded-lg bg-bg_Quaternary ">
        <div className="flex flex-col w-full gap-1 select-none">
            <div
                className=" w-full flex px-3 gap-x-1 py-2 relative cursor-pointer rounded bg-bg_Secondary">
                <div className="flex flex-col items-start "><span
                        className="uppercase text-text_Quaternary font-normal text-xxs">Available
                        Credit</span><span className="text-text_Quaternary font-lato text-sm">₹ 0</span>
                </div>
                <div
                    className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer mr-2 flex items-center justify-center autoAnimate  ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="12"
                        width="12" fill="var(--color-quaternary)">
                        <path
                            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z">
                        </path>
                    </svg>
                </div>
            </div>
            <div className="overflow-hidden transition-height duration-100 ease-in-out  "
                style={{height: "0px"}}>
                <div className="flex flex-col gap-1 border autoAnimate rounded-lg opacity-100">
                    <div className=" grid grid-cols-2 gap-1 w-full p-1">
                        <div
                            className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1 col-span-2">
                            <span className="uppercase  font-normal text-xxs">Balance</span><span
                                className=" font-lato text-sm">₹ 0.00</span>
                        </div>
                        <div
                            className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1 ">
                            <span className="uppercase  font-normal text-xxs">Free Cash</span><span
                                className=" font-lato text-sm">₹ 0.00</span>
                        </div>
                        <div
                            className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1 ">
                            <span className="uppercase  font-normal text-xxs">Net Exposure</span><span
                                className=" font-lato text-sm">₹ 0.00</span>
                        </div>
                    </div>
                    <div title="sWalletInfo"></div>
                </div>
            </div>
        </div>
        <div className=" w-full   flex flex-col gap-y-1 py-2">
            <div className=" w-full flex items-center gap-1">
                <div className="flex gap-1 w-3/4 border rounded-lg p-0.5"><button
                        className="text-xs w-full capitalize whitespace-nowrap rounded p-2 bg-bg_Quaternary text-text_Secondary">Betslip</button><button
                        className="text-xs w-full capitalize whitespace-nowrap rounded p-2 bg-bg_Secondary text-text_Quaternary">Open
                        Bets</button></div><button
                    className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out text-xs  capitalize whitespace-nowrap rounded py-2 px-3 bg-bg_Secondary text-text_Quaternary cursor-pointer"
                    type="button">Edit Stakes</button>
            </div>
            <div id="openBetsRightSide" title="Open Bets">
                <div className=" flex flex-col w-full  gap-1">
                    <div id="matched_1"
                        className="px-3 py-2 cursor-pointer w-full flex items-center justify-between bg-bg_Secondary rounded ">
                        <span className=" text-text_Quaternary text-xs">Matched Bets</span>
                        <div className=" flex items-center justify-center autoAnimate "><svg
                                xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"
                                viewBox="0 0 512 512" height="12" width="12"
                                fill="var(--color-quaternary)">
                                <path
                                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z">
                                </path>
                            </svg></div>
                    </div>
                    <div className="w-full origin-top scaleVerticalOpen">
                        <div
                            className="w-full font-medium text-sm bg-bg_Quaternary rounded px-4  py-3 shadow text-text_Ternary ">
                            You have no Matched Bets.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default RightDeskSidebar