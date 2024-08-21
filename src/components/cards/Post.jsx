import { useState } from "react";

import styled from "styled-components";
import moment from 'moment'
import axios from "axios";
import { useSWRConfig } from "swr";

import Menu from "../navigation/Menu";
import EditPost from "./EditPost";



const PostContainer = styled.div`
    background-color: ${props => props.theme.white};
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    
`

const StyledUserName = styled.p`
    font-size: 18px;
    font-weight: bold
`

const StyledData = styled.p`
    font-size: 12px
`

const ContainerText = styled.div`
    margin-top: 10px;
`

const ContainerMenu = styled.div`
    margin-left: auto;
    
` 

function Post( { text, user, date, isOwner, id }) {
    const { mutate } = useSWRConfig()
    const [ editPost, setEditPost] = useState(false)

    const handleEdit = async () => {
        setEditPost(true)
    }

    const handleSaveEdit = () => {
        setEditPost(false)
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)

    }
    const handleDelete = async () => {
        
        try {
            console.log(`o id do usuário é ${id}`);
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
                data: {
                    id
                },
                
            })
            
            if(response.status === 200 )
                mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)
        } catch (error) {
            console.error(error);
        }
    }
    return(
        <PostContainer>
            {
                isOwner &&

                <ContainerMenu>
                <Menu
                    options={[
                        {
                            text: 'Editar publicação',
                            onClick: handleEdit
                        },
                        {
                            text: 'Deletar publicação',
                            onClick: handleDelete
                        }
                    ]}
                
                
                />
            </ContainerMenu>

            }
            
            <StyledUserName>@{user}</StyledUserName>
            <StyledData>{moment(date).format(`LLL`)}</StyledData>
            <ContainerText>
                {!editPost && text} 
                {editPost && <EditPost id={id} text={text} onSave={handleSaveEdit}/>}
            
            
            
            </ContainerText>
        </PostContainer>
    )
}


export default Post;