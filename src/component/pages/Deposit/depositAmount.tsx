import React, { useState } from 'react'


const btns = [300,500,1000,5000,10000,50000]
const DepositDetails = () => {
 
  const [sum,setSum] = useState(0);
  const [upiNumber,setUpiNumber] = useState('');

  const calculateSum = (val:number)=>{
       const netSum = sum +val;
       setSum(netSum);
  }
  return (
    <form>
    <div className="rounded-lg bg-bg_Quaternary overflow-hidden transition-height  duration-500 ease-in-out h-max px-3 pt-[15px] pb-[20px]">
      <div className="flex flex-row justify-end items-center w-full">
        <span className="text-base font-lato font-bold leading-5 w-full ">
          Payment Options
        </span>
        <button
          className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out flex w-[26px] h-[26px] p-1 justify-center  items-center gap-[10px] text-text_Primary border  rounded cursor-pointer"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 7 12"
            fill="none"
          >
            <path
              d="M5.3673 11.2346L0 5.8673L5.3673 0.5L6.32 1.4527L1.90539 5.8673L6.32 10.2819L5.3673 11.2346Z"
              fill="var(--color-primary)"
            ></path>
          </svg>
        </button>
        <button
          className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out flex w-[26px] h-[26px] p-1 justify-center ml-[4px] items-center gap-[10px] text-text_Primary border  rounded cursor-pointer"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 7 12"
            fill="none"
            className="-rotate-180"
          >
            <path
              d="M5.3673 11.2346L0 5.8673L5.3673 0.5L6.32 1.4527L1.90539 5.8673L6.32 10.2819L5.3673 11.2346Z"
              fill="var(--color-primary)"
            ></path>
          </svg>
        </button>
      </div>
      <div
        id="payMentOptions"
        className="flex items-center gap-x-1.5 pt-[18px] pb-[8px] overflow-x-auto no-scrollbar scroll-smooth cursor-pointer w-full transition-all ease-in-out duration-150"
      ></div>
      <p className="text-xs md:text-sm font-lato font-normal leading-4">
        *Always start instant payments by submitting amount below.
      </p>
    </div>
    <div className="w-full mt-2.5 py-[15px] rounded-lg bg-bg_Quaternary px-3">
      <div className="font-lato font-bold text-text_Ternary text-base leading-5">
        <p>
          Amount<span className="text-text_Danger">*</span>
        </p>
      </div>
      <div className="w-full mt-2 py-2 grid grid-cols-12 border rounded-[4px] px-2 items-center justify-center border-success ">
        <input
          className="block focus:outline-none  col-span-11 w-full h-max font-lato placeholder:font-lato placeholder:font-normal font-bold text-base"
          placeholder="₹ Enter Amount"
          autoComplete="off"
          min={300}
          max={100000}
          type="number"
          onChange={(e:any)=>{setSum(Number(e.target.value))}}
          value={sum}
        />
        <span className="font-lato font-bold leading-4 text-teranry text-base col-span-1 text-center ">
          INR
        </span>
      </div>
      <span className="text-x pl-1 mt-0 text-text_Ternary font-lato">
        <span>Min 300</span>
        <span className="text-x"> - </span>
        <span>Max 100000</span>
      </span>
      <div className="w-full grid grid-cols-3 gap-[10px] mt-[18px]">
        {
          btns.map((val)=>{
            return(
              <button
              className="inline-block  relative overflow-hidden  bg-bg_Primary transition-all ease-in-out duration-300 active:scale-95 text-text_Quaternary min-h-9 text-base font-lato rounded-md font-[800] leading-4 cursor-pointer"
              type="button"
              onClick={()=>{
                calculateSum(val);
              }}
            >
              <span>+{val}</span>
            </button>
            )
          })
        }
       
        
      </div>
      <div className="my-2">
        <span className="text-text_Primary text-base font-lato font-[480] leading-4"></span>
      </div>
    </div>
    <div className="w-full mt-2.5 rounded-md bg-bg_Quaternary py-3.5 px-3 ">
      <div className="font-lato font-bold text-base leading-5">
        Upload your payment slip below
        <span className="text-text_Danger">*</span>
      </div>
      <div className="w-full relative mt-2">
        <label
          className="flex items-center border border-dashed rounded-[4px] py-3 pl-3 pr-1 border-primary cursor-pointer"
          htmlFor="image-uploader"
        >
          <input
            className="hidden w-0 h-0"
            accept=".jpg,.jpeg,.png,.pdf.webp"
            type="file"
            id="image-uploader"
            name="image-uploader"
            data-gtm-form-interact-field-id="1"
          />
          <span className="cursor-pointer pl-8 font-inherit text-base text-placeHolderUploadFileDeposit font-normal">
            Upload
          </span>
          <span className="ml-1 font-inherit text-base text-placeHolderUploadFileDeposit font-normal">
            or drop a file right here
          </span>
        </label>
        <div className="absolute top-[14px] left-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21.7491 10.9999V16.9999C21.8078 17.5066 21.7512 18.0199 21.5835 18.5016C21.4158 18.9833 21.1414 19.4209 20.7807 19.7815C20.42 20.1422 19.9825 20.4166 19.5008 20.5843C19.0191 20.752 18.5057 20.8086 17.9991 20.7499H5.99906C5.4924 20.8086 4.97902 20.752 4.49732 20.5843C4.01563 20.4166 3.57808 20.1422 3.21742 19.7815C2.85676 19.4209 2.58232 18.9833 2.41463 18.5016C2.24694 18.0199 2.19034 17.5066 2.24906 16.9999V6.9999C2.19034 6.49324 2.24694 5.97986 2.41463 5.49817C2.58232 5.01647 2.85676 4.57893 3.21742 4.21827C3.57808 3.8576 4.01563 3.58316 4.49732 3.41547C4.97902 3.24778 5.4924 3.19118 5.99906 3.2499H13.9991C14.198 3.2499 14.3887 3.32892 14.5294 3.46957C14.67 3.61023 14.7491 3.80099 14.7491 3.9999C14.7491 4.19882 14.67 4.38958 14.5294 4.53023C14.3887 4.67089 14.198 4.7499 13.9991 4.7499H5.99906C4.42206 4.7499 3.74906 5.4229 3.74906 6.9999V16.2499L6.28906 13.7099C6.47787 13.5226 6.73307 13.4174 6.99906 13.4174C7.26505 13.4174 7.52025 13.5226 7.70906 13.7099L8.64906 14.6499C8.74252 14.7415 8.86818 14.7928 8.99906 14.7928C9.12994 14.7928 9.2556 14.7415 9.34906 14.6499L14.2891 9.7099C14.4779 9.52255 14.7331 9.41742 14.9991 9.41742C15.265 9.41742 15.5203 9.52255 15.7091 9.7099L20.2491 14.2499V10.9999C20.2491 10.801 20.3281 10.6102 20.4687 10.4696C20.6094 10.3289 20.8001 10.2499 20.9991 10.2499C21.198 10.2499 21.3887 10.3289 21.5294 10.4696C21.67 10.6102 21.7491 10.801 21.7491 10.9999ZM7.99206 7.7499C7.66005 7.75083 7.34198 7.88349 7.1077 8.11875C6.87342 8.35401 6.7421 8.67264 6.74256 9.00465C6.74302 9.33666 6.87524 9.65492 7.11017 9.88952C7.34511 10.1241 7.66355 10.2559 7.99556 10.2559C8.32757 10.2559 8.64601 10.1241 8.88095 9.88952C9.11588 9.65492 9.24809 9.33666 9.24856 9.00465C9.24902 8.67264 9.1177 8.35401 8.88342 8.11875C8.64914 7.88349 8.33107 7.75083 7.99906 7.7499H7.99206ZM18.5291 5.0299L18.7491 4.8109V6.9999C18.7491 7.19882 18.8281 7.38958 18.9687 7.53023C19.1094 7.67089 19.3001 7.7499 19.4991 7.7499C19.698 7.7499 19.8887 7.67089 20.0294 7.53023C20.17 7.38958 20.2491 7.19882 20.2491 6.9999V4.8109L20.4691 5.0299C20.6112 5.16238 20.7993 5.23451 20.9936 5.23108C21.1879 5.22765 21.3733 5.14894 21.5107 5.01153C21.6481 4.87411 21.7268 4.68873 21.7302 4.49443C21.7337 4.30013 21.6615 4.11208 21.5291 3.9699L20.0291 2.4699C19.8883 2.3297 19.6977 2.25098 19.4991 2.25098C19.3004 2.25098 19.1098 2.3297 18.9691 2.4699L17.4691 3.9699C17.3366 4.11208 17.2645 4.30013 17.2679 4.49443C17.2713 4.68873 17.35 4.87411 17.4874 5.01153C17.6249 5.14894 17.8102 5.22765 18.0045 5.23108C18.1988 5.23451 18.3869 5.16238 18.5291 5.0299Z"
              fill="#c10931"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div className="w-full mt-2.5 bg-bg_Quaternary rounded-md px-3 py-3.5">
      <div className="font-lato font-bold text-sm mb-2 leading-5">
        Unique Transaction Reference
        <span className="text-text_Danger">*</span>
      </div>
      <div className="w-full relative font-lato">
        <input
          className="block w-full focus:outline-none  border-[1px] font-lato px-3 py-2.5 rounded-[4px] font-lato placeholder:font-lato font-semibold text-base  border-quinary focus:border-ternary"
          placeholder="Last 4 Digits of UTR/RRN Number"
          maxLength={4}
          onChange={(e)=>setUpiNumber(e.target.value)}
          autoComplete="off"
          type="tel"
          value={upiNumber}
        />
        <span className="text-text_Danger text-xs font-lato font-[450] leading-4"></span>
      </div>
    </div>
    <div className="flex items-start justify-center gap-x-2 py-3 px-5">
      <div className="inline-flex items-center">
        <label
          className="relative flex cursor-pointer items-center rounded-full  bg-bg_Quinary "
          htmlFor="blue"
        >
          <input
            className="before:content[''] before:bg-bg_Secondary3 rounded-md peer relative  cursor-pointer appearance-none border border-success transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-max before:w-max before:-translate-x-2/4 before:-translate-y-2/4 before:opacity-0 before:transition-opacity checked:border-success checked:bg-bg_Success hover:before:opacity-10 h-5 w-5"
            id="blue"
            type="checkbox"
            checked={true}
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
        I have read and agree with{" "}
        <span className="text-text_Primary underline text-sm font-lato font-[400] leading-4 cursor-pointer">
          the terms of payment and withdrawal policy.
        </span>
      </span>
    </div>
    <div className="w-full text-center py-4 px-2">
      <button
        disabled={false}
        type="button"
        className=" relative overflow-hidden  transition duration-150 ease-in-out bg-bg_Primary flex items-center justify-center gap-x-2 w-full text-text_Quaternary h-10 text-base  rounded-md font-[500] leading-4 disabled:bg-bg_Quinary cursor-pointer"
      >
        <span>SUBMIT</span>
      </button>
    </div>
  </form>
  )
}

export default DepositDetails;