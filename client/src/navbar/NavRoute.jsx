import '../App.css';
import '../css/nav.css'
import { Routes, NavLink, Route, Router } from "react-router-dom";
import NavBar from './NavBar';
import HomeScreen from '../pages/HomeScreen';
import OrderScreen from '../pages/OrderScreen';
import TestScreen from '../pages/TestScreen';
function NavRoute() {
  return (
    <div className="navrout ">
       <div className="position w100">
       <NavBar/>
       </div>


        <Routes>
        <Route path="/" element={<HomeScreen/>} exact/>
<Route path="/*" element={<HomeScreen/>} exact/>

<Route path="/order/:id" element={<OrderScreen/>} exact/>
<Route path="/test/:id" element={<TestScreen/>} exact/>



        </Routes>
    </div>
  );
}

export default NavRoute;
