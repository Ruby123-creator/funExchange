import React from 'react';
import { useUI } from '../../../context/ui.context';

interface LayBackProps {
  val: string;
  className: string;
   size?: string;
  allowed?: boolean;
  max?: any;
  min?: number;
  betTrue?:boolean;
  type?:string;
  betType?:string;
  runnerName?:string;
  eventKey?: string;
  time?: string;
}

const LayBack: React.FC<LayBackProps> = ({ val, className, size, allowed, max, betTrue,type,betType , runnerName,eventKey, time,min}) => {
  const { setMatchedBets, betOdds } = useUI();

  return (
    <div className={`w-full h-full min-w-[50px] ${!allowed ? 'cursor-not-allowed opacity-50' : ''}`}>
      <span
        className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden"
        onClick={() => {
          if (betTrue) setMatchedBets({ ...betOdds, odds: val, max: max, runnerName,key:eventKey ,type,betType: betType === "Bookmaker" ? "bookmaker":"market",time,min});
        }}
      >
        <div
          className={`overflow-hidden relative w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center min-w-[80px] md:min-w-0 flex-shrink-0 ${className} border`}
        >
          <span
            id="oddBtnPrice"
            className="relative z-10 transition-all ease-in-out duration-300 flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
          >
            {val}
          </span>
          {size && (
            <span
              id="oddBtnPrice"
              className="relative z-10 transition-all ease-in-out duration-300 flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[10px] font-medium"
            >
              {size}
            </span>
          )}
        </div>
      </span>
    </div>
  );
};




export default LayBack;