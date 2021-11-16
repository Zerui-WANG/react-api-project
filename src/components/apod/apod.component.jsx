import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";

import "./apod.css";

const Apod = ({ apod, imgSrc }) => {
  const override = css`
    display: block;
    margin: 0 auto;
    background-color: "#bdf5f5";
  `;

  return (
    <div className="apodContainer">
      <h1>Astronomy Picture of the Day</h1>
      {imgSrc.length > 1 ? (
        <div>
          <div className="description">
            <h2>{apod.title + " (" + apod.date + ")"}</h2>
            <p>{apod.explanation}</p>
            <p>{"©Copyright " + apod.copyright}</p>
          </div>
          <div className="apod">
            <img src={imgSrc} alt="APOD" />
          </div>
        </div>
      ) : (
        <MoonLoader color={"#03d4d4"} css={override} height={4} width={300} />
      )}
    </div>
  );
};

export default Apod;
