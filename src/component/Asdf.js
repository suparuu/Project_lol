import React from 'react'
import { useState, useRef, useEffect } from "react";

const Asdf = (mprops) => {
    //Marksman 데이터 뿌리기 연습ss
    const [ccc,setCcc] = useState();

    const maptest = mprops.test
    console.log(maptest)
    maptest&&maptest.filter((obj)=>{
        if(obj.tags == 'Marksman'){
            console.log(' 원딜')
        }
        if(obj.tags == 'Tanker'){
            console.log('탱커')
        }
    })
    
    maptest&&maptest.map((obj)=>{
        if(obj.tags=='Marksman'){
            console.log(`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${obj.en}.png`,obj.kr)
        }
    })
   
    return (
        <>
        <div>aaa</div>
        <div className="imgbox02" style={{display:"flex",justifyContent:"center"}}>
        {
            maptest&&maptest.map((obj)=>{
                if(obj.tags == 'Marksman'){
                    {console.log(obj.tags)}
                    return(
                        <>
                        <p>aa</p>
                        <img src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${obj.en}.png`}></img>
                        <span>{obj.kr}</span>
                        </>
                    )
                }
            })

        }
        </div>
    </>
  )
}

export default Asdf