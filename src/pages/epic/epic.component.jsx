import React from "react";
import { useState, useEffect } from "react";
import EpicData from "../../components/epic/epic_data/epic_data.component";
import EpicImg from "../../components/epic/epic_img/epic_img.component";
import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";

import "./epic.css";

const Epic = () => {
  const nasa_api_key = process.env.REACT_APP_NASA_API_KEY;

  const [data, setData] = useState({});
  const [urls, setUrls] = useState([]);

  const fetchData = async () => {
    try {
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
    } catch (err) {
      console.log("Black holed : probably no wifi");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const override = css`
    display: block;
    margin: 0 auto;
    background-color: "#bdf5f5";
  `;

  return (
    <div className="epic">
      <h1>Earth Polychromatic Imaging Camera (EPIC)</h1>
      {urls.length > 0 ? (
        <div>
          <EpicImg urls={urls} date={data[0].date} caption={data[0].caption} />
          <EpicData data={data} />
        </div>
      ) : (
        <MoonLoader color={"#03d4d4"} css={override} height={4} width={300} />
      )}
    </div>
  );
};

export default Epic;
