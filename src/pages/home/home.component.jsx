import React, { useEffect, useState } from "react";

import "./home.css";

const Home = () => {
  const nasa_api_key = process.env.REACT_APP_NASA_API_KEY;

  const [apod, setApod] = useState({});
  const [imgSrc, setImgSrc] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${nasa_api_key}`
    );
    const res = await data.json();
    setApod((apod) => (apod = res));
    setImgSrc((img) => (img = res.url));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Astronomy Picture of the Day</h1>
      <div className="description">
        <h2>{apod.title + " (" + apod.date + ")"}</h2>
        <p>{apod.explanation}</p>
        <p>{"©Copyright " + apod.copyright}</p>
      </div>
      <div className="apod">
        <img src={imgSrc} alt="APOD" />
      </div>
    </div>
  );
};

export default Home;
