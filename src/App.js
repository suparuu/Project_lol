import "./css/App.scss";
import Champ from "./component/Champ";
import Main from "./component/Main";
import logo from "../src/lol_logo.png";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
function App() {
  
  window.history.pushState("","","/Main")
  // const navigate = useNavigate();
  // useEffect(()=>{
  //   const aa =()=>{
  //     navigate('/Main');

  //   }
  //   aa();

  // },[])

  return (
    <>
      <BrowserRouter>
        <header>
          <div className="role">
            <Link to="/Main">
              <img src={logo} style={{ width: "200px" }}></img>
            </Link>
          </div>
        </header>

        <Routes>
          {/* <Route path="/" element={<Main />}></Route> */}
          <Route path="/Main/*" element={<Main />}></Route>
          <Route path="/Champ/:name" element={<Champ />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
