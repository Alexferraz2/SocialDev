import styled from "styled-components"
import { useController } from "react-hook-form"


const InputContainer = styled.div `
    width: 100%;

`

const StyledLabel = styled.p `
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px
`

const StyledInput = styled.input`
    width: 100%;
    border: 1px solid ${props => props.theme.inputBorder};
    background-color: ${props => props.theme.inputBackGround};
    padding: 15px 20px;
    box-sizing: border-box;
    border-radius: 10px;

    ${props => props.error && `border: 2px solid ${props.theme.error};`}

    &:focus {
        outline: none;
    }
    
`

const ErrorLabel = styled.span`
    color:${props => props.theme.error};
    font-weight: bold;
    font-size: 14px;
`

const errorMessage = {
    'string.empty': 'O campo é obrigatório',
    'string.email': 'Digite um email válido',
    'string.min': 'O campo deve ter no mínimo seis caracteres',
    'duplicated': 'Já existe uma conta resgistrada com esse valor'
}


const Input = ({ label, name, control, defaultValue = "", ...props}) => {
    const {
        field: { value, onChange},
        fieldState: { error}

    } = useController({ name, control, defaultValue})
    
    return(
        <InputContainer>
            <StyledLabel>
                {label}
            </StyledLabel>
            <StyledInput placeholder={label} error={error} {...props} value={value} onChange={onChange}/>
            {error && <ErrorLabel>{errorMessage[error.type] || error.message}</ErrorLabel>}
        </InputContainer>
    )
}


export default Input;