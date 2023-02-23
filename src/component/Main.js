import { useState, useRef, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Champ from "./Champ";
import axios from "axios";
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

  const [catestate, setCatestate] = useState();
  const [test5, setTest5] = useState([]); //챔프 이름,영문,태그명
  const [aaa, setAaa] = useState();
  const data1 = useRef("0");
  const [role, setRole] = useState();
  //const[t,setT]

  function lolMain(test) {
    const champ = test.data;
    const ChampUrl =
      "https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/";

    console.log(champ + "dfsdfsdf");

    const ChampName = [];
    for (let name in champ) {
      ChampName.push({
        en: name,
        kr: champ[name].name,
        tags: champ[name].tags,
      });
    } //영문이름,한글이름
    // console.log(champ, "챔프데이터");

    ChampName.sort(function (a, b) {
      return a.kr < b.kr ? -1 : a.kr > b.kr ? 1 : 0;
    }); //가나다순 함수
    setTest5(ChampName);
    setAaa(champ);
    setCatestate(ChampName);
    const searchSpace = (e) => {
      let keyword = e.target.value;
      this.setText({});
    }; //검색기능 함수
    // console.log(ChampName, "챔프 이름,영문,태그명");

  } //Main


  const category = (tags) => {
    if (tags == "전체보기") {
      setCatestate(test5);
      console.log("전체보기", catestate);
    } else {
      setCatestate(
        test5.filter((d) => {
          return d.tags.includes(tags);
        })
      );
    } //카테고리 함수

    console.log(tags);
    console.log(catestate);
  };

  const [text, setText] = useState("");//input값
  const text2 = useRef();//버튼 누를때

  const textinput = () =>{
    setText(text2.current.value)
    text2.current.focus()
  };//검색 기능


  const textreset = () =>{
    setText('')
  };//초기화 버튼기능 


  const onKeyPress = (e) =>{
    if(e.key == 'Enter'){
      textinput();
    }
  };//엔터키 누를시 검색기능


  

  console.log(catestate);

  return (
    <>
      <main>
        <Routes>
          <Route path="/Champ/:name" element={<Champ />}></Route>
        </Routes>
        <section className="champions">
          <div className="headbox">
            <div className="buttonbox">
              <button
                onClick={() => {
                  category("전체보기");
                }}
              >
                전체보기
              </button>
              <button
                onClick={() => {
                  category("Mage");
                }}
              >
                마법사
              </button>
              <button
                onClick={() => {
                  category("Tank");
                }}
              >
                탱커
              </button>
              <button
                onClick={() => {
                  category("Fighter");
                }}
              >
                브루저
              </button>
              <button
                onClick={() => {
                  category("Assassin");
                }}
              >
                암살자
              </button>
              <button
                onClick={() => {
                  category("Support");
                }}
              >
                서포터
              </button>
              <button
                onClick={() => {
                  category("Marksman");
                }}
              >
                원딜
              </button>
            </div>
          </div>

            <div className="searchbox">
              <input onKeyPress={onKeyPress} ref={text2} type="text"></input>
              <button  onClick={textinput}>검색</button>
              <button onClick={textreset}>초기화</button>
            </div>
          <div className="champbox01">
            {catestate &&
              catestate.map((obj, k) => {
                if (obj.kr == text)
                  return (
                    <Link to={`/Champ/${obj.en}`} key={k}>
                      <div className="imgbox01">
                        <img
                          src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${obj.en}.png`}
                        ></img>
                        <span>{[obj.kr]}</span>
                      </div>
                    </Link>
                  );
                if (text == "") {
                  return (
                    <Link to={`/Champ/${obj.en}`} key={k}>
                      <div className="imgbox01">
                        <img
                          src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${obj.en}.png`}
                        ></img>
                        <span>{[obj.kr]}</span>
                      </div>
                    </Link>
                  );
                }
              })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
