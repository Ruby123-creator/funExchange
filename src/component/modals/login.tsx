import React from 'react'

const LoginModal = () => {
    const logInWithDemo = () => {
        localStorage.setItem('isLogin', 'true');
        const url = sessionStorage.getItem('url');
        const isLoginRequired = Boolean(localStorage.getItem('isLogin')) || false
        if(isLoginRequired){
            // Redirect to login page
            window.location.href = JSON.parse(url as any);
        }else{
        
        }
    }
  return (
    <div
            className="z-2 popUpOpenAnimation max-w-[450px] bg-bg_loginPopupBg rounded-md">
            {/* <div onclick="closeModal('popupmodal')"
                className="transition-all mb-2 ease-in-out duration-200 hover:scale-105 absolute top-2 right-2">
                <svg height="24" width="24" fill="var(--color-quaternary)" aria-hidden="true" focusable="false"
                    data-prefix="fad" data-icon="circle-xmark" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <g className="fa-duotone-group" id="closeform">
                        <path fill="currentColor"
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z">
                        </path>
                        <path fill="white"
                            d="M209 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47z">
                        </path>
                    </g>
                </svg>
            </div> */}
            <div className="logo w-full hidden lg:flex items-center justify-center mb-4">
                <img src="assets/images/form-logo.webp" alt="logo" className="w-72 h-auto" width="100" height="100" />
            </div>
            <div className="flex gap-10 items-start h-[95%] lg:h-auto w-full">
                <div className="hidden lg:w-[50%] rounded-lg overflow-hidden">
                    <img src="assets/images/form-logo.webp" alt="register banner" />
                </div>
                <div title="mobileLogin" className="flex flex-col items-start gap-y-4 w-full">
                    <div className="logo w-full lg:hidden flex items-center justify-center">
                        <img src="assets/images/form-logo.webp" alt="logo" />
                    </div>
                    <form className="w-full gap-y-4 flex flex-col" autoComplete="on">
                        <div title="loginFormMonileUserIdInput" className="w-full">
                            <div
                                className="font-lato uppercase text-text_ResendOtpColor text-[10px] md:text-xs lg:text-sm ml-1">
                                Phone Number
                            </div>
                            <div className="flex w-full items-center py-1 bg-bg_BgGray rounded-lg border">
                                <span id="dropdown-phone-button"
                                    className="flex-shrink-0 z-10 inline-flex items-center pl-2 pr-1 text-sm sm:text-md font-lato font-normal text-center">+91</span><input
                                    id="mobile-no-input"
                                    className="block focus:outline-none w-full font-lato bg-bg_BgGray text-text_Ternary pr-2 text-sm xs:text-md"
                                    placeholder="895XX6XXXX" autoComplete="phoneNo" type="tel" maxLength={10}
                                    name="mobileNum" value="" /><span className="h-fit">
                                    <div className="w-full h-full relative">
                                        <div className="block z-100 h-full">
                                            <div id="dropdownDefaultButton"
                                                className="w-full cursor-pointer relative hover:undefined font-medium rounded-r-sm min-h-[35px] text-sm pr-6 text-center inline-flex items-center bg-bg_BgGray text-text_Quaternary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="var(--color-primary)"
                                                    width="23" height="23">
                                                    <defs>
                                                        <path id="5985a29c0f6a6c05c0e393b3593aa5c4"
                                                            d="M15.5 1h-8A2.5 2.5 0 0 0 5 3.5v17A2.5 2.5 0 0 0 7.5 23h8a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 15.5 1zm-4 21a1.5 1.5 0 1 1 0-3 1.5 1.5 0 1 1 0 3zm4.5-4H7V4h9v14z">
                                                        </path>
                                                    </defs>
                                                    <use href="#5985a29c0f6a6c05c0e393b3593aa5c4"></use>
                                                </svg><svg
                                                    className="w-5 h-5 ms-3 absolute right-1 transform transition-all ease-in-out duration-200"
                                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" d="m1 1 4 4 4-4"
                                                        fill="var(--color-primary)"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div title="passwordInput" className="w-full font-lato">
                                <div className="text-[10px] text-text_ResendOtpColor ml-1 md:text-xs lg:text-sm">
                                    Password
                                </div>
                                <div className="flex w-full items-center py-2 px-2 bg-bg_BgGray rounded-lg border">
                                    <input id="password-input"
                                        className="block focus:outline-none w-full pr-2 rounded-none text-text_Ternary bg-bg_BgGray text-sm xs:text-md"
                                        placeholder="Password" autoComplete="off" type="password" name="password"
                                        value="" data-nlok-ref-guid="32d7f6e0-ad2d-4ff8-ded5-6a486c5ecae5" />
                                    <div id="norton-idsafe-field-styling-divId" 
                    //                 style="
                    //   height: 16px;
                    //   max-width: 16px;
                    //   vertical-align: top;
                    //   position: absolute;
                    //   top: 212.33749985694885px;
                    //   left: 369.3161109185988px;
                    //   cursor: pointer;
                    //   resize: both;
                    //   z-index: 2147483646;
                    // "
                    >
                                        <img id="norton-idsafe-field-logo-imgId"
                                            src="chrome-extension://admmjipmmciaobhojoghlmleefbicajg/images/npw-badge-icon-locked.svg"
                                            // style="height: 16px; width: 16px; display: block" 
                                            />
                                    </div>
                                    <span className="min-h-[30px] flex items-center justify-center"><svg
                                            xmlns="http://www.w3.org/2000/svg" height="24" width="24"
                                            viewBox="0 0 512 512">
                                            <title>Eye</title>
                                            <path
                                                d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                                fill="none" stroke="var(--color-primary)" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="32"></path>
                                            <circle cx="256" cy="256" r="80" fill="none"
                                                stroke="var(--color-primary)" stroke-miterlimit="10"
                                                stroke-width="32"></circle>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div title="forgotPassword"
                                className="w-full text-start text-xs cursor-pointer underline text-text_ResendOtpColor font-lato md:text-xs lg:text-sm">
                                Log In with OTP?
                            </div>
                        </div>
                        <div title="loginButton" className="w-full">
                            <button type="submit"
                                className="leading-normal relative overflow-hidden transition duration-150 ease-in-out w-full text-text_Quaternary bg-bg_LoginButtonColorAter shadow-lg rounded-md xs:text-[15px] px-5 py-2 flex items-center justify-center gap-x-2 font-lato-bold font-semibold text-base cursor-pointer"
                                data-nlok-ref-guid="0face3d5-3c80-4b7a-e110-8802efec243d">
                                Login
                            </button>
                        </div>
                        <div title="loginButton" className="w-full">
                            <button type="button" onClick={()=>logInWithDemo()}
                                className="leading-normal relative overflow-hidden transition duration-150 ease-in-out w-full text-text_Quaternary bg-bg_LoginButtonColorAter shadow-lg rounded-md xs:text-[15px] px-5 py-2 flex items-center justify-center gap-x-2 font-lato-bold font-semibold text-base cursor-pointer -mt-2">
                                Login With Demo Id
                            </button>
                        </div>
                    </form>
                    <div title="registerNowButton"
                        className="w-full flex justify-center items-center text-xs md:text-sm lg:text-base">
                        <div className="text-text_LoginWith">
                            New User?<span className="text-text_LoginWith cursor-pointer">Create an account</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default LoginModal