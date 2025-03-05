import { Card, Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import React, { useEffect, useState } from 'react'
import { MdLiveTv } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
interface Props{
    data: any,
    sportsId: string,
}

const transformRacingData = (data: any) => {
    const groupedData: any={};

  (data||[]).forEach((item:any) => {
    if (!groupedData[item?.country]) {
      groupedData[item?.country] = { country:item?.country, nationArr: [] };
    }

    const nationObj = groupedData[item?.country].nationArr.find((n:any) => n.nation === item?.nation);

    if (nationObj) {
      nationObj.timing.push({time:item?.time,gameId:item?.gameid});
    } else {
      groupedData[item?.country].nationArr.push({ nation:item?.nation, timing: [{time: item?.time ,gameId:item?.gameid}] });
    }
  });

  return Object.values(groupedData);
};
const RacingFixture: React.FC<Props> = ({data,sportsId}) => {
  const [countries,setCountries] = useState<any[]>([])
      const Navigate = useNavigate();
     useEffect(()=>{
      const uniqueCountries = transformRacingData(data);

      setCountries(uniqueCountries)
     },[data])
    return (
        <div className="py-3 px-[6px] w-full">
    <div className="w-full font-helvetica-neue racing-fixture">
        <Tabs >
          {(countries||[]).map((val:any, index:number) => (
            <TabPane tab={val?.country} key={val?.country}>
            {
                    (val?.nationArr||[]).map((item:any,i:number)=>{
                        return(
<div className="col-span-12 grid grid-cols-12 bg-bg_Quaternary" key={`${val?.country}-${item?.nation}`}>
<div
                                className="col-span-6 h-14 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket ">
                             

                                <span id="inPlayTeamName"
                                    className=" text-selection-none flex items-center justify-start col-span-10 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100">
                                   
                                   <span
                                                className=" text-[10px] font-bold text-text_Ternary  truncate sm:text-xs md:text-sm">{item?.nation}</span>
                                    <span className=" absolute top-0.5 right-0.5">
                                        <MdLiveTv fill="#257B24"/>
                                      
                                    </span>
                                  
                                </span>
                            </div>

                            <span
                                className=" col-span-6 h-14 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket ">
                                <div
                                    className="w-full h-full flex gap-2 py-2 px-5 flex-wrap">
                                      {
                                        (item?.timing||[]).map((event:any,i:number)=>{
                                            return <div
                                            key={`${item?.nation}-${event?.gameId}-${i}`}

                                            className='w-[50px] h-[20px] flex items-center justify-center rounded font-medium   text-[12px] bg-bg_HeaderDepositBtnBgColor border-depositBtn text-text_Quaternary cursor-pointer'  onClick={()=>{
                                              Navigate(`/event-page/${sportsId}/${event?.gameId}`)
                                            }}>{event?.time}</div>
                                        })
                                      }
                                   
                                </div>
                            </span>
                        </div>
                        )
                    })
                }
           
            </TabPane>
          ))}
        </Tabs>
        </div>
        </div>
      );
}

export default RacingFixture