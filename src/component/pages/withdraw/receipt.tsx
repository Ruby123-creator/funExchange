import React from 'react'

interface Props{
    item?:any;
}
const Recepit :React.FC<Props> = ({item}) => {

  return (
    <div  className=" border border-gray-200 p-4 shadow-sm bg-bg_Quaternary">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
    <div className=' flex justify-between'>
        <span className="font-semibold">UTR Number</span>  <span>{item.utr}</span>
      </div>
      <div className=' flex justify-between'>
        <span className="font-semibold">Holder Name</span>  <span>{item.holder_name}</span>
      </div>
      <div className=' flex justify-between'>
        <span className="font-semibold">Account Number</span>  <span>{item.account_number}</span>
      </div>
      <div className=' flex justify-between'>
        <span className="font-semibold">IFSC Code</span>  <span>{item.ifsc}</span>
      </div>
      <div className=' flex justify-between'>
        <span className="font-semibold">Bank Name</span>  <span>{item.bank_name}</span>
      </div>
    
      <div className=' flex justify-between'>
        <span className="font-semibold">Amount</span> <span>₹{item.amount}</span> 
      </div>
     
   
    
     
      <div className=' flex justify-between'>
        <span className="font-semibold">Date</span> {item.request_date}
      </div>
     
      <div className=' flex justify-between'>
        <span className="font-semibold">Status</span> {item.status}
      </div>
    </div>
  </div>

  )
}

export default Recepit