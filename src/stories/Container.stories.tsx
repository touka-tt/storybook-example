import Container, {Props} from "../atoms/Container"
import {Meta, Story} from "@storybook/react"
import {BorderProps, ColorProps, FlexProps, LayoutProps, PositionProps, ShadowProps, SpaceProps} from "styled-system"

export default {
    title: "DesignSystem/Container",
    component: Container
} as Meta

const Template: Story<Props & LayoutProps & SpaceProps & ShadowProps & FlexProps & PositionProps & BorderProps> = (args) => <Container {...args}>{args.children}</Container>

export const container = Template.bind({})
container.args = {
    width: 200,
    height: 200,
    padding: 20,
    margin: 20,
}