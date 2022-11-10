import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
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
import { singleviewApi, updateStudentApi } from "../../Store/Student/useApi";

import "./UpdateStudent.css";

function UpdateStudent() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const catId = params.id;

  // console.log(params.id);
  // console.log(params);

  
  const [store, setStore] = useState({});
  
    const { single } = useSelector((state) => ({
      single: state.StudentReducer.singleview,
    }));

  useEffect(() => {
    dispatch(singleviewApi(catId));
  }, [dispatch]);
  
    useEffect(() => {
      setStore(single);
    }, [single]);
  
  const Handle = (e) => {

    setStore({
      ...store,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(store);

  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log("storee ,",store);
    dispatch(updateStudentApi(catId,store,navigate ));
  };

  return (
    <section className="update-sectioin">
      <h5 style={{ paddingLeft: "170px", paddingTop: "15px" }}>
        UPDATE STUDENT
      </h5>

      <Container className="container-update">
        <div className="box-update">
          <div>
            <Form onSubmit={(e) => handleUpdate(e)} style={{ padding: "18px" }}>
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
                      placeholder="NAME"
                      type="text"
                      value={store?.full_name}
                      name="full_name"
                      onChange={(e) => Handle(e)}
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
                      placeholder="Designation"
                      type="text"
                      value={store?.designation}
                      name="designation"
                      onChange={(e) => Handle(e)}
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
                      value={single?.email}
                      onChange={(e) => Handle(e)}

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
                      value={single.start_date}
                      name="start_date"
                      onChange={(e) => Handle(e)}
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
                      value={store?.dob}
                      name="dob"
                      onChange={(e) => Handle(e)}
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
                      value={store.end_date}
                      name="end_date"
                      onChange={(e) => Handle(e)}
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
                      value={store.address}
                      name="address"
                      onChange={(e) => Handle(e)}
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
                      placeholder="999999999"
                      type="number"
                      value={store?.phone}
                      name="phone"
                      onChange={(e) => Handle(e)}
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
                     
                      className="back-btn"
                      color="secondary"
                      
                    >
                      Back
                    </Button>
                  </div>
                  <div>
                    <Button
                      className="update-btn"
                      color="primary"
                      type="submit"
                      
                    >
                      Update
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
}

export default UpdateStudent;
