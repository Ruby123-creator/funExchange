import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

const Footer: React.FC = () => {
  const divStyle = {
    borderRadius: '10px',
    background: 'linear-gradient(90deg, rgb(23, 22, 22) 0%, rgb(104, 100, 108) 100%)',
  };

  const socialLinks = [{
    title:"",
    icon: <FaTelegramPlane size={25} fill="var(--color-bg-primary)" />
  },
  {
    title:"",
    icon: <IoLogoWhatsapp size={25} fill="var(--color-bg-primary)"/>
  },
  {
    title:"",
    icon: <IoIosMail size={30} fill="var(--color-bg-primary)"/>
  },
  {
    title:"",
    icon: <FaFacebook size={25} fill="var(--color-bg-primary)"/>
  },
  {
    title:"",
    icon: <BsInstagram size={25} fill="var(--color-bg-primary)"/>
  },
]
  return(
    <div id="footer" className="w-full">
    <div className="pb-12 pr-3 pl-3 mt-1 w-full md:pr-0 mb:pb-0 md:pl-0">
        <div id="homeFooter" className="py-5 w-full bg-bg_Quaternary gap-2 rounded-xl md:rounded-none">
            <div className="flex w-full pb-[18px] items-center gap-x-[11px] justify-center">
              {
                (socialLinks||[]).map((item,i)=>{
                  return(
                    <a title={item?.title} href="#" target="_blank" key={`socialLikns${i}`}
                    className="flex items-center justify-center rounded w-[45px] h-[45px] md:w-20 md:h-20">
                      <span className='var(--color-bg-primary)'>                       {item?.icon}
                      </span>
                      </a>
                  )
                })
              }
               
                    
                  
            </div>
            <div id="mobileIcons"
                className="w-full py-[29px] px-2 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-x-[12px] sm:gap-x-[18px] gap-y-[18px]">
                <div className="p-1 flex justify-center items-center">
                    <img src="/assets/images/upi-acoR-VsZ.svg" width="100" height="100"
                        className="h-[34px] sm:h-10 w-full" alt="Upi" loading="lazy" title="Upi" />
                </div>
                <div className="p-1 flex justify-center items-center">
                    <img src="/assets/images/bankTransfer-DttK06Lb.svg" width="100" height="100"
                        className="h-[34px] sm:h-10 w-full" alt="Bank Transfer" loading="lazy"
                        title="Bank Transfer" />
                </div>
                <div className="p-1 flex justify-center items-center">
                    <img src="/assets/images/BeGamble-CGvmhqLb.svg" width="100" height="100"
                        className="h-[34px] sm:h-10 w-full" alt="BeGamble Aware" loading="lazy"
                        title="BeGamble Aware" />
                </div>
                <div className="p-1 flex justify-center items-center">
                    <img src="/assets/images/mga-ISVQiO23.svg" width="100" height="100"
                        className="h-[34px] sm:h-10 w-full" alt="MGA" loading="lazy" title="MGA" />
                </div>
                <div className="p-1 flex justify-center items-center">
                    <img src="/assets/images/corga2-21RtzKol.svg" width="100" height="100"
                        className="h-[34px] sm:h-10 w-full" alt="Ecogra" loading="lazy" title="Ecogra" />
                </div>
                <div className="p-1 flex justify-center items-center">
                    <img src="/assets/images/gamblingCom-B7j01ozS.svg" width="100" height="100"
                        className="h-[34px] sm:h-10 w-full" alt="Gambling Commission" loading="lazy"
                        title="Gambling Commission" />
                </div>
            </div>
            <div id="footerTopDownlodApp"
                className="px-2 rounded gap-2 w-full grid grid-cols-2 sm:flex sm:flex-row justify-center items-center">
                <div id="footerScoreApp"
                    className="w-full max-w-[350px] flex shadow-lg border gap-2 rounded-lg items-center justify-between p-1 pr-3 col-span-1"
                   style={divStyle}
        
      >
                    <div className="flex justify-center items-center gap-x-2">
                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="45" height="45" rx="6" fill="white" fill-opacity="0.2"></rect>
                            <path
                                d="M29.1091 19.4758L31.1164 16.0067C31.2909 15.6685 31.16 15.2539 30.8327 15.0794C30.5164 14.9158 30.1236 15.0139 29.9273 15.3194L27.8764 18.8539C24.7564 17.5339 21.2436 17.5339 18.1236 18.8539L16.0727 15.3194C15.8655 15.003 15.44 14.9048 15.1236 15.1012C14.8182 15.2976 14.72 15.6903 14.8836 16.0067L16.8909 19.4758C13.5091 21.4067 11.3055 24.8867 11 28.7703H35C34.6945 24.8867 32.4909 21.4067 29.1091 19.4758ZM17.5455 25.7703C16.7927 25.7703 16.1818 25.1594 16.1818 24.4067C16.1818 23.6539 16.7927 23.043 17.5455 23.043C18.2982 23.043 18.9091 23.6539 18.9091 24.4067C18.9091 25.1594 18.2982 25.7703 17.5455 25.7703ZM28.4545 25.7703C27.7018 25.7703 27.0909 25.1594 27.0909 24.4067C27.0909 23.6539 27.7018 23.043 28.4545 23.043C29.2073 23.043 29.8182 23.6539 29.8182 24.4067C29.8182 25.1594 29.2073 25.7703 28.4545 25.7703Z"
                                fill="var(--color-andriodIconColor)"></path>
                        </svg>
                        <div className="flex rounded flex-col items-start justify-center text-xs">
                            <span
                                className="w-full flex flex-row justify-between text-text_Quaternary font-normal"><span>Download</span></span><span
                                className="text-text_Quaternary font-semibold whitespace-nowrap flex-nowrap uppercase">Android
                                App</span>
                        </div>
                    </div>
                    <div className="flex rounded flex-col items-start justify-center text-xs">
                        <button
                            className="leading-normal relative overflow-hidden transition duration-150 ease-in-out w-5 h-5 flex items-center justify-center cursor-pointer"
                            type="button">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.625 11.25L9.30429 7.57071C9.34334 7.53166 9.34334 7.46834 9.30429 7.42929L5.625 3.75"
                                    stroke="var(--color-quaternary)" stroke-width="2"
                                    stroke-linecap="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="footerScoreApp"
                    className="col-span-1 w-full flex shadow-lg border max-w-[350px] gap-2 rounded-lg items-center justify-between p-1 pr-3"
                    style={divStyle}
      >
                    <div className="flex justify-center items-center gap-x-2">
                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="45" height="45" rx="6" fill="white" fill-opacity="0.2"></rect>
                            <g clip-path="url(#clip0_1427_847)">
                                <path
                                    d="M26.5 26H29C29.2833 26 29.5207 25.904 29.712 25.712C29.904 25.5207 30 25.2833 30 25V21C30 20.7167 29.904 20.479 29.712 20.287C29.5207 20.0957 29.2833 20 29 20H26.5C26.2167 20 25.9793 20.0957 25.788 20.287C25.596 20.479 25.5 20.7167 25.5 21V25C25.5 25.2833 25.596 25.5207 25.788 25.712C25.9793 25.904 26.2167 26 26.5 26ZM27 24.5V21.5H28.5V24.5H27ZM17 26H19.75C19.9667 26 20.146 25.929 20.288 25.787C20.4293 25.6457 20.5 25.4667 20.5 25.25C20.5 25.0333 20.4293 24.854 20.288 24.712C20.146 24.5707 19.9667 24.5 19.75 24.5H17.5V23.5H19.5C19.7833 23.5 20.021 23.404 20.213 23.212C20.4043 23.0207 20.5 22.7833 20.5 22.5V21C20.5 20.7167 20.4043 20.479 20.213 20.287C20.021 20.0957 19.7833 20 19.5 20H16.75C16.5333 20 16.3543 20.0707 16.213 20.212C16.071 20.354 16 20.5333 16 20.75C16 20.9667 16.071 21.1457 16.213 21.287C16.3543 21.429 16.5333 21.5 16.75 21.5H19V22.5H17C16.7167 22.5 16.479 22.5957 16.287 22.787C16.0957 22.979 16 23.2167 16 23.5V25C16 25.2833 16.0957 25.5207 16.287 25.712C16.479 25.904 16.7167 26 17 26ZM23 22C23.2167 22 23.396 21.929 23.538 21.787C23.6793 21.6457 23.75 21.4667 23.75 21.25C23.75 21.0333 23.6793 20.854 23.538 20.712C23.396 20.5707 23.2167 20.5 23 20.5C22.7833 20.5 22.6043 20.5707 22.463 20.712C22.321 20.854 22.25 21.0333 22.25 21.25C22.25 21.4667 22.321 21.6457 22.463 21.787C22.6043 21.929 22.7833 22 23 22ZM23 25.5C23.2167 25.5 23.396 25.429 23.538 25.287C23.6793 25.1457 23.75 24.9667 23.75 24.75C23.75 24.5333 23.6793 24.354 23.538 24.212C23.396 24.0707 23.2167 24 23 24C22.7833 24 22.6043 24.0707 22.463 24.212C22.321 24.354 22.25 24.5333 22.25 24.75C22.25 24.9667 22.321 25.1457 22.463 25.287C22.6043 25.429 22.7833 25.5 23 25.5ZM15 31C14.45 31 13.9793 30.8043 13.588 30.413C13.196 30.021 13 29.55 13 29V17C13 16.45 13.196 15.9793 13.588 15.588C13.9793 15.196 14.45 15 15 15H18V14C18 13.7167 18.0957 13.479 18.287 13.287C18.479 13.0957 18.7167 13 19 13C19.2833 13 19.521 13.0957 19.713 13.287C19.9043 13.479 20 13.7167 20 14V15H26V14C26 13.7167 26.096 13.479 26.288 13.287C26.4793 13.0957 26.7167 13 27 13C27.2833 13 27.5207 13.0957 27.712 13.287C27.904 13.479 28 13.7167 28 14V15H31C31.55 15 32.021 15.196 32.413 15.588C32.8043 15.9793 33 16.45 33 17V29C33 29.55 32.8043 30.021 32.413 30.413C32.021 30.8043 31.55 31 31 31H15ZM23 17C22.7833 17 22.6043 17.071 22.463 17.213C22.321 17.3543 22.25 17.5333 22.25 17.75C22.25 17.9667 22.321 18.1457 22.463 18.287C22.6043 18.429 22.7833 18.5 23 18.5C23.2167 18.5 23.396 18.429 23.538 18.287C23.6793 18.1457 23.75 17.9667 23.75 17.75C23.75 17.5333 23.6793 17.3543 23.538 17.213C23.396 17.071 23.2167 17 23 17ZM23 29C23.2167 29 23.396 28.9293 23.538 28.788C23.6793 28.646 23.75 28.4667 23.75 28.25C23.75 28.0333 23.6793 27.854 23.538 27.712C23.396 27.5707 23.2167 27.5 23 27.5C22.7833 27.5 22.6043 27.5707 22.463 27.712C22.321 27.854 22.25 28.0333 22.25 28.25C22.25 28.4667 22.321 28.646 22.463 28.788C22.6043 28.9293 22.7833 29 23 29Z"
                                    fill="var(--color-quaternary)"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_1427_847">
                                    <rect width="24" height="24" fill="white" transform="translate(11 10)">
                                    </rect>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="flex rounded flex-col items-start justify-center text-xs">
                            <span
                                className="w-full flex flex-row justify-between text-text_Quaternary font-normal"><span>Download</span></span><span
                                className="text-text_Quaternary font-semibold whitespace-nowrap flex-nowrap uppercase">Score
                                App</span>
                        </div>
                    </div>
                    <div className="flex rounded float-right flex-col items-start justify-center text-xs">
                        <button
                            className="leading-normal relative overflow-hidden transition duration-150 ease-in-out w-5 h-5 flex items-center justify-center cursor-pointer"
                            type="button">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.625 11.25L9.30429 7.57071C9.34334 7.53166 9.34334 7.46834 9.30429 7.42929L5.625 3.75"
                                    stroke="var(--color-quaternary)" stroke-width="2"
                                    stroke-linecap="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex py-3 items-center justify-center">
                <img src="/assets/images/gaming-1--h3c922D.webp" width="100" height="100"
                    className="w-fit h-fit sm:w-[150px] sm:h-auto" alt="footer-logo" loading="lazy"
                    title="Gaming" />
            </div>
        </div>
    </div>
</div>
  )
}
  
;

export default Footer;
