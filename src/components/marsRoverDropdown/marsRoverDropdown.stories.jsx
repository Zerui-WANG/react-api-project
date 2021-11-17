import React from 'react';
import MarsRoverDropdown from './marsRoverDropdown.component';

export default {
  title: 'MarsRoverDropdown',
  component: MarsRoverDropdown,
};

const Template = (args) => <MarsRoverDropdown {...args} />;

export const ColorChanges = Template.bind({});
ColorChanges.args = {
  text: 'MarsRoverDropdown',
  isDark: true,
};

export const WordingChanges = Template.bind({});
WordingChanges.args = {
  text: 'Camera',
};
