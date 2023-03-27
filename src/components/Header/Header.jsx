import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar,Nav, NavDropdown  } from 'react-bootstrap';
import logo from '../../images/Logo.svg'


const Header = () => {
    return (
            <Navbar bg="dark" expand="lg" className='mb-3'>
                    <Navbar.Brand href="#home" className='ms-5'><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto pe-4 ">
                            <Nav.Link href="#home" className='text-white'>Order</Nav.Link>
                            <Nav.Link href="#link" className='text-white'>Order Review</Nav.Link>
                            <Nav.Link href="#link" className='text-white'>Manage Inventory</Nav.Link>
                            <NavDropdown title={<span className="text-white my-auto">Login</span>} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>               
            </Navbar>   
    );
};

export default Header;