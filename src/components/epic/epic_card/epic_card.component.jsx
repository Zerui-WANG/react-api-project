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
            alt: `EPIC`,
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
          <div className="date">{"[" + data[0].date + "]"}</div>
          <div className="caption">{data[0].caption}</div>
          <Carousel
            images={urls}
            isRLT={true}
            hasMediaButton={false}
            hasIndexBoard={false}
          />
          <div>
            {data.map((data, id) => {
              return (
                <div className="data" key={id}>
                  <p className="index">{id + "."}</p>
                  <div className="leftCol">
                    {"centroid coordinates : \n\t" +
                      data.centroid_coordinates.lat +
                      "\n\t" +
                      data.centroid_coordinates.lon +
                      "\n attitude quarternions : \n\t q0 = " +
                      data.attitude_quaternions.q0 +
                      "\n\t q1 = " +
                      data.attitude_quaternions.q1 +
                      "\n\t q2 = " +
                      data.attitude_quaternions.q2 +
                      "\n\t q3 = " +
                      data.attitude_quaternions.q3}
                  </div>
                  <div className="midCol">
                    {"dscovr j2000 position : " +
                      "\n\t x = " +
                      data.dscovr_j2000_position.x +
                      "\n\t y = " +
                      data.dscovr_j2000_position.y +
                      "\n\t z = " +
                      data.dscovr_j2000_position.z +
                      "\n lunar j2000 position : " +
                      "\n\t x = " +
                      data.lunar_j2000_position.x +
                      "\n\t y = " +
                      data.lunar_j2000_position.y +
                      "\n\t z = " +
                      data.lunar_j2000_position.z}
                  </div>
                  <div className="rightCol">
                    {"sun j2000 position : " +
                      "\n\t x = " +
                      data.sun_j2000_position.x +
                      "\n\t y = " +
                      data.sun_j2000_position.y +
                      "\n\t z = " +
                      data.sun_j2000_position.z}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default EpicCard;
