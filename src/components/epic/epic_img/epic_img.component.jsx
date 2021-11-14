import React from "react";

import Carousel from "react-gallery-carousel";

import "./epic_img.css";

import "react-gallery-carousel/dist/index.css";

const EpicImg = ({ urls, date, caption }) => {
  return (
    <div className="carouselContainer">
      {urls.length > 0 && (
        <div>
          <div className="date">{"[" + date + "]"}</div>
          <div className="caption">{caption}</div>
          <Carousel
            images={urls}
            isRLT={true}
            hasMediaButton={false}
            hasIndexBoard={false}
            style={{ height: 650 }}
          />
        </div>
      )}
    </div>
  );
};

export default EpicImg;
