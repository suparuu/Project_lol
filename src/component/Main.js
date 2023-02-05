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

import "../css/Main.scss";


const Main = (props) => {
    const navi = useNavigate();
    const navigo = () =>{
        navi("Asdf")
    }
  useEffect(() => {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion.json" //챔프 전체 데이터api
    )
      .then((Response) => Response.json())
      .then((Response) => lolMain(Response))
      .catch((err) => console.error(err));
  }, []);
  const [test, setTest] = useState([]);
  const [aaa, setAaa] = useState();
  const data1 = useRef("0");
  const [text,setText] = useState('');
  const [role,setRole] = useState();
  
  console.log(text);

  function lolMain(test) {
    const champ = test.data;
    const ChampUrl =
      "https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/";

    const ChampName = [];
    for (let name in champ) {
      ChampName.push({ en: name, kr: champ[name].name ,tags : champ[name].tags });
    } //영문이름,한글이름
    console.log(champ)
    console.log(ChampName);

    ChampName.sort(function (a, b) {
      return a.kr < b.kr ? -1 : a.kr > b.kr ? 1 : 0;
    }); //가나다순 함수

    setTest(ChampName);
    setAaa(champ);
    console.log(test,'aa')

    const searchSpace=(e)=>{
        let keyword = e.target.value;
        this.setText({})
    }//검색기능 함수
    
    /* const serachOn=()=>{
        if(text === null || text === ''){
        }
        else{
            const filtText = ChampName.filter((obj)=>obj.id == searchSpace)
            setText(filtText)
            console.log(text,'실험')//
        }
    
} */



}
console.log(text)

  return (
    <>

<main>
        <Routes>
          <Route path="/Champ/:name" element={<Champ  />}></Route>
          <Route path="Asdf" element={<Asdf  test={test} setTest={setTest} porps={props} aaa={aaa} setAaa={setAaa}/>}></Route>
        </Routes>
        <input value={text} type="text" onChange={(e)=>{setText(e.target.value)}}></input>
        <button onClick={''}>검색</button>
    <section className="champions">
    <div className="headbox">
        <div className="buttonbox">
        <button onClick={navigo}>연습 <Asdf/></button>
            <button onClick={navigo}>연습 <Asdf/></button>
            <button onClick={navigo}>연습 <Asdf/></button>
            <button onClick={navigo}>연습 <Asdf/></button>
            <button onClick={navigo}>연습 <Asdf/></button>
            <button onClick={navigo}>연습 <Asdf/></button>
        </div>
            <div className="searchbox">
        <input value={text} type="text" onChange={(e)=>{setText(e.target.value)}}></input>
        <button onClick={''}>검색</button>
            </div>
        </div>
        <div className="champbox01">
            
      {test &&
        test.map((obj) => {
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
        })}
        </div>
    </section>
</main>
</>
  );
};

export default Main;
