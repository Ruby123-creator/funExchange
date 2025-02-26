import React from 'react'
import SidebarComp from '../Home/sidebar'
import PanelComp from '../Home/panel'
import RightDeskSidebar from '../../common/RightDeskSidebar.tsx'
import MatchedBets from '../../common/BettingWindow/matchedBet'

const OpenBets = () => {
  return (
    <div className="flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 pt-[94px]">
    <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
<SidebarComp/>
<div className='w-full lg:w-[50%] px-2 py-4 pt-[18px] my-[13px] lg:pt-0 lg:my-0'>
<MatchedBets render={1}/>
</div>

<RightDeskSidebar/>
</div>
</div>
  )
}

export default OpenBets