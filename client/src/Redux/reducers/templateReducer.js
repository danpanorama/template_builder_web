import * as actionTypes from "../constants/templateContante.js";
import Image1 from '../../image/card.png'
import Image2 from '../../image/card2.png'
import Image3 from '../../image/card5.png'
import Image4 from '../../image/salimg.png'
import Image5 from '../../image/koling.png'

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
          name:'temp1',
          image:Image3,
          topbg:GoldBg,
          profileImage:F1img,
          color:"gold",
          bigBg:BlackDarkBg,
          simblue:"&",
          nameheader:"your Name",
          workheader:"your work",
          buttonSize:'40%',
          buttonPos:"center",
          shape:'polygon(50% 0%, 81% 0, 100% 0, 100% 100%, 0 100%, 0 0, 25% 0)',
          id:14
         },
         {
            name:'temp1',
            image:Image4,
            topbg:GoldBg,
            profileImage:F1img,
            color:"gold",
            bigBg:BlackDarkBg,
            simblue:"&",
            nameheader:"your Name",
            workheader:"your work",
            buttonSize:'40%',
            buttonPos:"center",
            shape:'polygon(50% 0%, 81% 0, 100% 0, 100% 100%, 0 100%, 0 0, 25% 0)',
            id:15
           },
           {
            name:'temp1',
            image:Image5,
            topbg:GoldBg,
            profileImage:F1img,
            color:"gold",
            bigBg:BlackDarkBg,
            simblue:"&",
            nameheader:"your Name",
            workheader:"your work",
            buttonSize:'40%',
            buttonPos:"center",
            shape:'polygon(50% 0%, 81% 0, 100% 0, 100% 100%, 0 100%, 0 0, 25% 0)',
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
          simblue:"&",
          nameheader:"your Name",
          workheader:"your work",
          buttonSize:2,
          shape:'polygon(50% 0%, 81% 0, 100% 0, 100% 100%, 0 100%, 0 0, 25% 0)',

          id:2
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

          id:4
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

          id:5
        }, 
        {
          name:'temp2',
          image:Image3,
          topbg:GoldBg,
          profileImage:F1img,
          color:"gold",
          bigBg:BlackDarkBg,
          simblue:"&",
          nameheader:"your Name",
          workheader:"your work",
          buttonSize:2,
          shape:'polygon(50% 0%, 81% 0, 100% 0, 100% 100%, 0 100%, 0 0, 25% 0)',
          id:6
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

          id:7
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

          id:8
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

          id:10
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

          id:11
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