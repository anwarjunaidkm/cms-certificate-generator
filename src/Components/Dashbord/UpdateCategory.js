import React from 'react'
import './UpdateCategory.css'
import {Container,Table,Button, Row,Col, Form ,Input,Label,FormGroup,Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap'


const UpdateCategory = () => {
  return (
    <section className='updateCategory-section'>
         <h5 style={{ paddingLeft: "170px", paddingTop: "15px" }}>
         UPDATE COURSE CATEGORY
      </h5>
    <Container className="category-update-container">
        <div className='category-update-box'>


        <div>
            <Form style={{ padding: "18px" }}>
              <Row style={{height:'400px'}}>
                <Col md={6}>
                  <FormGroup>
                    <Label
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "#6C6C6C",
                      }}
                    >
                      Course Category :
                    </Label>
                    <Input
                      style={{ backgroundColor: "#c5c1c1d7" }}
                      placeholder='Enter a course Category'
                      type="text"
                    />
                  </FormGroup>
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
                    <Input
                      style={{ backgroundColor: "#c5c1c1d7" }}
                      type="text"
                      placeholder='Enter a designation'
                    />
                  </FormGroup>
                 

                  
                </Col>
               

              </Row>
              
            </Form>
          </div>
          <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingRight: "15px",
                  alignItems:'end'
                }}
              >
                <div style={{ paddingRight: "15px" }}>
                  <Button
                    style={{}}
                    className="back-btn-course-update"
                    color="secondary"
                    size=""
                  >
                    Back
                  </Button>
                </div>
                <div>
                  <Button
                    className="update-btn-course-update"
                    color="primary"
                    size=""
                  >
                    Update
                  </Button>
                </div>
              </div>

        </div>
    </Container>
    </section>
  )
}

export default UpdateCategory