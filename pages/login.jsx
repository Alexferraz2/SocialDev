import styled from "styled-components";
import Link from "next/link"
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useRouter } from 'next/router'

import { loginSchema } from "../modules/user/user.Schema";

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

function LoginPage() {
    const [showLoading, setShowLoading] = useState (false)
    const router = useRouter()
    const { control, handleSubmit, formState: { errors }, setError} = useForm({ 
        resolver: joiResolver(loginSchema)
    })

    const onSubmit = async (data) => {
        try {
            setShowLoading(true)
            const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, data)
            if( status === 200) {
                
                router.push('/')
            }

            
        } catch ({ response }) {
            
            if(response.data === 'Password is incorrect') {
                setError('password', {
                    message: 'A senha está incorreta!'
                })
            }
            else if(response.data === 'Not found') {
                setError('userOrEmail', {
                    message: 'Usuário ou email não cadastrado!'
                })
            }
            
        }
        
    }
    return (
        <ImageWithSpace>
            <H1># Social Dev</H1>
            <H4>Tudo que acontece no mundo dev, está aqui!</H4>  
            <FormContainer>
                <H2>Entre em sua conta</H2>
            </FormContainer>  
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Email ou usuário" name="userOrEmail" control={control}/>   
                <Input type="password" label="Senha" name="password" control={control}/> 
                <Button Loading={showLoading} type="submit" disabled={Object.keys(errors).length > 0}>Entrar</Button>
                
            </Form>
            <Text>Não possui uma conta? <Link href="/signup">Faça seu cadastro</Link> </Text>       
            
            
            
        </ImageWithSpace>
    )
}


export default LoginPage;