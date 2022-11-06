import { useState } from "react";
import "../../App.css";
import "../../css/home.css";
import "../../css/about.css";

function AboutCard(props) {
    
  return (
    <div
     className={props.pointer == props.number ? "cardexplain scal " + props.class: "cardexplain opa " + props.class}
   >
    <div
      onClick={() => {
        props.setPointerFunction(props.number);
      }}
      className="paddingCard translateY flexcol aligncenter margintop30"
    >
      <div className="logocard flexcol center">
        <img className="img" src={props.SVG} alt="" />
      </div>

      <div className="textwords w100 flexcol center">
        <div className="headers  ">
          <h3 className="h3card fw700">{props.header}</h3>
          <h4 className="h44 fw700"> {props.title} </h4>
        </div>
        <p className="textp">{props.text}</p>
      </div>
      <div className="pricing flexcol center">

        <h1 className="h1price">32.00$/year</h1>
        <p className="textgray">
          32 דולר לשנה כולל תחזוקה וביצוע שינויים באתר
        </p>
      </div>
    </div>
    <div className="w100 flexcol center">
        <button className="sellbtn">   {props.btn}</button>
        </div>
    </div>
  );
}

export default AboutCard;
