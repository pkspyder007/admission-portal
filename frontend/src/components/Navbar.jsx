import React,{useState} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from "react-bootstrap";
import Cookies from 'js-cookie';
import HomeIcon from '@mui/icons-material/Home';
function Navbars(props){
    const[currentValue,setCurrentvalue]=useState("");
    function logout(){
        
        Cookies.remove('email');
        Cookies.remove('password');
        props.history.push("/");
        
      }
      function currentState(event){
          if(event.target.innerHTML==="Dashboard"){
            setCurrentvalue("");
          }else{
            setCurrentvalue(event.target.innerHTML);
          }
       
      }
    return (
        <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Nav>
    
    <Nav.Link  onClick={currentState}>Dashboard</Nav.Link>

  </Nav>
  <HomeIcon color="primary" />
  <Navbar.Brand >/ {currentValue}</Navbar.Brand>
  <Nav className="me-auto">
  
      
    </Nav>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="me-auto">
  <Nav.Link  onClick={currentState}>Step 1</Nav.Link>
      <Nav.Link  onClick={currentState}>Step 2</Nav.Link>
      
    </Nav>
    <Nav>
    
      <Nav.Link  onClick={currentState} >Contact Us</Nav.Link>
     
      <NavDropdown  title="Accounts" id="collasible-nav-dropdown">
        <NavDropdown.Item  onClick={currentState} >Profile</NavDropdown.Item>
        <NavDropdown.Item  onClick={currentState}>Change Password</NavDropdown.Item>
        
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