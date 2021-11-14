import React from "react";

import "./epic_data.css";

const EpicData = ({ data }) => {
  return (
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
                "\n\n attitude quarternions : \n\t q0 = " +
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
                "\n\n lunar j2000 position : " +
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
  );
};

export default EpicData;
