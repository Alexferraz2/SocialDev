import styled from "styled-components";
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from "next/router";

const StyledNavbar = styled.div`
    background-color: ${props => props.theme.white};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;

    @media(max-width: 500px) {
        padding: 0 20px;
    }
`
const StyledLogo = styled.span `
    font-weight: bold;
    font-size: 20px;
    flex: 1

`

const StyleLogout = styled.a `
    cursor: pointer
`



function Navbar() {
    const router = useRouter();

    const handleLogout = async () => {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/logout`)
        router.push('/')
    }
    return(
        <StyledNavbar>
            <StyledLogo># Social Dev</StyledLogo>
            <div>
                {
                    //<Link href="/login">Desconectar</Link>
                }
                <StyleLogout onClick={handleLogout}>Desconectar</StyleLogout>
            </div>
        </StyledNavbar>
    )
}

export default Navbar;