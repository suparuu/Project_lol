import "./css/App.scss";
import Champ from "./component/Champ";
import Main from "./component/Main";
/* import Assassin from "./component/Assassin";
import Mage from "./component/Mage";
import Support from "./component/Support";
import Tank from "./component/Tank";
import Marksman from "./component/Marksman";
import Fighter from "./component/Fighter"; */
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    




     <BrowserRouter>
      <header>
        
        <div className="role">
          <Link to="/Main">롤 챔피언 소개</Link>
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
    
  );
}

export default App;
