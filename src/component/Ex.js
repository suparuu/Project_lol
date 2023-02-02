import {useEffect} from "react";
import { useParams } from "react-router-dom";


const Ex = ({ test }) => {
    console.log(test)
    let name = useParams();
    console.log(name)
    useEffect(()=>{
        fetch(`http://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion/${test.en}.json`)
          .then((Response) => Response.json())
          .then((Response) => Champion(Response))
          .catch((err) => console.error(err));
      },[])
  console.log(test);
  function Champion(){



  }

  return <div>Ex</div>;
};

export default Ex;
