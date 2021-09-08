import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { MobileIcon, Nav, NavbarContainer, NavBtnLink, NavIcon, NavItem, NavItemBtn, NavLinks, NavLogo, NavMenu } from "./Navbar.elements";
import { IconContext } from "react-icons/lib";
import { Button } from "../../GlobalStyles";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click)
        }

    const showButton = ()=>{
        if( window.innerWidth<= 960){
            setButton(false);
        } else {
            setButton(true);
        }

    }
    
    useEffect(()=>{
        showButton();
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo>
                            <NavIcon />
                            ULTRA
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click} >
                            <NavItem>
                                <NavLinks to='/'>Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/services'>Service</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/products'>Product</NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/sign-up">
                                        <Button> Sign up </Button>
                                        </NavBtnLink>
                                ) : (
                                    <NavBtnLink to="/sign-up">
                                    <Button fontBig primary> Sign up </Button>
                                    </NavBtnLink>
                                )
                                }
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;