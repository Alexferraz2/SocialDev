import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'


const StyledContainerMenu = styled.div`
    position: relative;
`

const Dots = styled.img`
    cursor: pointer;
`

const StyledMenu = styled.div`
    width: 200px;
    background-color: ${props => props.theme.white};    
    position: absolute;
    right: 0;
    box-shadow: 6px 5px 15px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${props => props.show ? 'block' : 'none'}
`

const StyledOption = styled.div`
    padding: 25px;
    cursor: pointer;

    :hover {
        background-color: ${props => props.theme.inputBackGround
        }
    }
`

const Menu = ( {options = []} ) => {
    const [show, setShow] = useState(false)
    const menuRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(menuRef.current && !menuRef.current.contains(event.target)) {
                setShow(false)
            }
        }

        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [menuRef])

    const handleClick = (onClick) => {
        setShow(false)
        onClick()
    }
    return (
        <StyledContainerMenu>
            <Dots src="/three-dots.svg" height="20px" onClick={() => setShow(!show)}/>
            <StyledMenu show={show} ref={menuRef} onBlur={() => setShow(false)}>
               {
                options.map((options, pos) => 
                    <StyledOption 
                    key={`menu-option-${pos}`}
                    onClick={() => handleClick(options.onClick)}
                    >
                        {options.text}
                    </StyledOption>
                )
               }
            </StyledMenu>
        </StyledContainerMenu>
    )
}


export default Menu