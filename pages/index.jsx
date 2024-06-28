import styled from "styled-components"

import Navbar from "../src/components/layout/NavBar"
import Container from "../src/components/layout/Container"
import CreatPost from "../src/components/cards/CreatPost"

const Content = styled.div `
 margin: 50px 0;

`
 
function HomePage () {
  
  return (
    <>
      <Navbar />
    
      <Content>
        <Container>
          <CreatPost></CreatPost>
        </Container>
        
      </Content>
    </>
    
  )
}

export default HomePage