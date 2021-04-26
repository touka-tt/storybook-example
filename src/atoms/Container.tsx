import * as React from "react"
import styled, {ThemeProvider} from "styled-components"
import {color, ColorProps, layout, LayoutProps, space, SpaceProps, variant} from "styled-system"
import {theme} from "../theme/theme"
import {ReactNode} from "react"

export interface Props {
    /**
     * Applying theme color
     */
    variant?: "primary" | "secondary"
    /**
     * Container width pixel
     */
    width?: number
    /**
     * Container height pixel
     */
    height?: number
    /**
     * Background Color
     */
    backgroundColor?: "red" | "blue" | "cyan" | "#010101"
    /**
     * Children node
     */
    children?: ReactNode
    /**
     * Padding size pixel
     */
    padding?: number
    /**
     * Padding bottom size pixel
     */
    paddingBottom?: number
}


/**
 * Wrapper React Node Element
 */
const Container: React.FC<Props> = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <StyledContainer p={props.padding} pb={props.paddingBottom} bg={props.backgroundColor} width={props.width}
                             height={props.height} variant={props.variant}>{props.children}</StyledContainer>
        </ThemeProvider>
    )
}

Container.defaultProps = {
    width: 20,
    height: 20,
}

interface ContainerProps {
    variant?: "primary" | "secondary"
}

const StyledContainer = styled.div<LayoutProps & ColorProps & SpaceProps & ContainerProps>`
  background-color: ${props => props.theme.colors.container.default.backgroundColor};
  ${props => variant({ variants: {
      primary: {
          backgroundColor: props.theme.colors.container.primary.backgroundColor
      },
      secondary: {
          backgroundColor: props.theme.colors.container.secondary.backgroundColor
      }
    }})}
  ${layout}
  ${color}
  ${space}
`

export default Container