import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Champ from "./Champ";
import "../css/Main.scss";

const Main = () => {
  useEffect(() => {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion.json" //챔프 전체 데이터apiㅁㄴㅇㅁㄴㅇ
    )
      .then((Response) => Response.json())
      .then((Response) => lolMain(Response))
      .catch((err) => console.error(err));
  }, []);
  const [test, setTest] = useState([]);
  const data1 = useRef("0");

  function lolMain(test) {
    const champ = test.data;
    const ChampUrl =
      "https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/";

    const ChampName = [];
    for (let name in champ) {
      ChampName.push({ en: name, kr: champ[name].name });
    } //영문이름,한글이름

    console.log(ChampName);

    ChampName.sort(function (a, b) {
      return a.kr < b.kr ? -1 : a.kr > b.kr ? 1 : 0;
    }); //가나다순 함수

    setTest(ChampName);
  }

  return (
    <section className="champbox01">
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
    </section>
  );
};

export default Main;
