import React from "react";

import "./epic_data.css";

const EpicData = ({ data }) => {
  return (
    <div>
      {data.map((item, id) => {
        return (
          <div className="data" key={id}>
            <p className="index">{id + "."}</p>
            <div className="leftCol">
              {"centroid coordinates : \n\t" +
                item.centroid_coordinates.lat +
                "\n\t" +
                item.centroid_coordinates.lon +
                "\n\n attitude quarternions : \n\t q0 = " +
                item.attitude_quaternions.q0 +
                "\n\t q1 = " +
                item.attitude_quaternions.q1 +
                "\n\t q2 = " +
                item.attitude_quaternions.q2 +
                "\n\t q3 = " +
                item.attitude_quaternions.q3}
            </div>
            <div className="midCol">
              {"dscovr j2000 position : " +
                "\n\t x = " +
                item.dscovr_j2000_position.x +
                "\n\t y = " +
                item.dscovr_j2000_position.y +
                "\n\t z = " +
                item.dscovr_j2000_position.z +
                "\n\n lunar j2000 position : " +
                "\n\t x = " +
                item.lunar_j2000_position.x +
                "\n\t y = " +
                item.lunar_j2000_position.y +
                "\n\t z = " +
                item.lunar_j2000_position.z}
            </div>
            <div className="rightCol">
              {"sun j2000 position : " +
                "\n\t x = " +
                item.sun_j2000_position.x +
                "\n\t y = " +
                item.sun_j2000_position.y +
                "\n\t z = " +
                item.sun_j2000_position.z}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EpicData;
