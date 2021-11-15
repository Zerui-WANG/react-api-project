import React from "react";

import "./videoImageCard.css";

const VideoImageCard = ({
  description,
  location,
  nasa_id,
  photographer,
  title,
  href,
}) => {
  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <div className="nasa_id">{nasa_id}</div>
      <a href={href}>{href}</a>
      <div className="location">{location}</div>
      <div className="description">{description}</div>
      <div className="photographer">{"By " + photographer}</div>
    </div>
  );
};

export default VideoImageCard;
