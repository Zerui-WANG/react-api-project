import React from "react";
import { useState, useEffect } from "react";

import "./epic.css";

const Epic = () => {
  const nasa_api_key = process.env.REACT_APP_NASA_API_KEY;

  const [imgSrc, setImgSrc] = useState("");

  const fetchData = async () => {
    const metadata = await fetch(
      `https://api.nasa.gov/EPIC/api/natural/images?api_key=${nasa_api_key}`
    );
    const json = await metadata.json();
    const img = json[0].image;
    const date = json[0].date;
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);
    console.log(json);
    console.log(date);
    console.log(year + month + day);
    setImgSrc(
      (imgSrc) =>
        (imgSrc = `https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/png/${img}.png?api_key=${nasa_api_key}`)
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="epic">
      <div className="title">
        <h1>Earth Polychromatic Imaging Camera (EPIC)</h1>
      </div>
      <div className="img">
        <img src={imgSrc} alt="astronomy of the day" height="512" width="512" />
      </div>
    </div>
  );
};

export default Epic;
