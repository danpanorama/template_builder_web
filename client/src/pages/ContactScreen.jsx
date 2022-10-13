import '../App.css';
import '../css/home.css'
import { useDispatch, useSelector } from "react-redux";
import {  useState } from "react";

function ContactScreen() {
    const dispatch = useDispatch();
    const templates = useSelector((state) => state.templates);


  return (
    <div className="h50vh cbc">

   
      

    </div>
  );
}

export default ContactScreen;
