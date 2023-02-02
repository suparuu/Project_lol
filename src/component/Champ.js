import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/Champ.scss";

const Champ = () => {
  let name = useParams();
  const dataRef = useRef();
  const Bigimg = useRef(); //큰 챔피언 사진
  const cmpEnname = useRef();
  const cmpKrname = useRef();
  const [qwer, setQwer] = useState(); //qwer스킬 데이터
  const [skilldata, setSkilldata] = useState();
  const [skindata, setSkindata] = useState();
  const [skillclick, setSkillclick] = useState();
  const [skinclick, setSkinclick] = useState({ num: 0 });

  const ChampName = name.name;
  const cmpUrl = "https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/"; //챔프 urlㅁㄴㅇㄻㄴㅇㄻㄴㅇㄹ
  const spellUrl = "https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/"; //스킬 urlㄹㄴㅇㄻㅇㄴㄻㄴㅇㄹ
  const passiveUrl =
    "https://ddragon.leagueoflegends.com/cdn/13.1.1/img/passive/"; //패시브 url아 깃왜안대 시바
  const splashUrl =
    "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"; //일러스트 url변경사항
  //챔프 이름 ref으로 담기
  function Champion(ChampData) {
    dataRef.current = [ChampData.data];

    let datas = dataRef.current[0];
    console.log(datas[ChampName], "챔프 데이터");
    cmpEnname.current = datas[ChampName].id;
    cmpKrname.current = datas[ChampName].name;
    console.log(cmpEnname.current, "챔프영문이름 ref");
    console.log(cmpKrname.current, "챔프 한글이름 ref");

    const splash = splashUrl + datas[ChampName].id + "_0.jpg";
    Bigimg.current = splash;
    setQwer(datas[ChampName]);
    console.log(datas[ChampName].spells[0].description, "스킬 설명");
    console.log(datas[ChampName].spells[0].name, "스킬 이름");
    console.log(datas[ChampName].spells[0].cooldownBurn, "스킬 쿨타임");
    console.log(datas[ChampName].spells[0].costBurn, "소모값");
    console.log(datas[ChampName].spells[0].rangeBurn, "스킬 범위");
    console.log(datas[ChampName].passive, "패시브스킬");
    const spelldata = datas[ChampName].spells;
    console.log(spelldata, "asdsda");
    setSkilldata(spelldata);
    console.log(skilldata, "챔피언 스킬 데이터");
    console.log(qwer, "챔피언 스킬 데이터2 스테이트 함수");

    console.log(datas[ChampName].id, "챔피언 영문이름");
    console.log(datas[ChampName].skins[1].num, "스킨 num값");
    const skindata = datas[ChampName].skins;
    setSkindata(skindata);
    console.log(skindata, "당장필요한거"); //스킨 담겨있는 배열
    console.log(Bigimg.current, "gdgdgsdgwd");
    setSkillclick(datas[ChampName].passive);
  }
  skillclick &&
    console.log(skillclick.description.replace(/(<([^>]+)>)/gi, ""));
  useEffect(() => {
    fetch(
      `https://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion/${ChampName}.json` //누른 챔피언의 상세 api
    )
      .then((Response) => Response.json())
      .then((Response) => Champion(Response));
  }, []);

  // .catch((err) => console.error(err));
  function tt() {
    setSkillclick(qwer.passive);
  }
  function clickskill(num) {
    setSkillclick({
      description: skilldata[num].description.replaceAll("/<[^>]*>?/g", " "),
      name: skilldata[num].name,
      cooldownBurn: skilldata[num].cooldownBurn,
      costBurn: skilldata[num].costBurn,
      rangeBurn: skilldata[num].rangeBurn,
    });
  }

  function clickskin(key) {
    setSkinclick({ num: skindata[key].num, name: skindata[key].name });
    console.log(skinclick, "실행되나용");
  }
  skindata && console.log(skindata);
  return (
    qwer && (
      <>
        <section className="champbox02">
          <div className="cmpimgBack">
            <img
              className="frontimg"
              src={`${Bigimg.current && Bigimg.current}`}
            ></img>
            <img
              className="backimg"
              src={`${Bigimg.current && Bigimg.current}`}
            ></img>
          </div>
          <ul>
            <li>
              <p>{qwer?.name}</p>
              <p>{qwer?.title}</p>
              <img src={`${cmpUrl}${qwer?.image.full}`}></img>
            </li>
            <div className="textbox01">
              <span>{qwer?.lore}</span>
            </div>
          </ul>
        </section>

        <h2>스킬</h2>
        <section className="champbox03">
          <div className="skillbox01">
            <div className="skillbox02" onClick={tt}>
              <img src={`${passiveUrl}${qwer?.passive.image.full}`}></img>
              <p>{qwer?.passive.name}</p>
            </div>
            {skilldata &&
              skilldata.map((obj, key) => {
                //qwer데이터 뿌리기 반복문
                return (
                  <div className="skillbox02" onClick={() => clickskill(key)}>
                    <img src={`${spellUrl}${obj.image.full}`}></img>
                    <p>{obj.name}</p>
                  </div>
                );
              })}
          </div>
          <div className="relativebox">
            <div className="textbox01 ">
              <div className="textbox02">
                <h4>스킬이름: {skillclick && skillclick.name}</h4>
                <p>쿨타임: {skillclick && skillclick.cooldownBurn}</p>
                <p>소모: {skillclick && skillclick.costBurn}</p>
                <p>범위: {skillclick && skillclick.rangeBurn}</p>
              </div>
              <div className="textbox03">
                <span>
                  {skillclick &&
                    skillclick.description.replace(/(<([^>]+)>)/gi, " ")}
                </span>
              </div>
            </div>
          </div>
        </section>

        <h2>챔피언 스킨</h2>
        <section className="skinbox">
          <div className="skinshow01">
            {skindata &&
              skindata.map((obj, key) => {
                return (
                  <div className="skinshow02">
                    <img
                      src={`${splashUrl}${cmpEnname.current}_${obj.num}.jpg`}
                      onClick={() => clickskin(key)}
                    ></img>
                    <p>{obj.name.replaceAll("default", cmpKrname.current)}</p>
                  </div>
                );
              })}
          </div>
          <div className="skinshow03">
            <img
              src={`${splashUrl}${cmpEnname.current}_${
                skinclick && skinclick.num
              }.jpg`}
            ></img>
          </div>
        </section>
      </>
    )
  );
};

export default Champ;
