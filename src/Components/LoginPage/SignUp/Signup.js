import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import googleIcon from "../../../assets/images/login-google.png";
import facebookIcon from "../../../assets/images/login-facebook.png";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const signup =async()=>{
        let item = {params:{name, email, phone, password, password_confirmation}};

        if(item.params.password!==item.params.password_confirmation){
            return(
            alert('Passward & password_confirmation does not match'))
        }

        let result = await fetch("https://phpwebdevelopmentservices.com/project-react-backend/api/register",{
            method : "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type":'application/json',
                "Accept":"application/json"
            }
        })
        result = await result.json();
        if(result.result){

           localStorage.setItem("user-info",JSON.stringify(result));
           navigate("/login");
        }
        else if(result.error){
           if(result.error.email){
              alert(result.error.email[0])
           }else if(result.error.phone){
              alert(result.error.phone[0])
           }else if(result.error.password){
              alert(result.error.password[0])
           }
        }
    }

  return (
    <div className="main-center-div">
                  <div className="top-border-div">
                     <div className="login-from-area">
                        <h2>Create Account</h2>
                        <div>
                        <input type="text" className="login-type" placeholder="Full name" name="" value={name} onChange={(e)=>setName(e.target.value)} />
                        <div className="clearfix"></div>
                        </div>
                        
                        <div>
                        <input type="email" className="login-type" placeholder="Email" name="" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <div className="clearfix"></div>
                        </div>
                        
                        <div>
                        <input type="text" className="login-type" placeholder="Mobile number" name="" value={phone} onChange={(e)=>setNumber(e.target.value)} />
                        <div className="clearfix"></div>
                        </div>
                        
                        
                        <div className="password-in">
                        <input id="password-field" type="password" className="login-type" name="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <div className="clearfix"></div>
                        <span toggle="#password-field" className="field-icon fa fa-fw fa-eye toggle-password"></span>
                        </div>
                        <div className="password-in">
                        <input id="password-field1" type="password" className="login-type" name="password" placeholder="Confirm password" value={password_confirmation} onChange={(e)=>setConfirmPassword(e.target.value)} />
                        <div className="clearfix"></div>
                        <span toggle="#password-field1" className="field-icon fa fa-fw fa-eye toggle-password"></span>
                        </div>
                        <p>By clicking Sign In or continue with Facebook or Google, you agree to all <a href="/"> Terms of Service</a> and <a href="/"> Privacy Policy</a></p>
                        <button type="submit" className="login-submit" onClick={signup}>Sign up</button>
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
                     <p>Already have an account? <Link to="/login">Login</Link></p>
                  </div>
               </div>



  
  )
}

export default Signup