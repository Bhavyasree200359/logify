import React from "react";
import a from "../images/a.png";
import hindi2 from "../images/el.png"
import malayalam from "../images/malayalam-letter-lla-icon-lg.png"
import hindi from '../images/letter-hindi-a.svg'
import SpeakerImage from "../images/volume.png"
import hletter from "../images/letter-h.png"
import { useNavigate } from "react-router-dom";
import sletter from "../images/letter-s.png";
import dletter from "../images/letter-d.png";
import caletter from "../images/ca.png";
import bletter from "../images/letter-b.png";
import japanletter from "../images/japanese-alphabet.png";





function LandingPage(){
     
    const navigate=useNavigate();
    const handleSignUp=()=>{
    navigate('/signup');
    }
    return(
 



  <>


<div className="landing-page-div">
  <div className="speaker-letters-div">
    <img className="speaker-img" src={SpeakerImage}></img>
    <img className="a-img" src={a}></img>
    <img className="a-img" src={hindi}></img>
    <img className="a-img" src={malayalam}></img>
    <img className="a-img" src={hindi2}></img>
     <img className="a-img" src={hletter}></img>
    <img className="a-img" src={sletter}></img>
    <img className="a-img" src={dletter}></img>
    <img className="a-img" src={caletter}></img>
    <img className="a-img" src={bletter}></img>
     <img className="a-img" src={japanletter}></img>
  
    </div>
      <h1>Welcome to our Platform</h1>
      <p>We’re excited to have you here! Sign up to explore our features and get started on your journey.</p>
      <button onClick={handleSignUp} className="sign-up-button">Sign Up</button>
    </div>

  </>
    
    )

}

export default LandingPage;