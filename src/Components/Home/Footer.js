import React from 'react'
import { Container, Row,Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook,faTwitter ,faGooglePlus ,faGithub} from '@fortawesome/free-brands-svg-icons'




import "./Footer.css";

function Footer() {
  return (
    <footer className='spoti'>
    <Container className='main'>
           <Row>
             <Col md-6 className='first-row'>
             <h3 className='edison'>EDISON VALLEY</h3>
             <h5 className='rule'>2020 © Edisonvalley. Design & Develop by Osperb</h5>
             <p>We are a bunch of tech enthusiasts determined to 
uplift the society utilising the latest technologies around us</p>
             </Col>
             <Col md-6>
                <Row >
                    <Col md-4 >
                    <h3 className='group'>Resources </h3>
                        <ul>
                      <li> Privacy Policy</li>
                     
                      
                      <li>
                       Terms & Conditions   
                      </li>
                    </ul>
                    </Col>
                    <Col md-4>
                        <h3 className='group'>Company</h3>
                        <ul>
                      <li>
                      About Us 
                      </li>
                      <li>
                      Features  
                      </li>
                    </ul>

                    </Col>
                    <Col md-4>
                        <h3 className='group '>Social Links </h3>
                        <div className="social">
                        <FontAwesomeIcon  icon={faFacebook} className='facebook' />
                        <FontAwesomeIcon icon={faTwitter} className="twitter" />
                        <FontAwesomeIcon icon={faGooglePlus} className="google" />
                        </div>
                        
                    </Col>
                </Row>    
             </Col>
             
            </Row>
    </Container>
    </footer>
  )
}

export default Footer