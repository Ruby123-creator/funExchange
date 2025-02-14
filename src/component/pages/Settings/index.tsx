import React from 'react'
import SidebarComp from '../Home/sidebar'
import RightDeskSidebar from '../../common/RightDeskSidebar.tsx'
import PanelComp from '../Home/panel'

const Settings = () => {
  return (
    <div className="flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 pt-[94px]">
    <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
<SidebarComp/>
<PanelComp/>
<RightDeskSidebar/>
</div>
</div>
  )
}

export default Settings