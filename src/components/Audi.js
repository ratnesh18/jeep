import React,{useState,useEffect,useRef} from 'react'
import {useNavigate} from 'react-router-dom';
export default function Audi() {
    const navigate = useNavigate()
    const videoEl = useRef(null);
    let player=undefined

    useEffect(()=>{
        if(localStorage.getItem("allowLogin")){
        }else{
          navigate("/login")
        }
    },[])

    useEffect(() => {
            console.log("Mount or update")
            const script = document.createElement('script');

            script.src = 'https://player.live-video.net/1.0.0/amazon-ivs-player.min.js';
            script.async = true;

            document.body.appendChild(script);

            script.onload = () => {
                // eslint-disable-next-line no-undef
                if (IVSPlayer.isPlayerSupported) {
                    // eslint-disable-next-line no-undef
                 player = IVSPlayer.create();
                    player.attachHTMLVideoElement(document.getElementById('video-player'));
                    
                    player.load("https://a3de5a95d4c5.eu-west-1.playback.live-video.net/api/video/v1/eu-west-1.450774366310.channel.RWdjf1eW6JBk.m3u8");
                    player.play();
                }
            }

            return () => {
                document.body.removeChild(script);
            }

        },
        []
    )

    

  return (
    <div>
    <div className="landscape">
    <div id="audi">
      <div className="video-container" style={{height:'100vh'}}>
      <video
                id="video-player"
                ref={videoEl}
                playsInline
                autoPlay
                //poster={Preloadimg}
                controls
                style={{height:"100Vh",width:"100vw"}}
            />
      {/* <video id="amazon-ivs-videojs" className="video-js vjs-4-3 vjs-big-play-centered pt-0" controls autoplay playsinline style="height:100Vh;width:100vw;object-fit:cover;"></video> */}
  </div>
  </div>
  </div>
  </div>
  )
}
