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
    <div className="minh100 bcCool flexcol margintop50 ">
     <div className="w100 backbtn ">
     <a className='' href="/">back</a>
     </div>
 <div className="flexrowtocol">
 <div className="tamplateInfo  marginwidth">
        <div className="image flexcol center">
          <img src={location.state?location.state.data.image:""} alt="" className=" imagehw" />
        </div>
        <div className="info">
          {/* <p className="name">{location.state?location.state.data.name:"no found"}</p> */}
        </div>
      </div>

       <div className="box marginleft formtemp  flexcol ">
        <div className="flexrowtocol ">
          <label htmlFor="name">name</label>
          <input name="name" id='name' onChange={getName} type="text" className='inputext' />
          <label htmlFor="work">work</label>
          <input name="work" id='work' onChange={getName} type="text" className='inputext' />
          
        </div>
        <label htmlFor="work">email</label>
        <input onChange={getEmail} type="email" className='inputext' />
        <label htmlFor="work">phone</label>

        <input onChange={getPhone} type="number" className='inputext' />
         <button className='buttonsend' onClick={sendto} >send</button>
       </div>
 </div>

    </div>
  );
}

export default OrderScreen;
