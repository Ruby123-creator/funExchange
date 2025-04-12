import React, { useCallback, useState } from 'react'
import { usePendingTransaction, useWithdrawHistory } from '../../../Framework/transfer'
import { useUI } from '../../../context/ui.context';
import { DatePicker, DatePickerProps, Modal, Tabs } from 'antd';
import { AiFillPrinter } from "react-icons/ai";
import { HiOutlineDownload } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Recepit from './receipt';
import html2pdf from 'html2pdf.js';
import { CiSearch } from 'react-icons/ci';
import dayjs from "dayjs";

import { format, formatDate, subDays } from 'date-fns';
const {TabPane} = Tabs;
interface Props{
 data?:any
}
const getFormattedDate = (daysAgo: number) => formatDate(subDays(new Date(), daysAgo), "yyyy-MM-dd");

const WithdrawHistory :React.FC<Props> = ({data=[]}) => {
  const {userData} = useUI();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData,setModalData] = useState({});
    const [startDate, setStartDate] = useState(getFormattedDate(7));
     const [endDate, setEndDate] = useState(getFormattedDate(0));
     const val = {
       startDate,
       endDate,
       userName: userData?.UserName,
     };
     const [payload,setPayload]  = useState(val);
  const pendingVal = {
    
      passkey: "051a4e5983c6167cc982058a09230459688c40d7",
      name: userData?.UserName,
      type: "debit"
    
  }
  const {data:withdrawHistory} = useWithdrawHistory(payload);
  const {data:pendingWithdraw} = usePendingTransaction(pendingVal);

 

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const downloadReceipt = () => {
    const element = document.getElementById('receipt-section'); // wrap your receipt in a div with this id
    if (!element) return;

    const opt = {
      margin:       0.5,
      filename:     'MyCustomReceiptName.pdf', // ✅ Custom file name here
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
  
    html2pdf().set(opt).from(element).save();
  };
   const fromDate: DatePickerProps["onChange"] = useCallback((date: { toDate: () => string | number | Date; }) => {
       console.log(date,"shimanuuu")
        if (date) {
          setStartDate(format(date.toDate(), "yyyy-MM-dd"));
        }
      }, []);
    
      const EndDate: DatePickerProps["onChange"] = useCallback((date: { toDate: () => string | number | Date; }) => {
        console.log(date,"shimanuuu")
         if (date) {
           setEndDate(format(date.toDate(), "yyyy-MM-dd"));
         }
       }, []);
  console.log(withdrawHistory,pendingWithdraw,"CHECK::::::::")
    return (
      <div className=" w-full  gap-1 px-2 custom-tabs rounded-lg bg-bg_Quaternary">
      <Tabs defaultActiveKey="1">
                <TabPane tab={<span> Withdraw History</span>} key="1">
                <div className="w-full grid grid-cols-12 gap-3 p-3  z-50 font-lato">
                                        <div className="col-span-8 px-2 flex items-center justify-between">
                                            <div className="datepicker-container">
                                                <div className="react-datepicker-wrapper">
                                                    <div className="react-datepicker__input-container">
                                                        <div
                                                            className="relative w-[100%] rounded-md bg-bg_Lightgray  border focus-within:border-primary">
                                                               <DatePicker onChange={fromDate}   value={startDate ? dayjs(startDate) : null} className='w-full'/>
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="datepicker-container">
                                                <div className="react-datepicker-wrapper">
                                                    <div className="react-datepicker__input-container">
                                                        <div
                                                            className="relative w-[100%] rounded-md bg-bg_Lightgray  border focus-within:border-primary">
                                                                <DatePicker onChange={EndDate}   value={endDate ? dayjs(endDate) : null} className='w-full'/>
                                                          
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="w-[100px] active:scale-95 bg-titleGrd p-1 mx-2 rounded relative right-2 flex sm:items-center justify-center"
                                            onClick={()=>{
                                              setPayload({
                                                startDate,
                                                endDate,userName: userData?.UserName
                                              })
                                            }}
                                            >
                                              <CiSearch fill='white' size={20}/>
                                           
                                        </div>
        
                                       
                                    </div>
                {
          (withdrawHistory||[])?.length ?   <div className="overflow-x-auto no-scrollbar">
        
       
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            
            <thead className=" text-text_Quaternary text-xs bg-bg_Secondary">
              <tr>
              <th className="p-2 text-left">S.no</th>
                <th className="p-2 text-left">Credit Amount</th>
               
                <th className="p-2 text-left">Account Number</th>
                <th className="p-2 text-left">Bank Name</th>
                <th className="p-2 text-left">Holder Name</th>
                <th className="p-2 text-left">IFSC Code</th>
                <th className="p-2 text-left">UTR Number</th>
               
                <th className="p-2 text-left w-auto whitespace-nowrap">Approve Date</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Recepit</th>
               
              
              </tr>
            </thead>
            <tbody>
              {(withdrawHistory||[]).map((item:any, index:number) => (
                <tr
                  key={"currentBets"+index}
                  className="border-b border-gray-200 hover:bg-gray-50 text-xs"
                >
                  <td className="p-2">{index+1}</td>
                  <td className=" p-2 text-text_Profit">₹{item.amount}</td>
                  
                 
                 
                  <td className="p-2"> {item.account_number}</td>
                  <td className="p-2"> {item.bank_name}</td>
                  <td className="p-2"> {item.holder_name}</td>
                  <td className="p-2"> {item.ifsc}</td>
                  <td className="p-2"> {item.utr}</td>

                
                  <td className="p-2"> {item.request_date}</td>
                 
                 <td className='p-2'>
                 <button
                      className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-none border-none shadow-none cursor-pointer"
                      type="button"
                    >
                      <span className={`text-white capitalize border  flex rounded px-3 py-1  flex-col text-[10px]  hover:opacity-100 w-max font-semibold items-center justify-center ${item?.status === 'Accepted' ? 'bg-bg_HeaderDepositBtnBgColor border-depositBtn':'bg-bg_HeaderWithdrawBtnBgColor border-withdrawBtn'}  `}>

                      
                        {item?.status}
                      </span>
                    </button>
                 </td>
                 <td className='p-2'>
                 <button
                      className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-none border-none shadow-none cursor-pointer"
                      type="button"
                      onClick={()=>{
                        setIsModalOpen(true);
                        setModalData(item);
                      }}
                    >
                      <span className={`text-white capitalize border  flex px-3 py-1 rounded  flex-col text-[10px]  hover:opacity-100 w-max font-semibold items-center justify-center bg-bg_HeaderDepositBtnBgColor border-depositBtn `}>

                      
                        <AiFillPrinter size={16}/>
                      </span>
                    </button>
                 </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>: <div className="w-full font-medium text-center text-sm bg-bg_Quaternary rounded px-4  py-3 shadow text-text_Ternary ">
        <span className="text-text_Ternary font-normal text-center"><img src="icons/nofound.svg" alt="No Data" width={400} height={400} />No data found for selected date range...</span>
        </div>
        }

        </TabPane>
        <TabPane tab={<span>Pending Withdrawal </span>} key="2" >
        {
          (pendingWithdraw||[])?.length ?   <div className="overflow-x-auto no-scrollbar">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            
            <thead className=" text-text_Quaternary text-xs bg-bg_Secondary">
              <tr>
              <th className="p-2 text-left">S.no</th>
                <th className="p-2 text-left">Holder Name</th>
                <th className="p-2 text-left">Bank Name</th>
                <th className="p-2 text-left">Account Number</th>
                <th className="p-2 text-left">Amount</th>
                <th className="p-2 text-left">IFSC Code</th>

                <th className="p-2 text-left">Date</th>
               
               
               
               
              
              </tr>
            </thead>
            <tbody>
              {(pendingWithdraw||[]).map((item:any, index:number) => (
                <tr
                  key={"currentBets"+index}
                  className="border-b border-gray-200 hover:bg-gray-50 text-xs"
                >
                  <td className="p-2">{index+1}</td>
                  
                  <td className="p-2"> {item.holder_name}</td>
                  <td className="p-2"> {item.bank_name}</td>
                  <td className="p-2"> {item.account_number}</td>
                  <td className=" p-2 text-text_Profit">₹{item.amount}</td>
                  <td className="p-2"> {item.ifsc}</td>

                 
                  <td className="p-2"> {item.request_date}</td>
                 
                
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>: <div className="w-full font-medium text-center text-sm bg-bg_Quaternary rounded px-4  py-3 shadow text-text_Ternary ">
        <span className="text-text_Ternary font-normal text-center"><img src="icons/nofound.svg" alt="No Data" width={400} height={400} />No data found for selected date range...</span>
        </div>
        }
</TabPane>
</Tabs>
   


<Modal title={<div className='bg-bg_HeaderDepositBtnBgColor border-depositBtn text-text_Quaternary'>
  <div className=' flex justify-between px-2 py-1'>
  <h2 className="text-md font-bold">Receipt</h2>
   <div className='flex gap-2 cursor-pointer'>
    <span onClick={()=>{
      downloadReceipt()
    }}><HiOutlineDownload size={20} /></span>
    <span onClick={()=>{
      setIsModalOpen(false)
    }}><IoClose size={20}/> </span>
   </div>
  </div>

</div>} open={isModalOpen} footer={null} onOk={handleOk} closeIcon={null} onCancel={handleCancel}>
<div id='receipt-section'>
<Recepit item={modalData}/>
</div>
    
      </Modal>

  </div>
        
      
      )
}

export default WithdrawHistory