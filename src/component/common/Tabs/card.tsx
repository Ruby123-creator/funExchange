import React from 'react'

const CardComp: React.FC = () => {
  return (
    <div className="w-[117px] md:w-[135px] aspect-square relative">
    <div
        className="w-[117px] md:w-[135px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
        <div
            className="relative rounded-[8px] w-full aspect-[0.75] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
            <img src="assets/images/MINES.jpg" width="auto" height="auto"
                className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                alt="casino-event-image" loading="lazy" title="MINES" />
        </div>
    </div>
</div>
  )
}

export default CardComp