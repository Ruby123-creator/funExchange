import React, { useCallback, useState } from 'react'
import SidebarComp from '../Home/sidebar'
import RightDeskSidebar from '../../common/RightDeskSidebar.tsx'
import { DatePicker, DatePickerProps } from 'antd';
import { format, subDays } from 'date-fns';
import { useUI } from '../../../context/ui.context';
import dayjs from "dayjs";
import Settlements from './settlements';
import { useCasinoSettlement } from '../../../Framework/casino';

const getFormattedDate = (daysAgo: number) => format(subDays(new Date(), daysAgo), "yyyy-MM-dd");
const CasinoSettlement = () => {
      const { userData } = useUI();
      const [startDate, setStartDate] = useState(getFormattedDate(7));
      const [endDate, setEndDate] = useState(getFormattedDate(0));
      const [days,setDays] = useState(0);
      const val = {
        startDate,
        endDate,
        userName: userData?.UserName,
      };
      const [payload,setPayload]  = useState(val);
      // useEffect(() => {
      //   setStartDate(getFormattedDate(days));
      //   setEndDate(getFormattedDate(0));
      // }, [days]);
    
      
      
      const { data, isError, isLoading } = useCasinoSettlement(payload);
        console.log(data,"establishh");
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
      console.log(startDate,endDate,"pitaaaaa")
  return (
    <div className="flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 pt-[94px]">
    <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
<SidebarComp/>
<div className='w-full lg:w-[50%] px-2 py-4 pt-[18px] my-[13px] lg:pt-0 lg:my-0'>
<div className="flex flex-col h-full">
            <div className="z-10">
              <div className="w-full grid grid-cols-12 gap-3 p-3 bg-bg_Quaternary z-50 font-lato">
                <div className="col-span-10 px-2 flex items-center justify-between">
              
                  <div className="datepicker-container">
                    <div className="text-xs sm:text-sm px-1">From</div>
                    <DatePicker   value={startDate ? dayjs(startDate) : null} 
 onChange={fromDate} className="w-full" />
                  </div>
                  <div className="datepicker-container">
                    <div className="text-xs sm:text-sm px-1">To</div>
                    <DatePicker onChange={EndDate}   value={endDate ? dayjs(endDate) : null} 
 className="w-full" />
                  </div>
                </div>
                <div className="active:scale-95 col-span-2 bg-titleGrd p-2 rounded relative right-2 flex sm:items-center justify-center"   onClick={()=>{
                  setPayload({
                    startDate,
                    endDate,userName: userData?.UserName
                  })
                }}>
                  <div>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.36813 13.7394C3.75286 15.1261 5.59689 15.9586 7.55282 16.08C9.50876 16.2013 11.4416 15.6033 12.9871 14.3984L18.3051 19.7164C18.4937 19.8986 18.7463 19.9994 19.0085 19.9971C19.2707 19.9948 19.5215 19.8897 19.7069 19.7043C19.8924 19.5188 19.9975 19.268 19.9998 19.0058C20.0021 18.7436 19.9013 18.491 19.7191 18.3024L14.4011 12.9844C15.6594 11.3696 16.2543 9.33558 16.0645 7.2972C15.8747 5.25883 14.9144 3.36963 13.3796 2.0149C11.8448 0.660168 9.85096 -0.0580518 7.80479 0.00671385C5.75862 0.0714795 3.81421 0.914353 2.36813 2.36344C1.62092 3.11026 1.02819 3.99698 0.623783 4.97295C0.219379 5.94892 0.0112305 6.995 0.0112305 8.05144C0.0112305 9.10787 0.219379 10.154 0.623783 11.1299C1.02819 12.1059 1.62092 12.9926 2.36813 13.7394ZM3.78213 3.77944C4.7707 2.79088 6.07145 2.17568 7.46275 2.03863C8.85406 1.90159 10.2498 2.25118 11.4123 3.02786C12.5747 3.80453 13.4319 4.96023 13.8378 6.29805C14.2437 7.63587 14.1732 9.07304 13.6383 10.3647C13.1034 11.6564 12.1372 12.7226 10.9043 13.3817C9.67135 14.0409 8.24805 14.2521 6.87685 13.9795C5.50564 13.707 4.27137 12.9674 3.38432 11.8868C2.49728 10.8062 2.01234 9.45147 2.01213 8.05344C2.00938 7.25901 2.16443 6.47195 2.46827 5.73792C2.77212 5.00389 3.2187 4.33751 3.78213 3.77744V3.77944Z"
                      fill="white"
                    />
                  </svg>
                  </div>
                  
                </div>
                <div className="col-span-12 text-xs sm:text-sm flex items-center gap-2 justify-center">
                  {[7, 14, 28].map((val, i) => (
                    <button
                      key={i}
                      className={`cursor-pointer active:scale-95 rounded-md px-3 border py-1 text-xs sm:text-sm whitespace-nowrap shadow ${days === val ? 'bg-titleGrd text-text_Quaternary':'bg-bg_Quaternary text-text_Ternary'}  font-medium `}
                      onClick={() => {
                        setDays(val)

                        setStartDate(getFormattedDate(0));
                        setEndDate(getFormattedDate(val))
                      }}
                    >
                      Last {val} Days
                    </button>
                  ))}
                </div>
              </div>
            </div>
              
              {
                (data||[])?.length ? <Settlements data={data}/>: 
                
                
            <div className="w-full min-h-[calc(100dvh-150px)] flex items-center justify-center flex-col">
                
                <span className="text-text_Ternary font-normal text-center"><img src="icons/nofound.svg" alt="No Data" width={400} height={400} />No data found for selected date range...</span>
                </div>
              }
             
          </div>
</div>

<RightDeskSidebar/>
</div>
</div>
  )
}

export default CasinoSettlement