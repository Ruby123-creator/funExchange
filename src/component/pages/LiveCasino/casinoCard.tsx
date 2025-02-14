import React from 'react'

interface Props{
    img:string
}
const CasinoCard: React.FC<Props> = ({img}) => {
  return (
<button
                                        className=" leading-normal relative overflow-hidden   transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow   cursor-pointer"
                                        type="button" title="Blueprint Gaming">
                                        <div title="InPlayAndPopulars" id="banners"
                                            className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]  ">
                                            <img src={img}
                                                width="80" height="40" className=" rounded rounded-8 "
                                                alt="Blueprint Gaming" loading="lazy"
                                                title="Blueprint Gaming"/>
                                        </div>
                                    </button>
  )
}

export default CasinoCard