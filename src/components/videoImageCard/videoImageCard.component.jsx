import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUrl = await fetchUrl();
      const sources = await checkIfImg(fetchedUrl);
      setAvailableImgLink(sources);
    };
    fetchData();
  }, [href]);

  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      <div className="card">
        <img src={availableImgLink} alt={title} className="img" />
        <div className="overlay">
          <div className="location">{location}</div>
          <div className="nasa_id">{"NASA ID: " + nasa_id}</div>
          <div className="imgDescription">{description}</div>
          <div className="photographer">{"By " + photographer}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoImageCard;
