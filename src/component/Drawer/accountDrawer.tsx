import React from 'react'

const AccountDrawer = () => {
  return (
    <div
                className="fixed transition-all ease-in-out openDrawerFromRight origin-left top-0 right-0 z-50 w-[70%] max-w-sm h-full  overflow-y-auto bg-bg_Quaternary shadow-lg ">
                <ul className=" overflow-y-auto h-max divide-y">
                    <li className="px-3 py-2 flex items-center justify-between">
                        <div className="flex items-center justify-start gap-x-1.5"><span><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="var(--color-iconsColor)" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z">
                                    </path>
                                    <path d="M11 4h2"></path>
                                    <path d="M12 17v.01"></path>
                                </svg></span><span
                                className="font-lato-bold font-semibold text-sm xs:text-base text-text_Ternary ">DEMO</span>
                        </div>
                       
                    </li>
                    <li className="px-3 py-2  flex items-start justify-start flex-col gap-2">
                        <div className="flex items-center justify-start gap-2.5"><span><svg
                                    xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="var(--color-iconsColor)" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M3 21l18 0"></path>
                                    <path d="M3 10l18 0"></path>
                                    <path d="M5 6l7 -3l7 3"></path>
                                    <path d="M4 10l0 11"></path>
                                    <path d="M20 10l0 11"></path>
                                    <path d="M8 14l0 3"></path>
                                    <path d="M12 14l0 3"></path>
                                    <path d="M16 14l0 3"></path>
                                </svg></span><span
                                className="font-lato-bold font-semibold text-sm xs:text-base text-text_Ternary ">Balance
                                Information</span></div>
                        <div className=" grid grid-cols-2 gap-0.5 w-full">
                            <div
                                className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1 col-span-2">
                                <span className="uppercase font-normal text-xxs">Balance</span><span
                                    className=" font-lato text-sm font-medium text-text_Success">₹ 0.00</span>
                            </div>
                            <div
                                className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1 col-span-1">
                                <span className="uppercase font-normal text-xxs">Free Cash</span><span
                                    className=" font-lato text-sm font-medium text-text_Ternary ">₹ 0.00</span>
                            </div>
                            <div
                                className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1 col-span-1">
                                <span className="uppercase font-normal text-xxs">Net Exposure</span><span
                                    className=" font-lato text-sm font-medium text-text_Danger">₹ 0.00</span>
                            </div>
                        </div>
                        <div className="flex col-span-2 items-center justify-center  w-full ">
                            <div id="deposit_withdraw_btn" className="flex items-center justify-center w-full gap-1"><button
                                    className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out  flex bg-none border-none shadow-none w-full cursor-pointer"
                                    type="button"><span
                                        className="text-text_Quaternary capitalize border  flex rounded px-3 py-1 flex-col text-[10px]  hover:opacity-100 w-full font-semibold items-center justify-center  bg-bg_HomeDepositBtnBgColor border-depositBtn "><svg
                                            xmlns="http://www.w3.org/2000/svg" width="21" height="19"
                                            viewBox="0 0 21 19" fill="none">
                                            <path
                                                d="M3.62143 4.52979C3.52275 4.52988 3.42507 4.54945 3.33397 4.58737C3.24287 4.62528 3.16014 4.68079 3.09054 4.75074C3.02094 4.82068 2.96584 4.90368 2.92837 4.99496C2.8909 5.08624 2.87181 5.18402 2.8722 5.28269C2.8724 5.48134 2.95139 5.67179 3.09185 5.81225C3.23232 5.95271 3.42278 6.03171 3.62143 6.03191H16.6423C17.4549 6.03191 18.0115 6.5801 18.0115 7.19078V8.50099C18.0111 8.59998 18.0303 8.69805 18.068 8.78958C18.1057 8.8811 18.1612 8.96425 18.2312 9.03424C18.3012 9.10424 18.3843 9.15969 18.4758 9.19739C18.5674 9.23508 18.6654 9.25429 18.7644 9.2539C18.8631 9.2538 18.9608 9.23424 19.0519 9.19632C19.143 9.1584 19.2257 9.10288 19.2953 9.03293C19.3649 8.96299 19.42 8.87999 19.4575 8.78871C19.4949 8.69743 19.514 8.59966 19.5136 8.50099V7.19078C19.5136 5.6859 18.1796 4.52979 16.6423 4.52979H3.62143Z"
                                                fill="var(--color-quaternary)"></path>
                                            <path
                                                d="M16.6606 7.75177C15.5639 7.75177 14.6603 8.65906 14.6603 9.75583V11.2579C14.6603 12.3547 15.5639 13.262 16.6606 13.262H18.7459C19.8427 13.262 20.75 12.3547 20.75 11.2579V9.75583C20.75 8.65906 19.8427 7.75177 18.7459 7.75177H16.6606ZM16.6606 9.25389H18.7459C19.032 9.25389 19.2478 9.46966 19.2478 9.75583V11.2579C19.2478 11.5441 19.032 11.7599 18.7459 11.7599H16.6606C16.3745 11.7599 16.1587 11.5441 16.1587 11.2579V9.75583C16.1587 9.46966 16.3745 9.25389 16.6606 9.25389Z"
                                                fill="var(--color-quaternary)"></path>
                                            <path
                                                d="M10.2315 13.0663C10.0329 13.0665 9.84242 13.1455 9.70195 13.286C9.56149 13.4265 9.4825 13.6169 9.4823 13.8156V17.7499C9.4825 17.9485 9.56149 18.139 9.70195 18.2794C9.84242 18.4199 10.0329 18.4989 10.2315 18.4991C10.4302 18.4989 10.6206 18.4199 10.7611 18.2794C10.9015 18.139 10.9805 17.9485 10.9807 17.7499V13.8156C10.9805 13.6169 10.9015 13.4265 10.7611 13.286C10.6206 13.1455 10.4302 13.0665 10.2315 13.0663Z"
                                                fill="var(--color-quaternary)"></path>
                                            <path
                                                d="M10.2315 13.0663C10.1327 13.0664 10.0348 13.086 9.94364 13.124C9.85243 13.162 9.76964 13.2177 9.70001 13.2878L7.72179 15.2771C7.58156 15.4177 7.50281 15.6081 7.50281 15.8067C7.50281 16.0053 7.58156 16.1957 7.72179 16.3363C7.79147 16.4063 7.8743 16.4619 7.9655 16.4997C8.05671 16.5376 8.15449 16.5571 8.25325 16.5571C8.35201 16.5571 8.44981 16.5376 8.54101 16.4997C8.63221 16.4619 8.71503 16.4063 8.78471 16.3363L10.7629 14.347C10.8327 14.2771 10.8879 14.1941 10.9255 14.1027C10.9631 14.0114 10.9822 13.9135 10.9819 13.8148C10.9815 13.716 10.9617 13.6183 10.9234 13.5272C10.8852 13.4361 10.8294 13.3535 10.7592 13.2841C10.6188 13.1448 10.4292 13.0665 10.2315 13.0663Z"
                                                fill="var(--color-quaternary)"></path>
                                            <path
                                                d="M10.2353 13.0664C10.1367 13.0659 10.0391 13.085 9.94786 13.1223C9.85667 13.1597 9.77374 13.2147 9.70381 13.2841C9.63357 13.3535 9.57774 13.4361 9.53952 13.5272C9.5013 13.6183 9.48143 13.716 9.48108 13.8148C9.48073 13.9135 9.4999 14.0114 9.53747 14.1027C9.57504 14.1941 9.63028 14.2771 9.70002 14.347L11.6783 16.3363C11.7479 16.4063 11.8308 16.4619 11.922 16.4998C12.0132 16.5376 12.111 16.5571 12.2097 16.5571C12.3085 16.5571 12.4063 16.5376 12.4975 16.4998C12.5887 16.4619 12.6715 16.4063 12.7412 16.3363C12.8819 16.1962 12.9614 16.0061 12.9621 15.8075C12.9628 15.6089 12.8847 15.4182 12.745 15.2771L10.763 13.2878C10.6233 13.1471 10.4335 13.0675 10.2353 13.0664Z"
                                                fill="var(--color-quaternary)"></path>
                                            <path
                                                d="M1.49923 2.62171C1.30058 2.6219 1.11013 2.70089 0.96967 2.84135C0.829205 2.98181 0.750198 3.17227 0.75 3.37091V13.8747C0.75 15.3796 2.08406 16.532 3.6214 16.532H5.75093C5.94957 16.5318 6.14003 16.4528 6.28049 16.3123C6.42095 16.1719 6.49995 15.9814 6.50015 15.7828C6.49995 15.5841 6.42095 15.3937 6.28049 15.2532C6.14003 15.1128 5.94957 15.0338 5.75093 15.0336H3.6214C2.8088 15.0336 2.25214 14.4854 2.25214 13.8747V3.37091C2.25204 3.27224 2.23247 3.17456 2.19455 3.08347C2.15664 2.99237 2.10113 2.90965 2.03118 2.84005C1.96124 2.77045 1.87824 2.71533 1.78696 2.67786C1.69568 2.6404 1.5979 2.62132 1.49923 2.62171ZM18.7644 11.7599C18.6654 11.7595 18.5673 11.7787 18.4758 11.8164C18.3843 11.8541 18.3011 11.9096 18.2311 11.9795C18.1611 12.0495 18.1057 12.1327 18.068 12.2242C18.0303 12.3157 18.0111 12.4138 18.0115 12.5128V13.8747C18.0115 14.4854 17.4548 15.0336 16.6422 15.0336H14.7489C14.5503 15.0338 14.3598 15.1128 14.2193 15.2532C14.0789 15.3937 13.9999 15.5841 13.9997 15.7828C13.9999 15.9814 14.0789 16.1719 14.2193 16.3123C14.3598 16.4528 14.5503 16.5318 14.7489 16.532H16.6422C18.1796 16.532 19.5136 15.3796 19.5136 13.8747V12.5128C19.514 12.4141 19.4949 12.3164 19.4574 12.2251C19.42 12.1338 19.3649 12.0508 19.2953 11.9809C19.2257 11.9109 19.1429 11.8554 19.0518 11.8175C18.9608 11.7796 18.8631 11.76 18.7644 11.7599Z"
                                                fill="var(--color-quaternary)"></path>
                                            <path
                                                d="M3.6214 0.713562C2.08514 0.713543 0.75 1.86619 0.75 3.37088C0.75 4.87556 2.08514 6.03188 3.6214 6.03188C3.82005 6.03168 4.01049 5.95269 4.15095 5.81223C4.29141 5.67177 4.37041 5.48131 4.37061 5.28267C4.37099 5.184 4.35191 5.08622 4.31444 4.99493C4.27697 4.90365 4.22186 4.82067 4.15226 4.75073C4.08266 4.68078 3.99994 4.62526 3.90885 4.58734C3.81775 4.54942 3.72008 4.52986 3.6214 4.52976C2.81475 4.52976 2.25214 3.97492 2.25214 3.37088C2.25214 2.76683 2.81475 2.21197 3.6214 2.21199H14.963C15.4851 2.21199 15.893 2.61991 15.893 3.14205V5.28267C15.8932 5.48131 15.9722 5.67177 16.1127 5.81223C16.2531 5.95269 16.4436 6.03168 16.6422 6.03188C16.7409 6.03227 16.8387 6.01318 16.93 5.97571C17.0212 5.93825 17.1042 5.88314 17.1742 5.81354C17.2441 5.74394 17.2996 5.66122 17.3376 5.57012C17.3755 5.47903 17.395 5.38134 17.3951 5.28267V3.14205C17.3951 1.8093 16.2957 0.713562 14.963 0.713562H3.6214Z"
                                                fill="var(--color-quaternary)"></path>
                                        </svg>deposit</span></button><button
                                    className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out  flex bg-none border-none shadow-none    w-full  cursor-pointer"
                                    type="button"><span
                                        className="text-text_Quaternary capitalize border  flex rounded px-3 py-1 flex-col text-[10px]  hover:opacity-100 w-full font-semibold items-center justify-center  bg-bg_HomeWithdrawBtnBgColor border-withDrawBtn "><svg
                                            xmlns="http://www.w3.org/2000/svg" width="21" height="19"
                                            viewBox="0 0 21 19" fill="none">
                                            <path
                                                d="M3.11825 4.52979C3.01958 4.52988 2.92189 4.54945 2.8308 4.58737C2.7397 4.62528 2.65697 4.68079 2.58737 4.75074C2.51777 4.82068 2.46266 4.90368 2.42519 4.99496C2.38772 5.08624 2.36864 5.18402 2.36902 5.28269C2.36922 5.48134 2.44821 5.67179 2.58868 5.81225C2.72914 5.95271 2.91961 6.03171 3.11825 6.03191H16.1391C16.9517 6.03191 17.5083 6.5801 17.5083 7.19078V8.50099C17.5079 8.59998 17.5272 8.69805 17.5649 8.78958C17.6026 8.8811 17.658 8.96425 17.728 9.03425C17.798 9.10424 17.8811 9.15969 17.9727 9.19739C18.0642 9.23508 18.1623 9.25429 18.2612 9.2539C18.3599 9.2538 18.4576 9.23424 18.5487 9.19632C18.6398 9.1584 18.7225 9.10288 18.7921 9.03293C18.8617 8.96299 18.9168 8.87999 18.9543 8.78871C18.9918 8.69743 19.0108 8.59967 19.0105 8.50099V7.19078C19.0105 5.6859 17.6764 4.52979 16.1391 4.52979H3.11825Z"
                                                fill="var(--color-quaternary)"></path>
                                            <path
                                                d="M16.1575 7.75177C15.0607 7.75177 14.1571 8.65906 14.1571 9.75583V11.2579C14.1571 12.3547 15.0607 13.262 16.1575 13.262H18.2427C19.3395 13.262 20.2468 12.3547 20.2468 11.2579V9.75583C20.2468 8.65906 19.3395 7.75177 18.2427 7.75177H16.1575ZM16.1575 9.25389H18.2427C18.5289 9.25389 18.7447 9.46966 18.7447 9.75583V11.2579C18.7447 11.5441 18.5289 11.7599 18.2427 11.7599H16.1575C15.8713 11.7599 15.6555 11.5441 15.6555 11.2579V9.75583C15.6555 9.46966 15.8713 9.25389 16.1575 9.25389Z"
                                                fill="var(--color-quaternary)"></path>
                                            <path
                                                d="M9.73015 18.4992C9.9288 18.499 10.1193 18.42 10.2597 18.2796C10.4002 18.1391 10.4792 17.9486 10.4794 17.75L10.4794 13.8157C10.4792 13.617 10.4002 13.4266 10.2597 13.2861C10.1193 13.1457 9.9288 13.0667 9.73016 13.0665C9.53151 13.0667 9.34106 13.1457 9.2006 13.2861C9.06013 13.4266 8.98114 13.617 8.98094 13.8157L8.98094 17.75C8.98114 17.9486 9.06013 18.1391 9.2006 18.2796C9.34106 18.42 9.53151 18.499 9.73015 18.4992Z"
                                                fill="var(--color-quaternary)"></path>
                                            <path
                                                d="M9.7302 18.4992C9.82901 18.4991 9.92683 18.4795 10.018 18.4415C10.1092 18.4035 10.192 18.3479 10.2617 18.2778L12.2399 16.2885C12.3801 16.1479 12.4589 15.9574 12.4589 15.7589C12.4589 15.5603 12.3801 15.3698 12.2399 15.2292C12.1702 15.1592 12.0874 15.1037 11.9962 15.0658C11.905 15.0279 11.8072 15.0084 11.7084 15.0084C11.6097 15.0084 11.5119 15.0279 11.4207 15.0658C11.3295 15.1037 11.2466 15.1592 11.177 15.2292L9.19874 17.2185C9.12899 17.2885 9.07376 17.3715 9.03619 17.4628C8.99861 17.5542 8.97945 17.652 8.9798 17.7508C8.98015 17.8495 9.00001 17.9473 9.03823 18.0383C9.07645 18.1294 9.13227 18.212 9.20251 18.2815C9.34285 18.4208 9.53244 18.499 9.7302 18.4992Z"
                                                fill="var(--color-quaternary)"></path>
                                            <path
                                                d="M9.7264 18.4992C9.82495 18.4996 9.92262 18.4806 10.0138 18.4432C10.105 18.4059 10.1879 18.3509 10.2579 18.2814C10.3281 18.212 10.3839 18.1294 10.4222 18.0383C10.4604 17.9473 10.4802 17.8495 10.4806 17.7508C10.4809 17.652 10.4618 17.5542 10.4242 17.4628C10.3866 17.3715 10.3314 17.2885 10.2617 17.2185L8.28341 15.2292C8.21373 15.1592 8.13092 15.1037 8.03971 15.0658C7.94851 15.0279 7.85071 15.0084 7.75195 15.0084C7.65319 15.0084 7.55539 15.0279 7.46419 15.0658C7.37299 15.1037 7.29017 15.1592 7.22049 15.2292C7.07976 15.3693 7.00032 15.5595 6.99961 15.7581C6.9989 15.9566 7.07698 16.1474 7.21671 16.2885L9.19862 18.2778C9.33835 18.4184 9.52812 18.4981 9.7264 18.4992Z"
                                                fill="var(--color-quaternary)"></path>
                                            <path
                                                d="M0.996056 2.62171C0.797411 2.6219 0.606961 2.70089 0.466496 2.84135C0.326031 2.98181 0.247024 3.17227 0.246826 3.37091V13.8747C0.246826 15.3796 1.58089 16.532 3.11823 16.532H5.24776C5.4464 16.5318 5.63686 16.4528 5.77732 16.3123C5.91778 16.1719 5.99678 15.9814 5.99697 15.7828C5.99678 15.5841 5.91778 15.3937 5.77732 15.2532C5.63686 15.1128 5.4464 15.0338 5.24776 15.0336H3.11823C2.30563 15.0336 1.74896 14.4854 1.74896 13.8747V3.37091C1.74886 3.27224 1.7293 3.17456 1.69138 3.08347C1.65346 2.99237 1.59795 2.90965 1.52801 2.84005C1.45807 2.77045 1.37507 2.71533 1.28379 2.67786C1.19251 2.6404 1.09473 2.62132 0.996056 2.62171ZM18.2612 11.7599C18.1622 11.7595 18.0642 11.7787 17.9726 11.8164C17.8811 11.8541 17.798 11.9096 17.728 11.9795C17.658 12.0495 17.6025 12.1327 17.5648 12.2242C17.5271 12.3157 17.5079 12.4138 17.5083 12.5128V13.8747C17.5083 14.4854 16.9517 15.0336 16.1391 15.0336H14.2457C14.0471 15.0338 13.8566 15.1128 13.7162 15.2532C13.5757 15.3937 13.4967 15.5841 13.4965 15.7828C13.4967 15.9814 13.5757 16.1719 13.7162 16.3123C13.8566 16.4528 14.0471 16.5318 14.2457 16.532H16.1391C17.6764 16.532 19.0104 15.3796 19.0104 13.8747V12.5128C19.0108 12.4141 18.9917 12.3164 18.9543 12.2251C18.9168 12.1338 18.8617 12.0508 18.7921 11.9809C18.7225 11.9109 18.6398 11.8554 18.5487 11.8175C18.4576 11.7796 18.3599 11.76 18.2612 11.7599Z"
                                                fill="var(--color-quaternary)"></path>
                                            <path
                                                d="M3.11823 0.713562C1.58197 0.713543 0.246826 1.86619 0.246826 3.37088C0.246826 4.87556 1.58197 6.03188 3.11823 6.03188C3.31687 6.03168 3.50732 5.95269 3.64778 5.81223C3.78824 5.67177 3.86723 5.48131 3.86743 5.28267C3.86782 5.184 3.84873 5.08622 3.81126 4.99494C3.7738 4.90365 3.71869 4.82067 3.64909 4.75073C3.57949 4.68078 3.49677 4.62526 3.40567 4.58734C3.31458 4.54942 3.2169 4.52986 3.11823 4.52976C2.31158 4.52976 1.74896 3.97492 1.74896 3.37088C1.74896 2.76683 2.31158 2.21197 3.11823 2.21199H14.4598C14.9819 2.21199 15.3898 2.61991 15.3898 3.14205V5.28267C15.39 5.48131 15.4691 5.67177 15.6095 5.81223C15.75 5.95269 15.9404 6.03168 16.1391 6.03188C16.2377 6.03227 16.3355 6.01318 16.4268 5.97571C16.5181 5.93825 16.6011 5.88314 16.671 5.81354C16.7409 5.74394 16.7965 5.66122 16.8344 5.57012C16.8723 5.47903 16.8919 5.38134 16.892 5.28267V3.14205C16.892 1.8093 15.7925 0.713562 14.4598 0.713562H3.11823Z"
                                                fill="var(--color-quaternary)"></path>
                                        </svg>withdraw</span></button></div>
                        </div>
                    </li>
                    <div className="flex flex-wrap p-2 w-full gap-2 items-center justify-center font-roboto"></div>
                    <li className="divide-y flex items-start justify-start flex-col"><span
                            className="font-lato-bold font-semibold px-3 py-1 w-full bg-bg_Ternary8 text-xs xs:text-sm text-text_Ternary ">Help
                            &amp; Support</span>
                        <div className="divide-y pl-5 flex items-start justify-start w-full flex-col">
                            <div className="w-full">
                                <div
                                    className="flex transition-all px-0.5 rounded-sm ease-in-out duration-150 hover:bg-bg_Ternary6  active:scale-[99%] items-center justify-start gap-3 w-full py-2 cursor-pointer">
                                    <span className="w-4 h-auto xs:w-5 text-text_Primary"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 24 24" fill="none" stroke="var(--color-iconsColor)"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M8 9h8"></path>
                                            <path d="M8 13h6"></path>
                                            <path
                                                d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z">
                                            </path>
                                        </svg></span><span className="font-medium text-sm xs:text-base">Chat With Us</span>
                                </div>
                            </div>
                            <div className="w-full">
                                <div
                                    className="flex transition-all px-0.5 rounded-sm ease-in-out duration-150 hover:bg-bg_Ternary6  active:scale-[99%] items-center justify-start gap-3 w-full py-2 cursor-pointer">
                                    <span className="w-4 h-auto xs:w-5 text-text_Primary"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 24 24" stroke-width="2" stroke="var(--color-iconsColor)"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                                            <path d="M7 11l5 5l5 -5"></path>
                                            <path d="M12 4l0 12"></path>
                                        </svg></span><span className="font-medium text-sm xs:text-base">Download APK</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="divide-y flex items-start justify-start flex-col"><span
                            className="font-lato-bold font-semibold px-3 py-1 w-full bg-bg_Ternary8 text-xs xs:text-sm text-text_Ternary ">Statements</span>
                        <div className="divide-y pl-5 flex items-start justify-start w-full flex-col">
                            <div className="w-full"><a href="/transactions">
                                    <div
                                        className="flex transition-all px-0.5 rounded-sm ease-in-out duration-150 hover:bg-bg_Ternary6  active:scale-[99%] items-center justify-start gap-3 w-full py-2 cursor-pointer">
                                        <span className="w-4 h-auto xs:w-5 text-text_Primary"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="var(--color-iconsColor)"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M11 16h10"></path>
                                                <path d="M11 16l4 4"></path>
                                                <path d="M11 16l4 -4"></path>
                                                <path d="M13 8h-10"></path>
                                                <path d="M13 8l-4 4"></path>
                                                <path d="M13 8l-4 -4"></path>
                                            </svg></span><span
                                            className="font-medium text-sm xs:text-base">Transactions</span>
                                    </div>
                                </a></div>
                            <div className="w-full"><a href="/open-bets/">
                                    <div
                                        className="flex transition-all px-0.5 rounded-sm ease-in-out duration-150 hover:bg-bg_Ternary6  active:scale-[99%] items-center justify-start gap-3 w-full py-2 cursor-pointer">
                                        <span className="w-4 h-auto xs:w-5 text-text_Primary"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="var(--color-iconsColor)"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path
                                                    d="M17.8 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z">
                                                </path>
                                                <path
                                                    d="M6.2 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z">
                                                </path>
                                                <path
                                                    d="M12 9.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z">
                                                </path>
                                            </svg></span><span className="font-medium text-sm xs:text-base">Open Bets</span>
                                    </div>
                                </a></div>
                            <div className="w-full"><a href="/betting-profit-loss/">
                                    <div
                                        className="flex transition-all px-0.5 rounded-sm ease-in-out duration-150 hover:bg-bg_Ternary6  active:scale-[99%] items-center justify-start gap-3 w-full py-2 cursor-pointer">
                                        <span className="w-4 h-auto xs:w-5 text-text_Primary"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="var(--color-iconsColor)"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path
                                                    d="M4 6m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z">
                                                </path>
                                                <path d="M6 4l0 2"></path>
                                                <path d="M6 11l0 9"></path>
                                                <path
                                                    d="M10 14m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z">
                                                </path>
                                                <path d="M12 4l0 10"></path>
                                                <path d="M12 19l0 1"></path>
                                                <path
                                                    d="M16 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z">
                                                </path>
                                                <path d="M18 4l0 1"></path>
                                                <path d="M18 11l0 9"></path>
                                            </svg></span><span className="font-medium text-sm xs:text-base">Betting Profit
                                            &amp; Loss</span>
                                    </div>
                                </a></div>
                            <div className="w-full"><a href="/account-statement">
                                    <div
                                        className="flex transition-all px-0.5 rounded-sm ease-in-out duration-150 hover:bg-bg_Ternary6  active:scale-[99%] items-center justify-start gap-3 w-full py-2 cursor-pointer">
                                        <span className="w-4 h-auto xs:w-5 text-text_Primary"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="var(--color-iconsColor)"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                                <path
                                                    d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z">
                                                </path>
                                                <path d="M9 7l1 0"></path>
                                                <path d="M9 13l6 0"></path>
                                                <path d="M13 17l2 0"></path>
                                            </svg></span><span className="font-medium text-sm xs:text-base">Account
                                            Statement</span>
                                    </div>
                                </a></div>
                            <div className="w-full"><a href="/transfer-statement">
                                    <div
                                        className="flex transition-all px-0.5 rounded-sm ease-in-out duration-150 hover:bg-bg_Ternary6  active:scale-[99%] items-center justify-start gap-3 w-full py-2 cursor-pointer">
                                        <span className="w-4 h-auto xs:w-5 text-text_Primary"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="var(--color-iconsColor)"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 21v-4a3 3 0 0 1 3 -3h5"></path>
                                                <path d="M9 17l3 -3l-3 -3"></path>
                                                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                                <path d="M5 11v-6a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-9.5"></path>
                                            </svg></span><span className="font-medium text-sm xs:text-base">Transfer
                                            Statement</span>
                                    </div>
                                </a></div>
                        </div>
                    </li>
                    <li className="divide-y flex items-start justify-start flex-col"><span
                            className="font-lato-bold font-semibold px-3 py-1 w-full bg-bg_Ternary8 text-xs xs:text-sm text-text_Ternary ">Account
                            Settings</span>
                        <div className="divide-y pl-5 flex items-start justify-start w-full flex-col">
                            <div className="w-full"><a href="/time-setting">
                                    <div
                                        className="flex transition-all px-0.5 rounded-sm ease-in-out duration-150 hover:bg-bg_Ternary6  active:scale-[99%] items-center justify-start gap-3 w-full py-2 cursor-pointer">
                                        <span className="w-4 h-auto xs:w-5 text-text_Primary"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="var(--color-iconsColor)"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path
                                                    d="M10.5 21h-4.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3">
                                                </path>
                                                <path d="M16 3v4"></path>
                                                <path d="M8 3v4"></path>
                                                <path d="M4 11h10"></path>
                                                <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                                <path d="M18 16.5v1.5l.5 .5"></path>
                                            </svg></span><span className="font-medium text-sm xs:text-base">Time
                                            Settings</span>
                                    </div>
                                </a></div>
                            <div className="w-full"><a href="/settings">
                                    <div
                                        className="flex transition-all px-0.5 rounded-sm ease-in-out duration-150 hover:bg-bg_Ternary6  active:scale-[99%] items-center justify-start gap-3 w-full py-2 cursor-pointer">
                                        <span className="w-4 h-auto xs:w-5 text-text_Primary"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="var(--color-iconsColor)"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path
                                                    d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z">
                                                </path>
                                                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                            </svg></span><span className="font-medium text-sm xs:text-base">Settings</span>
                                    </div>
                                </a></div>
                        </div>
                    </li>
                    <li className="divide-y flex items-start justify-start flex-col"><span
                            className="font-lato-bold font-semibold px-3 py-1 w-full bg-bg_Ternary8 text-xs xs:text-sm text-text_Ternary ">Legal
                            &amp; Compliance</span>
                        <div className="divide-y pl-5 flex items-start justify-start w-full flex-col">
                            <div className="w-full"><a href="/rules-regulations">
                                    <div
                                        className="flex transition-all px-0.5 rounded-sm ease-in-out duration-150 hover:bg-bg_Ternary6  active:scale-[99%] items-center justify-start gap-3 w-full py-2 cursor-pointer">
                                        <span className="w-4 h-auto xs:w-5 text-text_Primary"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="var(--color-iconsColor)"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path
                                                    d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2">
                                                </path>
                                                <path
                                                    d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z">
                                                </path>
                                                <path d="M9 12h6"></path>
                                                <path d="M9 16h6"></path>
                                            </svg></span><span className="font-medium text-sm xs:text-base">Rules &amp;
                                            Regulations</span>
                                    </div>
                                </a></div>
                            <div className="w-full"><a href="/exclusion-policy">
                                    <div
                                        className="flex transition-all px-0.5 rounded-sm ease-in-out duration-150 hover:bg-bg_Ternary6  active:scale-[99%] items-center justify-start gap-3 w-full py-2 cursor-pointer">
                                        <span className="w-4 h-auto xs:w-5 text-text_Primary"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="var(--color-iconsColor)"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M8 13v-7.5a1.5 1.5 0 0 1 3 0v6.5"></path>
                                                <path d="M11 5.5v-2a1.5 1.5 0 1 1 3 0v8.5"></path>
                                                <path d="M14 5.5a1.5 1.5 0 0 1 3 0v6.5"></path>
                                                <path
                                                    d="M17 7.5a1.5 1.5 0 0 1 3 0v8.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47">
                                                </path>
                                            </svg></span><span className="font-medium text-sm xs:text-base">Exclusion
                                            Policy</span>
                                    </div>
                                </a></div>
                            <div className="w-full"><a href="/responsible-gambling">
                                    <div
                                        className="flex transition-all px-0.5 rounded-sm ease-in-out duration-150 hover:bg-bg_Ternary6  active:scale-[99%] items-center justify-start gap-3 w-full py-2 cursor-pointer">
                                        <span className="w-4 h-auto xs:w-5 text-text_Primary"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="var(--color-iconsColor)"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                                <path d="M9 12l2 2l4 -4"></path>
                                            </svg></span><span className="font-medium text-sm xs:text-base">Responsible
                                            Gambling</span>
                                    </div>
                                </a></div>
                            <div className="w-full"><a href="/privacy-policy">
                                    <div
                                        className="flex transition-all px-0.5 rounded-sm ease-in-out duration-150 hover:bg-bg_Ternary6  active:scale-[99%] items-center justify-start gap-3 w-full py-2 cursor-pointer">
                                        <span className="w-4 h-auto xs:w-5 text-text_Primary"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="var(--color-iconsColor)"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path
                                                    d="M15.04 19.745c-.942 .551 -1.964 .976 -3.04 1.255a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 .195 6.015">
                                                </path>
                                                <path d="M19 16v3"></path>
                                                <path d="M19 22v.01"></path>
                                            </svg></span><span className="font-medium text-sm xs:text-base">Privacy
                                            Policy</span>
                                    </div>
                                </a></div>
                        </div>
                    </li>
                    <li className="divide-y flex items-start justify-start flex-col"><span
                            className="font-lato-bold font-semibold px-3 py-1 w-full bg-bg_Ternary8 text-xs xs:text-sm text-text_Ternary ">Account
                            actions</span>
                        <div className="divide-y pl-5 flex items-start justify-start w-full flex-col">
                            <div className="w-full"><a href="/change-password">
                                    <div
                                        className="flex transition-all px-0.5 rounded-sm ease-in-out duration-150 hover:bg-bg_Ternary6  active:scale-[99%] items-center justify-start gap-3 w-full py-2 cursor-pointer">
                                        <span className="w-4 h-auto xs:w-5 text-text_Primary"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="var(--color-iconsColor)"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path
                                                    d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z">
                                                </path>
                                                <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                                                <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
                                            </svg></span><span className="font-medium text-sm xs:text-base">Change
                                            Password</span>
                                    </div>
                                </a></div>
                            <div className="w-full">
                                <div 
                                    className="flex transition-all px-0.5 rounded-sm ease-in-out duration-150 hover:bg-bg_Ternary6  active:scale-[99%] items-center justify-start gap-3 w-full py-2 cursor-pointer">
                                    <span className="w-4 h-auto xs:w-5 text-text_Primary"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 24 24" stroke-width="2" stroke="var(--color-iconsColor)"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path
                                                d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2">
                                            </path>
                                            <path d="M9 12h12l-3 -3"></path>
                                            <path d="M18 15l3 -3"></path>
                                        </svg>
                                    </span>
                                    <span className="font-medium text-sm xs:text-base">Sign Out
                                    </span>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li className=" px-3 py-2"><span
                            className="flex text-center text-text_Primary text-sm xs:text-base font-medium">Register online
                            and play online</span></li>
                    <li className="p-1">
                        <div className="flex flex-col gap-1 p-3 items-center bg-bg_contactUsCard rounded"><span
                                className="text-text_Quaternary font-semibold">Contact Us</span>
                            <div className="flex w-full items-center justify-center gap-1 "><a title="whatsapp"
                                    href="https://wa.me/0000000000?text=Hello%20there!" target="_blank"
                                    className="flex items-center justify-center gap-1 w-10 h-10 "><svg width="45"
                                        height="45" viewBox="0 0 45 45" fill="var(--color-quaternary)"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="45" height="45" rx="6" fill="var(--color-quaternary)"
                                            fill-opacity="0.2"></rect>
                                        <g clip-path="url(#clip0_1217_680)">
                                            <path
                                                d="M22.503 10H22.497C15.8805 10 10.5 15.382 10.5 22C10.5 24.625 11.346 27.058 12.7845 29.0335L11.289 33.4915L15.9015 32.017C17.799 33.274 20.0625 34 22.503 34C29.1195 34 34.5 28.6165 34.5 22C34.5 15.3835 29.1195 10 22.503 10ZM29.4855 26.9455C29.196 27.763 28.047 28.441 27.1305 28.639C26.5035 28.7725 25.6845 28.879 22.9275 27.736C19.401 26.275 17.13 22.6915 16.953 22.459C16.7835 22.2265 15.528 20.5615 15.528 18.8395C15.528 17.1175 16.4025 16.279 16.755 15.919C17.0445 15.6235 17.523 15.4885 17.982 15.4885C18.1305 15.4885 18.264 15.496 18.384 15.502C18.7365 15.517 18.9135 15.538 19.146 16.0945C19.4355 16.792 20.1405 18.514 20.2245 18.691C20.31 18.868 20.3955 19.108 20.2755 19.3405C20.163 19.5805 20.064 19.687 19.887 19.891C19.71 20.095 19.542 20.251 19.365 20.47C19.203 20.6605 19.02 20.8645 19.224 21.217C19.428 21.562 20.133 22.7125 21.171 23.6365C22.5105 24.829 23.5965 25.21 23.985 25.372C24.2745 25.492 24.6195 25.4635 24.831 25.2385C25.0995 24.949 25.431 24.469 25.7685 23.9965C26.0085 23.6575 26.3115 23.6155 26.6295 23.7355C26.9535 23.848 28.668 24.6955 29.0205 24.871C29.373 25.048 29.6055 25.132 29.691 25.2805C29.775 25.429 29.775 26.1265 29.4855 26.9455Z"
                                                fill="var(--color-quaternary)"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1217_680">
                                                <rect width="24" height="24" fill="var(--color-quaternary)"
                                                    transform="translate(10.5 10)"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg></a><a title="Instagram" href="https://instagram.com/_u/localhost"
                                    target="_blank" className="flex items-center justify-center gap-1 w-10 h-10 "><svg
                                        width="45" height="45" viewBox="0 0 45 45" fill="var(--color-quaternary)"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="45" height="45" rx="6" fill="var(--color-quaternary)"
                                            fill-opacity="0.2"></rect>
                                        <g clip-path="url(#clip0_1217_692)">
                                            <path
                                                d="M28.3503 10H18.6497C14.7074 10 11.5 13.2074 11.5 17.1497V26.8503C11.5 30.7926 14.7074 34 18.6497 34H28.3503C32.2926 34 35.5 30.7926 35.5 26.8503V17.1497C35.5 13.2074 32.2926 10 28.3503 10ZM33.0856 26.8503C33.0856 29.4655 30.9655 31.5856 28.3503 31.5856H18.6497C16.0345 31.5856 13.9144 29.4655 13.9144 26.8503V17.1497C13.9144 14.5345 16.0345 12.4144 18.6497 12.4144H28.3503C30.9655 12.4144 33.0856 14.5345 33.0856 17.1497V26.8503Z"
                                                fill="var(--color-quaternary)"></path>
                                            <path
                                                d="M23.5002 15.7927C20.0775 15.7927 17.293 18.5773 17.293 21.9999C17.293 25.4226 20.0775 28.2072 23.5002 28.2072C26.9229 28.2072 29.7075 25.4226 29.7075 21.9999C29.7075 18.5773 26.9229 15.7927 23.5002 15.7927ZM23.5002 25.7928C21.4055 25.7928 19.7074 24.0947 19.7074 22C19.7074 19.9052 21.4055 18.2071 23.5002 18.2071C25.595 18.2071 27.2931 19.9052 27.2931 22C27.2931 24.0947 25.5949 25.7928 23.5002 25.7928Z"
                                                fill="var(--color-quaternary)"></path>
                                            <path
                                                d="M29.7193 17.3267C30.5408 17.3267 31.2067 16.6608 31.2067 15.8393C31.2067 15.0179 30.5408 14.352 29.7193 14.352C28.8979 14.352 28.2319 15.0179 28.2319 15.8393C28.2319 16.6608 28.8979 17.3267 29.7193 17.3267Z"
                                                fill="var(--color-quaternary)"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1217_692">
                                                <rect width="24" height="24" fill="var(--color-quaternary)"
                                                    transform="translate(11.5 10)"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg></a><a title="Telegram" href="https://t.me/localhost" target="_blank"
                                    className="flex items-center justify-center gap-1 w-10 h-10 "><svg width="45"
                                        height="45" viewBox="0 0 45 45" fill="var(--color-quaternary)"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="45" height="45" rx="6" fill="var(--color-quaternary)"
                                            fill-opacity="0.2"></rect>
                                        <g clip-path="url(#clip0_1217_675)">
                                            <path
                                                d="M18.4172 25.181L18.0202 30.765C18.5882 30.765 18.8342 30.521 19.1292 30.228L21.7922 27.683L27.3102 31.724C28.3222 32.288 29.0352 31.991 29.3082 30.793L32.9302 13.821L32.9312 13.82C33.2522 12.324 32.3902 11.739 31.4042 12.106L10.1142 20.257C8.66118 20.821 8.68318 21.631 9.86718 21.998L15.3102 23.691L27.9532 15.78C28.5482 15.386 29.0892 15.604 28.6442 15.998L18.4172 25.181Z"
                                                fill="var(--color-quaternary)"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1217_675">
                                                <rect width="24" height="24" fill="var(--color-quaternary)"
                                                    transform="translate(9 10)"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg></a><a title="Facebook" href="https://www.facebook.com/gemexch"
                                    target="_blank" className="flex items-center justify-center gap-1 w-10 h-10 "><svg
                                        width="45" height="45" viewBox="0 0 45 45" fill="var(--color-quaternary)"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="45" height="45" rx="6" fill="var(--color-quaternary)"
                                            fill-opacity="0.2"></rect>
                                        <path
                                            d="M34 22.0301C34 15.3895 28.624 10 22 10C15.376 10 10 15.3895 10 22.0301C10 27.8526 14.128 32.7007 19.6 33.8195V25.6391H17.2V22.0301H19.6V19.0226C19.6 16.7008 21.484 14.812 23.8 14.812H26.8V18.4211H24.4C23.74 18.4211 23.2 18.9624 23.2 19.6241V22.0301H26.8V25.6391H23.2V34C29.26 33.3985 34 28.2737 34 22.0301Z"
                                            fill="var(--color-quaternary)"></path>
                                    </svg></a><a title="Gmail" href="mailto:" target="_blank"
                                    className="flex items-center justify-center gap-1 w-10 h-10 "><svg width="45"
                                        height="45" viewBox="0 0 45 45" fill="var(--color-quaternary)"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="45" height="45" rx="6" fill="var(--color-quaternary)"
                                            fill-opacity="0.2"></rect>
                                        <path d="M25.8472 22.1105L32.763 26.4842V17.5474L25.8472 22.1105Z"
                                            fill="var(--color-quaternary)"></path>
                                        <path d="M12.2368 17.5474V26.4842L19.1526 22.1105L12.2368 17.5474Z"
                                            fill="var(--color-quaternary)"></path>
                                        <path
                                            d="M31.4843 14.9421H13.5159C12.8843 14.9421 12.3633 15.4158 12.2686 16.0316L22.5001 22.7737L32.7317 16.0316C32.637 15.4158 32.1001 14.9421 31.4843 14.9421Z"
                                            fill="var(--color-quaternary)"></path>
                                        <path
                                            d="M24.6631 22.8842L22.8473 24.0842C22.7368 24.1474 22.6263 24.1947 22.5 24.1947C22.3737 24.1947 22.2473 24.1632 22.1526 24.0842L20.3368 22.8842L12.2842 27.9842C12.3789 28.6 12.9 29.0579 13.5315 29.0737H31.5C32.1315 29.0737 32.6526 28.6158 32.7473 27.9842L24.6631 22.8842Z"
                                            fill="var(--color-quaternary)"></path>
                                    </svg></a></div>
                        </div>
                    </li>
                </ul>
            </div>
  )
}

export default AccountDrawer