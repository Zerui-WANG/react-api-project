import React from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import ReactPlayer from "react-player";

import "./videoPlayer.css";

const VideoPlayer = ({ url }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={`${url}`}
        width="100%"
        height="100%"
        light={true}
        controls={true}
        playIcon={<MdOutlineSlowMotionVideo className="playIcon" />}
      />
    </div>
  );
};

export default VideoPlayer;
