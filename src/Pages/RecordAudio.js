import React, { useState, useRef,useCallback } from 'react';
import '../Css/RecordAudio.css';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { setAudio} from '../store/one_to_one/actions';

const VoiceRecorder = () => {
    const audio=useSelector(state=>state.one2one.audioBase64)
    const dispatch=useDispatch()

    const navigate = useNavigate();
    const [recording, setRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);
    const mediaRecorder = useRef(null);
    const chunks = useRef([]);

    const startRecording = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                mediaRecorder.current = new MediaRecorder(stream);
                mediaRecorder.current.ondataavailable = handleDataAvailable;
                mediaRecorder.current.start();
                setRecording(true);
            })
            .catch(error => console.error('Error accessing user media:', error));
    };

    const stopRecording = () => {
        if (mediaRecorder.current && mediaRecorder.current.state !== 'inactive') {
            mediaRecorder.current.stop();
            setRecording(false);
        }
    };

    const handleDataAvailable = (event) => {
        chunks.current.push(event.data);
    };

    const handleSubmit = async () => {
        if (audioBlob) {
            // Convert audio blob to base64
            const reader = new FileReader();
            reader.onload = () => {
                const base64Data = reader.result.split(',')[1];
                dispatch(setAudio(base64Data))
                // Navigate to SignUpPage with base64 audio data
                navigate('/SignUpPage');
            };
            reader.readAsDataURL(audioBlob);
        }
    };

    const handleStartClick = () => {
        startRecording();
    };

    const handleStopClick = () => {
        stopRecording();
    };

    const handleResetClick = () => {
        setAudioBlob(null);
        chunks.current = [];
    };

    const handleDoneClick = () => {
        stopRecording();
        if (chunks.current.length > 0) {
            const audioBlob = new Blob(chunks.current, { type: 'audio/wav' });
            setAudioBlob(audioBlob);
        }
    };

    const handleAudioPlay = () => {
        if (audioBlob) {
            const audioURL = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioURL);
            audio.play();
        }
    };

    // const handleSubmitImage = useCallback(()=>{
    //     if(audio.length>0){
    //         navigate('/SignUpPage')
    //     }
    // },[audio])

    return (
        <div className='Home'>
            <div className="recordAudioform">
                {recording ? (
                    <>
                        <div className='buttonfirstrow'>
                            <button className='button' onClick={handleStopClick}>Stop Recording</button>
                            <br />
                            <button className='button' onClick={handleDoneClick}>Done</button>
                            <br />
                        </div>
                    </>
                ) : (
                    <div className="secrowofrocording">
                        <button className='button' onClick={handleStartClick}>Start Recording</button>
                    </div>
                )}
                {audioBlob && (
                    <>
                        <div className="recoredaudio">
                            <audio controls>
                                <source src={URL.createObjectURL(audioBlob)} type="audio/wav" />
                            </audio>
                        </div>
                        <div className="lastrowofreecordaudiopage">
                            <button className='button' onClick={handleAudioPlay}>Play Recorded Audio</button>
                            <button className='button' onClick={handleResetClick}>Reset</button>
                            <button className='button' onClick={handleSubmit}>Submit Voice</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default VoiceRecorder;
