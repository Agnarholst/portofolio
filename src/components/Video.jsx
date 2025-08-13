import "./Video.css";
import playButton from "../assets/play-button.svg";
import video from "../assets/abstractvideo.mp4";

function Video() {
  return (
    <div className="container">
      <div>
        <video id="video" src={video} controls></video>
        <img id="playButton" src={playButton} alt="playbutton" />
      </div>
      <div className="videoTitle">
        <h1>5 Prosjekter</h1>
        <h1>på 5 minutter</h1>
      </div>
    </div>
  );
}

export default Video;
