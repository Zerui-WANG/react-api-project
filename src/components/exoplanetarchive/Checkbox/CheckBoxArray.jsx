import React from 'react';
import CheckBox from './CheckBox';

const CheckBoxArray = ({name,checkBoxes,checkedItems,onChange}) => {

  return (
  <>
    <label>TABLE : {name}</label>
    <br/><br/>
    {checkBoxes.map((item,id)=>{
      return (
        <div key ={id}> 
          <label>{item.key}</label>
          <CheckBox  name={item.name} value={item.value} checked={checkedItems[item.value]} onChange={onChange} />
        </div>)
    })}
    
  </> 
  )
}
export default CheckBoxArray;