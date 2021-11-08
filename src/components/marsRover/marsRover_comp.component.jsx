import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import MarsRoverDropdown from "./marsRoverDropdown.component";
import MarsRoverTable from "./marsRoverTable.component";


const MarsRoverComp = () => {
  const nasa_api_key = process.env.REACT_APP_NASA_API_KEY;

  //set the value for the choice of the camera
  const [valueCamera,setValueCamera]=useState('');
  const handleSelectOnCamera=(e)=>{
    console.log(e);
    setValueCamera(e)
  }

  const [imgSrc, setImgSrc] = useState("");
  const [textRover, setText] = useState("");

  let image = true;

  const fetchData = async () => {
    console.log("test")
    if(valueCamera !== ''){
      const api_query = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${valueCamera}&api_key=${nasa_api_key}`;
      console.log(api_query);
      const metadata = await fetch(api_query);
      const json = await metadata.json();
      console.log(json);
      if (json.photos.length !== 0){
        const imgURL = json.photos[0].img_src;
        const rover = json.photos[0].rover;
        console.log(rover);
        setImgSrc((img) => (img = imgURL));
        //rover est un array. Affichage penser à parcourir le tableau avec un map
        setText((text) => (text = rover)); 
      }
      else{
        console.log("La caméra n'a pas de données")
        image = false; 
        console.log({image});
      }
      
    }    
    else{
      console.log("no data")
    }
  };

  useEffect(() => {
    fetchData();
  },[valueCamera]);

  return (
    <div className="marsRover">
      <MarsRoverDropdown handleSelectOnCamera = {handleSelectOnCamera}/>

      <div className="img-rover">
        <p>Here is the lastest picture provided by your selected camera : {valueCamera} </p>
        {image ? (
          <img src={imgSrc} alt="Mars Rover" height="512" width="512" />
        ) : (
          <div>
            <p>Sorry, the chosen camera {valueCamera} doesn't have data </p>
          </div>
        )}
      </div>

      <MarsRoverTable textRover={textRover}/>
      
    </div>
      
  );
};


export default MarsRoverComp;
