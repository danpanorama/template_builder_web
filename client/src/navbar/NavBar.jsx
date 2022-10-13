import "../App.css";
import "../css/nav.css";
import "../css/media.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav flexcol center">
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
      </div>
    </div>
  );
}

export default NavBar;
