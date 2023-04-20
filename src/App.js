import "./css/App.scss";
import Champ from "./component/Champ";
import Main from "./component/Main";
import logo from '../src/lol_logo.png'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

    
  return (
    <>
     {/* <BrowserRouter>
      <header>
        <div className="role">
          <Link to="/Main" ><img src={logo} style={{width:"200px"}}></img></Link>
        </div>
      </header>

        <Routes>
          <Route path="/Main/*" element={<Main />}></Route>
          <Route path="/Champ/:name" element={<Champ  />}></Route>
        </Routes>
    </BrowserRouter>  */}
    <BrowserRouter>
      <header>
        <div className="role">
          <Link to="/Main" ><img src={logo} style={{width:"200px"}}></img></Link>
        </div>
      </header>
          <Main/>
        <Routes>
          <Route path="/Champ/:name" element={<Champ  />}></Route>
        </Routes>
    </BrowserRouter> 
</>
  );
}

export default App;
