import React from 'react';
import { useUI } from '../../../../../context/ui.context';

interface BettingData {
  price: string;
  max?: number;
  min?: number;
  size?: string;
  bg?: string;
  runnerName?: string;
  type?: string;
  time?: string;
  result?: boolean;
}

interface Props {
  data: BettingData;
}

const BettingBtns: React.FC<Props> = ({ data }) => {
  const { setMatchedBets, betOdds } = useUI();

  const handleClick = () => {
    if (!data.result) {
      setMatchedBets({
        ...betOdds,
        odds:(data?.price||"").trim(),
        max: data?.max,
        min: data.min,
        runnerName: data.runnerName,
        type: data.type,
        time: data.time,
        betTrue: true,
        betType:"odd"
      });
    }
  };

  return (
    <span
      className="text-center min-w-[50px] hover:opacity-50"
      onClick={handleClick}
    >
      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
        <div
          className={`overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center ${data.bg} border`}
        >
          <span
            id="oddBtnPrice"
            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
          >
            {(data.price )? data.price: ""}
          </span>
          <span
            id="oddBtnSize"
            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
          >
            <span className="w-max break-all truncate">
              <div className="odd-button__volume">{ data?.size !== "-" ? data.size :""}</div>
            </span>
          </span>
        </div>
      </span>
    </span>
  );
};

export default BettingBtns;
