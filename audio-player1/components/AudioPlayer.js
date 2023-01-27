import React, { useState, useRef, useEffect } from 'react'
import styles from "../styles/AudioPlayer.module.css";
import { CgArrowLongRightR } from "react-icons/cg"
import { CgArrowLongLeftR } from "react-icons/cg"
import { BsPlayCircle } from "react-icons/bs"
import { BsPauseCircle } from "react-icons/bs"
import { BiVolumeFull, BiVolumeLow, BiVolume, BiVolumeMute } from "react-icons/bi";


const AudioPlayer = () => {
    //state
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [volumeLevel, setVolumeLevel] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [prevVolume, updatePrevVol] = useState(0.1);

    //refrences
    const audioPlayer = useRef(); //reference audio component
    const progressBar = useRef(); //reference progress bar
    const animationRef = useRef();
    const volumeRef = useRef();

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds); // 45.26
        progressBar.current.max = seconds;

    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${returnedMinutes} : ${returnedSeconds}`;
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying); //fix this
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }

    const toggleMute = () => {
        const prevValue = isMuted;
        updatePrevVol(audioPlayer.current.volume);
        setIsMuted(!prevValue);
        if (!prevValue) {
            audioPlayer.current.volume = prevVolume;
            setVolumeLevel(audioPlayer.current.volume);
        } else {
            audioPlayer.current.volume = 0;
            setVolumeLevel(0);
        }
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying); //potential memory leak
    }



    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`);
        setCurrentTime(progressBar.current.value);
    }

    const changeVolumeLevel = () => {
        console.log(audioPlayer.current.volume);
        console.log(volumeRef.current.value);
        audioPlayer.current.volume = (volumeRef.current.value / 1000);
    }

    return (
        <div className={styles.container_container}>
        <div className={styles.audioPlayer}>
            {/* https://incompetech.com/music/royalty-free/mp3-royaltyfree/Look Busy.mp3 */}
            {/* https://localhost:3000/C418 - Minecraft - Volume Alpha - 19 Cat.mp3 */}
            {/* http://localhost:3000/testSong.mp3 */}
            <audio ref={audioPlayer} src="http://localhost:3000/MindSpring MemoriesNeedlejusticeSantosha.mp3" preload="metadata"></audio>

            <div className={styles.musicInfo}>
                <div className={styles.albumArt}>
                    
                </div>
                <div className={styles.songName}>
                    <h2> Boom, Boom, Boom, Boom !!</h2>
                    <p>Vengaboys</p>
                </div>
                
            </div>

            <div className={styles.mediaScrubber}>
                <div className={styles.grid_container}>
                    <div className={styles.mediaTime}> {calculateTime(currentTime)} </div>
                    <div className={styles.grid_item}>
                        <div className={styles.mediaControls}>
                            <button className={styles.forwardBackward}><CgArrowLongLeftR /></button>
                            <button onClick={togglePlayPause}
                                className={styles.playPause}>
                                {isPlaying ? <BsPauseCircle /> : <BsPlayCircle />}
                            </button>
                            <button className={styles.forwardBackward}><CgArrowLongRightR /></button>
                        </div>

                    </div>
                    <div className={styles.mediaTime}>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
                    <div className={styles.grid_item2}>
                        <div>
                            <input type="range" ref={progressBar} className={styles.progressBar} defaultValue="0" onChange={changeRange} />
                        </div>
                    </div>
                </div>



            </div>

            <div className={styles.musicInfo}>
                <div className={styles.mute_N_vol}>
                    <div>
                        <button onClick={toggleMute}>
                            {isMuted ? <BiVolumeFull /> : <BiVolumeMute />}
                        </button>
                    </div>
                    <div>
                        <input type="range" ref={volumeRef} defaultValue="50" onChange={changeVolumeLevel}></input>
                    </div>
                </div>
                <div className={styles.addit_btns}>

                </div>
                
            </div>



        </div>
            
        </div>
        









    )
}

export { AudioPlayer }