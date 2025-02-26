import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useUI } from "../../context/ui.context";

interface Props{
  openModal:any;
}
const SignUp_Modal:React.FC<Props> = ({openModal}) => {
  const {setLoginModal} = useUI();
  return (
    <div className="z-2 popUpBoxShadow popUpOpenAnimation  absolute  w-[90%] sm:w-[85%] md:w-[70%] lg:w-[450px] max-w-[450px]  bg-bg_loginPopupBg p-2 xs:p-5  rounded-md">
      <div className="transition-all mb-2 ease-in-out duration-200 hover:scale-105 absolute top-2 right-2 cursor-pointer"
      onClick={()=>openModal(false)}
      >
         <IoIosCloseCircle size={25} 
          />
      
      </div>
      <div className="logo w-full hidden lg:flex items-center justify-center mb-4">
        <img
          src="/assets/images/lion_king.svg"
          alt="logo"
          className=" w-72 h-auto"
          width="100"
          height="100"
        />
      </div>
      <div className="flex gap-6   h-max w-full">
        <div className=" hidden   lg:w-[50%]   w-full rounded-lg overflow-hidden">
          <img
            src="/assets/images/lion_king.svg"
            alt="register banner"
          />
        </div>
        <div title="register" className="flex  flex-col   gap-y-4 w-full ">
          <div className="logo w-full lg:hidden flex items-center justify-center">
            <img src="/assets/images/lion_king.svg" alt="logo" />
          </div>
          <form className="w-full gap-y-4 flex flex-col" autoComplete="off">
            <div title="signUpForm" className=" w-full">
              <div className="flex w-full items-center py-2 bg-bg_BgGray rounded-lg border">
                <span
                  id="dropdown-phone-button"
                  className="flex-shrink-0 z-10 inline-flex items-center pl-2 pr-1 text-sm sm:text-md font-normal text-center"
                >
                  +91
                </span>
                <input
                  id="mobile-no-input"
                  className="block focus:outline-none   w-full font-lato bg-bg_BgGray rounded-none text-text_Ternary  pr-2 text-sm xs:text-md"
                  placeholder="Phone Number"
                  inputMode="numeric"
                  autoComplete="off"
                  type="tel"
                  name="mobileNum"
                  maxLength={10}
                  value=""
                />
                <div className="">
                  <button
                    disabled={true}
                    className=" leading-normal overflow-hidden  duration-150  font-lato-bold  h-fit bg-bg_Primary text-text_Quaternary transition-all ease-in-out text-xs whitespace-nowrap mr-1 py-1 px-3 rounded active:scale-[0.98] active:opacity-95 disabled:bg-bg_Slate500 disabled:opacity-50 font-medium relative flex items-center justify-center  cursor-pointer "
                    type="button"
                  >
                    <span className=" ">Get OTP</span>
                    <span className=" shimmer"></span>
                  </button>
                </div>
              </div>
              <div
                id="phoneNumberValidations"
                className=" flex w-full items-center justify-between mt-1 px-1"
              >
                <span className=" text-xs text-text_Danger"></span>
                <span className=" text-xs text-text_Primary">0/10</span>
              </div>
              <div className="flex w-full items-center border p-1 bg-bg_BgGray rounded-lg mt-2">
                <input
                  id="otpSignUp"
                  className="block  focus:outline-none   w-full font-lato rounded-none py-1 text-text_Ternary  px-2 text-sm xs:text-md bg-bg_BgGray"
                  placeholder="OTP"
                  inputMode="numeric"
                  disabled={true}
                  autoComplete="none"
                  type="tel"
                  name="otp"
                  maxLength={4}
                  value=""
                />
              </div>
              <div
                id="otpTimeCount"
                className=" flex w-full items-center justify-start mt-1 px-1"
              ></div>
              <div className="flex w-full items-center justify-between bg-bg_BgGray rounded-lg p-1 border mt-4">
                <div className=" w-full h-full flex items-center justify-start pl-1">
                  <span className=" mb-1 py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      height="16"
                      width="16"
                      fill="var(--color-primary)"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.300781 20 6 21.300781 6 23 L 6 47 C 6 48.699219 7.300781 50 9 50 L 41 50 C 42.699219 50 44 48.699219 44 47 L 44 23 C 44 21.300781 42.699219 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 25 30 C 26.699219 30 28 31.300781 28 33 C 28 33.898438 27.601563 34.6875 27 35.1875 L 27 38 C 27 39.101563 26.101563 40 25 40 C 23.898438 40 23 39.101563 23 38 L 23 35.1875 C 22.398438 34.6875 22 33.898438 22 33 C 22 31.300781 23.300781 30 25 30 Z"></path>
                    </svg>
                  </span>
                  <span className=" w-full relative h-full">
                    <input
                      id="passwordSignUp"
                      className="block focus:outline-none   w-full h-full py-1 rounded-none text-text_Ternary  px-2 text-sm xs:text-md font-lato bg-bg_BgGray"
                      placeholder="Password"
                      disabled={true}
                      autoComplete="none"
                      type="password"
                      name="password"
                      value=""
                    />
                  </span>
                </div>
                <span className="py-1">
                  <button
                    className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out pr-2 flex items-center justify-center cursor-pointer"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="24"
                      viewBox="0 0 512 512"
                    >
                      <title>Eye</title>
                      <path
                        d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                        fill="none"
                        stroke="var(--color-primary)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                      ></path>
                      <circle
                        cx="256"
                        cy="256"
                        r="80"
                        fill="none"
                        stroke="var(--color-primary)"
                        stroke-miterlimit="10"
                        stroke-width="32"
                      ></circle>
                    </svg>
                  </button>
                </span>
              </div>
              <div className="flex w-full items-center justify-between  bg-bg_BgGray rounded-lg border p-1 mt-4">
                <div className=" w-full h-full flex items-center justify-start pl-1">
                  <span className=" mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      height="16"
                      width="16"
                      fill="var(--color-primary)"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.300781 20 6 21.300781 6 23 L 6 47 C 6 48.699219 7.300781 50 9 50 L 41 50 C 42.699219 50 44 48.699219 44 47 L 44 23 C 44 21.300781 42.699219 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 25 30 C 26.699219 30 28 31.300781 28 33 C 28 33.898438 27.601563 34.6875 27 35.1875 L 27 38 C 27 39.101563 26.101563 40 25 40 C 23.898438 40 23 39.101563 23 38 L 23 35.1875 C 22.398438 34.6875 22 33.898438 22 33 C 22 31.300781 23.300781 30 25 30 Z"></path>
                    </svg>
                  </span>
                  <input
                    id="confirmpasswordSignUp"
                    className="block  focus:outline-none   w-full rounded-none text-text_Ternary  px-2 py-1 text-sm xs:text-md font-lato bg-bg_BgGray"
                    placeholder="Confirm Password"
                    disabled={true}
                    autoComplete="none"
                    type="password"
                    name="conPassword"
                    value=""
                  />
                </div>
                <span>
                  <button
                    className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out  pr-2 flex items-center justify-center cursor-pointer"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="24"
                      viewBox="0 0 512 512"
                    >
                      <title>Eye</title>
                      <path
                        d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                        fill="none"
                        stroke="var(--color-primary)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                      ></path>
                      <circle
                        cx="256"
                        cy="256"
                        r="80"
                        fill="none"
                        stroke="var(--color-primary)"
                        stroke-miterlimit="10"
                        stroke-width="32"
                      ></circle>
                    </svg>
                  </button>
                </span>
              </div>
              <div
                id="passwordValidation"
                className=" flex w-full items-center justify-start mt-1 px-1"
              >
                <span className=" text-xs text-text_Danger font-lato"></span>
              </div>
              <div className="flex w-full items-center justify-between  bg-bg_BgGray rounded-lg border p-1 mt-4">
                <div className=" w-full h-full flex items-center justify-start pl-1">
                  <span className=" mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="var(--color-primary)"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 8v4.172a2 2 0 0 0 .586 1.414l5.71 5.71a2.41 2.41 0 0 0 3.408 0l3.592 -3.592a2.41 2.41 0 0 0 0 -3.408l-5.71 -5.71a2 2 0 0 0 -1.414 -.586h-4.172a2 2 0 0 0 -2 2z"></path>
                      <path d="M18 19l1.592 -1.592a4.82 4.82 0 0 0 0 -6.816l-4.592 -4.592"></path>
                      <path d="M7 10h-.01"></path>
                    </svg>
                  </span>
                  <input
                    id="promocodeSignUp"
                    className="block  focus:outline-none   w-full rounded-none text-text_Ternary  px-2 py-1 text-sm xs:text-md font-lato bg-bg_BgGray"
                    placeholder="Enter Promocode(Optional)"
                    autoComplete="auto"
                    type="text"
                    name="promo"
                    value=""
                  />
                </div>
              </div>
              <div title="registerSubmitBtn" className=" w-full mt-4">
                <button
                  type="submit"
                  className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out w-full text-text_Quaternary bg-bg_RegisterButtonColor rounded-lg font-medium border  text-[12px] xs:text-[15px] py-2 flex items-center justify-center gap-x-2 disabled:bg-bg_RegisterDisabledColor cursor-pointer"
                >
                  <span className=" font-lato-bold font-semibold text-base ">
                    Register
                  </span>
                </button>
              </div>
              <div
                title="registerNowButton"
                className=" w-full flex justify-center items-center text-xs mt-4 md:text-sm lg:text-base"
              >
                <div className="text-text_LoginWith">
                  Already have an account?{" "}
                  <span className="text-text_LoginWith cursor-pointer" onClick={()=>{
                    openModal(false);
                    setLoginModal(true);
                  }}>
                    Login
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp_Modal;
