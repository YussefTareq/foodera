import {Container,Nav,Navbar} from 'react-bootstrap';
import React from 'react';
import './Navs.css'
import logo from'../../assets/logo.png'
function NavBar() {
    return (
        <div className='navbar-fixed-top' >
        <Navbar className=''  expand="lg">
        <Container>
            <Navbar.Brand href="#home">
            <img src={logo} title='logo' alt='' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className=" me-auto mx-5">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#sec2">About Us</Nav.Link>
                    <Nav.Link href="#food">Explore Food</Nav.Link>
                    <Nav.Link href="#test">Review</Nav.Link>
                    <Nav.Link href="#fre">FAQ</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link id='lastnav'>0100120123</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar></div>);
}

export default NavBar;
