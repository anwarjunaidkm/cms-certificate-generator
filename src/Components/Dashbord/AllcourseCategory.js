import React, { useEffect } from 'react'
import './AllcourseCategory.css'
import {Container,Table,Pagination,PaginationItem,PaginationLink} from 'reactstrap'
import {RiCloseFill} from 'react-icons/ri'
import {BiPencil} from 'react-icons/bi'
import {BsFillEyeFill} from 'react-icons/bs'
import {ImCross} from 'react-icons/im'
import {FaPen} from 'react-icons/fa'

import { Link ,useNavigate,useParams} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { allcoursecategoryApi, deleteCategoryApi } from '../../Store/Category/useApi'
import { map } from 'lodash'


const AllcourseCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params=useParams()
  const deletecategoryHandle =(id)=>{
    dispatch(deleteCategoryApi(id))

  }
  const { allcategory } = useSelector((state) => ({
    allcategory: state.CategoryReducer.allcoursecategory,
  }));

  useEffect(() => {
    dispatch(allcoursecategoryApi());
  }, [dispatch]);
  const courseTable = allcategory?.results;
  console.log(courseTable);


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
};

export default AllcourseCategory