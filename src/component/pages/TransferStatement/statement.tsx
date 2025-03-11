import React, { useState } from 'react'
import { useCurrentBetsData } from '../../../Framework/placeBet';

interface Props{
  data?: any;
}
const Statements : React.FC<Props> = ({data}) => {
  const [open,setOpen] = useState(true);
  console.log(data,"establis")
  return (
    
    <div className=" w-full  gap-1 py-5">
      {
            (data||[])?.length ?   <div className="overflow-x-auto no-scrollbar">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
              
              <thead className=" text-text_Quaternary text-xs bg-bg_Secondary">
                <tr>
                <th className="p-2 text-left">S.no</th>
                  <th className="p-2 text-left">Credit</th>
                 
                 
                  <th className="p-2 text-left w-auto whitespace-nowrap">Debit</th>
                  <th className="p-2 text-left">Balance</th>
                  <th className="p-2 text-left">Time</th>
                  <th className="p-2 text-left">Details</th>
                 
                
                </tr>
              </thead>
              <tbody>
                {(data||[]).map((bet:any, index:number) => (
                  <tr
                    key={"currentBets"+index}
                    className="border-b border-gray-200 hover:bg-gray-50 text-xs"
                  >
                    <td className="p-2">{bet.index}</td>
                    <td className=" p-2 text-text_Profit">₹{bet.credit}</td>
                    
                   
                    <td className="p-2 text-text_Danger">₹{bet.debit}</td>
                    <td className="p-2">₹{bet.balance}</td>
                   
                    <td className="p-2"> {bet.time}</td>
                   
                  
                    <td className="p-2"> {bet.details}</td>
                   
                   
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

export default Statements