import { map } from 'lodash';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {Container,Table,Button, Row,Col, Form ,Input,Label,FormGroup,Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap'
import { allcoursecategoryApi } from '../../Store/Category/useApi';
import { createcourseApi } from '../../Store/Course/useApi';


const CreateCourse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({});

  const CreateCourse = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(createcourseApi(input, navigate));
    }
  };
  // console.log(input);
  const { allcategory } = useSelector((state) => ({
    allcategory: state.CategoryReducer.allcoursecategory,
   
  }));
  const courseTable=allcategory.results;
  console.log(courseTable);

  useEffect(() => {
    dispatch(allcoursecategoryApi())
   
  }, [])
  

  return (
    <section className="updateCourses-sectioin">
      <h5 style={{ paddingLeft: "170px", paddingTop: "15px" }}>
        CREATE COURSES
      </h5>

      <Container className="container-updatecourse">
        <div className="updateCourse-box">
          <div>
            <Form onSubmit={CreateCourse} style={{ padding: "18px" }}>
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
                      Course Name :
                    </Label>
                    <Input
                      style={{ backgroundColor: "#c5c1c1d7" }}
                      placeholder="Course name"
                      type="text"
                      name="course_name"
                      onChange={(e) =>
                        setInput({ ...input, course_name: e.target.value })
                      }
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
                      placeholder="Duration"
                      type="text"
                      name="duration"
                      onChange={(e) =>
                        setInput({ ...input, duration: e.target.value })
                      }
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
                        onChange={(e) =>
                          setInput({
                            ...input,
                            course_category: e.target.value,
                          })
                        }
                      >
                        <option style={{ backgroundColor: "" }}>Choose</option>
                        {map(courseTable, (item, key) => (
                          <option value={item.id}>
                            {item.course_category_name}
                          </option>
                        ))}
                      </select>
                    </div>
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
           <Link to={"/allcourses"}>      <Button
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
  );
};

export default CreateCourse