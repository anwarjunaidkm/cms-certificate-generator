import React from "react";
import { Button, Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import one from "../Home/sample.jpg";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="navcolor"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="#home">EDISON VALLEY</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Features</Nav.Link>
                <Nav.Link href="#pricing">Team</Nav.Link>
              </Nav>
              <Nav>
                <Button variant="outline-light">SignIn</Button>{" "}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>


      <section id="spotlight">
        <Container>
          <Row className="my-auto banner">
            <Col md="6">
              <div className="left">
                <h1>
                  Maker Your Carrier <br />
                  with EdisonValley
                </h1>
                <p>
                  We are a bunch of tech enthusiasts determined to uplift the
                  society utilising the latest technologies around us.
                </p>
                <Button className="text-white btnOne" variant="warning">
                  LogIn
                </Button>{" "}
              </div>
            </Col>
            <Col md="6">
              <div className="left">
                {/* <h1>Maker Your Carrier  <br />
          with EdisonValley</h1>
          <p>We are a bunch of tech enthusiasts determined to 
          uplift the society utilising the latest technologies around us.
          </p>
          <Button className='text-white btnOne' variant="warning">LogIn</Button>{' '} */}
                <img src={require("./sample.jpg")} alt="error" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <div className="left">
           <h1>Maker Your Carrier  <br />
          with EdisonValley</h1>
          <p>We are a bunch of tech enthusiasts determined to 
          uplift the society utilising the latest technologies around us.
          </p>
          <Button className='text-white btnOne' variant="warning">LogIn</Button>{' '}


       </div>
        <div className="right">
      
        </div> */}
      <section id="footer">
        {/* <Container>
          <div class="footer-clean">
            <footer>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-sm-4 col-md-3 item">
                    <h3>EDISON VALLEY</h3>
                    <span>2020 © Edisonvalley. Design & Develop by Osperb</span>
                    <p>
                      We are a bunch of tech enthusiasts determined to  uplift
                      the society utilising the latest technologies around us
                    </p>
                  </div>
                  <div class="col-sm-4 col-md-3 item">
                    <h3>Resources</h3>
                    <ul>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms & Conditions</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-4 col-md-3 item">
                    <h3>Company</h3>
                    <ul>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Features</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-4 col-md-3 item">
                    <h3>Social Links</h3>
                    <ul>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Features</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Container> */}
      </section>
      <Footer />
    
    </>
  );
};

export default Home;
