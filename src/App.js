import "./css/App.scss";
import {  useState } from "react";
import Champ from "./component/Champ";
import Main from "./component/Main";
import Assassin from "./component/Assassin";
import Mage from "./component/Mage";
import Support from "./component/Support";
import Tank from "./component/Tank";
import Marksman from "./component/Marksman";
import Fighter from "./component/Fighter";
import Ex from "./component/Ex";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App(props) {
  const [test, setTest] = useState([]);  
  return (
    <BrowserRouter>
      <header>
        
        <div className="role">
          <Link to="/Main">롤 챔피언 소개</Link>
          <Link to="/Marksman">원거리 딜러</Link>
          <Link to="/Tank">탱커</Link>
          <Link to="/Mage">마법사</Link>
          <Link to="/Assassin">암살자</Link>
          <Link to="/Support">서포터</Link>
          <Link to="/Fighter">전사</Link>
        </div>
      </header>

      <main>
        <Routes>
          <Route
            path="/Ex"
            element={<Ex test={{test}} setTest={setTest} />}
          ></Route>
          <Route path="/Main" element={<Main />}></Route>
          <Route
            path="/Champ/:name"
            element={<Champ test={{test}} setTest={setTest} />}
          ></Route>
          <Route path="/Marksman" element={<Marksman value={test} />}></Route>
          <Route path="/Tank" element={<Tank value={test} />}></Route>
          <Route path="/Mage" element={<Mage value={test} />}></Route>
          <Route path="/Assassin" element={<Assassin value={test} />}></Route>
          <Route path="/Support" element={<Support value={test} />}></Route>
          <Route path="/Fighter" element={<Fighter value={test} />}></Route>
        </Routes>

      </main>
    </BrowserRouter>
  );
}

export default App;
