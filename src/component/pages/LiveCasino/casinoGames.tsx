import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Card from './card';
interface Props{
    items:any,
    title:string
}
const CasinoGames:React.FC<Props> = ({items,title}) => {
  return (
    <div className="flex flex-col">
    <div className="w-full overflow-hidden  mt-2 ">
        <div
            className="flex flex-wrap items-center mt-2 mb-2 justify-between gap-[5px] self-stretch text-text_Quaternary">
            <div className="flex items-center gap-2 px-1"><span
                    className="font-lato text-text_Ternary  font-extrabold tracking-[0.3px] text-sm md:text-base lg:text-lg capitalize leading-[18px]">{title}</span>
            </div>
            <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
                <button
                    className="inline-block  relative overflow-hidden  transition duration-150 ease-in-out font-lato  text-text_DepositTextColor font-semibold text-[12px] leading-[18px]  cursor-pointer"
                    type="button">See All</button><button
                    className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border  bg-bg_Foundation rounded  cursor-pointer"
                    type="button">
                        <FaAngleLeft  stroke="var(--color-primary)" fill="none"/>
                      </button><button
                    className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded  cursor-pointer"
                    type="button">
                        <FaAngleRight  stroke="var(--color-primary)" fill="none"/>

                        </button>
            </div>
        </div>
        <div className="pt-0 w-full h-max overflow-x-auto no-scrollbar"
            style={{scrollBehavior: "smooth"}}>
            <div className="w-full flex gap-[8px] py-1">
              {
                items.map((item:any)=> <Card img={item?.img}/>)
              }
            </div>
        </div>
    </div>
</div>
  )
}

export default CasinoGames