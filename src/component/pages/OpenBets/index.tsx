import React from 'react'
import SidebarComp from '../Home/sidebar'
import PanelComp from '../Home/panel'
import RightDeskSidebar from '../../common/RightDeskSidebar.tsx'
import MatchedBets from '../../common/BettingWindow/matchedBet'
import { DatePicker, DatePickerProps, Select } from 'antd'
import { CiSearch } from "react-icons/ci";
import { useCurrentBetsData } from '../../../Framework/placeBet'

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
};
const onChange1 = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};
const OpenBets = () => {
  const {data} = useCurrentBetsData();

  return (
    <div className="flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 pt-[94px]">
    <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
<SidebarComp/>
<div className='w-full lg:w-[50%] px-2 py-4 pt-[18px] my-[13px] lg:pt-0 lg:my-0'>
<div className="flex flex-col h-full bg-bg_Quaternary p-2">
                          
                            <MatchedBets render={1} data={data}/>

                            </div>
</div>

<RightDeskSidebar/>
</div>
</div>
  )
}

export default OpenBets