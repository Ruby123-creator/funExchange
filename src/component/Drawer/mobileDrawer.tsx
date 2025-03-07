import React from 'react'
import { siderbarDrawer ,socialLinks} from '../../Framework/utils/static'
import { useNavigate } from 'react-router-dom'
import { useUI } from '../../context/ui.context'
interface Props{
    setMobileDrawer:any
}
const MobileDrawer:React.FC<Props> = ({setMobileDrawer}) => {
    const navigate = useNavigate();
    const {isLogin,setLoginModal} = useUI();
    console.log(isLogin,"matchessss::::::::")
  return (
    <div id="leftsidebar" className="fixed top-0 left-0 z-50 w-full h-full  bg-opacity-50 block"
    onClick={(e) => {
        e.stopPropagation();
        
        setMobileDrawer(false)}} 
        style={{ zIndex: "11111"}}>
        <div>
            <div
                className="fixed transition-all ease-in-out openDrawer origin-left top-0 left-0 z-50 w-[70%] max-w-sm h-full overflow-y-auto bg-bg_Quaternary shadow-lg  ">
                <ul className=" overflow-y-auto h-max divide-y">
                   

                    {
                        (siderbarDrawer||[]).map((item,i)=>{
                            return(
                                <li
                                className="px-3 py-2 transition-all rounded-sm ease-in-out duration-150 hover:bg-bg_Ternary6  active:scale-[99%] flex items-center justify-start gap-x-4 cursor-pointer">
                                <span className="flex items-center justify-start gap-x-4 w-full" onClick={()=>{
                                    if(isLogin){
                                        navigate(item?.routing);

                                    }
                                    else{
                                        setLoginModal(true);
                                    }
                                   
                                    setMobileDrawer(false);
                                    }}>
                                <span
                                        className=" w-3 h-auto xs:w-4">
                                            {item?.icon}
                                        </span><span className=" font-medium text-sm xs:text-base">{item?.title}</span></span>
                            </li>
                            )
                        })
                    }
                   
                   
                    <li className=" px-3 py-2"><span
                            className="flex text-center text-text_Primary text-sm xs:text-base font-medium">Register
                            online and play online</span></li>
                    <li className="p-1">
                        <div className="flex flex-col gap-1 p-3 items-center bg-bg_contactUsCard rounded">
                            <span className="text-text_Quaternary font-semibold">Contact
                                Us</span>
                            <div className="flex w-full items-center justify-center gap-1 ">
                                {
                                    (socialLinks||[]).map((item,i)=>{
                                        return(
                                            <a title="whatsapp" href="https://wa.me/0000000000?text=Hello%20there!"
                                            target="_blank" className="flex items-center justify-center gap-1 w-10 h-10 ">
                                                {
                                                    item?.icon
                                                }
                                               </a>  
                                        )
                                    })
                                }
                               
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MobileDrawer