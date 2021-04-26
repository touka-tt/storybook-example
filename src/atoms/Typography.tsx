import React, {ReactNode} from 'react'
import styled from "styled-components";
import {layout, LayoutProps, typography, TypographyProps, variant} from "styled-system";

export interface Props {
    /**
     * component
     */
    component?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    /**
     * variant
     */
    variant?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
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
        <StyledTypography as={props.component}
                          display={props.display}
                          textAlign={props.align}
                          variant={props.variant}>{props.children}</StyledTypography>
    )
}

const variants = {
    h1: {
        fontSize: "48px",
        lineHeight: 1,
    },
    h2: {
        fontSize: "36px",
        lineHeight: 1.333,
    },
    h3: {
        fontSize: "24px",
        lineHeight: 1,
    },
    h4: {
        fontSize: "16px",
        lineHeight: 1,
    },
    h5: {
        fontSize: "16px",
        lineHeight: 1,
    },
    h6: {
        fontSize: "16px",
        lineHeight: 1,
    },
    p: {
        fontSize: "16px",
        lineHeight: 1,
    }
}

interface StyledTypographyProps {
    variant?: string,
}

Typography.defaultProps = {
    component: "p",
    align: "inherit",
    display: "initial",
}

const StyledTypography = styled.p<LayoutProps & TypographyProps & StyledTypographyProps>`
  ${typography}
  ${layout}
  ${variant({variants})}
`

export default Typography