import React from "react"
import ReactPlayer from "react-player/youtube"
import "./video.css"
const Video = () => {
  return (
    <div className="wrapper">
      <div className="texter">
        <h1 className="ttexter">
          Watch Crypto Course by <span className="titler"> - SimpleLearn</span>{" "}
        </h1>
      </div>
      <div className="player-wrapper">
        <ReactPlayer
          url="https://youtu.be/dgjZ2fHg4y4"
          width="100%"
          height="100%"
          className="react-player"
        />
      </div>
    </div>
  )
}

export default Video
