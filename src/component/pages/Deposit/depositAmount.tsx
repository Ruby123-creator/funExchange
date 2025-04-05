import { Card, QRCode, Tabs, Upload,Button } from 'antd';
import React, { useState } from 'react'
import { BsBank2 } from 'react-icons/bs';
import { GiWallet } from 'react-icons/gi';
import { IoIosCopy } from 'react-icons/io';
import { IoQrCodeSharp } from 'react-icons/io5';
import { TbPhotoUp } from 'react-icons/tb';
import { useUI } from '../../../context/ui.context';
import { useAccountDetails, useDepositAmount, useQRDetails, useUPIDetails } from '../../../Framework/transfer';
import { GrHistory } from "react-icons/gr";
import DetailsFilled from './details';
import DepositAmount from './depositDetails';
const { TabPane } = Tabs;

const DepositDetails = () => {
  const {userData} = useUI();
  
   const data ={
     "passkey": "051a4e5983c6167cc982058a09230459688c40d7",
      name: userData?.UserName,
   }
   const {data:accountDetails } = useAccountDetails(data);
   const {data:qrDetails } = useQRDetails(data);
  const {data: upiDetail} = useUPIDetails(data);
 


  const copyToClipboard = (upi: string) => {
    navigator.clipboard.writeText(upi);
    alert("UPI ID copied: " + upi);
  };
 
  return (
    <form>
    <div className="rounded-lg bg-bg_Quaternary overflow-hidden transition-height  duration-500 ease-in-out h-max">
      
      <div style={{ margin: "5px auto" }}>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab={<span><BsBank2  size={30}/> </span>} key="1">
        <div className="w-full flex items-center justify-start gap-y-4 flex-col px-4">
      <div className=" flex flex-col w-full flex-row items-start gap-x-2 justify-start">
       
        <Card className="max-w-md mx-auto p-1 shadow-lg w-full rounded-2xl bg-white">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-800"> # Bank Details</h2>
        <div className="border-t pt-3 space-y-3">
          {
            (accountDetails||[]).map((item:any,i:number)=>{
              return(
                <>
                 <div className="flex justify-between text-sm text-gray-700">
              <span className="font-medium text-gray-600">Account Holder Name</span>
              <span className="text-gray-900">{item?.name}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <span className="font-medium text-gray-600">Bank Name</span>
              <span className="text-gray-900">{item?.Bank}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <span className="font-medium text-gray-600">Account Number</span>
              <span className="text-gray-900">{item?.Account_number}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <span className="font-medium text-gray-600">IFSC Code</span>
              <span className="text-gray-900">{item?.IFSC}</span>
            </div>
                </>
              )
            })
          }
         
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
        <div className="mx-auto p-2" style={{backgroundColor:"#000"}}>
          {
            (qrDetails||[]).map((val:any,i:number)=>{
              return(
                 <img src={val?.qur_code} width={500}/>
              )
            })
          }
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
              {/* <th className="border p-2">Username</th> */}
              <th className="border p-2">UPI Number</th>
              {/* <th className="border p-2">Date Created</th> */}
            </tr>
          </thead>
          <tbody>
            {(upiDetail||[]).map((item:any,index:number) => (
              <tr key={index} className="text-gray-700">
                <td className="border p-2 text-center">{index+1}</td>
                {/* <td className="border p-2">{item.username}</td> */}
                <td className="border p-2 flex items-center justify-between">
                  {item.upi_number}
                  <button
                    onClick={() => copyToClipboard(item.upi_number)}
                    className="ml-2 text-blue-500 hover:text-blue-700"
                  >
                    <IoIosCopy  size={16} />
                  </button>
                </td>
                {/* <td className="border p-2">{item.date}</td> */}
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
        <TabPane tab={<span><GrHistory  size={30}/> </span>} key="4">
        <DepositAmount/>

</TabPane>
      </Tabs>
    </div>
    </div>
     
  </form>
  )
}

export default DepositDetails;