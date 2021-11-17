import React from 'react';

const CheckBox = ({ type = 'checkbox', name , value, checked = false, onChange }) => {

  return (
  <input 
    type={type} 
    name={name} 
    value={value}
    checked={checked} 
    onChange={onChange} 
  /> 
  )
}
export default CheckBox;