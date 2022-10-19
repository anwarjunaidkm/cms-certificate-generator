import React from 'react'
import Layout from '../Layout'
import {Container,Button,Table,Pagination,PaginationItem,PaginationLink ,Card, Col,Row,Input} from 'reactstrap'
import './Studentview.css'
import pro from '../Dashbord/pro.jpg'

const Studentview = () => {
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
                  ANWAR JUNAID KM
                </h3>
                <p style={{ color: "gray", marginBottom: "0" }}>13/23/1998</p>
                <p style={{ color: "gray" }}>
                  Choloor, Kodur Post - 676504, Malappuram, Kerala.9846643245
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
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div>
                  <h5 style={{ color: "rgb(97 91 91)", fontSize: "20px" }}>
                    Contact Details :
                  </h5>
                  <p style={{ color: "gray", marginBottom: "0" }}>
                    Email : lorem@gmail.com{" "}
                  </p>
                  <p style={{ color: "gray" }}>Mobile : 123456789 </p>
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

          <div className="banner-main" style={{ paddingTop: "30px" }}>
          <div className="card-div">
            <Card className="table-card shadow-lg p-3 mb-5 bg-white rounded">
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <h5 className="banner-heading">Student Course</h5>
                </div>
                <div>
                  <Button
                    style={{ backgroundColor: "#34C38F", border: "none" }}
                  >
                    + Create New Course
                  </Button>
                </div>
              </div>
              <Table responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Course Name</th>
                    <th>Progress</th>
                    <th>Update Progress</th>
                    <th >Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">RE12</td>
                    <td>react</td>
                    <td>Pending</td>
                    <td>
                      <Input className="w-50" type="select"></Input>
                    </td>
                    <td>
                        <div style={{display:'flex'}}>
                            <div >
                                < Button style={{backgroundColor:'blue', border:'none',width:'60px',height:'30px' ,fontSize:'12px'}}>View</Button>
                            </div>
                            <div style={{paddingLeft:'15px'}}>
                                <Button style={{backgroundColor:'red',border:'none',width:'60px',height:'30px',fontSize:'12px'}}>Delete</Button>
                            </div>
                        </div>

                    </td>
                  </tr>
                  <tr>
                    <td scope="row">FL34</td>
                    <td>Flutter</td>
                    <td>Pending</td>
                    <td>
                      <Input className="w-50" type="select"></Input>
                    </td>
                    <td>
                    <div style={{display:'flex'}}>
                            <div >
                                < Button style={{backgroundColor:'blue', border:'none',width:'60px',height:'30px' ,fontSize:'12px'}}>View</Button>
                            </div>
                            <div style={{paddingLeft:'15px'}}>
                                <Button style={{backgroundColor:'red',border:'none',width:'60px',height:'30px',fontSize:'12px'}}>Delete</Button>
                            </div>
                        </div>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">JV67</td>
                    <td>Java</td>
                    <td>Pending</td>
                    <td>
                      <Input className="w-50" type="select"></Input>
                    </td>
                    <td>
                    <div style={{display:'flex'}}>
                            <div >
                                < Button style={{backgroundColor:'blue', border:'none',width:'60px',height:'30px' ,fontSize:'12px'}}>View</Button>
                            </div>
                            <div style={{paddingLeft:'15px'}}>
                                <Button style={{backgroundColor:'red',border:'none',width:'60px',height:'30px',fontSize:'12px'}}>Delete</Button>
                            </div>
                        </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </div>



          
        </Container>
      </section>
     
     
    </Layout>
  );
}

export default Studentview