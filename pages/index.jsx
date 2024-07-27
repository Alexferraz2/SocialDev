import styled from "styled-components"
import { withIronSessionSsr } from "iron-session/next"

import { ironConfig } from "../lib/middlewares/ironSession"

import Navbar from "../src/components/layout/NavBar"
import Container from "../src/components/layout/Container"
import CreatPost from "../src/components/cards/CreatPost"
import H3 from "../src/components/typography/H3"
import Post from "../src/components/cards/Post"

const Content = styled.div `
 margin: 50px 0;

`

const LastaPostText = styled(H3)`
  padding: 40px 0;
`

const RefreshPostsContainer = styled.div`
  text-align: center

`
 const RefreshPosts = styled.span `
  font-weight: bold;
  color: ${props => props.theme.primary};
  cursor: pointer
 `

const PostContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  

`

function HomePage ( {user }) {
  console.log(user)
  return (
    <>
      <Navbar />
    
      <Content>
        <Container>
          <CreatPost userName={user.user}/>

          <LastaPostText>Últimas postagens:</LastaPostText>
          <RefreshPostsContainer>
            <RefreshPosts>Carregar novas postagens</RefreshPosts>
                        
          </RefreshPostsContainer>

          <PostContainer>
            <Post/>
            <Post/>
            <Post/>
          </PostContainer>
          
          
        </Container>
        
      </Content>
    </>
    
  )
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user
    if(!user) {
      return {
        redirect: {
          permanent: false,
          destination: '/login'
        }
      }
    }
    console.log(user)
    return {
      props: {
        user
      }
    }
  }, 
  ironConfig
)

export default HomePage