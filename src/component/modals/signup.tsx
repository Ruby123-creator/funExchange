import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useUI } from "../../context/ui.context";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

interface Props {
  openModal: any;
}

const SignUp_Modal: React.FC<Props> = ({ openModal }) => {
  const { setLoginModal } = useUI();

  // State for input fields
  const [mobileNum, setMobileNum] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [promo, setPromo] = useState("");

  return (
    <div className="z-2 popUpBoxShadow popUpOpenAnimation absolute w-[90%] sm:w-[85%] md:w-[70%] lg:w-[450px] max-w-[450px] bg-bg_loginPopupBg p-2 xs:p-5 rounded-md">
      {/* Close Button */}
      <div
        className="transition-all mb-2 ease-in-out duration-200 hover:scale-105 absolute top-2 right-2 cursor-pointer"
        onClick={() => openModal(false)}
      >
        <IoIosCloseCircle size={25} />
      </div>

      {/* Logo */}
      <div className="logo w-full hidden lg:flex items-center justify-center mb-4">
        <img
          src="/assets/images/lion_king.svg"
          alt="logo"
          className="w-72 h-auto"
          width="100"
          height="100"
        />
      </div>

      <div className="flex gap-6 h-max w-full">
        {/* Left Side Image (For Large Screens) */}
        <div className="hidden lg:w-[50%] w-full rounded-lg overflow-hidden">
          <img src="/assets/images/lion_king.svg" alt="register banner" />
        </div>

        {/* Form Section */}
        <div title="register" className="flex flex-col gap-y-4 w-full">
          {/* Logo for Small Screens */}
          <div className="logo w-full lg:hidden flex items-center justify-center">
            <img src="/assets/images/lion_king.svg" alt="logo" />
          </div>

          <form className="w-full gap-y-4 flex flex-col" autoComplete="off">
            <div title="signUpForm" className="w-full">
            <div className="flex w-full items-center py-2 bg-bg_BgGray rounded-lg border">
                <span
                  id="dropdown-phone-button"
                  className="flex-shrink-0 z-10 inline-flex items-center pl-2 pr-1 text-sm sm:text-md font-normal text-center"
                >
                  +91
                </span>
                <input
                  id="mobile-no-input"
                  className="block focus:outline-none w-full font-lato bg-bg_BgGray text-text_Ternary pr-2 text-sm xs:text-md"
                  placeholder="Phone Number"
                  inputMode="numeric"
                  autoComplete="off"
                  type="tel"
                  name="mobileNum"
                  maxLength={10}
                  value={mobileNum}
                  onChange={(e) => setMobileNum(e.target.value)}
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
             
              {/* OTP Input */}
              <div className="flex w-full items-center border p-1 bg-bg_BgGray rounded-lg mt-2">
                <input
                  id="otpSignUp"
                  className="block focus:outline-none w-full py-1 px-2 text-sm xs:text-md bg-bg_BgGray text-text_Ternary"
                  placeholder="OTP"
                  inputMode="numeric"
                  disabled={mobileNum.length !== 10}
                  autoComplete="off"
                  type="tel"
                  name="otp"
                  maxLength={4}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>

              <div className="flex w-full items-center justify-between  bg-bg_BgGray rounded-lg border p-1 mt-4">
                <div className=" w-full h-full flex items-center justify-start pl-1">
                  <span className=" mb-0">
                   <RiLockPasswordFill fill="var(--color-primary)" size={20}/>
                  </span>
                  <input
                  id="passwordSignUp"
                  className="block focus:outline-none w-full py-1 px-2 text-sm xs:text-md bg-bg_BgGray text-text_Ternary"
                  placeholder="Password"
                  disabled={otp.length !== 4}
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                </div>
              </div>
             
              <div className="flex w-full items-center justify-between  bg-bg_BgGray rounded-lg border p-1 mt-4">
                <div className=" w-full h-full flex items-center justify-start pl-1">
                  <span className=" mb-0">
                   <RiLockPasswordFill fill="var(--color-primary)" size={20}/>
                  </span>
                  <input
                  id="confirmpasswordSignUp"
                  className="block focus:outline-none w-full py-1 px-2 text-sm xs:text-md bg-bg_BgGray text-text_Ternary"
                  placeholder="Confirm Password"
                  disabled={password.length < 6}
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                </div>
              </div>
             
              <div className="flex w-full items-center justify-between  bg-bg_BgGray rounded-lg border p-1 mt-4">
                <div className=" w-full h-full flex items-center justify-start pl-1">
                  <span className=" mb-0">
                   <MdOutlineLocalOffer fill="var(--color-primary)" size={20}/>
                  </span>
                  <input
                  id="promocodeSignUp"
                  className="block focus:outline-none w-full py-1 px-2 text-sm xs:text-md bg-bg_BgGray text-text_Ternary"
                  placeholder="Enter Promocode (Optional)"
                  type="text"
                  name="promo"
                  value={promo}
                  onChange={(e) => setPromo(e.target.value)}
                />
                </div>
              </div>
           

              {/* Register Button */}
              <div title="registerSubmitBtn" className="w-full mt-4">
                <button
                  type="submit"
                  disabled={
                    mobileNum.length !== 10 ||
                    otp.length !== 4 ||
                    password.length < 6 ||
                    password !== confirmPassword
                  }
                  className="w-full bg-bg_RegisterButtonColor text-text_Quaternary rounded-lg font-medium border py-2 flex items-center justify-center gap-x-2 disabled:bg-bg_RegisterDisabledColor cursor-pointer"
                >
                  <span className="font-lato-bold font-semibold text-base">
                    Register
                  </span>
                </button>
              </div>

              {/* Login Redirect */}
              <div
                title="registerNowButton"
                className="w-full flex justify-center items-center text-xs mt-4 md:text-sm lg:text-base"
              >
                <div className="text-text_LoginWith">
                  Already have an account?{" "}
                  <span
                    className="text-text_LoginWith cursor-pointer"
                    onClick={() => {
                      openModal(false);
                      setLoginModal(true);
                    }}
                  >
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
