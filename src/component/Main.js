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
  const [test5, setTest5] = useState([]);//챔프 이름,영문,태그명
  const [aaa, setAaa] = useState();
  const data1 = useRef("0");
  const [text, setText] = useState("");
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
    
    const aaaaa = ChampName.find((obj,key)=>{

    })
    

    /* const serachOn=()=>{
        if(text === null || text === ''){
        }
        else{
            const filtText = ChampName.filter((obj)=>obj.id == searchSpace)
            setText(filtText)
            console.log(text,'실험')//
        }
    
} */
//버튼을 클릭 했을때 , 클릭한 버튼의 이름이 예를들어 탱커다 
// 그럼 스테이트에 탱커 이름을 담아서
console.log(role,"머들엇음?")

  }
  const tagname = ["Marksman","Tank","Mage","Fighter","Assassin","Support"]
 
  console.log(role,"머들엇음?")

  console.log(aaa)
  console.log(test5)
  function asdf(){
    test5&&test5.map((obj)=>{

                if(obj.tags== tagname[5]){
                    console.log(obj.tags)
                }
    })
  }
  asdf()
  return (
    <>
      <main>
        <Routes>
          <Route path="/Champ/:name" element={<Champ />}></Route>
          <Route path="/Asdf" element={<Asdf test5={test5} setTest5={setTest5} props={props} aaa={aaa} setAaa={setAaa} role={role} setRole={setRole}/>}></Route>
          <Route path="Tank" element={<Tank />}></Route>

        </Routes>
        <section className="champions">
          <div className="headbox">
            <div className="buttonbox">
              <button onClick={setRole}>연습 <Asdf /></button>
              <button onClick={navigo}>스테이트</button>
              <button onClick={navigo}>연습 </button>
              <button onClick={navigo}>연습 </button>
            </div>
            <div className="searchbox">
              <input
                value={text}
                type="text"
                onChange={(e) => {
                  setText(e.target.value);
                }}
              ></input>
              <button onClick={""}>검색</button>
            </div>
          </div>
          <div className="champbox01">
          <Tank />
            {test5 &&
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
              })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
