import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import  '../Css/Home.css'
import '../Css/CreateMeet.css'  

const CreateMeet = () => {
    const [roomId, setRoomId] = useState("");
    const [credentials,setcredentials]=useState({RoomTitle:"" ,RoomId:""});

    const createmeet = async () => {
        
        try {
            const userId = localStorage.getItem("userId");
            const response = await fetch("http://localhost:8000/createMeet", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId: userId ,RoomTitle:credentials.RoomTitle,RoomId:credentials.RoomId })
            });
            const json = await response.json();
            console.log(json.RoomId);
            setRoomId(json.RoomId);
            localStorage.setItem("roomId", json.RoomId); 
        } catch (error) {
            console.error("Error creating meet:", error);
        }
    };

    useEffect(() => {
        createmeet();
    }, []);

    return (
        <>
            <div className="Home">
                <Navbar />
                {/* <h1>CreateMeet</h1>
                <div className="form" style={{ background: "white", height: "200px", width: "500px", marginLeft: "200px" }}>
                    <div>
                        <p>YourTitle</p>
                        <input type="text" />
                        <p>please copy the rooom id</p>
                        <button>Submit </button>
                    </div>
                </div> */}

                <div className="createmeetform">

                <div>
                    <h2>CreateMeet</h2>
                </div>

                <div className="RoomTitle">
                    <div className="firstrowofRoomTitle">
                        ENTER YOUR ROOM TITLE :
                    </div>
                    <div className="SecoundRowofRoomTitle">
                        <input type="text"  />
                    </div>

                    
                </div>
                <div className="RoomIdRow">
                    <div className="firstRowofRoomId">
                        YOUR ROOM ID :
                    </div>
                    <div className="secoundRpwOfRoomIdRow">
                        {roomId}
                    </div>
                </div>

                <div className="createRoomButton">
                <button>Submit</button>


                </div>






</div>
            </div>
        </>
    );
};

export default CreateMeet;
