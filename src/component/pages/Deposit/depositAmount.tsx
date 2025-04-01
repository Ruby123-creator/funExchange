import { Card, QRCode, Tabs, Upload,Button } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import React, { useState } from 'react'
import { BsBank2 } from 'react-icons/bs';
import { GiWallet } from 'react-icons/gi';
import { IoIosCopy } from 'react-icons/io';
import { IoQrCodeSharp } from 'react-icons/io5';
import { TbPhotoUp } from 'react-icons/tb';

const btns = [300,500,1000,5000,10000,50000]
const DepositDetails = () => {
  const [text, setText] = useState('https://ant.design/');
  const [sum,setSum] = useState(0);
  const [upiNumber,setUpiNumber] = useState('');

  const calculateSum = (val:number)=>{
       const netSum = sum +val;
       setSum(netSum);
  }
  const upiDetails = [
    { index: 1, username: "Ruby Pal", upi: "ruby@upi", date: "01-Apr-2025" },
    { index: 2, username: "John Doe", upi: "john@upi", date: "15-Mar-2025" },
  ];

  const copyToClipboard = (upi: string) => {
    navigator.clipboard.writeText(upi);
    alert("UPI ID copied: " + upi);
  };
  const DetailsFilled = ()=>{
    return (
      <div className='py-2'>
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
      <div className="w-full mt-2.5 rounded-md bg-bg_Quaternary py-3.5 px-3">
      <div className="font-lato font-bold text-base leading-5">
        Upload your payment slip below
        <span className="text-text_Danger">*</span>
      </div>
      <div className="w-full relative mt-2">
        <Upload
          accept=".jpg,.jpeg,.png,.pdf,.webp"
          showUploadList={false}
        >
          <Button 
            icon={<TbPhotoUp  />} 
            className="border border-dashed rounded-md py-3 px-4 w-full text-placeHolderUploadFileDeposit"
          >
            Upload or drop a file right here
          </Button>
        </Upload>
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
            placeholder="UTR/RRN Number"
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
      </div>
    )
  }
  return (
    <form>
    <div className="rounded-lg bg-bg_Quaternary overflow-hidden transition-height  duration-500 ease-in-out h-max">
      {/* <div className="flex flex-row justify-end items-center w-full">
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
      </p> */}
      <div style={{ margin: "5px auto" }}>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab={<span><BsBank2  size={30}/> </span>} key="1">
        <div className="w-full flex items-center justify-start gap-y-4 flex-col px-4">
      <div className=" flex flex-col w-full flex-row items-start gap-x-2 justify-start">
       
        <Card className="max-w-md mx-auto p-1 shadow-lg w-full rounded-2xl bg-white">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-800"> # Bank Details</h2>
        <div className="border-t pt-3 space-y-3">
          {[
            { label: "Account Holder Name", value: "Miss Ruby Pal" },
            { label: "Bank Name", value: "Bank of Baroda" },
            { label: "Account Number", value: "7400 8246 3212 4000" },
            { label: "IFSC Code", value: "BOVJSEN0O" },
          ].map((detail, index) => (
            <div key={index} className="flex justify-between text-sm text-gray-700">
              <span className="font-medium text-gray-600">{detail.label}</span>
              <span className="text-gray-900">{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
    <DetailsFilled/>
      </div>
      </div>
       
        </TabPane>
        <TabPane tab={<span><IoQrCodeSharp  size={30}/> </span>} key="2">
        <div className="w-full flex items-center justify-start gap-y-4 flex-col px-4">
      <div className=" flex flex-col w-full flex-row items-start gap-x-2 justify-start">
       
        <div className="max-w-md mx-auto shadow-lg w-full rounded-2xl bg-white">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-800 px-2"> # QR Details</h2>
        <div className="mx-auto p-2">
        <QRCode value={text || '-'} />
        </div>
      </div>
    </div>
    <DetailsFilled/>
      </div>
      </div>
        </TabPane>
        <TabPane tab={<span><GiWallet  size={30}/> </span>} key="3">
        <div className="w-full flex items-center justify-start gap-y-4 flex-col px-4">
      <div className=" flex flex-col w-full flex-row items-start gap-x-2 justify-start">
       
        <div className="max-w-md mx-auto p-1 shadow-lg w-full rounded-2xl bg-white">
      <div className="flex flex-col">
      <h3 className="text-md font-semibold text-gray-800">UPI Details</h3>
        <table className="w-full border-collapse border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="border p-2">#</th>
              <th className="border p-2">Username</th>
              <th className="border p-2">UPI Number</th>
              <th className="border p-2">Date Created</th>
            </tr>
          </thead>
          <tbody>
            {upiDetails.map((item) => (
              <tr key={item.index} className="text-gray-700">
                <td className="border p-2 text-center">{item.index}</td>
                <td className="border p-2">{item.username}</td>
                <td className="border p-2 flex items-center justify-between">
                  {item.upi}
                  <button
                    onClick={() => copyToClipboard(item.upi)}
                    className="ml-2 text-blue-500 hover:text-blue-700"
                  >
                    <IoIosCopy  size={16} />
                  </button>
                </td>
                <td className="border p-2">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <DetailsFilled/>
      </div>
      </div>
        </TabPane>
      </Tabs>
    </div>
    </div>
   
  </form>
  )
}

export default DepositDetails;