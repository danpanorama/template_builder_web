import '../App.css';
import '../css/home.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {setUser} from '../Redux/Actions/templateActions'
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function OrderScreen(props) {
const [nameState,setNameState] = useState('')
const [EmailState,setEmailState] = useState('')
const [PhoneState,setPhoneState] = useState("")
const dispatch = useDispatch()
let location = useLocation();

function sendto(){
dispatch(setUser(nameState,EmailState,PhoneState))
}


function getName(e){
    setNameState(e.target.value)
}

function getEmail(e){
    setEmailState(e.target.value)
}
function getPhone(e){
    setPhoneState(e.target.value)
}
console.log(location.state?location.state.data:"nonono")

  return (
    <div className="minh100 bcCool flexcol center">
      <div className="tamplateInfo ">
        <div className="image ">
          <img src={location.state?location.state.data.image:""} alt="" className="h400px" />
        </div>
        <div className="info">
          <p className="name">{location.state?location.state.data.name:"no found"}</p>
        </div>
      </div>

       <div className="box flexcol">
        <div className="flexrow">
          <label htmlFor="name">name</label>
          <input name="name" id='name' onChange={getName} type="text" />
          <label htmlFor="work">work</label>
          <input name="work" id='work' onChange={getName} type="text" />
          
        </div>

        <input onChange={getEmail} type="email" />

        <input onChange={getPhone} type="number" />
         <button onClick={sendto} >send</button>
       </div>

    </div>
  );
}

export default OrderScreen;
