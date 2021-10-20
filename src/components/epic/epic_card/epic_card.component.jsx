import React from "react";
import { useState, useEffect } from "react";

import { Carousel } from "react-responsive-carousel";

import "./epic_card.css";

const EpicCard = () => {
  const nasa_api_key = process.env.REACT_APP_NASA_API_KEY;

  const [urls, setUrls] = useState("");

  const fetchData = async () => {
    const metadata = await fetch(
      `https://api.nasa.gov/EPIC/api/natural/images?api_key=${nasa_api_key}`
    );
    const jsonData = await metadata.json();

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
            url: `https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/png/${img}.png?api_key=${nasa_api_key}`,
          };
        }))
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="img">
      <Carousel autoPlay>
        {urls !== "" &&
          urls.map(({ id, url }) => (
            <div>
              <img
                key={id}
                src={url}
                alt={`EPIC${id}`}
                height="512"
                width="512"
              />
              <p>Legend {id}</p>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default EpicCard;
