import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import MarsRoverTable from "../marsRoversTable/marsRoverTable.component";
import MarsRoverDropdown from "../marsRoverDropdown/marsRoverDropdown.component"
import "./marsRover_comp.css";

const MarsRoverComp = () => {
  const nasa_api_key = process.env.REACT_APP_NASA_API_KEY;
  
  //set the value for the choice of the camera
  const [valueCamera,setValueCamera]=useState('');
  const handleSelectOnCamera=(e)=>{
    setValueCamera(e)
  }
  const [imgSrc, setImgSrc] = useState("");
  const [textRover, setText] = useState("");
  const [dataNotNull, setData] = useState("");

  let image;

  const fetchData = async () => {
    if(valueCamera !== ''){ 
      const api_query = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${valueCamera}&api_key=${nasa_api_key}`;
      const metadata = await fetch(api_query);
      const json = await metadata.json();
      if (json.photos.length !== 0){
        setData(true);
        const imgURL = json.photos[0].img_src;
        const rover = json.photos[0].rover;
        setImgSrc((img) => (img = imgURL));
        setText((text) => (text = rover)); 
      }
      else{
        setData(false); 
      }
      
    }    
    else{
      image = "undefined";
    }
  };

  useEffect(() => {
    fetchData();
  },[valueCamera]);

  return (
    <div className="marsRover">
      <div className="img-rover">
        <p>Here is the lastest picture provided by your selected camera : </p>
        <MarsRoverDropdown handleSelectOnCamera={handleSelectOnCamera} text={valueCamera}/>
        <br/>
        {valueCamera.length > 0 &&
          dataNotNull ? (
            <div>
            <img id = "cam_img" src={imgSrc} alt="Mars Rover" height="512" width="512" />
            <MarsRoverTable textRover={textRover}/>
            </div>
          ) : (
            <div></div>
          )}
          {valueCamera.length ===0 ? <p>Please select a camera.</p> : <div></div>}
          {valueCamera.length > 0 && dataNotNull !== true? <p>Sorry, the chosen camera {valueCamera} doesn't have data </p> : <div></div>}
      </div>
    </div>
      
  );
};

export default MarsRoverComp;
