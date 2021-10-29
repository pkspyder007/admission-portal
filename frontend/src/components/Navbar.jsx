import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from "react-bootstrap";
import Cookies from 'js-cookie';
import HomeIcon from '@mui/icons-material/Home';
function Navbars(props){
    function logout(){
        
        Cookies.remove('email');
        Cookies.remove('password');
        props.history.push("/");
        
      }
    return (
        <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <HomeIcon color="primary" />
  <Navbar.Brand >/</Navbar.Brand>
  <Nav className="me-auto">
  
      
    </Nav>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="me-auto">
  <Nav.Link >Step 1</Nav.Link>
      <Nav.Link >Step 2</Nav.Link>
      
    </Nav>
    <Nav>
    
      <Nav.Link >Contact Us</Nav.Link>
     
      <NavDropdown  title="Accounts" id="collasible-nav-dropdown">
        <NavDropdown.Item >Profile</NavDropdown.Item>
        <NavDropdown.Item>Change Password</NavDropdown.Item>
        
        <NavDropdown.Divider />
        <NavDropdown.Item href="/" onClick={logout}><h6>Logout</h6></NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}
export default Navbars;