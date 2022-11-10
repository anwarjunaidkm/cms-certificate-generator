import React, { useEffect } from 'react'
import './AllcourseCategory.css'
import {Container,Table,Pagination,PaginationItem,PaginationLink, Row, Col} from 'reactstrap'
import {RiCloseFill} from 'react-icons/ri'
import {BiPencil} from 'react-icons/bi'
import {BsFillEyeFill} from 'react-icons/bs'
import {ImCross} from 'react-icons/im'
import {FaPen} from 'react-icons/fa'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";


import { Link ,useNavigate,useParams} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { allcoursecategoryApi, deleteCategoryApi } from '../../Store/Category/useApi'
import { map ,range} from 'lodash'
import { useState } from 'react'


const AllcourseCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pages, setPages] = useState(1);

  const { allcategory,count } = useSelector((state) => ({
    allcategory: state.CategoryReducer.allcoursecategory,
    count: state.CategoryReducer.allcoursecategory.count,
  }));
  const totalPages = Math.round(count / 10);
  const pageArray = range(1, totalPages + 1);

  const params=useParams()
  const deletecategoryHandle =(id)=>{
    dispatch(deleteCategoryApi(id))

  }
console.log(count);



  useEffect(() => {
    dispatch(allcoursecategoryApi(pages));
  }, [dispatch,pages]);
  const courseTable = allcategory?.results;
  // console.log(courseTable);


  return (
    <section className="allcourse-category-section">
      <h5 style={{ paddingLeft: "170px", paddingTop: "15px" }}>
        ALL COURSES CATEGORY
      </h5>

      <Container className="container-allcourse-category">
        <div className="allcourse-category-box" style={{ padding: "15px" }}>
          <Table responsive>
            <thead>
              <tr style={{ fontSize: "13px" }}>
                <th>#</th>

                {/* <th>ID</th> */}
                <th>Course Category Name</th>
                <th>Designation</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "18px", color: "gray" }}>
              {map(courseTable, (item, key) => (
                <tr key={key}>
                  <th scope="row">{key + 1}</th>
                  {/* <td>{item.id}</td> */}

                  <td>{item.course_category_name}</td>
                  <td>{item.designation}</td>

                  <td style={{ display: "flex" }}>
                    <div
                      style={{
                        color: "red",
                        fontSize: "18px",
                        cursor: "pointer",
                      }}
                    >
                      <Link to={`/updatecategory/${item?.id}`}>
                        {" "}
                        <FaPen />
                      </Link>
                      
                        {" "}
                        <ImCross   onClick={()=>{deletecategoryHandle(item?.id)}} style={{color:"red"}}/>
                      
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="pageno">
          <Row>
              <Col>
                <AiOutlineArrowLeft onClick={() => setPages(pages-1)} />
              </Col>
              {map(pageArray, (page) => (
                <Col
                className={pages === page && "active"}
                onClick={() => setPages(page)}
                
                // {console.log(page)}
                  >
                    {page}
                  </Col>
                    ))}

              <Col>
                <AiOutlineArrowRight 
                onClick={() => setPages(pages+1)} />
              </Col>
            </Row>
            
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AllcourseCategory