import React from 'react'

const AviatorComp: React.FC = () => {
  return (
    <div className="flex flex-col  transition-all lg:pt-[110px] ease-in-out duration-100 pt-0">
    <div className="flex items-start justify-start w-full ">
        <div className="w-full md:mt-[0px]   lg:overflow-auto" style={{minHeight: "calc(-110px + 100dvh)"}}>
            <div></div>
            <div className="bg-transparent w-full h-full">
                <div className="  w-full flex h-[calc(100dvh-42px)] lg:h-[calc(100dvh-54px)]"><iframe
                        src="https://live.fantasylineups.com/?host_id=diamond222&amp;token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTU1Y2UwNTcxZGU1OTExNjIyNGNhNDkiLCJpYXQiOjE3MzQ2OTUzMDIsImV4cCI6MTczNTMwMDEwMn0.yEFTrajM-k30b9eQFrswxyrN_Njv3CU4Z3YzPrSK9F4"
                        className="w-full h-full flex-grow no-scrollbar" allowFullScreen={true}
                        aria-hidden="true"></iframe></div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AviatorComp