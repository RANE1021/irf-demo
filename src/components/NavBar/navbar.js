import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import  { Link } from 'react-router-dom';

import "./navbar.css";

const NavBar = () => {
    return(
        <Container>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/" className="navbar-title">Home</Navbar.Brand>
                <Nav className="ml-auto">
                    <Link to="/counter" className="navbar-link-styling">Counter</Link>
                    <Link to="/rtcounter" className="navbar-link-styling">RT-Counter</Link>
                    <Link to="/coollib" className="navbar-link-styling">Cool</Link>
                </Nav>
        </Navbar>
        </Container>
    )
} ;

export default NavBar;
