import * as actionTypes from "../constants/templateContante.js";
import Image1 from '../../image/card.png'
import Image2 from '../../image/card2.png'
import Image3 from '../../image/card5.png'

import Bg from '../../image/flower2.jpg'
import Bgsamia from '../../image/back.jpg'
import Bggirl from '../../image/blackback.jpg'
import GoldBg from '../../image/tt.jpeg'
import Gag from '../../image/gag.jpg'

import BlackDarkBg from '../../image/g1.jpg'
import F1img from '../../image/f1.jpeg'
import Nof from '../../image/nof.jpeg'



const initialState = {
    templateChois: {},
    template: [
        {
          name:'temp2',
          image:Image3,
          topbg:GoldBg,
          profileImage:F1img,
          color:"gold",
          bigBg:BlackDarkBg,
          simblue:"♡",
          nameheader:"your Name",
          workheader:"your work",
          buttonSize:2,

          id:1
        },
       
        {
          name:'temp2',
          image:Image2,
          topbg:Bg,
          profileImage:Nof,
          color:"pink",
          bigBg:BlackDarkBg,
          simblue:"♡",
          nameheader:"your Name",
          workheader:"your work",
          buttonSize:1,

          id:3
        },
        {
          name:'temp1',
          image:Image1,
          name:'temp2',
        
          topbg:Bg,
          profileImage:Nof,
          color:"pink",
          bigBg:BlackDarkBg,
          simblue:"♡",
          nameheader:"your Name",
          workheader:"your work",
          buttonSize:1,

          id:9
        },    
        {
          name:'temp2',
          image:Image3,
          topbg:GoldBg,
          profileImage:F1img,
          color:"gold",
          bigBg:BlackDarkBg,
          simblue:"♡",
          nameheader:"your Name",
          workheader:"your work",
          buttonSize:2,

          id:1
        },
       
        {
          name:'temp2',
          image:Image2,
          topbg:Bg,
          profileImage:Nof,
          color:"pink",
          bigBg:BlackDarkBg,
          simblue:"♡",
          nameheader:"your Name",
          workheader:"your work",
          buttonSize:1,

          id:3
        },
        {
          name:'temp1',
          image:Image1,
          name:'temp2',
        
          topbg:Bg,
          profileImage:Nof,
          color:"pink",
          bigBg:BlackDarkBg,
          simblue:"♡",
          nameheader:"your Name",
          workheader:"your work",
          buttonSize:1,

          id:9
        }, 
        {
          name:'temp2',
          image:Image3,
          topbg:GoldBg,
          profileImage:F1img,
          color:"gold",
          bigBg:BlackDarkBg,
          simblue:"♡",
          nameheader:"your Name",
          workheader:"your work",
          buttonSize:2,

          id:1
        },
       
        {
          name:'temp2',
          image:Image2,
          topbg:Bg,
          profileImage:Nof,
          color:"pink",
          bigBg:BlackDarkBg,
          simblue:"♡",
          nameheader:"your Name",
          workheader:"your work",
          buttonSize:1,

          id:3
        },
        {
          name:'temp1',
          image:Image1,
          name:'temp2',
        
          topbg:Bg,
          profileImage:Nof,
          color:"pink",
          bigBg:BlackDarkBg,
          simblue:"♡",
          nameheader:"your Name",
          workheader:"your work",
          buttonSize:1,

          id:9
        }, 
        {
          name:'temp2',
          image:Image2,
          topbg:Bg,
          profileImage:Nof,
          color:"pink",
          bigBg:BlackDarkBg,
          simblue:"♡",
          nameheader:"your Name",
          workheader:"your work",
          buttonSize:1,

          id:3
        },
        {
          name:'temp1',
          image:Image1,
          name:'temp2',
        
          topbg:Bg,
          profileImage:Nof,
          color:"pink",
          bigBg:BlackDarkBg,
          simblue:"♡",
          nameheader:"your Name",
          workheader:"your work",
          buttonSize:1,

          id:9
        }, 
      ],
    user: {},


};

const products = (state = initialState, action) => {
    switch (action.type) {




        case actionTypes.SET_TEMPLATE:
            const set = {
                ...state,
            };
            set.templateChois = action.data

            return set;

        case actionTypes.SET_USER:
            const setUser = {
                ...state,
            };
            setUser.user = action.data

            return setUser;


        case actionTypes.CLEAR_ORDER:
            const clearState = {
                ...state,
            };


         
            clearState.templateChois = {}

            return clearState;

        default:
            return state

    }
}

export default products