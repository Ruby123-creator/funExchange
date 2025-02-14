import React from "react";
import InputComp from "./input";

interface Props{
  active:any
}
const BankDetails:React.FC<Props> = ({active}) => {

  return (
    <form className="flex flex-col items-start justify-start w-full gap-y-2">
      <div className="rounded-lg bg-bg_Quaternary py-2 px-3.5 pb-5 flex flex-col items-start justify-start w-full gap-y-2 ">
        <div className="w-full flex items-start justify-start gap-y-[0.5] flex-col">
          <span className="text-sm mt-1 bg-titleGrd rounded font-roboto shadow-md text-text_Quaternary  px-2 py-1 my-1">
            Available to withdrawal : ₹ 0.00{" "}
          </span>
          <InputComp
            label="Amount"
            prefix={"₹"}
            suffix={<span>INR</span>}
            placeholders="Enter Amount"
            value={""}
            className="  w-full focus:outline-none py-2  bg-bg_BgGray border rounded-lg "
          />
          <InputComp
            label="IFSC Code"
            placeholders="Enter IFSC Code"
            value={""}
            className="  w-full focus:outline-none py-2  bg-bg_BgGray border rounded-lg "
          />
          <InputComp
            label="Account No"
            placeholders="Enter Account Number"
            value={""}
            className="  w-full focus:outline-none py-2  bg-bg_BgGray border rounded-lg "
          />
          {
            !active ?  <InputComp
            label="Confirm Account No"
            placeholders="Enter Account Number"
            value={""}
            className="  w-full focus:outline-none py-2  bg-bg_BgGray border rounded-lg "
          />:""
          }
         
          <InputComp
            label="Account Name"
          
            placeholders="Enter Account Name"
            value={""}
            className="  w-full focus:outline-none py-2  bg-bg_BgGray border rounded-lg "
          />

          <InputComp
            label="Bank Name"
            placeholders="Enter Bank Name"
            value={""}
            className="  w-full focus:outline-none py-2  bg-bg_BgGray border rounded-lg "
          />
        </div>
      </div>
      <div className="flex items-start justify-center gap-x-2">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
        </div>
        <span className="text-sm text-textColor font-lato font-[400] leading-5">
          I have read and agree with
          <span className="text-text_Primary underline text-sm font-lato font-[400] leading-4 cursor-pointer">
            the terms of payment and withdrawal policy.
          </span>
        </span>
      </div>
      <div className="w-full h-max">
        <button
          disabled={false}
          className=" relative overflow-hidden  transition duration-150 ease-in-out bg-bg_Primary w-full text-text_Quaternary h-10 text-base shadow-lg font-lato rounded-md font-[900] leading-4 disabled:opacity-70 flex gap-x-1 items-center justify-center cursor-pointer"
          type="submit"
        >
          <span>SUBMIT</span>
        </button>
      </div>
    </form>
  );
};

export default BankDetails;
