import React from 'react'
import './UpdateStudent.css'
import { Container,Col,Row,Form,FormGroup,Label,Input,Button } from 'reactstrap'


const CreateStudent = () => {
  return (
    <section className="update-sectioin">
    <h5 style={{ paddingLeft: "170px", paddingTop: "15px" }}>
      CREATE STUDENT
    </h5>

    <Container className="container-update">
      <div className="box-update">
        <div>
          <Form style={{padding:'18px'}}>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "#6C6C6C",
                    }}
                  >
                    Full Name :
                  </Label>
                  <Input style={{backgroundColor:'#c5c1c1d7'}}  placeholder="ANWAR JUNAID" type="text" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "#6C6C6C",
                    }}
                  >
                    Designation :
                  </Label>
                  <Input style={{backgroundColor:'#c5c1c1d7'}} placeholder="lorem ipsum" type="text" />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "#6C6C6C",
                    }}
                  >
                    Email :
                  </Label>
                  <Input style={{backgroundColor:'#c5c1c1d7'}}
                    name="email"
                    placeholder="ajvly22@gmail.com"
                    type="email"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "#6C6C6C",
                    }}
                  >
                    Joining Date :
                  </Label>
                  <Input style={{backgroundColor:'#c5c1c1d7'}} placeholder="09 Jun, 2021" type="text" />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "#6C6C6C",
                    }}
                  >
                    Date of Birth :
                  </Label>
                  <Input  style={{backgroundColor:'#c5c1c1d7'}} placeholder="09 Jun, 2021" type="text" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "#6C6C6C",
                    }}
                  >
                    Date of Leaving :
                  </Label>
                  <Input style={{backgroundColor:'#c5c1c1d7'}} placeholder="09 Jun, 2021" type="text" />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "#6C6C6C",
                    }}
                  >
                    Address :
                  </Label>
                  <Input style={{backgroundColor:'#c5c1c1d7'}} placeholder="Malappuram" type="text" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "#6C6C6C",
                    }}
                  >
                    Phone
                  </Label>
                  <Input style={{backgroundColor:'#c5c1c1d7'}} placeholder="9746639178" type="number" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "#6C6C6C",
                    }} >Image :</Label>
                  <Input style={{backgroundColor:'#c5c1c1d7'}}  type="file" />
                </FormGroup>
              </Col>
              <div style={{display:'flex',justifyContent:'flex-end',paddingRight:'15px'}}>
              <div style={{paddingRight:'15px'}}>
              <Button style={{}} className='back-btn' color="secondary" size="">
                  Back
                </Button>
              </div>
              <div>
              <Button className='update-btn' color="primary" size="">
                  Create
                </Button>
              </div>
                
               
               
              </div>
            </Row>
          </Form>
        </div>
      </div>
    </Container>
  </section>
    
  )
}

export default CreateStudent