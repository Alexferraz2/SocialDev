import styled from "styled-components";
import moment from 'moment'


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

function Post( { text, user, date }) {
    return(
        <PostContainer>
            <StyledUserName>@{user}</StyledUserName>
            <StyledData>{moment(date).format(`LLL`)}</StyledData>
            <ContainerText>{text}</ContainerText>
        </PostContainer>
    )
}


export default Post;