import "../../App.css";
import "../../css/home.css";
import "../../css/test.css";

import { Link } from "react-router-dom";
// import Pagination from "../components/pagenation/Pagination";
import Image1 from "../../image/card.png";
import Image2 from "../../image/card2.png";
import Image3 from "../../image/card5.png";

function TemplatEdit(props) {
  return (
    <div className="h400 ">
      <div
        // style={{
        //   backgroundImage:
        //     "url(" + props.topInmage ? props.topInmage : props.data.topbg  + " )",
        // }}
        className="top"
      >
        <img
          src={props.topImage ? props.topImage : props.data.topBg}
          className="img cardimage"
          alt=""
        />
        <div
          style={{ justifyContent: props.align ? props.align : "center" }}
          className="flexrow  w100"
        >
          <div
            style={{
              backgroundImage: "url(" + props.data.profileImage + ")",
              border:
                props.borderWidth + "px solid " + props.color ||
                props.data.color,
            }}
            className="imageRound marginlr"
          ></div>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(" +
            props.setBgColors.first +
            "," +
            props.setBgColors.second +
            ")",

          color: props.color ? props.color : props.data.color,
          clipPath:
            props.shape ||
            "polygon(50% 0%, 81% 0, 100% 0, 100% 100%, 0 100%, 0 0, 25% 0)",
        }}
        className="page   "
      >
        <img
          src={props.BigImage ? props.BigImage : props.data.bigBg}
          className="img cardimagebig"
          alt=""
        />

        <div style={{  backgroundImage:
            "linear-gradient(" +
            props.setBgColors.first +
            "," +
            props.setBgColors.second +
            ")"}} className=" flexcol h100 center">
          {/* image place  */}

          <div  className="flexcol w100 center">
            <div
              style={{ alignItems: props.headerpos, width: props.headerwith }}
              className="flexcol headers   "
            >
              <h1 className="h1header">
                {props.nameedit ? props.nameedit : props.data.nameheader}{" "}
                {props.data.simblue}
              </h1>
              <h3>{props.jobTitle ? props.jobTitle : props.data.workheader}</h3>
            </div>

            <div style={{ gap: props.spacegap + "px" }} className="grid-3">
              <div
                style={{
                  border: "1px solid" + props.color || props.data.color,
                }}
                className="circleSocial"
              >
                1
              </div>
              <div
                style={{
                  border: "1px solid" + props.color || props.data.color,
                }}
                className="circleSocial"
              >
                2
              </div>
              <div
                style={{
                  border: "1px solid" + props.color || props.data.color,
                }}
                className="circleSocial"
              >
                3
              </div>
              <div
                style={{
                  border: "1px solid" + props.color || props.data.color,
                }}
                className="circleSocial"
              >
                4
              </div>
              <div
                style={{
                  border: "1px solid" + props.color || props.data.color,
                }}
                className="circleSocial"
              >
                5
              </div>
              <div
                style={{
                  border: "1px solid" + props.color || props.data.color,
                }}
                className="circleSocial"
              >
                6
              </div>
            </div>
            <div
              style={{ alignItems: props.buttonPos }}
              className="buttonCall w100 flexcol"
            >
              <button
                style={{
                  backgroundColor: props.color || props.data.color,
                  width: props.buttonSize,
                  alignItems: props.buttonPos,
                }}
                className="buttonCallNow"
              >
                call now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplatEdit;
// ,url(" + props.data.bigBg + ")",
