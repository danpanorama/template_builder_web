

    

import '../../App.css';
import '../../css/home.css'
import '../../css/carusel.css'

import Imag from '../../image/card.png'
import Imag1 from '../../image/card2.png'
import Imag2 from '../../image/card5.png'



function Carusel() {
  return (
    <div className="hjhjh ">
       
       <div class="container">
    <input type="radio" name="slider" id="item-1" checked/>
    <input type="radio" name="slider" id="item-2"/>
    <input type="radio" name="slider" id="item-3"/>
  <div class="cards">
    <label class="card" for="item-1" id="song-1">
      <img src={Imag} alt="song"/>
    </label>
    <label class="card" for="item-2" id="song-2">
      <img src={Imag1} alt="song"/>
    </label>
    <label class="card" for="item-3" id="song-3">
      <img src={Imag2} alt="song"/>
    </label>
  </div>
  <div class="player">
    <div class="upper-part">
      {/* <div class="play-icon">
        <svg width="20" height="20" fill="#2992dc" stroke="#2992dc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-play" viewBox="0 0 24 24">
          <defs/>
          <path d="M5 3l14 9-14 9V3z"/>
        </svg>
      </div> */}
      <div class="info-area" id="test">
        <label class="song-info" id="song-info-1">
          <div class="title">כרטיס ביקור מגניה</div>
          <div class="sub-line">
            <div class="subtitle">זיכרון גדול ומלא אפשריות</div>
            <div class="time">9.05</div>
          </div>
        </label>
        <label class="song-info" id="song-info-2">
          <div class="title">Words Remain</div>
          <div class="sub-line">
            <div class="subtitle">Moderator</div>
            <div class="time">4.05</div>
          </div>
        </label>
        <label class="song-info" id="song-info-3">
          <div class="title">כרטיס ביקור משרדי</div>
          <div class="sub-line">
            <div class="subtitle">אוהד</div>
            <div class="time">4.05</div>
          </div>
        </label>
      </div>
    </div>
    <div class="progress-bar">
      <span class="progress"></span>
    </div>
  </div>
</div>
    </div>
  );
}

export default Carusel;
