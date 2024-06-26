import styled from "styled-components"


const WIDTH_BREAKE = '700px'

const StyledFlex = styled.div`
    display: flex;
`

const StyledImage = styled.div`
    background-image: url('${props => props.image}');
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    width:100%;
    height:100vh;

    @media(max-width: ${WIDTH_BREAKE}) {
        display: none;
    }
    
`

const StyledContainer = styled.div`
    background: blue;
    background-color: ${props => props.theme.white};
    padding: 30px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media(min-width: ${WIDTH_BREAKE}) {
        width: calc(${WIDTH_BREAKE} - 100px) 
    }

    @media(max-width: ${WIDTH_BREAKE}) {
        width: 100%;
    }

`


function ImageWithSpace({ children, image }) {
    return(
        <StyledFlex>

            <StyledImage image = {image}/>
            <StyledContainer>
                {children}
            </StyledContainer>
        </StyledFlex>
    )
}

ImageWithSpace.defaultProps = {
    image: '/coffee-background.jpg'
}

export default ImageWithSpace;






