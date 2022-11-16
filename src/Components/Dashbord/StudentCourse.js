import { map } from 'lodash';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {Container,Button,Table,Pagination,PaginationItem,PaginationLink ,Card, Col,Row,Input} from 'reactstrap'
import { allstudentcourseApi, deleteStudentcourseApi } from '../../Store/Student/useApi';
import Layout from '../Layout'

function StudentCourse() {
    const dispatch = useDispatch()
    const {  allstudentcourse } = useSelector((state) => ({
        allstudentcourse: state.StudentReducer.allstudentcourse,
       
      }));
      useEffect(() => {
        dispatch(allstudentcourseApi());
      }, [dispatch]); 

      const tableData = allstudentcourse?.results;
      console.log(tableData);

      const deletecourseHandler =(id)=>{
        dispatch(deleteStudentcourseApi(id))
    
       }
    
  return (
    <Layout>
      <section>
        <Container>

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
              <Link to={'/createstudentcourse'}>   <Button
                    style={{ backgroundColor: "#34C38F", border: "none" }}
                  >
                    + Create New Course
                  </Button></Link> 
                </div>
              </div>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Course Name</th>
                    <th>Progress</th>
                    <th>Update Progress</th>
                    <th >Action</th>
                  </tr>
                </thead>
                <tbody>
                    {map(tableData,(item,key)=>(

                        <tr>
                        <td scope="row">{item.student_name}</td>
                        <td>{item.course_name}</td>
                        <td>{item.progress}</td>
                        <td>
                        <Input className="w-50" type="select"></Input>
                        </td>
                        <td>
                            <div style={{display:'flex'}}>
                                <div >
                                    {/* < Button style={{backgroundColor:'blue', border:'none',width:'60px',height:'30px' ,fontSize:'12px'}}>View</Button> */}
                                </div>
                                <div style={{paddingLeft:'15px'}}>
                                    <Button onClick={()=>{deletecourseHandler(item?.id)}} style={{backgroundColor:'red',border:'none',width:'60px',height:'30px',fontSize:'12px'}}>Delete</Button>
                                </div>
                            </div>

                        </td>
                        </tr>

                    ))}
                  
                 
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

export default StudentCourse