import React, { useState } from 'react'

import { format, parseISO } from 'date-fns';


interface Props{
  data?: any;
}
const Settlements : React.FC<Props> = ({data}) => {
  const [open,setOpen] = useState(true);
  console.log(data,"establis");
  const formattedDate = (dateStr:string)=>{
    const cleanDateStr = dateStr.replace(/\[.*?\]/g, "");

// Convert to UTC and then to the desired time zone
// Parse the date directly
const parsedDate = new Date(cleanDateStr);

// Format the date into dd/MM/yyyy HH:mm:ss
const formattedDate = format(parsedDate, "dd/MM/yyyy HH:mm:ss");
return formattedDate;
  }
  return (
    
    <div className=" w-full  gap-1 py-5">
      {
            (data||[])?.length ?   <div className="overflow-x-auto no-scrollbar">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
              
              <thead className=" text-text_Quaternary text-xs bg-bg_Secondary">
                <tr>
                <th className="p-2 text-left">S.no</th>
                  <th className="p-2 text-left">Id</th>
                 
                 
                  <th className="p-2 text-left w-auto whitespace-nowrap">Amount</th>
                  <th className="p-2 text-left">Balance</th>
                  <th className="p-2 text-left">Time</th>
                  <th className="p-2 text-left">Game Category</th>
                  <th className="p-2 text-left">Type</th>
                 
                  <th className="p-2 text-left">GameRoundId</th>
                  <th className="p-2 text-left">Status</th>
                
                </tr>
              </thead>
              <tbody>
                {(data||[]).map((casino:any, index:number) => (
                  <tr
                    key={"currentBets"+index}
                    className="border-b border-gray-200 hover:bg-gray-50 text-xs"
                  >
                    <td className="p-2">{index+1}</td>
                    <td className="p-2"> {casino?.gameId}</td>

                    <td className=" p-2">₹{Number(casino?.amount)*10}</td>
                    <td className="p-2">₹{Number(casino?.balance)*10}</td>
                    
                   
                    <td className="p-2">{formattedDate(casino?.created)}</td>
                   
                    <td className="p-2"> {casino?.gameCategory}</td>
                   
                  
                    <td className="p-2"> {casino?.type}</td>
                    <td className="p-2"> {casino?.playerGameRoundId}</td>
                    <td className="p-2">{casino?.roundStatus}</td>

                   
                  </tr>
                ))}
              </tbody>
            </table>
          </div>: <div className="w-full font-medium text-sm bg-bg_Quaternary rounded px-4  py-3 shadow text-text_Ternary ">
            You have no Matched Bets.
          </div>
          }
    </div>
  
  )
}

export default Settlements