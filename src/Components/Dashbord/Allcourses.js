import React, { useEffect } from 'react'
// import { Container } from 'react-bootstrap'
import {Container,Table,Pagination,PaginationItem,PaginationLink} from 'reactstrap'
import {RiCloseFill} from 'react-icons/ri'
import {MdEdit} from 'react-icons/md'
import {BiPencil} from 'react-icons/bi'
import './Allcourses.css'
import { useDispatch, useSelector } from 'react-redux'
import { allcourseApi } from '../../Store/Course/useApi'
import { map } from 'lodash'
function Allcourses() {
  const dispatch= useDispatch()
  const {  allcourses } = useSelector((state) => ({
    allcourses: state.CourseReducer.allcourse,
   
  }));
  useEffect(() => {
    dispatch(allcourseApi())  
  }, [])

   console.log(allcourses);
   const tableData = allcourses?.results;
   console.log(tableData);

  

  return (
    <section className="allcourses-section">
      <h5 style={{ paddingLeft: "170px", paddingTop: "15px" }}>ALL COURSES</h5>
      <Container className="container-allcourses">
        <div className="allcourses-box" style={{ padding: "15px" }}>
          <Table responsive>
            <thead>
              <tr style={{ fontSize: "13px" }}>
                <th>#</th>
                {/* <th>ID</th> */}
                <th>Course Name</th>
                <th>Duration</th>
                <th>Course Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "13px", color: "gray" }}>
              {map(tableData, (item, key) => (
                <tr key={key}>
                  <th scope="row">{key+1}</th>
                
                  <td>{item.course_name}</td>
                  <td>{item.duration}</td>
                  <td> {item.course_category}</td>
                  <td style={{ display: "flex" }}>
                    <div
                      style={{
                        color: "blue",
                        fontSize: "18px",
                        cursor: "pointer",
                      }}
                    >
                      <BiPencil />
                    </div>
                    <div
                      style={{
                        color: "red",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                    >
                      <RiCloseFill />
                    </div>
                  </td>
                </tr>
              ))}
               
            </tbody>
          </Table>
          <div className="pageno">
            <Pagination
              className="pagemain"
              aria-label="Page navigation example"
            >
              <PaginationItem disabled>
                <PaginationLink className="page-link" href="#" previous />
              </PaginationItem>
              <PaginationItem disabled>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">5</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" next />
              </PaginationItem>
            </Pagination>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Allcourses