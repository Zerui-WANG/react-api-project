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

  const fetchUrl = async () => {
    try {
      const response = await fetch(`${href}`);
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.log("fetch images&videos failed !");
    }
  };

  const checkIfImg = (fetchedUrl) => {
    if (fetchedUrl.length > 1) {
      const sources = fetchedUrl.reduce((result, url) => {
        if (url.split(".").pop() === "jpg") {
          result.push(url);
        }
        return result;
      }, []);
      return sources[0];
    }
  };

  const checkIfVideo = (fetchedUrl) => {
    if (fetchedUrl.length > 1) {
      const videoSources = fetchedUrl.reduce((result, url) => {
        if (url.split(".").pop() === "mp4") {
          result.push(url);
        }
        return result;
      }, []);
      return videoSources[0];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUrl = await fetchUrl();
      const sources = await checkIfImg(fetchedUrl);
      const videoSources = await checkIfVideo(fetchedUrl);
      setAvailableImgLink(sources);
      setAvailableVideoLink(videoSources);
      console.log(availableVideoLink);
    };
    fetchData();
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
