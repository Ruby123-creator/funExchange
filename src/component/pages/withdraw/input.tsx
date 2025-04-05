import { Input } from 'antd'
import React from 'react'
interface Props{
    label:string,
    placeholders:string,
    suffix?:any,
    prefix?:any,
    className:string,
    value:string|number,
    name?:string,
    setValue?:any;
    type?:string;
    maxLength?:number
}
const InputComp :React.FC<Props> = (props) => {
    const{label,prefix,type,placeholders,className,setValue,maxLength} =props;
  return (
    <div className="flex flex-col w-full my-1">
        
        <div className="ml-1 text-sm">{label}<span className="text-text_Primary">*</span></div><div className=" relative">
            
            <Input placeholder={placeholders} type={type} maxLength={maxLength} prefix={prefix} onChange={(e)=>setValue(e.target.value)} className={className} autoComplete='off'/>
  
    </div><div className="text-xs  ml-1 text-text_Primary"></div></div>
  )
}

export default InputComp