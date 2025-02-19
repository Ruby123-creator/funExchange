import React from 'react'
import { useNavigate } from 'react-router-dom';

import { useUI } from '../../../context/ui.context';
import { siderbarDrawer } from '../../../Framework/utils/static';

const SidebarComp: React.FC = () => {
    const Navigate = useNavigate();
    const {isLogin,setLoginModal} = useUI();
  
  return (
    <div title="Menu" id="leftDeskSideBar"
    className="hidden lg:flex p-2 overflow-y-auto z-10 w-[20%] h-[calc(100dvh-120px)] sticky top-[54px] lg:top-[110px]">
    <ul
        className="flex border rounded-lg border-ternary3 bg-bg_Quaternary overflow-x-hidden flex-col w-full">
        {
            (siderbarDrawer||[]).map((item,i)=>{
                 return(
                    <li
 className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b hover:bg-bg_MenuHoverColor hover:scale-[102%]">
 <span className="flex w-full items-center h-full px-6 justify-start gap-3"
 onClick={()=>{
  if(isLogin){
    Navigate(item?.routing);
  }
  else{
  setLoginModal(true);
  }

}}
     >
       {item?.icon}
       <span className="font-medium text-start text-text_Ternary">{item?.title}</span></span>
</li>
                 )
            })
 
        }
       
       
      

      

      

       
       
        
      
       
       
       
    </ul>
</div>
  )
}

export default SidebarComp