import React from 'react'
import './LoginPopup.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Login");
  return (
    <div className='login-popup'>
        <form  className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img  onClick ={()=>setShowLogin(false) }src={assets.cross_icon} alt="" />
               
            </div>
            <div className="login-popup-inputs">
                {currState==="Sign Up"?<input type="text" placeholder='Username' required />:""}
        
                <input type="text" placeholder='Email'  required/>
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>I accept all terms and conditions</p>

            </div>
            {currState==="Login"?<p>Cretae a new Account ? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
            :<p>Already have an account ? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>}
           
            
            
        </form>

    </div>
  )
}

export default LoginPopup