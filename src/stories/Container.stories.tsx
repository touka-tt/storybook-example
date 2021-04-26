import Container, {Props} from "../atoms/Container"
import {Meta, Story} from "@storybook/react"

export default {
    title: "DesignSystem/Container",
    component: Container
} as Meta

const Template: Story<Props> = (args) => <Container {...args}>{args.children}</Container>

export const container = Template.bind({})
container.args = {
    width: 25,
    height: 25
}