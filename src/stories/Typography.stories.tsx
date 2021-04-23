import React from 'react'
import Typography, {Props} from "../atoms/Typography";
import {Meta, Story} from "@storybook/react";

export default {
    title: "DesignSystem/Typography",
    component: Typography,
} as Meta

const Template: Story<Props> = (args) => <Typography {...args}>{args.children}</Typography>

export const h1 = Template.bind({})
h1.args = {
    component: "h1",
    children: "H1 Level typography"
}

export const h2 = Template.bind({})
h2.args = {
    component: "h2",
    children: "H2 Level typography"
}

export const h3 = Template.bind({})
h3.args = {
    component: "h3",
    children: "H3 Level typography"
}

export const h4 = Template.bind({})
h4.args = {
    component: "h4",
    children: "H4 Level typography"
}

export const h5 = Template.bind({})
h5.args = {
    component: "h5",
    children: "H5 Level typography"
}

export const h6 = Template.bind({})
h6.args = {
    component: "h6",
    children: "H6 Level typography"
}

export const p = Template.bind({})
p.args = {
    component: "p",
    children: "paragraph"
}