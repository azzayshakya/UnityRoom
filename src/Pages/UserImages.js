import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../component/Navbar';
import '../Css/userImage.css';
import { useNavigate } from 'react-router-dom';

const UserImages = () => {
    const [image, setImage] = useState(null);
    const [showSubmitButton, setShowSubmitButton] = useState(false);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!videoRef.current || !canvasRef.current) return;

        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                videoRef.current.srcObject = stream;
            })
            .catch((error) => {
                console.error('Error accessing user media:', error);
            });

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                videoRef.current.srcObject.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    const captureImage = () => {
        if (!videoRef.current || !canvasRef.current) return;

        const context = canvasRef.current.getContext('2d');
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

        const imageDataURL = canvasRef.current.toDataURL('image/png');
        setImage(imageDataURL);
        setShowSubmitButton(true); 
    };

    const handleSubmitImage = () => {
        if (!image) return;

        const base64Image = image.split(',')[1];
        navigate("/UserAudio", { state: { image: base64Image } });
    };

    return (
        <div className="Home">
            <Navbar />
            <div className="userimages">
                <h2>Take a Photo</h2>
                <div className="capturimagesection">
                    {!showSubmitButton && (
                        <div className="video-container">
                            <video ref={videoRef} autoPlay playsInline />
                            <canvas ref={canvasRef} style={{ display: 'none' }} />
                        </div>
                    )}
                    {image && (
                        <div className="image-preview-container">
                            <div className="image-preview-item">
                                <img src={image} alt="Captured Image" />
                            </div>
                        </div>
                    )}
                </div>
                {showSubmitButton && (
                    <div className=" submit-button-container">
                        <button onClick={handleSubmitImage}>Submit</button>
                    </div>
                )}
                {!showSubmitButton && (
                    <div className="captureimagebutton">
                        <button onClick={captureImage}>Capture Image</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserImages;
