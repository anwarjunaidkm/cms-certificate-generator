import React from "react";
import "./Header.css";
import {
  Container,
  Button,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  expand,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie,faUser } from '@fortawesome/free-solid-svg-icons'
import {GoThreeBars} from 'react-icons/go'

function Header() {
   
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="dashHeader"
        variant="dark"
      >
         {/* <Container> */}
          <Navbar.Brand href="#home" className="ediondash">
            EDISON VALLEY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
             <div className="threedot"> <  GoThreeBars /></div>
              <Form className="d-flex search">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Nav>
            <Nav className="right-avatar">

            
            <FontAwesomeIcon className="usericon" icon={faUser} />
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="AJ"
              menuVariant="dark"
              
            >
              <NavDropdown.Item href="#action/3.1"> View Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{color:'red'}}>Logout</NavDropdown.Item>
              <NavDropdown.Divider />
             
            </NavDropdown>
               
                
                
                
               
                
               
              
            </Nav>
          </Navbar.Collapse>
     {/* </Container> */}
      </Navbar>
    </div>





                // ------------black---------

            //     <div className='dash-header'>
            //     {/* <Container> */}
            //         <div className='header-right'>
            //             <h5>Edisonvalley</h5>
            //         </div>
        
                    
            //             <div className='header-left'>
            //                 <div>
            //             <a  className='three-dot'><GoThreeBars /></a>
            //             <input placeholder='Search....' className='search'></input>
            //             </div>
            //             <FontAwesomeIcon className="usericon" icon={faUser} />
            //  <NavDropdown
            //    id="nav-dropdown-dark-example"
            //    title="AJ"
            //    menuVariant="dark"
              
            //  >
            //    <NavDropdown.Item href="#action/3.1"> View Profile</NavDropdown.Item>
            //    <NavDropdown.Item href="#action/3.2">
            //      Settings
            //    </NavDropdown.Item>
            //    <NavDropdown.Item href="#action/3.3" style={{color:'red'}}>Logout</NavDropdown.Item>
            //    <NavDropdown.Divider />
             
            //  </NavDropdown>
                        
            //         </div>
            //     {/* </Container> */}
            // </div>
  );
}

export default Header;
