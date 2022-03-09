import React,{useState} from 'react';
import "./login.css";

import googleIcon from "../../../assets/images/login-google.png";
import facebookIcon from "../../../assets/images/login-facebook.png";
import { Link, useNavigate } from 'react-router-dom';



const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login =async()=>{
        let item ={params:{email, password}};
        let result = await fetch("https://phpwebdevelopmentservices.com/project-react-backend/api/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                'Accept':"application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        if(result.result){
           localStorage.setItem("user-info",JSON.stringify(result));
           navigate("/");
         }
         else if(result.error){
            alert(result.error.message)
         }
        
        
        
      
       
        

    }

  return (
    <div className="main-center-div">
                  <div className="top-border-div">
                     <div className="login-from-area">
                        <h2>Sign In</h2>

                        <div>
                        <input type="text" className="login-type" placeholder="Email or mobile number" name="" onChange={(e)=> setEmail(e.target.value)} />
                        <div className="clearfix"></div>
                        </div>

                        <div className="password-in">
                        <input id="password-field" type="password" className="login-type" name="password" placeholder="passsword" onChange={(e)=>setPassword(e.target.value)}  />

                        <div className="clearfix"></div>
                        <span toggle="#password-field" className="field-icon fa fa-fw fa-eye toggle-password"></span>
                        </div>

                        <div className="remmber-area">
                           <label className="list_checkBox">Remember me
                           <input type="checkbox" name="text" />
                           <span className="list_checkmark"></span>
                           </label>
                           <a className="forgot-passwords" href="/">Forgot Password?</a>
                        </div>

                        <p>By clicking Sign In or continue with Facebook or Google, you agree to all <a href="/"> Terms of Service</a> and <a href="/"> Privacy Policy</a></p>
                        <button type="submit" className="login-submit" onClick={login}>Sign In</button>
                     </div>
                     <div className="or-area">
                        <span>Or Continue with</span>
                     </div>
                     <div className="login-socials-area">
                        <div className="socials-btns">
                           <a href="/" className="common-btns facebook-btn">
                           <img src={facebookIcon} alt="" /> Facebook
                           </a>
                           <a href="/" className="common-btns google-btn">
                           <img src={googleIcon} alt="" /> Google
                           </a>
                        </div>
                        
                     </div>
                  </div>
                  <div className="bottom-account-div">
                     <p>Don't have an account? <Link to="/signup">Create Account</Link></p>
                  </div>
     </div>



 
  )
}

export default Login