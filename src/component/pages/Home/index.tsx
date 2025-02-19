import React, { useState } from 'react';
import SidebarComp from './sidebar';
import PanelComp from './panel';
import RightDeskSidebar from '../../common/RightDeskSidebar.tsx';


const Home: React.FC = () => {
 

  return (
    <div className="flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 pt-[94px]">
                <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
      <SidebarComp/>
      <PanelComp/>
      <RightDeskSidebar/>
      </div>
    </div>
  );
};

export default Home;
