import "../../App.css";
import "../../css/home.css";
import "../../App.css";
import "../../css/home.css";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import { Link } from "react-router-dom";
// import Pagination from "../components/pagenation/Pagination";
import { Pagination } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
function OpenSection(props) {
  const templates = useSelector((state) => state.templates);

  return (
    <div className="opendiv flexrowtocol center  h100vh primerybc">
       
      <div className="templatecarusel  h100 flexcol center">
        <div className="templatesCar h100 w100">
       
          
         <div className="tempcontainer">
      <div className=" h100 w100  ">
     
      <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
      >
          {templates.template
                  ? templates.template.map((e) => {
                      return (
                  <SwiperSlide  key={e.id}>
                         <Link
                          to={{
                            pathname: "order/" + e.id,
                          }}
                          state={{ data: e }}
                         
                          className=" card2"
                        >
                          
                          <div className="image2">
                            <img className="img" src={e.image} alt="" />
                          </div>
                          <br />
                        </Link>
                        </SwiperSlide>
                 
                      );
                    })
                  : "no templates to show"}
       
     
      </Swiper>
    
    
      </div>
         </div>
           
        </div>
      </div>

      <div className="words h50  flexcol ">
        <h1 className="header">כרטיסי ביקור  דיגיטאלים לעסק שלך</h1>
        <h3 className="h3">כרטיס דיגיטאלי עם כל המידע שצריך לעסק ולפרט</h3>
        <button className="primeryButton">קרא עוד</button>
      </div>
    </div>
  );
}

export default OpenSection;
