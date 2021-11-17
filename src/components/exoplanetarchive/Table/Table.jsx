import React from 'react';

const Table = ({ columns , data }) => {
  
  return (
  <>
    <table>
        <thead>
        <tr>
            {columns.map((item,id)=>{
                return <th key = {id}>{item}</th>
            })}
        </tr>
         
        </thead>
        <tbody>
            {data.map((item,id)=>{
                return (
                <tr key={id}>
                    {item.map((elem,id)=>{
                       return <td key={id}>{elem}</td>
                    })}    
                </tr>
                )
            })}
        </tbody>
    </table>
  </> 
  )
}
export default Table;