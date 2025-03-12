import React, { useEffect } from 'react'
import { useCasinoReport } from '../../../Framework/casino';
import PageLoader from '../../common/pageLoader';

const CasinoReport = () => {

    const {data,isLoading} = useCasinoReport();
    console.log(data,"REPORTS::::::")
     if(isLoading){
        return<PageLoader/>
     }
    // useEffect(()=>{
    //     if(data?.url){
    //         window.location.href = data?.url;

    //     }
    // },[data])
  return (
    <div
    className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
    style={{ minHeight: "calc(-54px + 100dvh)" }}
  >
    <div>{
        data?.url ? <div>
        <iframe
          src={`${data?.url}`}
          className=""
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            paddingTop:"130px",
            height: "100vh",
            border: "none",
          }}
          title="My iFrame"
          
        />
      </div>:""
      }</div>
      </div>
  )
}

export default CasinoReport;