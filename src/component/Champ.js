import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/Champ.scss";
import $ from "jquery";

const Champ = () => {
  let name = useParams();
  const dataRef = useRef();
  const Bigimg = useRef(); //큰 챔피언 사진입니다
  const cmpEnname = useRef(); //영어이름
  const cmpKrname = useRef(); //한글이름
  const [qwer, setQwer] = useState(); //qwer스킬 데이터
  const [skilldata, setSkilldata] = useState(); //스킬 데이터
  const [skindata, setSkindata] = useState(); //스킨 데이터
  const [skillclick, setSkillclick] = useState(); //스킬클릭
  const [skinclick, setSkinclick] = useState({ num: 0 }); //스킨클릭
  const testheight = useRef(); //이미지 높이값

  const ChampName = name.name;
  const cmpUrl = "https://ddragon.leagueoflegends.com/cdn/13.8.1/img/champion/"; //챔프 url
  const spellUrl = "https://ddragon.leagueoflegends.com/cdn/13.8.1/img/spell/"; //스킬 url
  const passiveUrl =
    "https://ddragon.leagueoflegends.com/cdn/13.8.1/img/passive/"; //패시브 url
  const splashUrl =
    "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"; //일러스트 url변경사항
  //챔프 이름 ref으로 담기
  const thumb = document.querySelectorAll(".skinshow02 > div");

  function Champion(ChampData) {
    dataRef.current = [ChampData.data];

    let datas = dataRef.current[0];
    cmpEnname.current = datas[ChampName].id;
    cmpKrname.current = datas[ChampName].name;

    const splash = splashUrl + datas[ChampName].id + "_0.jpg";
    Bigimg.current = splash;
    setQwer(datas[ChampName]);
    const spelldata = datas[ChampName].spells;
    setSkilldata(spelldata);

    const skindata = datas[ChampName].skins;
    setSkindata(skindata);
    setSkillclick(datas[ChampName].passive);
  }

  useEffect(() => {
    document.onreadystatechange = () => {
      console.log(testheight.current.clientHeight);
    };

    //미디어 쿼리
    let Iphone13 = window.matchMedia("(min-width:512px)");
    Iphone13.addListener((e) => {
      if (e.matches) {
        console.log("pc", thumb);
      } else {
        console.log("mob", thumb);
      }
    });
  }, []);

  useEffect(() => {
    fetch(
      `https://ddragon.leagueoflegends.com/cdn/13.8.1/data/ko_KR/champion/${ChampName}.json` //누른 챔피언의 상세 api
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
    $(".textbox01").css({ opacity: "1", transition: "0.5s" });
  }

   //미디어 쿼리
  
  function clickskin(key) {
    setSkinclick({ num: skindata[key].num, name: skindata[key].name });
    let Iphone13 = window.matchMedia("(min-width:512px)").matches;
    const thumb = document.querySelectorAll(".skinshow02 > div");

      if (Iphone13 == true) {
        $(".skinshow02").css({
          transform: `translateY(-${thumb[key].offsetTop}px)`,
          transition: "0.5s",
        });
      } else {
        $(".skinshow02").css({
          transform: `translateX(-${thumb[key].offsetLeft}px)`,
          transition: "0.5s",
        });
      }
  
   
  }

 

  let skinheight = $(".skinshow02").height(); //스킨+이름 높이
  let hiddenH = $(".skinshow03 img").height(); //스킨이미지 높이

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
                  <div
                    className="skillbox02"
                    onClick={() => clickskill(key)}
                    key={key}
                  >
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
        <section className="skinbox" /* style={{ height: hiddenH }} */>
          <div className="skinshow01">
            {/* <div className="skinshow02">
              {skindata && skindata.map((obj, key) => {
                  return (
                    <>
                    <ImageGallery obj={obj} key={key} splashUrl={splashUrl} cmpEnname={cmpEnname} clickskin={clickskin}/>
                    <p>{obj.name.replaceAll("default", cmpKrname.current)}</p>
                    </>
                  );
                })}
            </div> */}
            <div className="skinshow02">
              {skindata &&
                skindata.map((obj, key) => {
                  return (
                    <div key={key}>
                      <img
                        src={`${splashUrl}${cmpEnname.current}_${obj.num}.jpg`}
                        onClick={() => clickskin(key)}
                      ></img>
                      <p>{obj.name.replaceAll("default", cmpKrname.current)}</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="skinshow03">
            <img
              testheight={testheight}
              src={`${splashUrl}${cmpEnname.current}_${
                skinclick && skinclick.num
              }.jpg`}
            ></img>
          </div>
        </section>

        <section className="home">
          <Link to="/Main">메인으로</Link>
        </section>
      </>
    )
  );
};

export default Champ;
