import "./css/App.scss";
import Champ from "./component/Champ";
import Main from "./component/Main";
import $ from "jquery"
import ReactPlayer from 'react-player/youtube'
import logo from '../src/lol_logo.png'
/* import Assassin from "./component/Assassin";
import Mage from "./component/Mage";
import Support from "./component/Support";
import Tank from "./component/Tank";
import Marksman from "./component/Marksman";
import Fighter from "./component/Fighter"; */
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
    
    const videooff = () =>{
        $('.video').remove()
    }
    const videostyle = {
        width: "100%",
        height: "100vh"
    }

    const logostyle={

    }

    
  return (
    <>
    <section className="video" style={{margin:"0 auto"}}>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/r6zIGXun57U?autoplay=1&mute=1;" 
     title="YouTube video player"  allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       ></iframe>
  </section>



     <BrowserRouter>
      <header>
        
        <div className="role">
          <Link to="/Main" onClick={videooff}><img src={logo} style={{width:"200px"}}></img></Link>
          {/* <Link to="/Marksman">원거리 딜러</Link>
          <Link to="/Tank">탱커</Link>
          <Link to="/Mage">마법사</Link>
          <Link to="/Assassin">암살자</Link>
          <Link to="/Support">서포터</Link>
          <Link to="/Fighter">전사</Link> */}
        </div>
      </header>

        <Routes>
          <Route path="/Main/*" element={<Main />}></Route>
          <Route
            path="/Champ/:name"
            element={<Champ  />}
          ></Route>
          {/* <Route path="/Marksman" element={<Marksman />}></Route>
          <Route path="/Tank" element={<Tank  />}></Route>
          <Route path="/Mage" element={<Mage  />}></Route>
          <Route path="/Assassin" element={<Assassin  />}></Route>
          <Route path="/Support" element={<Support  />}></Route>
          <Route path="/Fighter" element={<Fighter  />}></Route> */}
        </Routes>

    </BrowserRouter> 

</>

    
  );
}

export default App;
