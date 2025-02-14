import React, { useState } from 'react'

const MatchedBets : React.FC = () => {
  const [open,setOpen] = useState(true);
  return (
    
    <div className=" flex flex-col w-full  gap-1">
      <div
        id="matched_1"
        className="px-3 py-2 cursor-pointer w-full flex items-center justify-between bg-bg_Secondary rounded "
        onClick={()=>setOpen(!open)}
      >
        <span className=" text-text_Quaternary text-xs">
          Matched Bets
        </span>
        <div className=" flex items-center justify-center autoAnimate ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(180)"
            viewBox="0 0 512 512"
            height="12"
            width="12"
            fill="var(--color-quaternary)"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
          </svg>
        </div>
      </div>
      {
        open ?  <div className="w-full origin-top scaleVerticalOpen">
        <div className="w-full font-medium text-sm bg-bg_Quaternary rounded px-4  py-3 shadow text-text_Ternary ">
          You have no Matched Bets.
        </div>
      </div> : ""
      }
     
    </div>
  
  )
}

export default MatchedBets