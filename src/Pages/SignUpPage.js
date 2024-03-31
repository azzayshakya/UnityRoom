import React, { useState } from "react"; 


import Navbar from "../component/Navbar";
import '../Css/Home.css'
import '../Css/LoginPage.css'
import { GiCrossFlare } from "react-icons/gi";
import { CiMail } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { CiLock } from "react-icons/ci";

// import { Flashlight, Lock } from 'lucide-react';
// import { Mail } from 'lucide-react';
// import { User } from 'lucide-react';
// import { Contact } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const SignUpPage = () => {
    const image=useSelector(state=>state.one2one.imageBase64)
    const audio=useSelector(state=>state.one2one.audioBase64)

    console.log("signup page image",image)
    console.log("signup page audio",audio)
    const [credentials, setCredentials] = useState({ name: "", email: "", mobileNumber: "", password: "" });
    const [showPopup, setShowPopup] = useState(false);
    const [signUpButton, setSignUpButton] = useState(true);
    const Navigate = useNavigate();

    // console.log("location.state:", location.state);


    const handleSubmit = async (event) => {
        setSignUpButton(false);
        setShowPopup(true);
        event.preventDefault();
        const response = await fetch("http://localhost:2000/SignUp", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                mobileNumber: credentials.mobileNumber,
                password: credentials.password,
                image: image,
               
            })
        })
        const json = await response.json();
        console.log(json)
        if (!json.success) {
            setShowPopup(false);
            setSignUpButton(true);
            alert(json.message);
        }
        if (json.success) {
            setShowPopup(false);
            setSignUpButton(true);
            alert("signup successfully");
            // Navigate("/LoginPage")
        }

        const audioResponse = await fetch("http://localhost:2000/UploadAudio", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: credentials.email, audio: audio
            })
        });

        const audioJson = await audioResponse.json();
        if (!audioJson.success) {
            setShowPopup(false);
            setSignUpButton(true);
            alert(audioJson.message);
            return;
        }
        if (audioJson.success) {
            // setShowPopup(false);
            // setSignUpButton(true);
            alert(audioJson.message);
            return;
        }
    }

    

    const handleNameChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <>
            <div className="Home">
                <div>
                    <Navbar />
                </div>
                <div className="rightside">
                    <div style={{ height: "420px" }} className="FormMainContainer SignUPFormMainContainer">
                        <div>
                            <h2>SignUp</h2>
                        </div>
                        <div className="LoginPageInputRow LoginPageFirstInputRow">
                            <div className="formIcon"><CiUser /></div>
                            <input type="name" name="name" value={credentials.name} onChange={handleNameChange} id="name" placeholder="Your Name" />
                        </div>
                        <div className="LoginPageInputRow">
                            <div className="formIcon"><CiMail /></div>
                            <input type="email" name="email" value={credentials.email} onChange={handleNameChange} id="email" placeholder="Your Email" />
                        </div>
                        <div className="LoginPageInputRow">
                            <div className="formIcon"><IoMdContact /></div>
                            <input type="Number" name="mobileNumber" value={credentials.mobileNumber} onChange={handleNameChange} id="number" placeholder="Mobile Number" />
                        </div>
                        <div className="LoginPageInputRow">
                            <div className="formIcon"><CiLock /></div>
                            <input type="password" name="password" value={credentials.password} onChange={handleNameChange} id="password" placeholder="Password" />
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
        </>
    )
}

export default SignUpPage;