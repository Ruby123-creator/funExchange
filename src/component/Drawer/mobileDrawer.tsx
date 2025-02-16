import React from 'react'
import { siderbarDrawer ,socialLinks} from '../../Framework/utils/static'
import { useNavigate } from 'react-router-dom'
interface Props{
    setMobileDrawer:any
}
const MobileDrawer:React.FC<Props> = ({setMobileDrawer}) => {
    const navigate = useNavigate();
  return (
    <aside >
    <div id="leftsidebar" className="fixed top-0 left-0 z-50 w-full h-full  bg-opacity-50 block"
        style={{ zIndex: "11111"}}>
        <div>
            <div
                className="fixed transition-all ease-in-out openDrawer origin-left top-0 left-0 z-50 w-[70%] max-w-sm h-full overflow-y-auto bg-bg_Quaternary shadow-lg  ">
                <ul className=" overflow-y-auto h-max divide-y">
                    <li
                        className="px-3 py-2 transition-all rounded-sm ease-in-out duration-150 hover:bg-bg_Ternary6  active:scale-[99%] flex items-center justify-start gap-x-4 cursor-pointer">
                        <a className="flex items-center justify-start gap-x-4 w-full" href="/"><span
                                className=" w-3 h-auto xs:w-4"><svg width="20" height="20" viewBox="0 0 64 64"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10.2208 25.2081C8.58995 23.849 8.72593 21.3034 10.4923 20.1258L22.5839 12.7529L30.5466 12.458L39.7792 6.91839C46.1332 3.10599 53.757 2.0196 60.923 3.90539C62.9758 10.2502 62.0646 17.1819 58.4418 22.7807L51.1908 33.9869L50.6009 42.2446L42.3433 54.3361C41.4141 55.0795 40.1911 55.3464 39.0367 55.0578L38.8483 55.0107C38.6265 54.9553 38.424 54.8406 38.2623 54.6789L37.9195 54.3361L32.611 45.7836L26.1229 46.6683L21.1093 41.6547L16.6855 36.9361L17.8652 30.153L10.4923 25.4343L10.2208 25.2081ZM52.9603 19.2411C52.9603 23.4759 49.5273 26.9089 45.2925 26.9089C41.0576 26.9089 37.6246 23.4759 37.6246 19.2411C37.6246 15.0062 41.0576 11.5732 45.2925 11.5732C49.5273 11.5732 52.9603 15.0062 52.9603 19.2411ZM17.376 44.2883L2 58.9329L4.01489 61.0484L19.3909 46.4039L17.376 44.2883ZM10.2577 58.9316L21.2972 48.4172L23.3121 50.5327L12.2725 61.0471L10.2577 58.9316ZM13.0396 40.1595L2 50.6739L4.01489 52.7894L15.0545 42.275L13.0396 40.1595Z"
                                        fill="#c10931"></path>
                                </svg></span><span className=" font-medium text-sm xs:text-base">Aviator</span></a>
                    </li>

                    {
                        (siderbarDrawer||[]).map((item,i)=>{
                            return(
                                <li
                                className="px-3 py-2 transition-all rounded-sm ease-in-out duration-150 hover:bg-bg_Ternary6  active:scale-[99%] flex items-center justify-start gap-x-4 cursor-pointer">
                                <span className="flex items-center justify-start gap-x-4 w-full" onClick={()=>{
                                    navigate(item?.routing)
                                    setMobileDrawer(false)
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
</aside>
  )
}

export default MobileDrawer