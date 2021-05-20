import InputBox, {InputBoxProps} from "../atoms/InputBox"
import {Meta, Story} from "@storybook/react"


export default {
    title: 'DesignSystem/InputBox',
    component: InputBox,
} as Meta

const Template: Story<InputBoxProps> = (args) => <InputBox {...args} />

export const Primary = Template.bind({})
Primary.args = {
    value: 'InputBox',
}