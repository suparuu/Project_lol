import { useState, useRef, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Champ from "./Champ";
import Assassin from "./Assassin";
import Mage from "./Mage";
import Support from "./Support";
import Tank from "./Tank";
import Marksman from "./Marksman";
import Fighter from "./Fighter";
import Asdf from "./Asdf";
import axios from 'axios';

import "../css/Main.scss";

const Main = (props) => {
  const navi = useNavigate();
  const navigo = () => {
    navi("Asdf");
  };
  useEffect(() => {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion.json" //챔프 전체 데이터api
    )
      .then((Response) => Response.json())
      .then((Response) => lolMain(Response))
      .catch((err) => console.error(err));
  }, []);

      /* axios.get("https://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion.json")//챔프 전체 데이터api
      .then((Response)=>lolMain(Response))
      .catch((error)=>{console.log(error)}) */


  const [catestate,setCatestate] = useState();
  const [test5, setTest5] = useState([]);//챔프 이름,영문,태그명
  const [aaa, setAaa] = useState();
  const data1 = useRef("0");
  const [role, setRole] = useState();
//const[t,setT]

  function lolMain(test) {
    const champ = test.data;
    const ChampUrl =
      "https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/";

    const ChampName = [];
    for (let name in champ) {
      ChampName.push({
        en: name,
        kr: champ[name].name,
        tags: champ[name].tags,
      });
    } //영문이름,한글이름
    console.log(champ,'챔프데이터');

    ChampName.sort(function (a, b) {
      return a.kr < b.kr ? -1 : a.kr > b.kr ? 1 : 0;
    }); //가나다순 함수
    setTest5(ChampName);
    setAaa(champ);

    const searchSpace = (e) => {
      let keyword = e.target.value;
      this.setText({});
    }; //검색기능 함수
    console.log(ChampName,'챔프 이름,영문,태그명');
    console.log(test5)
   /*  const aaaa = () =>{

        test5&&test5.map((obj)=>{
            obj.tags.map((obj2)=>{
                console.log(obj2)
            })
        })
    }
    aaaa() */
    
    
    /* const serachOn=()=>{
        if(text === null || text === ''){
        }
        else{
            const filtText = ChampName.filter((obj)=>obj.id == searchSpace)
            setText(filtText)
            console.log(text,'실험')//
        }
    
} */

  }//Main
  const tagname = ["Marksman","Tank","Mage","Fighter","Assassin","Support"]
 
 
  const category = (tags) =>{
    if(tags == "전체보기"){
        setCatestate(test5)
        console.log('전체보기',catestate)
    }else{
        setCatestate(test5.filter((d)=>{
            return d.tags == tags
        }))
    }//카테고리 함수
    
    console.log(tags)
    console.log(catestate)
  }

  const [text, setText] = useState("");
  const [asdf,setAsdf]= useState();

  console.log(text,'채팅')
  console.log(test5)
  /* const items = catestate.filter((data)=>{
    data.kr.includes(text)
  })
  setAsdf(items)
  console.log(asdf) */
 /*  catestate.map((obj)=>{
    obj.filter((obj2)=>{
        console.log(obj2)

    })
  }) */

  console.log(catestate)

  return (
    <>
      <main>
        <Routes>
          <Route path="/Champ/:name" element={<Champ />}></Route>
          <Route path="/Asdf" element={<Asdf test5={test5} setTest5={setTest5} props={props} aaa={aaa} setAaa={setAaa} role={role} setRole={setRole}/>}></Route>

        </Routes>
        <section className="champions">
          <div className="headbox">
            <div className="buttonbox">
              <button onClick={()=>{category("전체보기")}}>전체보기</button>
              <button onClick={()=>{category("Mage")}}>법사</button>
              <button onClick={()=>{category("Tank")}}>태ㅔㅇ크 </button>
              <button onClick={()=>{category("Fighter")}}>브루저</button>
              <button onClick={()=>{category("Assassin")}}>암살자</button>
              <button onClick={()=>{category("Support")}}>사퍼타</button>
              <button onClick={()=>{category("Marksman")}}>원딜</button>
            </div>
            <div className="searchbox">
              <input  value={text} type="text" onChange={(e) => { setText(e.target.value)}}></input>
              {
              }
              <button onClick={''}>검색</button>
            </div>
          </div>
          <div className="champbox01">
            {/* {test5 &&
              test5.map((obj) => {
                  return (
                    <Link to={`/Champ/${obj.en}`}>
                      <div className="imgbox01">
                        <img
                          src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${obj.en}.png`}
                        ></img>
                        <span>{[obj.kr]}</span>
                      </div>
                    </Link>
                  );
              })} */}
            {/* {catestate&&catestate.map((obj)=>{
                return(
                    <Link to={`/Champ/${obj.en}`}>
                    <div className="imgbox01">
                        <img src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${obj.en}.png`}></img>
                        <span>{[obj.kr]}</span>
                      </div>
                    </Link>

                )
            })} */}
            {catestate&&catestate.map((obj)=>{
                return(
                    <Link to={`/Champ/${obj.en}`}>
                    <div className="imgbox01">
                        <img src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${obj.en}.png`}></img>
                        <span>{[obj.kr]}</span>
                      </div>
                    </Link>

                )
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
