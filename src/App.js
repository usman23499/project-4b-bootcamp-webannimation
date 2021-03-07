
import './App.css';
import Nav from "./Components/nav";
import vedio from "./Components/images/ezgif.com-gif-maker.gif";
import mic from './Components/images/mic.gif';
import useWebAnimations,{zoomIn,fadeInBottomLeft} from "@wellyshen/use-web-animations";
import { useState,useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [dot1,setdot1]=useState("dot1grey");
  const [dot2,setdot2]=useState("dot2grey");
  const [dot3,setdot3]=useState("dot3grey");
  const [dot4,setdot4]=useState("dot4grey");

  useEffect(() => {
    AOS.init({duration:2000});
    
    setInterval(() => {
      
      setdot1("dot1grey");
    }, 500);
     setInterval(() => {
      
      setdot1("dot1white");
    }, 2000);


    setInterval(() => {
      
      setdot2("dot2grey");
    }, 500);
     setInterval(() => {
      
      setdot2("dot2white");
    }, 4000);



    setInterval(() => {
      
      setdot3("dot3grey");
    }, 500);
     setInterval(() => {
      
      setdot3("dot3white");
    }, 1000);



    setInterval(() => {
      
      setdot4("dot4grey");
    }, 500);
     setInterval(() => {
      
      setdot4("dot4white");
    }, 8000);



  }, [1 ]);

  const myref = useWebAnimations({
    keyframes: {
      transform:  ["translateY(0)", "translateY(-20px)","translateY(0)"], 
    },
    timing: {
      duration: 2000, // Run for 1000ms
      iterations:Infinity, // Repeat once
      easing: "ease-in-out", // Use a fancy timing function
      
    },
    
  });
  const myref2 = useWebAnimations({
    keyframes: {
      transform:  ["translateY(0)", "translateY(-20px)","translateY(0)"], 
    },
    timing: {
      duration: 2000, // Run for 1000ms
      iterations:Infinity, // Repeat once
      easing: "ease-in-out", // Use a fancy timing function
      
    },
    
  });
  const myref3 = useWebAnimations({
    keyframes: {
      transform:  ["translateY(0)", "translateY(-20px)","translateY(0)"], 
    },
    timing: {
      duration: 2000, // Run for 1000ms
      iterations:Infinity, // Repeat once
      easing: "ease-in-out", // Use a fancy timing function
      
    },
    
  });
  const myref4 = useWebAnimations({
    keyframes: {
      transform:  ["translateY(0)", "translateY(-20px)","translateY(0)"], 
    },
    timing: {
      duration: 2000, // Run for 1000ms
      iterations:Infinity, // Repeat once
      easing: "ease-in-out", // Use a fancy timing function
      
    },
    
  });
  const myref5 = useWebAnimations({
    keyframes: {
      transform:  ["translateY(0)", "translateY(-20px)","translateY(0)"], 
    },
    timing: {
      duration: 2000, // Run for 1000ms
      iterations:Infinity, // Repeat once
      easing: "ease-in-out", // Use a fancy timing function
      
    },
    
  });const myref6 = useWebAnimations({
    keyframes: {
      transform:  ["translateY(0)", "translateY(-20px)","translateY(0)"], 
    },
    timing: {
      duration: 2000, // Run for 1000ms
      iterations:Infinity, // Repeat once
      easing: "ease-in-out", // Use a fancy timing function
      
    },
    
  });const myref7 = useWebAnimations({
    keyframes: {
      transform:  ["translateY(0)", "translateY(-20px)","translateY(0)"], 
    },
    timing: {
      duration: 2000, // Run for 1000ms
      iterations:Infinity, // Repeat once
      easing: "ease-in-out", // Use a fancy timing function
      
    },
    
  });const myref8 = useWebAnimations({
    keyframes: {
      transform:  ["translateY(0)", "translateY(-20px)","translateY(0)"], 
    },
    timing: {
      duration: 2000, // Run for 1000ms
      iterations:Infinity, // Repeat once
      easing: "ease-in-out", // Use a fancy timing function
      
    },
    
  });const myref9 = useWebAnimations({
    keyframes: {
      transform:  ["translateY(0)", "translateY(-20px)","translateY(0)"], 
    },
    timing: {
      duration: 2000, // Run for 1000ms
      iterations:Infinity, // Repeat once
      easing: "ease-in-out", // Use a fancy timing function
      
    },
    
  });
  
  const myref10 = useWebAnimations({
    keyframes: {
      transform:  ["translateY(0)", "translateY(-20px)","translateY(0)"], 
    },
    timing: {
      duration: 2000, // Run for 1000ms
      iterations:Infinity, // Repeat once
      easing: "ease-in-out", // Use a fancy timing function
      
    },
    
  });

  const zoomin = useWebAnimations({
    ...zoomIn,
    // keyframes: {
    //   transform:  ["translateY(0)", "translateY(-20px)","translateY(0)"], 
    // },
    timing: {
      duration: 2000, // Run for 1000ms
      iterations:1 , // Repeat once
      easing: "ease-in-out", // Use a fancy timing function
      
    },
    
  });

  const fade1 = useWebAnimations({
    ...fadeInBottomLeft,
    // keyframes: {
    //   transform:  ["translateY(0)", "translateY(-20px)","translateY(0)"], 
    // },
    timing: {
      duration: 2000, // Run for 1000ms
      iterations:1 , // Repeat once
      easing: "ease-in-out", // Use a fancy timing function
      
    },
    
  });
  const fade2 = useWebAnimations({
    ...fadeInBottomLeft,
    // keyframes: {
    //   transform:  ["translateY(0)", "translateY(-20px)","translateY(0)"], 
    // },
    timing: {
      duration: 2000, // Run for 1000ms
      iterations:1 , // Repeat once
      easing: "ease-in-out", // Use a fancy timing function
      
    },
    
  });
  const fade3 = useWebAnimations({
    ...fadeInBottomLeft,
    // keyframes: {
    //   transform:  ["translateY(0)", "translateY(-20px)","translateY(0)"], 
    // },
    timing: {
      duration: 2000, // Run for 1000ms
      iterations:1 , // Repeat once
      easing: "ease-in-out", // Use a fancy timing function
      
    },
    
  });

  
  return (
    <div >
      <Nav/>
      <br/>
      <br/>
      <br/>
      <div style={{
        textAlign:"center",
        
      }}>
        <p style={{
          color:"#282841",
          fontWeight:"bold",
          fontSize:"60px"

        }}>
          Mutify for Mac
        </p>
        <p style={{
          color:"#63657c",
          fontSize:"26px",
        }}>
        Use a shortcut or the touch bar on any Mac device
        <br/> to quickly mute your microphone
        </p>
        <button className="btn btn2" type="submit">Download</button>
        <button className="btn btn3" type="submit">Buy:$4.90</button>
      </div>
      <br/>
      <br/>
      <div className="secondmain" >
        <img style={{
          boxShadow:"0px 0px 100px #023bd3",
          width:"30%"
        }} src={vedio}/>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={{
        width:"100%",
       position:"relative",
        overflow:"hidden"
      }}>
        <img src='https://mutify.app/images/FB-1b46484926.png'
        
        style={{
          marginLeft:"6%",
          filter: "blur(10px)",
          position:"absolute",
          marginTop:"16px",
         
        }}
        alt=""/>
        <img src='https://mutify.app/images/Hangouts-de6270cae5.png'
        ref={myref.ref}
        style={{
          marginLeft:"17%",
          marginTop:"96px",
          position:"absolute"
         
         
        }}
        alt=""/>

<img src='https://mutify.app/images/Slack-a34e725729.png  '
         ref={myref2.ref}    
        style={{
          marginLeft:"42%",
          marginTop:"26px",
          position:"absolute"
         
         
        }}
        alt=""/>
        <div 
       
        
        style={{
            textAlign:"right",
            marginRight:"210px"
            
          }}>

          <img src='https://mutify.app/images/Viber-bcad9961af.png '
        
        style={{
          // marginLeft:"88%",
          marginTop:"56px",
          position:"absolute",
          filter: "blur(10px)",
         
        }}
        alt=""/>  
          </div>

<img src='https://mutify.app/images/Webex-0b269eb5af.png '
          ref={myref3.ref}  
        style={{
          marginLeft:"4%",
          marginTop:"196px",
          position:"absolute",
          
         
        }}
        alt=""/>  

<img src='https://mutify.app/images/Zoom-0cb3267633.png'
          ref={myref4.ref}  
        style={{
          marginLeft:"28%",
          marginTop:"136px",
          position:"absolute",
          
         
        }}
        alt=""/>  

        
<img src='https://mutify.app/images/Telegram-d2ec968abe.png'
        
        style={{
          marginLeft:"50%",
          marginTop:"196px",
          position:"absolute",
          filter: "blur(10px)",
         
        }}
        alt=""/>  

<img src='https://mutify.app/images/Skype-64e68baaf2.png'
          ref={myref5.ref}  
        style={{
          marginLeft:"63%",
          marginTop:"96px",
          position:"absolute",
         
         
        }}
        alt=""/>  



        
<img src='https://mutify.app/images/Slack-a34e725729.png '
        
        style={{
          marginLeft:"14%",
          marginTop:"296px",
          position:"absolute",
          filter: "blur(10px)",
         
        }}
        alt=""/>  
        <div className="texthandle">

        <p
        className="texthandlefp"
        
        >
        Control your microphone anywhere
        </p>
        <p style={{
          color:"#63657c",
        
          fontSize:"2vw",
          // margin:"0 43%",
          // marginTop:"350px",
          // position:"absolute",
          textAlign:"center",

        }}>
       Even during calls
        </p>



        </div>
        
        <img src='https://mutify.app/images/Slack-a34e725729.png '
        
        style={{
          marginLeft:"14%",
          marginTop:"296px",
          position:"absolute",
          filter: "blur(10px)",
         
        }}
        alt=""/>  

          <div   ref={myref6.ref}   style={{
            textAlign:"right",
            marginRight:"170px"
            
          }}>

          <img src='https://mutify.app/images/GoToMeetings-6907108d0d.png '
        
        style={{
          // marginLeft:"88%",
          marginTop:"296px",
          position:"absolute",
         
         
        }}
        alt=""/>  
          </div>

          <img src='https://mutify.app/images/Telegram-d2ec968abe.png '
          ref={myref7.ref}  
        style={{
          marginLeft:"4%",
          marginTop:"556px",
          position:"absolute",
          
         
        }}
        alt=""/>  

<img src='https://mutify.app/images/Viber-bcad9961af.png '
          ref={myref8.ref}  
        style={{
          marginLeft:"21%",
          marginTop:"516px",
          position:"absolute",
          
         
        }}
        alt=""/>  


<img src='https://mutify.app/images/FB-1b46484926.png '
          ref={myref9.ref}  
        style={{
          marginLeft:"71%",
          marginTop:"456px",
          position:"absolute",
          
         
        }}
        alt=""/>  

<div style={{
            textAlign:"right",
            marginRight:"170px"
            
          }}
          
          ref={myref10.ref}  
          
          >
          <img src='https://mutify.app/images/Appear-1ad98c17f8.png '
        
        style={{
          // marginLeft:"88%",
          marginTop:"556px",
          position:"absolute",
         
         
        }}
        alt=""/>  
          </div>

          <div style={{
            display:"inline",   
            margin:"0 auto",
            position:"absolute",
            textAlign:"center",
            width:"100%"

            
          }}>

          <img src='https://mutify.app/images/FaceTimePopup-8b68d7ca18.jpg'
          className='callimg'
        
        alt=""/>  
          </div>


<br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/> <br/>


<div >
  
<div className="fourthmain" >
        <img style={{
         
          width:"75%"
        }} src="https://mutify.app/images/macbook-1-51fcc36e0a.png"/>

<img style={{
  position:"absolute",
  marginLeft:"-30%",
 
  zIndex:"999",
 width:"15%"
}}
src="https://mutify.app/images/magnifier-1878b93fb0.png"

// ref={zoomin.ref}
data-aos="zoom-in"
/>
        
      
      </div>

      
</div>

<br /><br /><br />

<div style={{
        textAlign:"center",
        
      }}>
        
        <p style={{
          color:"#63657c",
          fontSize:"26px",
        }}>
        Use a shortcut or the touch bar on any Mac device
        <br/> to quickly mute your microphone
        </p>
        <button className="btn btn2" type="submit">Download</button>
        <button className="btn btn3" type="submit">Buy:$4.90</button>
      </div>




      <div style={{

        textAlign:"center",
        width:"80%",
        margin:"0 auto"
      }}>
  
<br /><br /><br />




  <div className="fifthmain" >
  
  <div className="container">
  <div className="row row1">
    <div className="col-sm">
    
    <p style={{
             color:"white",
             fontWeight:"bold",
             fontSize:"30px",


           }}>
           Easily control the volume level
           </p>
           <p
           style={{
            color:"#63657c",
            fontWeight:"bold",
            fontSize:"20px",


          }}
           >
           Use a shortcut to quickly access a window for your microphone volume controls
           </p>
         
           <button className="btn btn4" type="submit">Try It free</button>

    
    </div>
    <div className="col-sm divring">
    <img style={{
              
              width:"100%"
            }} src="https://mutify.app/images/wave@2x-7ab45b32d6.png"/>

<div 

className={dot1}
>
  0
</div>
<div 

className={dot2}
>
  0
</div>
<div 

className={dot3}
>
  0
</div>
<div 

className={dot4}
>
  0
</div>


<div style={{
  position:"absolute", 
  minWidth:"4.5%",
 backgroundColor:"white",
 color:"transparent",
 borderRadius:"50px",
 marginLeft:"-30%"

}}
>
  0
</div>        
    </div>
  </div>
 
  </div>

         
         
         
  
        </div>
  
        
  </div>
  

<br/><br/><br/><br/><br/> 

  <div className="container">
  <div className="row">
    <div className="col-sm">
    <img style={{
              marginLeft:"-30%",
              width:"145%"
            }} src="https://mutify.app/images/Mockup_010-d63c73e7e3.png"/>


            
<img style={{
  position:"absolute",
  // marginLeft:"30%",
 marginTop:"-51%",
  zIndex:"999",
 width:"20%"  
}}
src="https://mutify.app/images/airpods-right-1edfc7c6a2.png"
// ref={fade1.ref}
data-aos="zoom-in-up"
/>

           
<img style={{
  position:"absolute",
  marginLeft:"-14%",
 marginTop:"-58%",
  zIndex:"999",
 width:"20%"  
}}
src="https://mutify.app/images/airpods-left-7c7413e6a7.png"
// ref={fade2.ref}
data-aos="zoom-in-up"
/>


<img style={{
  position:"absolute",
  marginLeft:"24%",
 marginTop:"-100%",
  zIndex:"999",
 width:"45%"  
}}
src="https://mutify.app/images/muted-screen-04789f86b7.png"
// ref={fade3.ref}
data-aos="zoom-in-up"

/>

    </div>
    <div className="col-sm">
    <p style={{
             color:"black",
             fontWeight:"bold",
             fontSize:"40px",


           }}>
           Stay muted even on a newly connected device
           </p>
           <p
           style={{
            color:"#63657c",
            fontWeight:"bold",
            fontSize:"20px",


          }}
           >
           If you mute your mic on a call and switch to a new device, such as your AirPods, the app will detect the change and mute the new device as well
           </p>
         
           <button className="btn btn2" type="submit">Download</button>
    </div>
   



   
  </div>
</div>





<div style={{


width:"80%",
margin:"0 auto"
}}>

<br /><br /><br />




<div className="sixthmain" >

<div className="container">
<div className="row row2">
<div className="col-sm textsize">

<p style={{
     color:"black",
     fontWeight:"bold",
     fontSize:"2.4vw",


   }}>
  Have an Idea or Feedback?
   </p>
   <p
   style={{
    color:"#63657c",
    fontWeight:"bold",
    fontSize:"2.4vw",


  }}
   >
  help@mutify.app
   </p>
 
   

</div>
<div className="col-sm divringmic">
<img style={{
      width:"70%",
      zIndex:"9999",
      marginLeft:"38.8%",
      borderRadius:"30px 30px"
    }} 
    
    
    src={mic}/>





</div>
</div>

</div>

 
 
 

</div>


</div>


<br/>
<br/>


      </div>


      <Nav/>
      <br/>
      
      <div style={{textAlign:"center"}}>

        <p style={{color:"#63657c"}}>
        Made by Pixel Point – Web, Mobile, AI, Blockchain development company. © 2019 Mutify. All right reserved
        </p>
      </div>
      <br/>
      <br/>
    </div>
  );
}

export default App;
