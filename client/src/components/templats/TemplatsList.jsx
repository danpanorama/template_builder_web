import "../../App.css";
import "../../css/home.css";
import { Link } from "react-router-dom";
// import Pagination from "../components/pagenation/Pagination";
import Image1 from "../../image/card.png";
import Image2 from "../../image/card2.png";
import Image3 from "../../image/card5.png";

function TemplatsList(props) {
  return (
    <div id="temp" className="templatelist ">
      <div className="grid">
        {props.arr
          ? props.arr.map((e) => {
              return (
                <Link
                  to={{
                    pathname: "test/" + e.id,
                    
                  }}
                  state={{ data: e }}
                  key={e.id}
                  className="cardd"
                >
                  <div className="image">
                    <img className="img" src={e.image} alt="" />
                  </div>
                  <div className="buttons">
                    <p className="cardname">{e.name}</p>
                    <button id={e.id}>checkout</button>
                  </div>
                </Link>
              );
            })
          : "no templates to show"}
      </div>
    </div>
  );
}

export default TemplatsList;
