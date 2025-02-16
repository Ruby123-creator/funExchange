import React from "react";

interface Props{
  text:string,
  image:any
}
const NoFound : React.FC<Props> = ({text,image}) => {
  return (
    <div className="w-full pt-[15px] px-2 block lg:hidden">
      <div className="font-lato flex flex-col gap-y-[5px] pb-2 h-full">
        <div className="flex w-full ">
          <div className=" flex flex-col w-full items-center">
            <span className="  text-text_Ternary  font-semibold text-[14px] py-[4px] px-[2px] ">
                {text}
             
            </span>
            <div className=" w-full flex flex-row font-lato items-center">
              <div className=" flex flex-row items-center justify-evenly  w-full">
                <span>
                <img src={image} alt="My Icon"  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoFound;
