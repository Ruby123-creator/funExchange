import React from 'react'
import SidebarComp from '../Home/sidebar'
import PanelComp from '../Home/panel'
import RightDeskSidebar from '../../common/RightDeskSidebar.tsx'
import MatchedBets from '../../common/BettingWindow/matchedBet'
import { DatePicker, DatePickerProps, Select } from 'antd'
import { CiSearch } from "react-icons/ci";
import { useAllBetsData } from '../../../Framework/placeBet'

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
};
const onChange1 = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};
const DeclareBets = () => {
    const {data} = useAllBetsData();

  return (
    <div className="flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 pt-[94px]">
    <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
<SidebarComp/>
<div className='w-full lg:w-[50%] px-2 py-4 pt-[18px] my-[13px] lg:pt-0 lg:my-0'>
<div className="flex flex-col h-full bg-bg_Quaternary">
                            <div className="z-10">
                                <div className="undefined">
                                    <div className="w-full grid grid-cols-12 gap-3 p-3  z-50 font-lato">
                                        <div className="col-span-8 px-2 flex items-center justify-between">
                                            <div className="datepicker-container">
                                                <div className="react-datepicker-wrapper">
                                                    <div className="react-datepicker__input-container">
                                                        <div
                                                            className="relative w-[100%] rounded-md bg-bg_Lightgray  border focus-within:border-primary">
                                                               <DatePicker onChange={onChange} className='w-full'/>
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="datepicker-container">
                                                <div className="react-datepicker-wrapper">
                                                    <div className="react-datepicker__input-container">
                                                        <div
                                                            className="relative w-[100%] rounded-md bg-bg_Lightgray  border focus-within:border-primary">
                                                                <DatePicker onChange={onChange} className='w-full'/>
                                                          
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-span-4'>
                                        <Select
    placeholder="Select Sport"
    optionFilterProp="label"
    onChange={onChange1}
    options={[
      {
        value: 'all-sports',
        label: 'All Sports',
      },
      {
        value: 'cricket',
        label: 'Cricket',
      },
      {
        value: 'Soccer',
        label: 'Football',
      },
      {
        value: 'tennis',
        label: 'Tennis',
      },
      {
        value: 'horse-racing',
        label: 'Horse Racing',
      },
      {
        value: 'greyhound',
        label: 'GreyHound Racing',
      },
    ]}
  />
                                        </div>
    
                                     
                                       
                                    </div>
                                    <div
                                            className="text-xs sm:text-sm flex items-center gap-2 justify-start px-5 flex-wrap py-5">
                                            <button
                                                className="cursor-pointer active:scale-95 rounded-md px-3 border py-1 text-xs sm:text-sm whitespace-nowrap shadow bg-titleGrd font-medium text-text_Quaternary">Last
                                                7 Days</button><button
                                                className="cursor-pointer active:scale-95 rounded-md px-3 border py-1 text-xs sm:text-sm whitespace-nowrap shadow bg-bg_Quaternary text-text_Ternary  font-bold">Last
                                                14 Days</button><button
                                                className="cursor-pointer active:scale-95 rounded-md px-3 border py-1 text-xs sm:text-sm whitespace-nowrap shadow bg-bg_Quaternary text-text_Ternary  font-bold">Last
                                                28 Days</button>
                                                <div
                                            className="w-[100px] active:scale-95 bg-titleGrd p-1 mx-2 rounded relative right-2 flex sm:items-center justify-center">
                                              <CiSearch fill='white' size={20}/>
                                           
                                        </div>
   
                                        </div>
                                </div>
                            </div>
                            <MatchedBets render={1} data={data}/>

                            </div>
</div>

<RightDeskSidebar/>
</div>
</div>
  )
}

export default DeclareBets