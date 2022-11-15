import React, { useEffect, useState } from 'react'
import './UpdateCourses.css'
import {Container,Table,Button, Row,Col, Form ,Input,Label,FormGroup,Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { singlecourseApi, updatecourseApi } from '../../Store/Course/useApi';


export const UpdateCourses = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params=useParams()
  const [store, setStore] = useState  ({});
  const catId = params.id;
  const {   singlecourse  } = useSelector
  
  ((state) => ({
    singlecourse:state.CourseReducer.singlecourse,
   
}));
console.log(singlecourse);

useEffect(()=>{
  dispatch(singlecourseApi(params.id))
},[]);
useEffect(() => {
  setStore(singlecourse);
}, [singlecourse]);

const Handle =(e)=>{
  setStore({
  ...store,
  [e.target.name]:e.target.value
})
}
const handlecourseUpdate =(e) =>{
  e.preventDefault();
  dispatch(updatecourseApi(catId,store,navigate));

 }





  return (
    <section className="updateCourses-sectioin">
      <h5 style={{ paddingLeft: "170px", paddingTop: "15px" }}>
        UPDATE COURSES
      </h5>

      <Container className="container-updatecourse">
        <div className="updateCourse-box">
          <div>
            <Form  onSubmit={handlecourseUpdate} style={{ padding: "18px" }}>
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
                      placeholder="Course Name"
                      type="text"
                      name='course_name'
                      value={store?.course_name}
                      onChange={(e) => Handle(e)}
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
                      name='duration'
                      onChange={(e) => Handle(e)}
                      value={store?.duration}
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
                    <Input
                      style={{ backgroundColor: "#c5c1c1d7" }}
                      placeholder="Duration"
                      type="text"
                      name='course_category'
                      
                      value={store?.course_category}
                    />

                      {/* <select
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
                      </select> */}
                    </div>
                  </FormGroup>

                  
                </Col>
               

              </Row>
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
                    type='submit'
                  >
                    Update
                  </Button>
                </div>
              </div>
              
            </Form>
          </div>
          
        </div>
         
      </Container>
    </section>
  );
}
