import React from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";


const MarsRover = () => {
  const nasa_api_key = process.env.REACT_APP_NASA_API_KEY;

  //set the value for the choice of the camera
  const [valueCamera,setValueCamera]=useState('');
  const handleSelectOnCamera=(e)=>{
    console.log(e);
    setValueCamera(e)
  }

  const [imgSrc, setImgSrc] = useState("");
  const [textRover, setText] = useState("");

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
      <div className="title">
        <h1>Mars Rover</h1>
      </div>

      <DropdownButton id="dropdown-item-button" title="Camera" onSelect={handleSelectOnCamera}>
        <Dropdown.Item as="button" eventKey="FHAZ">FHAZ</Dropdown.Item>
        <Dropdown.Item as="button" eventKey="RHAZ">RHAZ</Dropdown.Item>
        <Dropdown.Item as="button"eventKey="MAST">MAST</Dropdown.Item>
        <Dropdown.Item as="button" eventKey="CHEMCAM">CHEMCAM</Dropdown.Item>
        <Dropdown.Item as="button" eventKey="MAHLI">MAHLI</Dropdown.Item>
        <Dropdown.Item as="button" eventKey="MARDI">MARDI</Dropdown.Item>
        <Dropdown.Item as="button" eventKey="NAVCAM">NAVCAM</Dropdown.Item>
        <Dropdown.Item as="button" eventKey="PANCAM">PANCAM</Dropdown.Item>
        <Dropdown.Item as="button" eventKey="MINITES">MINITES</Dropdown.Item>
      </DropdownButton>

      <div className="img-rover">
        <p>Here is the lastest picture provided by your selected camera : {valueCamera} </p>
        <img src={imgSrc} alt="Mars Rover" height="512" width="512" />
      </div>

      <Table responsive>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Landing Date</th>
            <th>Launch Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Description</td>
            <td>{textRover.id}</td>
            <td>{textRover.name}</td>
            <td>{textRover.landing_date}</td>
            <td>{textRover.launch_date}</td>
            <td>{textRover.status}</td>

          </tr>
        </tbody>
      </Table>     
    </div>
  );
};


export default MarsRover;
