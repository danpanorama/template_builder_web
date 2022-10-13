import '../App.css';
import '../css/home.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {setUser} from '../Redux/Actions/templateActions'

function UserInfoScreen() {
const [nameState,setNameState] = useState('')
const [EmailState,setEmailState] = useState('')
const [PhoneState,setPhoneState] = useState("")
const dispatch = useDispatch()


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


  return (
    <div className="App">

       <div className="box">
        <input onChange={getName} type="text" />
        <input onChange={getEmail} type="email" />

        <input onChange={getPhone} type="number" />
<button onClick={sendto} >send</button>
       </div>

    </div>
  );
}

export default UserInfoScreen;
