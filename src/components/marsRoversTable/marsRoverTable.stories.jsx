import React from "react";
import MarsRoverTable from "./marsRoverTable.component";

export default {
  title: "MarsRoverTable",
  component: MarsRoverTable,
};

const Template = (args) => <MarsRoverTable {...args} />;

export const Bordered = Template.bind({});
Bordered.args = {
  border: "1px solid #000000",
};
