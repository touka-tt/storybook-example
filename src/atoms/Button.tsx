import React, {ReactNode} from 'react'
import styled, {ThemeProvider} from "styled-components"
import { variant } from "styled-system"
import {theme} from "../theme/theme";

export interface ButtonProps {
    /**
     * Start Icon
     */
    startIcon?: ReactNode
    /**
     * End Icon
     */
    endIcon?: ReactNode
    /**
     * children
     */
    children?: ReactNode
    /**
    * Optional click handler
    */
    onClick?: () => void
    /**
     * Optional disabled setting
     */
    disabled?: boolean
    /**
     * variant
     */
    variant: string
}

/**
 * hogehoge
 */
const Button: React.FC<ButtonProps> = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <StyledButton variant={props.variant} onClick={props.onClick} disabled={props.disabled}>{props.startIcon}{props.children}{props.endIcon}</StyledButton>
        </ThemeProvider>
    )
}

Button.defaultProps = {
    disabled: false,
    variant: "primary"
}

const variants = {
    primary: {
        svg: {
           fill: "#ffffff",
        },
        color: '#ffffff',
        backgroundColor: '#1D3461',
        border: 'none',
    },
    disabled: {
        color: '#ffffff',
        backgroundColor: '#a9a9a9',
        border: 'none',
    },
    success: {
        color: '#ffffff',
        backgroundColor: '#5AB203',
        border: 'none',
    },
    warning: {
        color: '#ffffff',
        backgroundColor: '#F98120',
        border: 'none',
    }
};

interface Props {
    variant: string
}

export const StyledButton = styled.button<Props>`
  border-radius: 19px;
  font-size: 14px;
  height: 38px;
  line-height: 22px;
  letter-spacing: 0;
  cursor: pointer;
  text-align: center;
  border: none;
  background-color: red;
  &:focus {
    outline: none;
  }
  ${variant({ variants })}
`;

export default Button