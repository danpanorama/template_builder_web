import '../App.css';
import '../css/home.css'
import '../css/media.css'

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {setTemplate, setUser} from '../Redux/Actions/templateActions'
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import TemplatEdit from '../components/templats/TemplatEdit';

function OrderEdit(props) {
const [nameState,setNameState] = useState('')
const [EmailState,setEmailState] = useState('')
const [PhoneState,setPhoneState] = useState("")
const [colorState,setColorState] = useState("")
const [buttonPos,setButnPos] = useState("")

const [setBgColors,setBgColor] = useState({first:"rgba(0,0,0,.8)",second:"rgba(0,0,0,.8)"})

const [shape,shapeState] = useState("")
const [borderWidth,setborderWidth] = useState(1)

const [headerwith,setheaderwith] = useState('')
const [buttonSize,setButtonSize] = useState('')

const [jobTitle,setJobeState] = useState('my job')
const [BigImage,setBigImage] = useState('')




const [align,setAlign] = useState("center")
const [headerpos,setheaderpos] = useState("flex-start")



function getHeaderPosi(e){
  setheaderpos(e.target.value)
}


const [getStateSpace,setSpaceState] = useState(10);


function getBgColors(e){
  if(e.target.id =='first'){
    
    setBgColor({first:e.target.value,second:setBgColors.second})
  }else{
    setBgColor({second:e.target.value,first:setBgColors.first})
  }
}


const [topImage,getTopImage] = useState("")

const dispatch = useDispatch()
let location = useLocation();
const templates = useSelector((state) => state.templates);


useEffect(()=>{
dispatch(setTemplate(location.state.data))
},[location.state])

function sendto(){
dispatch(setUser(nameState,EmailState,PhoneState));
}

function getBorderWith(e){
  setborderWidth(e.target.value)
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
function getPosButton(e){
  setButnPos(e.target.value)
}
function getButtonSize(e){
  setButtonSize(e.target.value)
}
function getheaderWith(e)
{
  setheaderwith(e.target.value)
}
function getTopImagef(e){
    getTopImage(e.target.value)

}
function getSpace(e){
    setSpaceState(e.target.value)
}
function getJob(e){
  setJobeState(e.target.value)
}
function getAligh(e){
  setAlign(e.target.value)
}
function getColor(e){
   
    setColorState(e.target.value)
}
function getShape(e){
  shapeState(e.target.value)
}
function getBttomImagef(e){
  setBigImage(e.target.value)
}

  return (
    

 
<div className="flexcol minh100 center h100 w100 bcCool">
<div className="headers">
    <h1>אתם לא חייבים לשנות כלום שלחו לי הודעה בוואטסאפ ונתחיל</h1>
</div>
<div className="  flexrotocol center">
       


       <TemplatEdit BigImage={BigImage} buttonSize={buttonSize} buttonPos={buttonPos} jobTitle={jobTitle} setBgColors={setBgColors} headerwith={headerwith} headerpos={headerpos} borderWidth={borderWidth} shape={shape} align={align} spacegap={getStateSpace} color={colorState} topImage={topImage} nameedit={nameState} data={templates.templateChois} />
       
       
       
       <div className="inputs flexcol ">
           <div className="flexrow ">
             
           <input placeholder='imagfe' type="text" onChange={getTopImagef} name='topimg' />
         <label htmlFor="image">תמונה  רקע עליונה</label>
           </div>
       
           <div className="flexrow center">
             
             <input placeholder='imagfe' type="text" onChange={getBttomImagef} name='topimg' />
           <label htmlFor="image">תמונת  רקע תחתונה</label>
             </div>
         <div className="flexrow">
         <input onChange={getName} type="text" name='name' />
         <label htmlFor="name">שם</label>
         </div>
          <div className="flexrow">
          <input onChange={getJob} type="text" name='work' />
          <label htmlFor="work">תחום</label>
          </div>
        
         
          <div className="flexrow">
         <input onChange={getName} type="text" name='name' />
         <label htmlFor="name">לינק 1</label>
         </div>
         <div className="flexrow">
         <input onChange={getName} type="text" name='name' />
         <label htmlFor="name">לינק 2</label>
         </div>
         <div className="flexrow">
         <input onChange={getName} type="text" name='name' />
         <label htmlFor="name">לינק 3</label>
         </div>
         <div className="flexrow">
         <input onChange={getName} type="text" name='name' />
         <label htmlFor="name">לינק 4</label>
         </div>
         <div className="flexrow">
         <input onChange={getName} type="text" name='name' />
         <label htmlFor="name">לינק 5</label>
         </div>
         <div className="flexrow">
         <input onChange={getName} type="text" name='name' />
         <label htmlFor="name">לינק 6</label>
         </div>
       
       
        
       
       
       
       <div className="flexrow">
            <input onChange={getColor}  type="color" name="" id="" />
            <label htmlFor="colors">colors</label>
       
       </div>
          
        
       
       
       
           <div className="flexrow">
            <input onChange={getBgColors}  type="color" name="" id="first" />
            <input onChange={getBgColors}  type="color" name="" id="second" />
       
           
            <label htmlFor="colors">bg colors</label>
       
       </div>
       
       
       
       
       
       
       </div>
       
       
       
       
       
       
       
             {/* <div className="tamplateInfo ">
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
              </div> */}
       
           </div>
</div>
    
  );
}

export default OrderEdit;
