import React, { useEffect } from 'react'
import Layout from '../Layout'
import './SingleCourseview.css'
import {Container,Button,Table,Pagination,PaginationItem,PaginationLink ,Card, Col,Row,Input} from 'reactstrap'

import pro from '../Dashbord/pro.jpg'
import { useDispatch,useSelector} from 'react-redux'
import { deleteStudentApi, singleviewApi } from '../../Store/Student/useApi'
import { Link, useNavigate, useParams } from "react-router-dom";
import {AiOutlineMail,AiOutlinePhone } from 'react-icons/ai'
import {GrLocationPin } from 'react-icons/gr'
import {BsCalendarDate } from 'react-icons/bs'
import { singlecoursecategoryApi } from '../../Store/Category/useApi'


const SingleCourseview = () => {
    const dispatch=useDispatch()
  const navigate=useNavigate()
  const params =useParams()
  const {   singleCourse } = useSelector((state) => ({
    singleCourse:state.CategoryReducer.singlecoursecategory,
    
}));

useEffect(()=>{
    dispatch(singlecoursecategoryApi(params.id))

  },[]);


  return (


    <Layout>
      <section className="student-view-section">
        <h5 style={{ paddingLeft: "10px", paddingTop: "15px" }}>
          SINGLE COURSE CATEGORY
        </h5>
        <Container className="container-student-view">
          <Card className="first-card" style={{ width: "60%", height: "auto" }}>
            <Row>
              <Col md="6">
                <h3 style={{ color: "rgb(97 91 91)", fontSize: "20px" }}>
                  name
                </h3>
                <p style={{ color: "gray", marginBottom: "0" }}> <span style={{color:"black"}}>Joining Date : </span> </p>
                <p style={{ color: "gray", marginBottom: "0" }}> <span style={{color:"black"}}>Date of Leaving : </span>  </p>
                <p style={{ color: "gray",marginBottom:"0" }}> <GrLocationPin /> adresss</p>

               
              </Col>
              <Col md="6">
                <div>
                  <img
                    style={{ with: "100px", height: "100px" }}
                    src={pro}
                    alt=""
                  />
                </div>
                <p style={{ color: "gray" ,paddingTop:'10px',marginBottom:"0" }}> designation</p>
                <p style={{ color: "gray", marginBottom: "0" }}> <span style={{color:"black"}}> <BsCalendarDate /> </span> dob</p>

                

              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div>
                  <h5 style={{ color: "rgb(97 91 91)", fontSize: "18px" }}>
                    Contact Details :
                  </h5>
                  <p style={{ color: "gray", marginBottom: "0" }}>
                  <span style={{color:"black"}}> <AiOutlineMail />  </span> : email
                  </p>
                     <p style={{ color: "gray" }}>
                     <span style={{color:"black"}}><AiOutlinePhone /> :</span> phine</p>
                 
                 
                
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
                 
                >
                  Delete
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
          </Card>

          


          
        </Container>
      </section>
     
     
    </Layout>
    
  )
}

export default SingleCourseview