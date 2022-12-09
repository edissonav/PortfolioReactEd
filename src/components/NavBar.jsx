import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Profileimg from '../assets/img/foto de perfil.jpg'

const NavBar = () => {
    const [theme, setTheme]=useState('dark')

    const Toggletheme=()=>{
        if(theme=== 'dark'){
            setTheme('light')
        }else{setTheme('dark')}
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg={theme} variant={theme}>
            <Container>
                <box-icon name='code-alt'></box-icon>
                <Navbar.Brand href="/#/">{'Coder:{Edisson Avila}'}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                       <Nav.Link href='/#/aboutme'>About-me</Nav.Link>
                        <Nav.Link href="/#/portfolio">Portfolio</Nav.Link>
                        <NavDropdown title="Contact-me" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://www.linkedin.com/in/edisson-yandery-avila-lopez-887242238/"><box-icon type='logo' name='linkedin'></box-icon>LD-me</NavDropdown.Item>
                            <NavDropdown.Item href="https://wa.me/5930998965599">
                            <box-icon type='logo' name='whatsapp'></box-icon> WS-me
                            </NavDropdown.Item>
                            <NavDropdown.Item href='https://mail.google.com/mail/u/0/#inbox'><box-icon type='logo' name='gmail'></box-icon>Mail-Me edisson.avila@gmail.com</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/#/cv" target='_blank'>
                              See My CV Here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Item onClick={()=>Toggletheme()}><box-icon name='sun'></box-icon></Nav.Item>
                        <Nav.Item><img className='img' src={Profileimg} /></Nav.Item>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;