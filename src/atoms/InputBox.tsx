import React from "react";
import styled from "styled-components"
import {layout, LayoutProps} from "styled-system";


export interface InputBoxProps {
    value: string
    onChange?: () => void
    disabled?: boolean
    width?: number
    maxWidth?: number
    height?: number
    size?: number
    error?: boolean
}


const InputBox: React.FC<InputBoxProps> = (props) => {
    return (
        <StyledInputBox width={props.width} maxWidth={props.maxWidth} height={props.height} value={props.value}
                        disabled={props.disabled} size={props.size} error={props.error}
        />
    )
}

InputBox.defaultProps = {
    value: "InputBox",
    width: 100,
    maxWidth: 200,
    height: 20,
}

interface StyledInputBoxProps {
    error?: boolean
}

const StyledInputBox = styled.input<LayoutProps & StyledInputBoxProps>`
  border: 1px solid ${props => props.error ? "red" : "black"};
  ${layout}
`

export default InputBox