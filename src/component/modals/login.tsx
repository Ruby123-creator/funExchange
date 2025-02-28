import { Dropdown, MenuProps, Modal } from 'antd';
import React, { useState } from 'react'
import { useUI } from '../../context/ui.context';
import { FaMobileAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoIosCloseCircle } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';



  
const LoginModal = () => {
    const {loginModal, setLoginModal} = useUI();
     const [login,setLogin] = useState("userId");
    const [mobileNo,setMobileNo] = useState('');
    const [password,setPassword] = useState('');
    const [userId,setUserId] = useState('');
    const items: MenuProps['items'] = [
        {
          key: '1',
          label: <li className=" border-b-[1px] pb-1" onClick={()=>setLogin('mobile')}><button type="button" className="w-full py-1 grid grid-cols-4"><span className=" col-span-1 flex items-center justify-center ">
            <FaMobileAlt fill={login === "userId" ? "#6B7280" :"var(--color-primary)"} size={20}/>
         
            </span><span className={` col-span-3 pl-2 font-normal f] font-lato text-start ${login === 'userId'?'text-gray-500':'text-text_Primary'}  text-red-600  `}>Mobile Number</span></button></li>,
        },
        {
          key: '2',
          label: <li className="pb-1" onClick={()=>setLogin('userId')}><button type="button" className="w-full py-1 grid grid-cols-4"><span className=" col-span-1 flex items-center justify-center ">
            <FaUser  fill={login === "userId" ? "var(--color-primary)" :"#6B7280"} size={20}/>
            </span><span className={ `col-span-3 pl-2 font-normal f] ${login === 'userId'?'text-text_Primary':' text-gray-500'} font-lato text-start text-red-600  `}>User Id</span></button></li>,
        },
       
      ];
    const handleLogin = (e:any) => {
        e.preventDefault();
        const envMobile = process.env.REACT_APP_MOBILE;
        const envPassword = process.env.REACT_APP_PASSWORD;
        const envUserId = process.env.REACT_APP_USERID;
        if ((login === 'userId'? envUserId === userId :mobileNo === envMobile) && password === envPassword) {
            localStorage.setItem('isLogin', 'true');
           localStorage.setItem('credential',JSON.stringify({
            mobile:mobileNo,
            userId:userId,
            password:password
           }))
           window.location.reload();

        } else {
          alert("Invalid mobile number or password");
        }
      };
    const logInWithDemo = () => {
        localStorage.setItem('isLogin', 'true');
        window.location.reload();
        
        // const url = sessionStorage.getItem('url');
        // const isLoginRequired = Boolean(localStorage.getItem('isLogin')) || false
        // if(isLoginRequired){
        //     // Redirect to login page
        //     window.location.href = JSON.parse(url as any);
        // }else{
        
        // }
    }
  return (
    <Modal
    open={loginModal}
    footer={null}
    closeIcon={false}
    onCancel={() => setLoginModal(false)}
  >
   <div
            className="z-2 popUpBoxShadow popUpOpenAnimation  absolute  w-[90%] sm:w-[85%] md:w-[70%] lg:w-[450px] max-w-[450px]  bg-bg_loginPopupBg p-2 xs:p-5  rounded-md">
             <div className="transition-all mb-2 ease-in-out duration-200 hover:scale-105 absolute top-2 right-2 cursor-pointer"
             onClick={()=>setLoginModal(false)}
             >
                    <IoIosCloseCircle size={25} 
                     />
                 
                 </div>
            <div className="logo w-full hidden lg:flex items-center justify-center mb-4">
                <img src="assets/images/lion_king.svg" alt="logo" className="w-72 h-auto" width="100" height="100" />
            </div>
            <div className="flex gap-10 items-start h-[95%] lg:h-auto w-full">
                <div className="hidden lg:w-[50%] rounded-lg overflow-hidden">
                    <img src="assets/images/lion_king.svg" alt="register banner" />
                </div>
                <div title="mobileLogin" className="flex flex-col items-start gap-y-4 w-full">
                    <div className="logo w-full lg:hidden flex items-center justify-center">
                        <img src="assets/images/lion_king.svg" alt="logo" />
                    </div>
                    <form className="w-full gap-y-4 flex flex-col" autoComplete="off">
                        <div title="loginFormMonileUserIdInput" className="w-full">
                            <div
                                className="font-lato uppercase text-text_ResendOtpColor text-[10px] md:text-xs lg:text-sm ml-1">
                                    {
                                        login === "userId" ? "USER ID":"PHONE NUMBER"
                                    }
                            </div>
                            <div className="flex w-full items-center py-1 bg-bg_BgGray rounded-lg border">
                                {
                                    login === "userId" ? <input
                                    id="mobile-no-input"
                                    className="block focus:outline-none w-full font-lato px-2 bg-bg_BgGray text-text_Ternary pr-2 text-sm xs:text-md"
                                    placeholder="USER ID" autoComplete="userId" type="text" maxLength={10}
                                    name="userId" value={userId} onChange={(e)=>setUserId(e.target.value)} />:<>
                                    <span id="dropdown-phone-button"
                                    className="flex-shrink-0 z-10 inline-flex items-center pl-2 pr-1 text-sm sm:text-md font-lato font-normal text-center">+91</span>
                                    <input
                                    id="mobile-no-input"
                                    className="block focus:outline-none w-full font-lato bg-bg_BgGray text-text_Ternary pr-2 text-sm xs:text-md"
                                    placeholder="895XX6XXXX" autoComplete="off" type="tel" maxLength={10}
                                    name="mobileNum" value={mobileNo} onChange={(e)=>setMobileNo(e.target.value)} />
                                    
                                  
                                    </>
                                }
                                  <span className="h-fit">
                                    <div className="w-full h-full relative">
                                    <Dropdown menu={{ items }} placement="bottom">
                                    <div className="block z-100 h-full">
                                            <div id="dropdownDefaultButton"
                                                className="w-full cursor-pointer relative hover:undefined font-medium rounded-r-sm min-h-[35px] text-sm pr-6 text-center inline-flex items-center bg-bg_BgGray text-text_Quaternary">
                                                    {
                                                        login === 'userId' ?<FaUser size={20} fill="var(--color-primary)"/>:<FaMobileAlt size={20} fill="var(--color-primary)"/>
                                                    }
                                               <svg
                                                    className="w-5 h-5 ms-3 absolute right-1 transform transition-all ease-in-out duration-200"
                                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" d="m1 1 4 4 4-4"
                                                        fill="var(--color-primary)"></path>
                                                </svg>
                                            </div>
                                        </div>
      </Dropdown>
                                        
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
                                        value={password} onChange={(e)=>setPassword(e.target.value)} data-nlok-ref-guid="32d7f6e0-ad2d-4ff8-ded5-6a486c5ecae5" />
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
                                       
                                    </div>
                                    <span className="min-h-[30px] flex items-center justify-center">
                                        <IoEyeOutline fill="none" stroke="var(--color-primary)" />
                                       
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
                                data-nlok-ref-guid="0face3d5-3c80-4b7a-e110-8802efec243d" 
                                onClick={(e)=>handleLogin(e)}
                                >
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
  </Modal>
    
  )
}

export default LoginModal