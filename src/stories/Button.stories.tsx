import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, {ButtonProps} from "../atoms/Button";
import {PenIcon} from "../img/PenIcon"

export default {
  title: 'DesignSystem/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};

export const ButtonWithIcon = Template.bind({})
ButtonWithIcon.args = {
  children: "Edit",
  startIcon: <PenIcon/>
}
