import React, { useEffect, useState } from "react";
import Apod from "../../components/apod/apod.component";

import "./home.css";

const Home = () => {
  const nasa_api_key = process.env.REACT_APP_NASA_API_KEY;

  const [apod, setApod] = useState({});
  const [imgSrc, setImgSrc] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${nasa_api_key}`
      );
      const res = await data.json();
      setApod(res);
      setImgSrc(res.url);
    } catch (err) {
      console.log("Black holed : probably no wifi");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Apod apod={apod} imgSrc={imgSrc} />
    </div>
  );
};

export default Home;
