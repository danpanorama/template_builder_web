import "../App.css";
import "../css/nav.css";
import "../css/media.css";
import { BiAlignRight } from "react-icons/bi";
import { BiLogInCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import {useState} from 'react'

function NavBar() {
const [changer, setchanger] = useState(false)
  function changeFunc(){
    setchanger(!changer)
  }

  return (
    <div className="nav flexrow center"> 
     <div className="flexrow navlinks center h100 mr20">
          <div className="iconcircle"></div>
          <div className="iconcircle"></div>
          <div className="iconcircle"></div>
        </div>
      <div className="navFirstChild w80 flexrow between">
      
        <div className="logo">
          <h1>logo</h1>
        </div>
        <div className="navlinks flexrow center">
          <NavLink to={"/"} className="link">
            home
          </NavLink>
          <NavLink to={"/"} className="link">
            about
          </NavLink>

          <NavLink to={"/"} className="link">
            templates
          </NavLink>
        </div>
        <div className="navphone">
          <div className="hamburger" onClick={changeFunc}><BiAlignRight/></div>
          <div onClick={changeFunc} className={changer?"navbarphone":'closenav'}>
            <div onClick={changeFunc} className="closeBtn hamburger"><BiLogInCircle/></div>
            <div className={ changer?"links flexcol center h100 ":"displaynon"}>

           <div className="flexcol center ">
           <NavLink to={"/"} className="linkp">
            home
          </NavLink>
          <NavLink to={"/"} className="linkp">
            about
          </NavLink>

          <NavLink to={"/"} className="linkp">
            templates
          </NavLink>
           </div>
          <div className="flexrow  center ">
          <div className="iconcircle"></div>
          <div className="iconcircle"></div>
          <div className="iconcircle"></div>
        </div>
            </div>
          </div>

      
        </div>
      </div>
    </div>
  );
}

export default NavBar;
