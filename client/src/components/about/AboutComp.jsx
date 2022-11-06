import { useState } from "react";
import "../../App.css";
import "../../css/home.css";
import "../../css/about.css";
import SVRG1 from "../../image/svg1.svg";
import SVRG2 from "../../image/svg2.svg";
import SVRG3 from "../../image/svg4.svg";
import AboutCard from "./AboutCard";



function AboutComp() {

  const [pointer, setPointer] = useState("2");

  function setPointerFunction(e) {
    if (e) {
      setPointer(e);
    } else {
      setPointer("2");
    }
  }
  return (
    <div className="   flexcol center  ">
      <div className="w90 gridrow3">
    <AboutCard class="right" header="פיתוח וקידום אתרי אינטרנט" title="הדרכה צמודה עד סוף התהליך " text='     הלקוחות שלך מחפשים אותך בדיגיטל. כדי להתחייב שהם יוכלו למצוא
                אותך, הנוכחות שלך בדיגיטל משפיעה על התוצאות. איך בעצם אנחנו נמקם
                את העסק שלך בתוצאות הראשונות בגוגל? על ידי בניית אתר בעיצוב
                מודרני וחדשני עם אחוזי מהירות גבוהיים קוד ידיתותי למנועי חיפוש
                של גוגל אשר מותאם בעיצוב ובפלטפורמה לטלוויזיה,מחשב וכל מכשיר
                נייד ואף שעון חכם!' number="1" pointer={pointer} setPointerFunction={setPointerFunction} SVG={SVRG1} btn="אני רוצה שיווק לאתר"  />
         <AboutCard header="פיתוח וקידום אתרי אינטרנט" title="הדרכה צמודה עד סוף התהליך " text='     הלקוחות שלך מחפשים אותך בדיגיטל. כדי להתחייב שהם יוכלו למצוא
                אותך, הנוכחות שלך בדיגיטל משפיעה על התוצאות. איך בעצם אנחנו נמקם
                את העסק שלך בתוצאות הראשונות בגוגל? על ידי בניית אתר בעיצוב
                מודרני וחדשני עם אחוזי מהירות גבוהיים קוד ידיתותי למנועי חיפוש
                של גוגל אשר מותאם בעיצוב ובפלטפורמה לטלוויזיה,מחשב וכל מכשיר
                נייד ואף שעון חכם!' number="2" pointer={pointer} setPointerFunction={setPointerFunction} SVG={SVRG3} btn="אני רוצה שיווק לאתר"  />
     
     <AboutCard class="left" header="פיתוח וקידום אתרי אינטרנט" title="הדרכה צמודה עד סוף התהליך " text='     הלקוחות שלך מחפשים אותך בדיגיטל. כדי להתחייב שהם יוכלו למצוא
                אותך, הנוכחות שלך בדיגיטל משפיעה על התוצאות. איך בעצם אנחנו נמקם
                את העסק שלך בתוצאות הראשונות בגוגל? על ידי בניית אתר בעיצוב
                מודרני וחדשני עם אחוזי מהירות גבוהיים קוד ידיתותי למנועי חיפוש
                של גוגל אשר מותאם בעיצוב ובפלטפורמה לטלוויזיה,מחשב וכל מכשיר
                נייד ואף שעון חכם!' number="3" pointer={pointer} setPointerFunction={setPointerFunction} SVG={SVRG2} btn="אני רוצה שיווק לאתר"  />
     
      </div>
    </div>
  );
}

export default AboutComp;
