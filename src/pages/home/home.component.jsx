import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./home.css";

const Home = () => {
  const nasa_api_key = process.env.REACT_APP_NASA_API_KEY;

  const [imgSrc, setImgSrc] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${nasa_api_key}`
    );
    const res = await data.json();
    console.log(res);
    setImgSrc((img) => (img = res.url));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${imgSrc})`,
        height: "1024px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <Link to="/epic">EPIC</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Home;
