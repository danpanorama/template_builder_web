import { useEffect } from "react";
import "../App.css";
import CaruselSection from "../components/homeOpen/CaruselSection";
import OpenSection from "../components/homeOpen/OpenSection";
import TemplateSection from "../components/templats/TemplateSection";
import TemplatsList from "../components/templats/TemplatsList";
import "../css/home.css";
import ContactScreen from "./ContactScreen";
import TemplateScreen from "./TemplateScreen";
import { useDispatch, useSelector } from "react-redux";
import { clearState } from "../Redux/Actions/templateActions";
import AboutComp from "../components/about/AboutComp";

function HomeScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearState());
  }, []);

  return (
    <div className="home">
      <OpenSection />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="purple"
          fill-opacity="1"
          d="M0,160L40,181.3C80,203,160,245,240,234.7C320,224,400,160,480,144C560,128,640,160,720,181.3C800,203,880,213,960,208C1040,203,1120,181,1200,149.3C1280,117,1360,75,1400,53.3L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <div className="paddingpage">
        <div className="marginbottom150">
          <AboutComp />
        </div>

       
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="purple" fill-opacity="1" d="M0,32L48,42.7C96,53,192,75,288,112C384,149,480,203,576,218.7C672,235,768,213,864,176C960,139,1056,85,1152,106.7C1248,128,1344,224,1392,272L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>
   <div className="bgcolortemp transformpage">
   <div className="paddingpagetemplate">
      <div className="flexcol center bgclss">
          <div className=" w100">
            <TemplateScreen />
          </div>
        </div>
      </div>
   </div>
   <div className="transsup">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="purple" fill-opacity="1" d="M0,192L17.1,208C34.3,224,69,256,103,245.3C137.1,235,171,181,206,154.7C240,128,274,128,309,133.3C342.9,139,377,149,411,133.3C445.7,117,480,75,514,69.3C548.6,64,583,96,617,106.7C651.4,117,686,107,720,112C754.3,117,789,139,823,149.3C857.1,160,891,160,926,138.7C960,117,994,75,1029,58.7C1062.9,43,1097,53,1131,101.3C1165.7,149,1200,235,1234,240C1268.6,245,1303,171,1337,144C1371.4,117,1406,139,1423,149.3L1440,160L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path>
</svg>
   </div>

      <svg
        className="transs"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="purple"
          fill-opacity="1"
          d="M0,160L40,181.3C80,203,160,245,240,234.7C320,224,400,160,480,144C560,128,640,160,720,181.3C800,203,880,213,960,208C1040,203,1120,181,1200,149.3C1280,117,1360,75,1400,53.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      {/* <ContactScreen /> */}
    </div>
  );
}

export default HomeScreen;
