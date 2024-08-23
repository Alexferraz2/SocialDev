import { Children } from "react/cjs/react.production.min";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${props => props.theme.primary};
    padding: 15px 20px;
    border-radius: 10px;
    border: 0;
    font-weight: bold;
    color: ${props => props.theme.white};
    font-size: 16px;
    transition: 0.3s;

    ${props => !props.disabled && 'cursor: pointer;'}
    :hover{
     background-color: ${props => props.theme.primaryHover}
    }

    :disabled {
        background-color: ${props => props.theme.disabled};
    }
`

const Button = ({ Children, disabled, Loading,  ...props}) => {
    return(
        <StyledButton
         disabled={disabled || Loading}         
         {...props}
        
        >
            {Loading && <img src="./loading.svg" width="14px"/>}
            {!Loading && Children}
        </StyledButton>
    )
}
    
export default Button;