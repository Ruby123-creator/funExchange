import React, { useState } from "react";
import InputComp from "./input";
import { useWithdrawAmount } from "../../../Framework/transfer";
import { useUI } from "../../../context/ui.context";
import { showToasterMessage } from "../../../Framework/utils/constant";

interface Props{
  active:any
}
const BankDetails:React.FC<Props> = ({active}) => {
  const {userData} = useUI();
  const [holderName,setHolderName] = useState('');
  const [bankName,setBankName] = useState('');
  const [accountNumber,setAccountNumber] = useState('');
  const [confirmAccountNumber,setConfirmAccountNumber] = useState('');
  const [ifsc,setIfsc] = useState('');
  const [withdraw,setWithdraw]  = useState('');
 
  const {data,mutate:withdrawVal} = useWithdrawAmount();
   const withdrawAmount =(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();
    if(!holderName || !bankName || !accountNumber || !ifsc || !withdraw){
      return showToasterMessage({messageType:"error" , description:"All the fields are required"});
    }

    if( accountNumber !== confirmAccountNumber){
      return showToasterMessage({messageType:"error", description:"Account number and confirm account number mismatched."})
    }
    const accountDetails =  {
      name: userData?.UserName,
      account_holder_name: holderName,
      bank_name: bankName,
      account_number: accountNumber,
      ifsc: ifsc,
      withdraw: withdraw
  }
      withdrawVal(accountDetails);
      
   }
  return (
    <form className="flex flex-col items-start justify-start w-full gap-y-2">
       <span className="font-lato">
                Please fill in all required fields*
              </span>
      <div className="rounded-lg bg-bg_Quaternary py-2 px-3.5 pb-5 flex flex-col items-start justify-start w-full gap-y-2 ">
        <div className="w-full flex items-start justify-start gap-y-[0.5] flex-col">
          {/* <span className="text-sm mt-1 bg-titleGrd rounded font-roboto shadow-md text-text_Quaternary  px-2 py-1 my-1">
            Available to withdrawal : ₹ 0.00{" "}
          </span> */}
          <InputComp
            label="Amount"
            prefix={"₹"}
            type="number"
            suffix={<span>INR</span>}
            placeholders="Enter Amount"
            setValue = {setWithdraw}
            value={withdraw}
            className="  w-full focus:outline-none py-2  bg-bg_BgGray border rounded-lg "
          />
          <InputComp
            label="IFSC Code"
            placeholders="Enter IFSC Code"
            setValue = {setIfsc}
            maxLength ={11}
            type="text"
            value={ifsc}
            className="  w-full focus:outline-none py-2  bg-bg_BgGray border rounded-lg "
          />
          <InputComp
            label="Account No"
            placeholders="Enter Account Number"
            type="number"
            maxLength ={12}
            
            setValue = {setAccountNumber}
            value={accountNumber}
            className="  w-full focus:outline-none py-2  bg-bg_BgGray border rounded-lg "
          />
           <InputComp
            label="Confirm Account No"
            placeholders="Enter Account Number"
            type="number"
            maxLength ={12}

            setValue = {setConfirmAccountNumber}
            value={confirmAccountNumber}
            className="  w-full focus:outline-none py-2  bg-bg_BgGray border rounded-lg "
          />
         
          <InputComp
            label="Account Name"
            type="text"
          
            placeholders="Enter Account Name"
            setValue = {setHolderName}
            value={holderName}
            className="  w-full focus:outline-none py-2  bg-bg_BgGray border rounded-lg "
          />

          <InputComp
            label="Bank Name"
            type="text"

            placeholders="Enter Bank Name"
            setValue = {setBankName}
            value={bankName}
            className="  w-full focus:outline-none py-2  bg-bg_BgGray border rounded-lg "
          />
        </div>
      </div>
      {/* <div className="flex items-start justify-center gap-x-2">
        <div className="inline-flex items-center">
          <label
            className="relative flex cursor-pointer items-center rounded-full  bg-bg_Quinary "
            htmlFor="blue"
          >
            <input
              className="before:content[''] before:bg-bg_Secondary3 rounded-md peer relative  cursor-pointer appearance-none border border-undefined transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-max before:w-max before:-translate-x-2/4 before:-translate-y-2/4 before:opacity-0 before:transition-opacity checked:border-undefined checked:bg-bg_Success hover:before:opacity-10 h-5 w-5"
              id="blue"
              type="checkbox"
            />
            <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-text_Quaternary opacity-0 transition-opacity peer-checked:opacity-100">
             
            </span>
          </label>
        </div>
        <span className="text-sm text-textColor font-lato font-[400] leading-5">
          I have read and agree with
          <span className="text-text_Primary underline text-sm font-lato font-[400] leading-4 cursor-pointer">
           {" "} the terms of payment and withdrawal policy.
          </span>
        </span>
      </div> */}
      <div className="w-full h-max">
        <button
          disabled={false}
          className=" relative overflow-hidden  transition duration-150 ease-in-out bg-bg_Primary w-full text-text_Quaternary h-10 text-base shadow-lg font-lato rounded-md font-[900] leading-4 disabled:opacity-70 flex gap-x-1 items-center justify-center cursor-pointer"
          type="button"
          onClick={(e)=>withdrawAmount(e)}
        >
          <span>SUBMIT</span>
        </button>
      </div>
    </form>
  );
};

export default BankDetails;
