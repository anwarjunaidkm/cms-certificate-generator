import React from 'react'
import Layout from '../Layout'
import './Banner.css'
// import {Card, Row,Col,Button,CardTitle,CardText} from 'react-bootstrap'
import {Card, Row,Col,Button,CardTitle,CardText} from 'reactstrap'
import bg from '../Dashbord/bg.png'
import avatar from '../Dashbord/avatar.jpg'
import icon1 from '../Dashbord/icon1.png'
import icon2 from '../Dashbord/icon2.png'
import icon3 from '../Dashbord/icon3.png'
import { Container } from 'react-bootstrap'




function Banner() {
  return (
  <>  
  <div className='banner-container'>
    <Container>
     <Row style={{padding:'12px',paddingTop:'24px',marginRight:'0'}}>
                <Col md='4'>
                    <Container>
                    <Card className='main-card'>
                        <div className="c-top">
                            <Row>
                                <Col md="6">
                            <h5 style={{fontSize:'18px'}}>Welcome back..!</h5>
                            <p style={{fontSize:'12px'}}>It will seem like simplified</p>
                            </Col>
                            <Col md="6">
                            <div className='cardbg-body'>
                            <img className='card-bg1' src={bg} alt="error" />
                            </div>
                            </Col>
                            </Row>
                           
                            
                        </div>
                        <div className="c-bottom">
                            <Row className='botton-row'>
                                <Col md='4'>
                                    <div className='card-avatar'>
                                    <img className='avatar' src={avatar} alt="error" />
                                    </div>
                                    <h6>Cynthia Price</h6>
                                    <p>UI/UX Designer</p>

                                </Col>
                                <Col md='4'>
                                    <h6>156</h6>
                                    <p>Project</p>
                                    <Button className='btncard' variant="primary"> View Pofile</Button>{' '}

                                </Col>
                                <Col md='4'>
                                    <h6>$1245</h6>
                                    <p>Revenue</p>


                                </Col>
                            </Row>

                        </div>

                    </Card>
                    </Container>
                
                
                
                </Col>
                <Col md='8'>
                
                    <Row>
                        <Col md='6' style={{marginBottom:'10px'}}>
                            
                        <Card className='first-card' style={{ color:'rgba(0, 0, 0, 0.699)'}}>
                                <CardTitle style={{fontSize:'small'}} tag="h5">
                                Available Courses
                                </CardTitle>
                               
                                <CardText style={{fontSize:'small',margin:'0'}}>
                                    3
                                </CardText>
                                <div className='first-icon' > <img src={icon1} alt="" /></div>                               
                            </Card>
                           
                        </Col>
                        <Col md='6'>
                        <Card className='second-card' style={{ color:'rgba(0, 0, 0, 0.699)'}}
                            >
                                <CardTitle style={{fontSize:'small'}} tag="h5">
                                Course Completed Students                                </CardTitle>
                                <CardText style={{fontSize:'small',margin:'0'}}>
                                    4
                                </CardText>
                                <div className='second-icon' > <img src={icon2} alt="" /></div>
                               
                            </Card>
                        </Col>
                        


                    </Row>
                    <Row>
                        <Col md='6'>
                        <Card className='third-card' style={{ color:'rgba(0, 0, 0, 0.699)'}}
                            >
                                <CardTitle style={{fontSize:'small'}} tag="h5">
                                Total Students                                </CardTitle>
                                <CardText style={{fontSize:'small',margin:'0'}}>
                                    5
                                 </CardText>
                                 <div className='third-icon' > <img src={icon3} alt="" /></div>
                               
                            </Card>
                        </Col>
                        <Col md='6'>
                        <Card className='fourth-card'
                               style={{ color:'rgba(0, 0, 0, 0.699)'}}
                            >
                                <CardTitle style={{fontSize:'small'}} tag="h5">
                                Total Students                                </CardTitle>
                                <CardText style={{fontSize:'small',margin:'0'}}>
                                    5
                                </CardText>
                                <div className='fourth-icon' > <img src={icon3} alt="" /></div>

                               
                            </Card>
                        </Col>
                        


                    </Row>
                
                
                    
                </Col>
                


     </Row>
    
     </Container>

    

  

 
  </div>



 


 

 
 
 



    
</>
    
    
  )
}

export default Banner