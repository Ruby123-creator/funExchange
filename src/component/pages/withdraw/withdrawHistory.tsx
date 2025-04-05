import React from 'react'
import { usePendingTransaction, useWithdrawHistory } from '../../../Framework/transfer'
import { useUI } from '../../../context/ui.context';

interface Props{
 data?:any
}
const WithdrawHistory :React.FC<Props> = ({data=[]}) => {
  const {userData} = useUI();
   const val =  {
    "name": userData?.UserName,
    "from_date": "2025-03-01",
    "to_date": "2025-04-31"
  }
  const pendingVal = {
    
      passkey: "051a4e5983c6167cc982058a09230459688c40d7",
      name: userData?.UserName,
      type: "debit"
    
  }
  const {data:withdrawHistory} = useWithdrawHistory(val);
  const {data:pendingWithdraw} = usePendingTransaction(pendingVal);

  console.log(withdrawHistory,pendingWithdraw,"CHECK::::::::")
    return (
    
        <div className=" w-full  gap-1 py-5">
          {
          (pendingWithdraw||[])?.length ?   <div className="overflow-x-auto no-scrollbar">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            
            <thead className=" text-text_Quaternary text-xs bg-bg_Secondary">
              <tr>
              <th className="p-2 text-left">S.no</th>
                <th className="p-2 text-left">Holder Name</th>
                <th className="p-2 text-left">Bank Name</th>
                <th className="p-2 text-left">Account Number</th>
                <th className="p-2 text-left">Amount</th>
                <th className="p-2 text-left">IFSC Code</th>

                <th className="p-2 text-left">Date</th>
               
               
               
               
              
              </tr>
            </thead>
            <tbody>
              {(pendingWithdraw||[]).map((item:any, index:number) => (
                <tr
                  key={"currentBets"+index}
                  className="border-b border-gray-200 hover:bg-gray-50 text-xs"
                >
                  <td className="p-2">{index+1}</td>
                  
                  <td className="p-2"> {item.holder_name}</td>
                  <td className="p-2"> {item.bank_name}</td>
                  <td className="p-2"> {item.account_number}</td>
                  <td className=" p-2 text-text_Profit">₹{item.amount}</td>
                  <td className="p-2"> {item.ifsc}</td>

                 
                  <td className="p-2"> {item.request_date}</td>
                 
                
                 
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

export default WithdrawHistory