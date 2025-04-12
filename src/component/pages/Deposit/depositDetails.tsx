import React, { useCallback, useState } from "react";
import {
  useDepositHistory,
  usePendingTransaction,
} from "../../../Framework/transfer";
import { useUI } from "../../../context/ui.context";
import { DatePicker, DatePickerProps, Tabs } from "antd";
import { format, formatDate, subDays } from "date-fns";
import { CiSearch } from "react-icons/ci";
import dayjs from "dayjs";

const { TabPane } = Tabs;
const getFormattedDate = (daysAgo: number) => formatDate(subDays(new Date(), daysAgo), "yyyy-MM-dd");
const DepositAmount = () => {
  const { userData } = useUI();
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
    type: "credit",
  };
  const { data: depositHistory } = useDepositHistory(payload);
  const { data: pendingDeposit } = usePendingTransaction(pendingVal);
  console.log(depositHistory, pendingDeposit, "CHECKKKK::::::::");
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
  return (
    <div className=" w-full  gap-1 px-2">
    
      <Tabs defaultActiveKey="1">
        <TabPane tab={<span> Deposit History</span>} key="1">
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
          {(depositHistory || [])?.length ? (
            <div className="overflow-x-auto no-scrollbar">
                
              <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                <thead className=" text-text_Quaternary text-xs bg-bg_Secondary">
                  <tr>
                    <th className="p-2 text-left">S.no</th>
                    <th className="p-2 text-left">Credit Amount</th>

                    <th className="p-2 text-left">UTR Number</th>
                    <th className="p-2 text-left w-auto whitespace-nowrap">
                      Approve Date
                    </th>
                    <th className="p-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {(depositHistory || []).map((item: any, index: number) => (
                    <tr
                      key={"currentBets" + index}
                      className="border-b border-gray-200 hover:bg-gray-50 text-xs"
                    >
                      <td className="p-2">{index + 1}</td>
                      <td className=" p-2 text-text_Profit">₹{item.amount}</td>

                      <td className="p-2"> {item.UTR}</td>

                      <td className="p-2"> {item.aprove_date}</td>

                      <td className="p-2">
                        <button
                          className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-none border-none shadow-none cursor-pointer"
                          type="button"
                        >
                          <span
                            className={`text-white capitalize border  flex rounded px-3 py-1  flex-col text-[10px]  hover:opacity-100 w-max font-semibold items-center justify-center ${
                              item?.status === "accept"
                                ? "bg-bg_HeaderDepositBtnBgColor border-depositBtn"
                                : "bg-bg_HeaderWithdrawBtnBgColor border-withdrawBtn"
                            }  `}
                          >
                            {item?.status}
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="w-full font-medium text-sm bg-bg_Quaternary rounded px-4  py-3 shadow text-text_Ternary ">
              <span className="text-text_Ternary font-normal text-center">
                <img
                  src="icons/nofound.svg"
                  alt="No Data"
                  width={400}
                  height={400}
                />
                No data found for selected date range...
              </span>
            </div>
          )}
        </TabPane>
        <TabPane tab={<span>Pending Deposit </span>} key="2">
          {(pendingDeposit || [])?.length ? (
            <div className="overflow-x-auto no-scrollbar">
              <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                <thead className=" text-text_Quaternary text-xs bg-bg_Secondary">
                  <tr>
                    <th className="p-2 text-left">S.no</th>
                    <th className="p-2 text-left">Credit Amount</th>

                    <th className="p-2 text-left">UTR Number</th>
                  </tr>
                </thead>
                <tbody>
                  {(pendingDeposit || []).map((item: any, index: number) => (
                    <tr
                      key={"currentBets" + index}
                      className="border-b border-gray-200 hover:bg-gray-50 text-xs"
                    >
                      <td className="p-2">{index + 1}</td>
                      <td className=" p-2 text-text_Profit">₹{item.amount}</td>

                      <td className="p-2"> {item.UTR}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="w-full font-medium text-sm bg-bg_Quaternary rounded px-4  py-3 shadow text-text_Ternary ">
              <span className="text-text_Ternary font-normal text-center">
                <img
                  src="icons/nofound.svg"
                  alt="No Data"
                  width={400}
                  height={400}
                />
                No data found for selected date range...
              </span>
            </div>
          )}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default DepositAmount;
