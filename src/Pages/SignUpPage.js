import React, { useState } from "react"; 


import Navbar from "../component/Navbar";
import '../Css/Home.css'
import '../Css/LoginPage.css'

import { Flashlight, Lock } from 'lucide-react';
import { Mail } from 'lucide-react';
import { GiCrossFlare } from "react-icons/gi";
import { User } from 'lucide-react';
import { Contact } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const SignUpPage=()=>{

    const [credentials,setcredentials]=useState({name:"" ,email:"",mobileNumber:"",password:""});
    const [showPopup, setShowPopup] = useState(false);
    const [signUpButton,setsignUpButton]=useState(true);
    const Navigate= useNavigate();

    const handleSubmit=async(event)=>{
        setsignUpButton(false)
        setShowPopup(true)
        event.preventDefault();
        const response= await fetch("http://localhost:8000/SignUp",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,mobileNumber:credentials.mobileNumber,password:credentials.password})
        })
        const json=await response.json();
        console.log(json)
        if(!json.success){
            setShowPopup(false)
            setsignUpButton(true)
            alert(json.message)
        }
        if(json.success){

            setShowPopup(false)
            setsignUpButton(true)
            alert("signup successfully")
            // Navigate("/LoginPage")
            
        }
    }
    
    const handleNameChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
    return<>
    <div className="Home">
    <div>
            <Navbar/>
        </div>
        <div className="">

           

               
            <div className="rightside">

            <div style={{height:"420px"}}className="FormMainContainer SignUPFormMainContainer">

                <div>
                    <h2>SignUp</h2>
                </div>

                <div className="LoginPageInputRow LoginPageFirstInputRow">
                    <div className="formIcon"><User/></div>
                    <input type="name" name="name" value={credentials.name} onChange={handleNameChange} id="name" placeholder="Your Name"/>
                </div>

                <div className="LoginPageInputRow">
                    <div className="formIcon"><Mail/></div>
                    <input type="email" name="email" value={credentials.email} onChange={handleNameChange} id="email" placeholder="Your Email"/>
                </div>

                <div className="LoginPageInputRow">
                    <div className="formIcon"><Contact/></div>
                    <input type="Number" name="mobileNumber" value={credentials.mobileNumber} onChange={handleNameChange} id="number" placeholder="Mobile Number"/>
                </div>

                <div className="LoginPageInputRow"> 
                <div className="formIcon"><Lock/></div>         
                    <input type="password" name="password" value={credentials.password} onChange={handleNameChange} id="password" placeholder="Password"/>
                </div> 
                {showPopup &&
                    <div className="SingingUpLoading">
                    <h2>Please Wait !</h2>
                    <div className="SignUpLoader"></div>
                </div>
                }
                {signUpButton &&
                <div className="FormButton">
                    
                <button onClick={handleSubmit}>SignUp</button>
            </div>

                }

                

            </div>

            </div>

        </div>

        
    </div>
    
    </>
}
export default SignUpPage;