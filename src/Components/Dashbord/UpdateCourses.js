import React from 'react'
import './UpdateCourses.css'
import {Container,Table,Button, Row,Col, Form ,Input,Label,FormGroup,Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap'


export const UpdateCourses = () => {
  return (
    <section className="updateCourses-sectioin">
      <h5 style={{ paddingLeft: "170px", paddingTop: "15px" }}>
        UPDATE COURSES
      </h5>

      <Container className="container-updatecourse">
        <div className="updateCourse-box">
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
                      Course Name :
                    </Label>
                    <Input
                      style={{ backgroundColor: "#c5c1c1d7" }}
                      placeholder="React js"
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
                      Duration :
                    </Label>
                    <Input
                      style={{ backgroundColor: "#c5c1c1d7" }}
                      placeholder="3 month"
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
                      Course Category :
                    </Label>
                    <div>
                      <select
                        className="select-update"
                        style={{ width: "100%" }}
                      >
                        <option
                          style={{ backgroundColor: "" }}
                          value="Front-end"
                        >
                          Front-end
                        </option>
                        <option value="Back-end">Back-end</option>
                      </select>
                    </div>
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
  );
}
