import styled from "styled-components";


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

function Post() {
    return(
        <PostContainer>
            <StyledUserName>@username</StyledUserName>
            <StyledData>28 de junho de 2024</StyledData>
            <ContainerText>Esse é um texto de teste</ContainerText>
        </PostContainer>
    )
}


export default Post;