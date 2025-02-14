import React from 'react'

interface Props{
    img?:string;
}
const Card: React.FC<Props> = ({img}) => {
  return (
    <div className="relative">
                                            <div
                                                className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                                                <div
                                                    className="relative rounded-[8px] w-full  aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                                    <img src={img}
                                                        width="auto" height="auto"
                                                        className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                                        alt="Always 8 Baccarat" loading="lazy"
                                                        title="Always 8 Baccarat"/>
                                                </div>
                                            </div>
                                        </div>
  )
}

export default Card;