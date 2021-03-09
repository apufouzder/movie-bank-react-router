import React from 'react';
import './NavBar.css';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home"><h3>MovieBank</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link style={{ color: 'white', fontSize: '20px' }} as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link style={{ color: 'white', fontSize: '20px' }} as={Link} to="/about">About</Nav.Link>
                        <Nav.Link style={{ color: 'white', fontSize: '20px' }} as={Link} to="/movie">Movie</Nav.Link>
                        <Nav.Link style={{ color: 'white', fontSize: '20px' }} as={Link} to="/pricing">Pricing</Nav.Link>
                        <Nav.Link style={{ color: 'white', fontSize: '20px' }} as={Link} to="/contact">Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavBar;