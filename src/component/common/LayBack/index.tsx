import React from 'react';

interface LayBackProps {
  lay: string;
  back: string;
 
  allowed?: boolean
}

const LayBack: React.FC<LayBackProps> = ({ lay, back ,allowed}) => {
  return (
    <div className={`col-span-4 grid grid-cols-2 h-full ${!allowed ? 'cursor-not-allowed opacity-50':''} `}>
      <div className="w-full h-full">
        <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
          <div className="overflow-hidden relative  w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
            <span
              id="oddBtnPrice"
              className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
            >
              {back}
            </span>
           
          </div>
        </span>
      </div>
      <div className="w-full h-full">
        <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
          <div className="overflow-hidden relative   w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
            <span
              id="oddBtnPrice"
              className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
            >
              {lay}
            </span>
            
          </div>
        </span>
      </div>
    </div>
  );
};

export default LayBack;