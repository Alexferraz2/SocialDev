import styled from "styled-components";
import Link from 'next/link'

import ImageWithSpace from "../src/components/layout/ImageWithSpave";
import H1 from "../src/components/typography/H1";
import H2 from "../src/components/typography/H2"
import H4 from "../src/components/typography/H4"
import Button from "../src/components/inputs/Button";
import Input from "../src/components/inputs/Input";
import { useState } from "react";

const FormContainer = styled.div`
    margin-top: 60px
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    gap: 20px
`
const Text = styled.p`
    text-align: center;
    
`



function Signup() {
  
    const [firstName, setFisrtName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
     
    const handleForm = (event) => {
        event.preventDefault()
        console.log({firstName, lastName, email, password})
    }
    
    return (
        <ImageWithSpace>
            <H1># Social Dev</H1>
            <H4>Tudo que acontece no mundo dev, está aqui!</H4>  
            <FormContainer>
                <H2>Crie sua conta</H2>
            </FormContainer>  
            <Form onSubmit={handleForm}>
                <Input label="Nome" onChange={({target}) => {setFisrtName(target.value)}}/> 
                <Input type="text" label="Sobrenome" onChange={({target}) => {setLastName(target.value)}}/> 
                <Input type="email" label="Email" onChange={({target}) => {setEmail(target.value)}}/>   
                <Input type="password" label="Senha" onChange={({target}) => {setPassword(target.value)}}/> 
                <Button>Entrar</Button>
                
            </Form>
            <Text>Já possui uma conta? <Link href="/login">Faça seu login</Link> </Text>       
            
            
            
        </ImageWithSpace>
    )
}


export default Signup;