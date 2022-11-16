import { map } from "lodash";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Table,
  Button,
  Row,
  Col,
  Form,
  Input,
  Label,
  FormGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { allcourseApi } from "../../Store/Course/useApi";
import { createstudentcourseApi, studentApi } from "../../Store/Student/useApi";
import Layout from "../Layout";

const CreateStudentCourse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({});

  const createStudentCourse = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(createstudentcourseApi(input, navigate));
    }
  };
  console.log(input);
  //------student name-----
  const { allstudent } = useSelector((state) => ({
    allstudent: state.StudentReducer.allstudent,
  }));

  useEffect(() => {
    dispatch(studentApi());
  }, [dispatch]);

  const tableData = allstudent?.results;
  //   console.log(tableData);

  //--------course name-------------

  const { allcourses } = useSelector((state) => ({
    allcourses: state.CourseReducer.allcourse,
  }));
  useEffect(() => {
    dispatch(allcourseApi());
  }, []);

  const tableData2 = allcourses?.results;
  //   console.log(tableData2);

  return (
    <Layout>
      <section className="updateCourses-sectioin">
        <h5 style={{ paddingLeft: "170px", paddingTop: "15px" }}>
          CREATE STUDENT COURSES
        </h5>

        <Container className="container-updatecourse">
          <div className="updateCourse-box">
            <div>
              <Form onSubmit={createStudentCourse} style={{ padding: "18px" }}>
                <Row style={{ height: "400px" }}>
                  <Col md={6}>
                    <FormGroup>
                      <Label
                        style={{
                          fontWeight: "bold",
                          fontSize: "12px",
                          color: "#6C6C6C",
                        }}
                      >
                        Student Name :
                      </Label>
                      <div>
                        <select
                          className="select-update"
                          style={{ width: "100%" }}
                          name="student"
                          onChange={(e) => {
                            setInput({ ...input, student: e.target.value });
                          }}
                        >
                          <option style={{ backgroundColor: "" }}>Choose</option>
                          {map(tableData, (item, key) => (
                            <option value={item.id}>{item.full_name}</option>
                          ))}
                        </select>
                      </div>
                    </FormGroup>
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
                      <div>
                        <select
                          className="select-update"
                          name="course"
                          style={{ width: "100%" }}
                          onChange={(e) => {
                            setInput({ ...input, course:e.target.value });
                          }}
                        >
                          <option style={{ backgroundColor: "" }}>Choose</option>
                          {map(tableData2, (item, key) => (
                            <option value={item.id}>{item.course_name}</option>
                          ))}
                        </select>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label
                        style={{
                          fontWeight: "bold",
                          fontSize: "12px",
                          color: "#6C6C6C",
                        }}
                      >
                        Progress :
                      </Label>
                      <Input
                        style={{ backgroundColor: "#c5c1c1d7" }}
                        placeholder="Eg: 8/10"
                        type="text"
                        name="progress"
                        onChange={(e) =>
                          setInput({ ...input, progress: e.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    paddingRight: "15px",
                    alignItems: "end",
                  }}
                >
                  <div style={{ paddingRight: "15px" }}>
                    <Link to={"/studentcourse"}>
                      {" "}
                      <Button
                        style={{}}
                        className="back-btn-course-update"
                        color="secondary"
                        size=""
                      >
                        Back
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <Button
                      className="update-btn-course-update"
                      color="primary"
                      type="submit"
                    >
                      Create
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default CreateStudentCourse;
