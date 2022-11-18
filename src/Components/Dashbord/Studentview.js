import React, { useEffect } from 'react'
import Layout from '../Layout'
import {Container,Button,Table,Pagination,PaginationItem,PaginationLink ,Card, Col,Row,Input} from 'reactstrap'
import './Studentview.css'
import pro from '../Dashbord/pro.jpg'
import { useDispatch,useSelector} from 'react-redux'
import { deleteStudentApi, singleviewApi } from '../../Store/Student/useApi'
import { Link, useNavigate, useParams } from "react-router-dom";
import {AiOutlineMail,AiOutlinePhone } from 'react-icons/ai'
import {GrLocationPin } from 'react-icons/gr'
import {BsCalendarDate } from 'react-icons/bs'
import { map } from 'lodash'




const Studentview = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const params =useParams()
  const {   single ,deletes } = useSelector((state) => ({
    single:state.StudentReducer.singleview,
    deletes:state.StudentReducer.deleteStudent,
}));
// console.log(single);
const student_courses = single.student_courses


console.log(single);

  useEffect(()=>{
    dispatch(singleviewApi(params.id))

  },[]);

  const deleteStudentHandler = () => {
    dispatch(deleteStudentApi(params.id, navigate));
  };

  return (
    <Layout>
      <section className="student-view-section">
        <h5 style={{ paddingLeft: "10px", paddingTop: "15px" }}>
          STUDENT VIEW
        </h5>
        <Container className="container-student-view">
          <Card className="first-card" style={{ width: "60%", height: "auto" }}>
            <Row>
              <Col md="6">
                <h3 style={{ color: "rgb(97 91 91)", fontSize: "20px" }}>
                  {single.full_name}
                </h3>
                <p style={{ color: "gray", marginBottom: "0" }}>
                  {" "}
                  <span style={{ color: "black" }}>Joining Date : </span>{" "}
                  {single.start_date}
                </p>
                <p style={{ color: "gray", marginBottom: "0" }}>
                  {" "}
                  <span style={{ color: "black" }}>
                    Date of Leaving :{" "}
                  </span>{" "}
                  {single.end_date}
                </p>
                <p style={{ color: "gray", marginBottom: "0" }}>
                  {" "}
                  <GrLocationPin /> {single.address}{" "}
                </p>
              </Col>
              <Col md="6">
                <div>
                  <img
                    style={{ with: "100px", height: "100px" }}
                    src={pro}
                    alt=""
                  />
                </div>
                <p
                  style={{
                    color: "gray",
                    paddingTop: "10px",
                    marginBottom: "0",
                  }}
                >
                  {" "}
                  {single.designation}
                </p>
                <p style={{ color: "gray", marginBottom: "0" }}>
                  {" "}
                  <span style={{ color: "black" }}>
                    {" "}
                    <BsCalendarDate />{" "}
                  </span>{" "}
                  {single.dob}
                </p>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div>
                  <h5 style={{ color: "rgb(97 91 91)", fontSize: "18px" }}>
                    Contact Details :
                  </h5>
                  <p style={{ color: "gray", marginBottom: "0" }}>
                    <span style={{ color: "black" }}>
                      {" "}
                      <AiOutlineMail />{" "}
                    </span>{" "}
                    : {single.email}
                  </p>
                  <p style={{ color: "gray" }}>
                    <span style={{ color: "black" }}>
                      <AiOutlinePhone /> :
                    </span>{" "}
                    {single.phone}
                  </p>
                </div>
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
                <Button
                  style={{ backgroundColor: "red" }}
                  className="back-btn-course-update "
                  color=""
                  size=""
                  onClick={deleteStudentHandler}
                >
                  Delete
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => navigate(`/updatestudent/${params.id}`)}
                  className="update-btn-course-update"
                  color="primary"
                  size=""
                >
                  Update
                </Button>
              </div>
            </div>
          </Card>

          <Row>
            {map(student_courses, (item, key) => (
              <Col key={key} md="3">
                <Card className="card" style={{ marginTop: "10px" }}>
                  <h3 style={{ fontSize: "15px", padding: "10px" }}>
                    Course Name :{" "}
                    <span style={{ color: "red" }}>
                      {item.course.course_name}
                    </span>
                  </h3>
                  <h3 style={{ fontSize: "15px", padding: "10px" }}>
                    Duration : <span> {item.course.duration}</span>
                  </h3>
                  <h3 style={{ fontSize: "15px", padding: "10px" }}>
                    Progress : <span> {item.progress}</span>
                  </h3>
                  <h3 style={{ fontSize: "15px ", padding: "10px" }}>
                    Course Category Name :{" "}
                    <span>
                      {" "}
                      {item.course.course_category.course_category_name}
                    </span>
                  </h3>
                  <h3 style={{ fontSize: "15px", padding: "10px" }}>
                    Desgination :{" "}
                    <span> {item.course.course_category.designation}</span>
                  </h3>
                </Card>
              </Col>
            ))}
          </Row>
          <div style={{ paddingTop: "10px" ,paddingBottom: "10px" ,display:'flex',justifyContent:'center' }}>
            <Link to={"/createstudentcourse"}>
              {" "}
              <Button style={{ backgroundColor: "#34C38F", border: "none" ,marginRight:'12px'}}>
                + Create New Course
              </Button>
            </Link>

            <Link to={"/createstudentcourse"}>
              {" "}
              <Button style={{ backgroundColor: "#34C38F", border: "none" }}>
                Certificate
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export default Studentview