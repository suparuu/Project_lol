import React from 'react'
import { useState, useRef, useEffect } from "react";

const Asdf = (mprops) => {
    //Marksman 데이터 뿌리기 연습ss
    const [ccc,setCcc] = useState();
    const [role,setRole] = useState();

    const maptest = mprops.test5//챔프 이름 태그명
    console.log(maptest)


   
    console.log(ccc)
    const tagname = ["Marksman","Tank","Mage","Fighter","Assassin","Support"]
    const testEvent = ()=>{
        setRole(tagname)
        console.log(tagname)
    }
    

    /* maptest&&maptest.filter((obj)=>{
        if(obj.tags == tagname){
            console.log('원딜')
        }
    }) */
    
   /*  maptest&&maptest.map((obj)=>{
        if(obj.tags=='Marksman'){
            console.log(`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${obj.en}.png`,obj.kr)
        }
    }) */
     const test44 = ()=>{
        maptest&&maptest.map((aa)=>{
            aa.tags.map((bb)=>{
                if(bb == 'Marksman'){
                    console.log(bb)
                    
                }
            })
        })
    }
    test44()
   
    
    return (
        <>
        <div className="imgbox02" style={{display:"flex",justifyContent:"center",width:"100px"}}>
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