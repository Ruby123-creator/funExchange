import React from 'react';
import { Carousel } from 'antd';


interface CarousalProp{
   content:any,
   className:string,
}


const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const CarousalComp: React.FC<CarousalProp> = ({content,className}) =>{ 
    
    return(
  <Carousel autoplay dots={false}>
     {
                    (content||[]).map((item: any,i:number)=>{
                        return(
                            <div>
                           <img src={item?.imgPath}
                            className={className}
                            alt={item?.alt} loading="lazy" />
                            </div>
                           
                        )
                    })
                }
   
  </Carousel>
)};

export default CarousalComp;