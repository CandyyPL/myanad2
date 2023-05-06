import React, { useState, useRef } from 'react'
import { VideoWrapper } from '@/components/Video/Video.styles.jsx'
import sampleVideo from '@/assets/rain.mp4'
import playImg from '@/assets/play.png'
import pauseImg from '@/assets/pause.png'

const Video = () => {
  const vwidth = useState(innerWidth)

  const video = useRef(null)
  const videoOverlay = useRef(null)
  const videoControl = useRef(null)

  const [currentButtonImg, setCurrentButtonImg] = useState(playImg)
  const [videoVisible, setVideoVisible] = useState(false)

  const changeVideoState = () => {
    if (video.current.paused) {
      setCurrentButtonImg(pauseImg)
      video.current.play()

      videoControl.current.addEventListener('mouseenter', () => {
        if (!video.current.paused) {
          videoControl.current.classList.add('active')
          videoControl.current.classList.remove('invisible')
          videoOverlay.current.classList.add('dark')
        }
      })

      videoControl.current.addEventListener('mouseleave', () => {
        if (!video.current.paused) {
          videoControl.current.classList.remove('active')
          videoControl.current.classList.add('invisible')
          videoOverlay.current.classList.remove('dark')
        }
      })
    } else {
      setCurrentButtonImg(playImg)
      video.current.pause()
      videoOverlay.current.classList.add('dark')
      videoControl.current.classList.add('active')
      videoControl.current.classList.remove('invisible')
    }
  }

  return (
    <VideoWrapper>
      <div className="text">
        <span>How to gain positively unfair advantage over your competition?</span>
      </div>
      {vwidth[0] < 768 ? (
        <>
          {videoVisible ? (
            <div className="media-wrapper dark" ref={videoOverlay}>
              <video ref={video}>
                <source src={sampleVideo} />
              </video>
              <div className="control active" onClick={changeVideoState} ref={videoControl}>
                <img src={currentButtonImg} alt="playpause" />
              </div>
            </div>
          ) : (
            <div className="video-button">
              <button onClick={() => setVideoVisible(true)}>TAP TO WATCH</button>
            </div>
          )}
        </>
      ) : (
        <div className="media-wrapper dark" ref={videoOverlay}>
          <video ref={video}>
            <source src={sampleVideo} />
          </video>
          <div className="control active" onClick={changeVideoState} ref={videoControl}>
            <img src={currentButtonImg} alt="playpause" />
          </div>
        </div>
      )}
    </VideoWrapper>
  )
}

export default Video
