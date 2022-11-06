import "../App.css";
import "../css/home.css";
import "../css/orderpage.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setUser } from "../Redux/Actions/templateActions";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function OrderScreen(props) {

  const [userInfo, setUserInfo] = useState({
    name:'',
    email:'',
    phone:0,
    job:''
  })
  const dispatch = useDispatch();
  let location = useLocation();

  function sendto() {
   
    dispatch(setUser(userInfo));
  }

  function getName(e) {
    setUserInfo({  
    email:userInfo.email,
    phone:userInfo.phone,
    job:userInfo.job,
    name:e.target.value});
  }

  function getEmail(e) {
    setUserInfo({  
      email:e.target.value,
      phone:userInfo.phone,
      job:userInfo.job,
      name:userInfo.name });
  }
  function getPhone(e) {
    setUserInfo({  
      email:userInfo.email,
      phone: e.target.value,
      job:userInfo.job,
      name:userInfo.name });
  }

  return (
    <div className="minh100 bcCool flexcol margintop50 ">
      <div className="h8vh divbackbtn"></div>
      <div className=" divbackbtn ">
        <a className="backbtn" href="/">
          back
        </a>
      </div>
      <div className="flexcol">
        <div className="tamplateInfo  marginwidth">
          <div className="image flexcol center">
            <img
              src={location.state ? location.state.data.image : ""}
              alt=""
              className=" imagehw"
            />
          </div>
          <div className="info">
            {/* <p className="name">{location.state?location.state.data.name:"no found"}</p> */}
          </div>
        </div>

        <div className="box  formtemp  flexcol center ">
      
            <label htmlFor="name">שם </label>
            <input
              name="name"
              id="name"
              onChange={getName}
              type="text"
              className="inputext"
            />
            <label htmlFor="work">עיסוק</label>
            <input
              name="work"
              id="work"
              onChange={getName}
              type="text"
              className="inputext"
            />
        
          <label htmlFor="work">מייל</label>
          <input onChange={getEmail} type="email" className="inputext" />
          <label htmlFor="work">טלפון</label>

          <input onChange={getPhone} type="number" className="inputext" />
          <button className="buttonsend" onClick={sendto}>
            שלח לי וואטסאפ ונתחיל
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderScreen;
