import React, { useEffect, useState } from "react";
import VideoPlayer from "../videoPlayer/videoPlayer.component";

import "./videoImageCard.css";

const VideoImageCard = ({
  description,
  location,
  nasa_id,
  photographer,
  title,
  href,
}) => {
  const [availableImgLink, setAvailableImgLink] = useState("");
  const [availableVideoLink, setAvailableVideoLink] = useState("");
  const [data, setData] = useState({});

  const fetchUrl = async () => {
    try {
      const response = await fetch(`${href}`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("fetch images&videos failed !");
    }
  };

  const checkIfImgVideo = () => {
    if (data.length > 1) {
      const sources = data.reduce((result, url) => {
        if (url.split(".").pop() === "jpg") {
          result.push(url);
        }
        return result;
      }, []);
      setAvailableImgLink(sources[0]);
      const videoSources = data.reduce((result, url) => {
        if (url.split(".").pop() === "mp4") {
          result.push(url);
        }
        return result;
      }, []);
      setAvailableVideoLink(videoSources[0]);
    }
  };

  useEffect(() => {
    fetchUrl();
    checkIfImgVideo();
  }, [href]);

  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      {availableVideoLink !== undefined ? (
        <div className="videoInformation">
          <div className="videoLocation">{location}</div>
          <div className="videoNasa_id">{"NASA ID: " + nasa_id}</div>
          <VideoPlayer url={availableVideoLink} />
          <div className="videoDescription">{description}</div>
        </div>
      ) : (
        <div className="card">
          <img src={availableImgLink} alt={title} className="img" />
          <div className="overlay">
            <div className="location">{location}</div>
            <div className="nasa_id">{"NASA ID: " + nasa_id}</div>
            <div className="imgDescription">{description}</div>
            <div className="photographer">{"By " + photographer}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoImageCard;
