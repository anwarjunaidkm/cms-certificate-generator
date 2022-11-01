import React, { useState } from "react";
import "./UpdateStudent.css";
import {
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { createApi } from "../../Store/Student/useApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateStudent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({});

  // const Handle = (e) => {
  //   setInput({
  //     ...input,
  //     [e.target.name]: e.target.value,
  //   });
  // }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(input){
        dispatch(createApi(input, navigate));
      }
     
    };
  

    return (
      <section className="update-sectioin">
        <h5 style={{ paddingLeft: "170px", paddingTop: "15px" }}>
          CREATE STUDENT
        </h5>

        <Container className="container-update">
          <div className="box-update">
            <div>
              <Form style={{ padding: "18px" }} onSubmit={handleSubmit} >
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
                      <Input
                        style={{ backgroundColor: "#c5c1c1d7" }}
                        placeholder="Name"
                        type="text"
                        name="full_name"
                        onChange={(e)=>setInput({...input,full_name: e.target.value})}
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
                        Designation :
                      </Label>
                      <Input
                        style={{ backgroundColor: "#c5c1c1d7" }}
                        placeholder="lorem ipsum"
                        type="text"
                        name="designation"
                        onChange={(e)=>setInput({...input, designation: e.target.value})}
                        
                      />
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
                      <Input
                        style={{ backgroundColor: "#c5c1c1d7" }}
                        name="email"
                        placeholder="Enter e-mail"
                        type="email"
                        onChange={(e)=>setInput({...input, email: e.target.value})}

                       
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
                      <Input
                        style={{ backgroundColor: "#c5c1c1d7" }}
                        placeholder="09 Jun, 2021"
                        type="date"
                        name="start_date"
                        onChange={(e)=>setInput({...input, start_date: e.target.value})}

                       
                      />
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
                      <Input
                        style={{ backgroundColor: "#c5c1c1d7" }}
                        placeholder="09 Jun, 2021"
                        type="date"
                        name="dob"
                        onChange={(e)=>setInput({...input, dob: e.target.value})}

                    
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
                        Date of Leaving :
                      </Label>
                      <Input
                        style={{ backgroundColor: "#c5c1c1d7" }}
                        placeholder="09 Jun, 2021"
                        type="date"
                        name="end_date"
                        onChange={(e)=>setInput({...input, end_date: e.target.value})}

                       
                      />
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
                      <Input
                        style={{ backgroundColor: "#c5c1c1d7" }}
                        placeholder="Address"
                        type="text"
                        name="address"
                        onChange={(e)=>setInput({...input, address: e.target.value})}

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
                        Phone
                      </Label>
                      <Input
                        style={{ backgroundColor: "#c5c1c1d7" }}
                        placeholder="99999999"
                        type="number"
                        name="phone"
                        onChange={(e)=>setInput({...input, phone: e.target.value})}

                        
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
                        Image :
                      </Label>
                      <Input
                        style={{ backgroundColor: "#c5c1c1d7" }}
                        type="file"
                        name="img"
                        onChange={(e)=>setInput({...input, img: e.target.value})}

                       
                      />
                    </FormGroup>
                  </Col>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      paddingRight: "15px",
                    }}
                  >
                    <div style={{ paddingRight: "15px" }}>
                      <Button
                        style={{}}
                        className="back-btn"
                        color="secondary"
                        size=""
                      >
                        Back
                      </Button>
                    </div>
                    <div>
                      <Button
                        className="update-btn"
                        type={"submit"}
                        color="primary"
                        size=""
                      >
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
    );
  };



export default CreateStudent;
