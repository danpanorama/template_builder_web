import { useEffect } from 'react';
import '../App.css';
import CaruselSection from '../components/homeOpen/CaruselSection';
import OpenSection from '../components/homeOpen/OpenSection';
import TemplateSection from '../components/templats/TemplateSection';
import TemplatsList from '../components/templats/TemplatsList';
import '../css/home.css'
import ContactScreen from './ContactScreen';
import TemplateScreen from './TemplateScreen';
import { useDispatch, useSelector } from "react-redux";
import { clearState } from '../Redux/Actions/templateActions';

function HomeScreen() {
  const dispatch = useDispatch();
useEffect(()=>{
dispatch(clearState())
},[])
  
  return (
    <div className="home">
        <OpenSection/>
        <CaruselSection/>
        <div className="flexcol center bgclss">
            <div className="w60">
            <TemplateScreen/>
            </div>
        </div>
      
        <ContactScreen/>

    </div>
  );
}

export default HomeScreen;
