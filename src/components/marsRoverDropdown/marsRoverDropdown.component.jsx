import React from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import './marsRoverDropdown.css';

const MarsRoverDropdown = ({
  handleSelectOnCamera,
  text, 
  loading = false, 
  disabled = false,
  isDark,
}) => {

    return (
    <DropdownButton id={`dropdown-item-button-${isDark}`} title={text} onSelect={handleSelectOnCamera} disabled={loading || disabled}>
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
    );
}

export default MarsRoverDropdown;