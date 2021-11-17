import React from "react";
import { Table } from "react-bootstrap";

const MarsRoverTable = ({
  textRover={id:1,name:"storybook",landiing_score:1,launch_date:"00-00-0000",status:"A"}, 
  border}) => {

    return (
        <Table responsive style={{border:border}}>
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
    );

}

export default MarsRoverTable;