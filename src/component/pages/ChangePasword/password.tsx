import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { showToasterMessage } from "../../../Framework/utils/constant";
import { useAdminDetails, useChangePassword } from "../../../Framework/login";
import { useUI } from "../../../context/ui.context";
const passwordRegex = /^[a-zA-Z0-9]{6,}$/;

const Password = () => {
  const {userData,loginData} = useUI();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { mutate: changePassword, isError: error } = useChangePassword();
  const togglePasswordVisibility = (setter: { (value: React.SetStateAction<boolean>): void; (arg0: (prev: any) => boolean): void; }) => {
    setter((prev: any) => !prev);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!oldPassword || !newPassword || !confirmPassword) {
      showToasterMessage({messageType:"error",description:"Fields are required"})
     
      return;
    }
    if (newPassword !== confirmPassword) {
      showToasterMessage({messageType:"error",description:"New password and confirm password do not match!"})

    
      return;
    }
    console.log(passwordRegex.test(confirmPassword),"FLAGGSGSG")
    if(!(passwordRegex.test(confirmPassword))){
      showToasterMessage({messageType:"error",description:"Password should contain alphanumeric values"})

    }
    // if (oldPassword !== loginData?.password) {
    //   showToasterMessage({messageType:"error",description:"Incorrect old password!"})

     
    //   return;
    // }
    

    // showToasterMessage({messageType:"success",description:"Password Changed Successfully"})
    const val = {
      UserName: userData?.UserName,
      newpassword:newPassword,
      confirmpassword: confirmPassword,
      currentpassword: oldPassword
     
    }
     changePassword(val);
  };

  return (
    <div className="w-full md:mt-0 lg:overflow-auto lg:w-[54%]" style={{ minHeight: "calc(-110px + 100dvh)" }}>
      <div title="Change Password" className="p-2 space-y-2 mx-2 my-2 rounded-lg bg-bg_Quaternary shadow">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="flex flex-col gap-2 font-lato">
            {[{
              label: "Old Password",
              value: oldPassword,
              setValue: setOldPassword,
              show: showOldPassword,
              setShow: setShowOldPassword,
              name: "oldPassword"
            }, {
              label: "New Password",
              value: newPassword,
              setValue: setNewPassword,
              show: showNewPassword,
              setShow: setShowNewPassword,
              name: "newPassword"
            }, {
              label: "Confirm Password",
              value: confirmPassword,
              setValue: setConfirmPassword,
              show: showConfirmPassword,
              setShow: setShowConfirmPassword,
              name: "confirmPassword"
            }].map(({ label, value, setValue, show, setShow, name }, index) => (
              <div key={"password"+index} className="flex flex-col w-full">
                <div className="ml-1 text-sm">{label}</div>
                <div>
              <div className="w-full h-full">
              <div className=" relative">
                    <span className="px-2 absolute top-1/2 -translate-y-1/2 w-max"  >
                    <RiLockPasswordFill  fill="var(--color-secondary)" size={20}/>
                    
                    </span>
                    <input
                    placeholder={label}
                    name={name}
                    className="block w-full focus:outline-none py-2 bg-bg_BgGray border rounded-lg pl-10 pr-8"
                    readOnly
  onFocus={(e) => e.target.removeAttribute('readOnly')}
                    autoComplete="off"
                    type={show ? "text" : "password"}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                    <span className="px-2 absolute top-1/2 -translate-y-1/2 right-0">
                      <button
                        type="button"
                        className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out undefined  cursor-pointer"
                        onClick={() => togglePasswordVisibility(setShow)}
                      >
                      <IoEyeOutline  fill="var(--color-secondary)" size={20}/>
                      </button>
                    </span>
                  </div>
              </div>
            </div>
                
              </div>
            ))}
           <div className="flex items-center justify-center mt-2 w-full gap-x-2"><button className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out max-w-[180px] p-2 bg-bg_Quaternary mt-2 w-full rounded-lg font-semibold text-text_Primary border border-primary  cursor-pointer " type="button">Cancel</button><button type="submit" className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out max-w-[180px]  disabled:cursor-not-allowed p-2 bg-bg_Primary mt-2 w-full rounded-lg font-semibold text-text_Quaternary border border-primary disabled:opacity-40 flex  items-center justify-center  cursor-pointer "><span>Save</span></button></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Password;
