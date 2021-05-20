import * as React from "react"
import styled, {ThemeProvider} from "styled-components"
import {
    border,
    BorderProps,
    color,
    ColorProps, flex,
    FlexProps,
    layout,
    LayoutProps, position,
    PositionProps,
    shadow,
    ShadowProps,
    space,
    SpaceProps
} from "styled-system"
import {theme} from "../theme/theme"
import {ReactNode} from "react"

export interface Props {
    /**
     * Children node
     */
    children?: ReactNode
    /**
     * Background color
     */
    backgroundColor?: string
    /**
     * color
     */
    color?: string
}


/**
 * Wrapper React Node Element
 */
const Container: React.FC<Props & LayoutProps & SpaceProps & ShadowProps & FlexProps & PositionProps & BorderProps> = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <StyledContainer {...props}>{props.children}</StyledContainer>
        </ThemeProvider>
    )
}

const StyledContainer = styled.div<ColorProps & LayoutProps & SpaceProps & ShadowProps & FlexProps & PositionProps & BorderProps>`
  ${layout}
  ${space}
  ${color}
  ${shadow}
  ${flex}
  ${position}
  ${border}
`

export default Container