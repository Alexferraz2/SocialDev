import styled from "styled-components";
import Link from 'next/link'

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



function Navbar() {
    return(
        <StyledNavbar>
            <StyledLogo># Social Dev</StyledLogo>
            <div>
                <Link href="/login">Desconectar</Link>
            </div>
        </StyledNavbar>
    )
}

export default Navbar;