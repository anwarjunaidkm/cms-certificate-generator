import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Col,
  Row,
} from "reactstrap";
import "./Allstudents.css";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { studentApi } from "../../Store/Student/useApi";
import { map, range } from "lodash";
import { Link } from "react-router-dom";

const Allstudents = () => {
  const dispatch = useDispatch();

  const [pages, setPages] = useState(1);

  const { count, allstudent } = useSelector((state) => ({
    allstudent: state.StudentReducer.allstudent,
    count: state.StudentReducer.allstudent.count,
  }));
  // console.log(count);

  useEffect(() => {
    dispatch(studentApi(pages));
  }, [dispatch, pages]); 

  const tableData = allstudent?.results;
  const totalPages = Math.round(count / 10);
  const pageArray = range(1, totalPages + 1);
  // console.log(pageArray);

  return (
    <section className="allstudent-section">
      <h5 style={{ paddingLeft: "14px", paddingTop: "15px" }}>STUDENTS</h5>
      <Container className="containerAllstudent">
        <div className="box-table">
          <div className="input-search">
            <input
              placeholder="Search..!"
              type="text"
              style={{
                borderRadius: "15px",
                borderWidth: "1px",
                paddingLeft: "8px",
                outline: "none",
              }}
            />
          </div>
          <div className="showentry">
            <p style={{ margin: "0", color: "gray", fontSize: "12px" }}>Show</p>
            <input
              type="text"
              style={{ width: "28px", height: "13px", margin: "4px" }}
            />

            <p style={{ margin: "0", color: "gray", fontSize: "12px" }}>
              entries
            </p>
          </div>

          <Table className="allstudents-table" responsive size="sm">
            <thead>
              <tr style={{ fontSize: "15 px" }}>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "18px", color: "gray" }}>
              {map(tableData, (item, key) => (
                <tr key={key}>
                  <th scope="row">{key + 1}</th>
                  <td>{item?.full_name}</td>
                  <td>{item?.phone}</td>
                  <td>{item?.email}</td>

                  <td>
                    <Link to={`/studentview/${item?.id}`}>
                      {" "}
                      <BsFillEyeFill />
                    </Link>
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
                <Col style={{cursor:"pointer"}}
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

export default Allstudents;
