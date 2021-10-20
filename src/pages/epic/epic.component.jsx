import React from "react";

import EpicCard from "../../components/epic/epic_card/epic_card.component";

import "./epic.css";

const Epic = () => {
  return (
    <div className="epic">
      <div className="title">
        <h1>Earth Polychromatic Imaging Camera (EPIC)</h1>
      </div>
      <EpicCard />
    </div>
  );
};

export default Epic;
