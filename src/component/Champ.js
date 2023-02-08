import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/Champ.scss";
import $ from "jquery";

const Champ = () => {
  let name = useParams();
  const dataRef = useRef();
  const Bigimg = useRef(); //큰 챔피언 사진
  const cmpEnname = useRef(); //영어이름
  const cmpKrname = useRef(); //한글이름
  const [qwer, setQwer] = useState(); //qwer스킬 데이터
  const [skilldata, setSkilldata] = useState(); //스킬 데이터
  const [skindata, setSkindata] = useState(); //스킨 데이터
  const [skillclick, setSkillclick] = useState(); //스킬클릭
  const [skinclick, setSkinclick] = useState({ num: 0 }); //스킨클릭
  const testH = useRef(); //이미지 높이값

  const ChampName = name.name;
  const cmpUrl = "https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/"; //챔프 url
  const spellUrl = "https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/"; //스킬 url
  const passiveUrl =
    "https://ddragon.leagueoflegends.com/cdn/13.1.1/img/passive/"; //패시브 url
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
    const spelldata = datas[ChampName].spells;
    console.log(spelldata, "asdsda");
    setSkilldata(spelldata);

    const skindata = datas[ChampName].skins;
    setSkindata(skindata);
    console.log(skindata, "당장필요한거"); //스킨 담겨있는 배열
    setSkillclick(datas[ChampName].passive);
  }


  useEffect(() => {
    document.onreadystatechange = () => {
      console.log(testH.current.clientHeight);
    };

    
    //미디어 쿼리
    /* function mdq(key){
      let mq = window.matchMedia("(min-width:390px)");
      mq.addListener((e) => {
        if (e.matches) {
          console.log("pc");
        } else {
    const thumb = document.querySelectorAll(".skinshow02 > div");
    console.log(thumb,'모바일 확인')

          $(".skinshow02").css({
            transform: `translateY(-${thumb[key].offsetWidth}px)`,
            transition: "0.5s",
          });
        }
      });

    } */


  }, []);




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
    $(".textbox01").css({ opacity: "1", transition: "0.5s" });
  }


  function mdq(key){
    let mq = window.matchMedia("(min-width:390px)");
    mq.addListener((e) => {
      if (e.matches) {
        console.log("pc");
      } else {
  const thumb = document.querySelectorAll(".skinshow02 > div");
  console.log(thumb,'모바일 확인')

        $(".skinshow02").css({
          transform: `translateY(-${thumb[key].offsetWidth}px)`,
          transition: "0.5s",
        });
      }
    });

  }

  /* function clickskin(key) {
    setSkinclick({ num: skindata[key].num, name: skindata[key].name });
    const thumb = document.querySelectorAll(".skinshow02 > div");
    let mq = window.matchMedia("(min-width:390px)");
    mq.addListener((e)=>{
      if (e.matches) {
        console.log('pc',thumb,e)
        $(".skinshow02").css({
          transform: `translateY(-${thumb[key].offsetTop}px)`,
          transition: "0.5s",
        });
        $(".skinshow03 img").css({ transition: "0.5s" });
      }else{
        
        console.log('mob')
        $(".skinshow02").css({
          transform: `translateY(-${thumb[key].offsetWidth}px)`,
          transition: "0.5s",
        });
      } */
      function clickskin(key){
        setSkinclick({ num: skindata[key].num, name: skindata[key].name });
        const thumb = document.querySelectorAll(".skinshow02 > div");

        $(".skinshow02").css({
          transform: `translateY(-${thumb[key].offsetTop}px)`,
          transition: "0.5s",
        });
        $(".skinshow03 img").css({ transition: "0.5s" });

    console.log(skinclick, "실행되나용");
      }
  console.log($(".skinshow01").height());
  let skinheight = $(".skinshow02").height(); //스킨+이름 높이
  let hiddenH = $(".skinshow03 img").height(); //스킨이미지 높이

  console.log(skinheight, "asdasdasd");

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
        <section className="skinbox" style={{ height: hiddenH }}>
          <div className="skinshow01">
            <div className="skinshow02">
              {skindata &&
                skindata.map((obj, key) => {
                  return (
                    <div key={key}>
                      <img
                        src={`${splashUrl}${cmpEnname.current}_${obj.num}.jpg`}
                        onClick={() => clickskin(key)}
                        key={key}
                      ></img>
                      <p>{obj.name.replaceAll("default", cmpKrname.current)}</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="skinshow03">
            <img
              testH={testH}
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
