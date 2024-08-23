import styled from "styled-components";
import H4 from "../typography/H4"
import ControlledTextArea from "../inputs/ControlledTextArea";
import Button from "../inputs/Button";
import { set, useForm } from "react-hook-form"; 
import { joiResolver } from "@hookform/resolvers/joi"; 
import axios from 'axios'
import { useSWRConfig } from "swr";
import { useState } from "react";

import { creatPostSchema } from "../../../modules/post/post.Schema"

const PostContainer = styled.div`
    background-color: ${props => props.theme.white};
    padding: 20px 40px;

    @media(max-width: 500px) {
        padding: 20px;
    }
    
`

const Title = styled.div`
    font-weight: bold;
    text-align: center;
`
const TextContainer = styled.div`
    margin: 20px 0;

`


const BottomContainer = styled.div`
    display: flex;
    align-items: center;

    @media(max-width: 500px) {
        flex-direction: column-reverse;
        gap: 5px
    }
`

const BottomText = styled.p`
    flex: 1
`

function CreatPost({userName}){
    const [showLoading, setShowLoading] = useState (false)
    const { mutate } = useSWRConfig()
    const { control, handleSubmit, formState: { isValid, }, reset } = useForm({
        resolver: joiResolver(creatPostSchema),
        mode: 'all'
    })

    const onSubmit = async (data) => {
        setShowLoading(true)
       const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, data)
       if(response.status === 201) {        
        reset()
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)
       }
       setShowLoading(false)
    }
    return(
        <PostContainer>
            <H4><Title>O que você está pensando, @{userName}?</Title></H4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextContainer>
                    <ControlledTextArea 
                    placeholder="Digite sua mensagem" 
                    rows="4" 
                    control={control}
                    name="text"
                    maxLength="256"
                    />
                </TextContainer>
                <BottomContainer>
                    <BottomText>A sua mensagem será publicada</BottomText>
                    <Button Loading={showLoading} disabled={!isValid}>Enviar mensagem</Button>

                </BottomContainer>
            </form>
        </PostContainer>
    )
}


export default CreatPost;