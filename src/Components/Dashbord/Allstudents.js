import React, { useEffect } from "react";
import {Container,Table,Pagination,PaginationItem,PaginationLink} from 'reactstrap'
import "./Allstudents.css"
import {BiSearchAlt} from 'react-icons/bi'
import {BsFillEyeFill} from 'react-icons/bs'
import { useDispatch,useSelector} from 'react-redux'
import { studentApi } from "../../Store/Student/useApi";
import { map } from 'lodash'
import { Link } from "react-router-dom";



const Allstudents = () => {
  const dispatch=useDispatch()

  const {   allstudent } = useSelector((state) => ({
    allstudent:state.StudentReducer.allstudent,
}));


  useEffect(()=>{
    dispatch(studentApi())
  },[])

  const tableData =allstudent?.results;

 
// console.log(allstudent);

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
              {map(tableData,(item,key)=>(


                  <tr key={key}>
                <th scope="row">{key +1}</th>
                <td>{item?.full_name}</td>
                <td>{item?.phone}</td>
                <td>{item?.email}</td>
                
                <td><Link to={`/studentview/${item?.id}`}> <BsFillEyeFill /></Link></td>
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

export default Allstudents;
