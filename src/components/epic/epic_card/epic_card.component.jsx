import React from "react";
import { useState, useEffect } from "react";

import Carousel from "react-gallery-carousel";

import "./epic_card.css";

import "react-gallery-carousel/dist/index.css";

const EpicCard = () => {
  const nasa_api_key = process.env.REACT_APP_NASA_API_KEY;

  const [data, setData] = useState({});
  const [urls, setUrls] = useState([]);

  const fetchData = async () => {
    const metadata = await fetch(
      `https://api.nasa.gov/EPIC/api/natural/images?api_key=${nasa_api_key}`
    );
    const jsonData = await metadata.json();

    setData((data) => (data = jsonData));

    const date = jsonData[0].date;
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);

    const imgs = jsonData.map(({ image }, index) => {
      return { id: index, img: image };
    });

    setUrls(
      (urls) =>
        (urls = imgs.map(({ id, img }) => {
          return {
            id: id,
            src: `https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/png/${img}.png?api_key=${nasa_api_key}`,
          };
        }))
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="carouselContainer">
      {urls.length > 0 && (
        <div>
          <Carousel images={urls} isRLT={true} />
          {console.log(data[0])}
          <div className="data">
            <div>{data[0].caption}</div>
            <div>
              {"centroid coordinates : " +
                data[0].centroid_coordinates.lat +
                ", " +
                data[0].centroid_coordinates.lon}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EpicCard;
