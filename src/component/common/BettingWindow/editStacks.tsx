import React from "react";
import { useUI } from "../../../context/ui.context";

interface Props{
  edit:any,
}
const EditStack: React.FC<Props> = ({edit}) => {
  const {stacks,setStacks} = useUI();
  return (
   <div className="grid grid-cols-3 gap-2">
    {
      stacks.map((val:any,i:number)=>{
        return(
          <div className="bg-bg_StakeInput">
            {
               edit ? <input onChange={(e)=>{
                  let updatedStacks = stacks.map((item:any,index:number)=> index === i ? Number(e.target.value):item)
                  setStacks(updatedStacks);

               }} className="block w-full focus:outline-none  rounded py-1.5 bg-bg_StakeInput text-center text-[12px] text-text_Ternary  font-lato border  border-ternary2 focus:border-success shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" autoComplete="off" type="number" value={val}/> : <div className="rounded py-1.5 px-2 bg-bg_StakeInput flex justify-center items-center text-[12px] text-text_Ternary  font-lato  border border-ternary2 focus:border-success shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">{val}</div>
            }
    </div>
        )
      })
    }
   
    
   </div>
  );
};

export default EditStack;
