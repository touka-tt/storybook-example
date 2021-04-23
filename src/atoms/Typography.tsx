import React, {ReactNode} from 'react'
import styled from "styled-components";
import {layout, LayoutProps, typography, TypographyProps} from "styled-system";

export interface Props {
    /**
     * component
     */
    component?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    /**
     * children
     */
    children?: ReactNode
    /**
     * align
     */
    align?: "inherit" | "left" | "center" | "right" | "justify"
    /**
     * display
     */
    display?: "initial" | "inherit" | "block" | "inline-block"
}

const Typography: React.FC<Props> = (props) => {
    return (
        <StyledTypography as={props.component} display={props.display} textAlign={props.align}>{props.children}</StyledTypography>
    )
}

Typography.defaultProps = {
    component: "p",
    align: "inherit",
    display: "initial",
}

const StyledTypography = styled.p<LayoutProps & TypographyProps>`
  ${typography}
  ${layout}
`

export default Typography