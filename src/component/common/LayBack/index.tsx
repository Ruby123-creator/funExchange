import React from 'react';
import { useUI } from '../../../context/ui.context';

interface LayBackProps {
  val: string;
  className: string;
   size?: string;
  allowed?: boolean;
  max?: any;
  betTrue?:boolean;
}

const LayBack: React.FC<LayBackProps> = ({ val, className,size ,allowed,max,betTrue}) => {
      const {setMatchedBets,betOdds} = useUI();
  
  return (
    // <div className={`col-span-4 grid grid-cols-2 h-full ${!allowed ? 'cursor-not-allowed opacity-50':''} `}>
      <div className={`w-full h-full ${!allowed ? 'cursor-not-allowed opacity-50':''}`}>
        <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden" onClick={()=>{
          if(betTrue)
          setMatchedBets({...betOdds,odds:val,max:max})
        }}>
          <div className={`overflow-hidden relative  w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center ${className} border  undefined`}>
            <span
              id="oddBtnPrice"
              className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
            >
              {val}
            </span>
            {
              size ?  <span
              id="oddBtnPrice"
              className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[10px] font-medium"
            >
              {val}
            </span> : ""
            }
           
          </div>
        </span>
      </div>
     
    // </div>
  );
};

export default LayBack;