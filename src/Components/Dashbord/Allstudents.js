import React from "react";
import {Container,Table,Pagination,PaginationItem,PaginationLink} from 'reactstrap'
import "./Allstudents.css"
import {BiSearchAlt} from 'react-icons/bi'

const Allstudents = () => {
  return (

    <section className="allstudent-section">
         <h5 style={{paddingLeft:'14px',paddingTop:"15px"}}>STUDENTS</h5>
        <Container className="containerAllstudent">


          


            <div className="box-table" >
           
            <div className="input-search">
             <input   placeholder="Search..!"  type="text" style={{borderRadius:'15px',borderWidth:'1px',paddingLeft:'8px',outline:'none' }}/>
        </div>
            <div className="showentry">
                <p style={{margin:'0',color:'gray',fontSize:'12px' }}>Show</p>
                <input type="text"  style={{width: '28px', height: '13px',margin:'4px'}} />

                <p style={{margin:'0',color:'gray',fontSize:'12px'}}>entries</p>
            </div>

            <Table  className="allstudents-table" responsive size="sm" >
          <thead>
            <tr style={{fontSize:'12px'}}>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Joining Date</th>
              <th>DOB</th>
              <th>Designation</th>
              <th>Photo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{fontSize:'12px',color:'gray'}}>
            <tr>
              <th scope="row">1</th>
              <td>Anwarjunaid km</td>
              <td>9746639178</td>
              <td>ajvly@gmail.com</td>
              <td>19 Jan, 2022</td>
              <td>07 May, 2022</td>
              <td>Developer</td>
              <td>
                <img src="" alt="eror" />
              </td>
              <td>view</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Anwarjunaid km</td>
              <td>9746639178</td>
              <td>ajvly@gmail.com</td>
              <td>19 Jan, 2022</td>
              <td>07 May, 2022</td>
              <td>Developer</td>
              <td>
                <img src="" alt="eror" />
              </td>
              <td>view</td>
            </tr>
            <tr>
              <th scope="row">3</th>

              <td>Anwarjunaid km</td>
              <td>9746639178</td>
              <td>ajvly@gmail.com</td>
              <td>19 Jan, 2022</td>
              <td>07 May, 2022</td>
              <td>Developer</td>
              <td>
                <img src="" alt="eror" />
              </td>
              <td>view</td>
            </tr>
            <tr>
              <th scope="row">3</th>

              <td>Anwarjunaid km</td>
              <td>9746639178</td>
              <td>ajvly@gmail.com</td>
              <td>19 Jan, 2022</td>
              <td>07 May, 2022</td>
              <td>Developer</td>
              <td>
                <img src="" alt="eror" />
              </td>
              <td>view</td>
            </tr>            
            <tr>
              <th scope="row">3</th>

              <td>Anwarjunaid km</td>
              <td>9746639178</td>
              <td>ajvly@gmail.com</td>
              <td>19 Jan, 2022</td>
              <td>07 May, 2022</td>
              <td>Developer</td>
              <td>
                <img src="" alt="eror" />
              </td>
              <td>view</td>
            </tr>            
            <tr>
              <th scope="row">3</th>

              <td>Anwarjunaid km</td>
              <td>9746639178</td>
              <td>ajvly@gmail.com</td>
              <td>19 Jan, 2022</td>
              <td>07 May, 2022</td>
              <td>Developer</td>
              <td>
                <img src="" alt="eror" />
              </td>
              <td>view</td>
            </tr>            
            <tr>
              <th scope="row">3</th>

              <td>Anwarjunaid km</td>
              <td>9746639178</td>
              <td>ajvly@gmail.com</td>
              <td>19 Jan, 2022</td>
              <td>07 May, 2022</td>
              <td>Developer</td>
              <td>
                <img src="" alt="eror" />
              </td>
              <td>view</td>
            </tr>            
            <tr>
              <th scope="row">3</th>

              <td>Anwarjunaid km</td>
              <td>9746639178</td>
              <td>ajvly@gmail.com</td>
              <td>19 Jan, 2022</td>
              <td>07 May, 2022</td>
              <td>Developer</td>
              <td>
                <img src="" alt="eror" />
              </td>
              <td>view</td>
            </tr>            
            <tr>
              <th scope="row">3</th>

              <td>Anwarjunaid km</td>
              <td>9746639178</td>
              <td>ajvly@gmail.com</td>
              <td>19 Jan, 2022</td>
              <td>07 May, 2022</td>
              <td>Developer</td>
              <td>
                <img src="" alt="eror" />
              </td>
              <td>view</td>
            </tr>            
            <tr>
              <th scope="row">3</th>

              <td>Anwarjunaid km</td>
              <td>9746639178</td>
              <td>ajvly@gmail.com</td>
              <td>19 Jan, 2022</td>
              <td>07 May, 2022</td>
              <td>Developer</td>
              <td>
                <img src="" alt="eror" />
              </td>
              <td>view</td>
            </tr>            
            <tr>
              <th scope="row">3</th>

              <td>Anwarjunaid km</td>
              <td>9746639178</td>
              <td>ajvly@gmail.com</td>
              <td>19 Jan, 2022</td>
              <td>07 May, 2022</td>
              <td>Developer</td>
              <td>
                <img src="" alt="eror" />
              </td>
              <td>view</td>
            </tr>            
          </tbody>
        </Table>
            <div className="pageno">

            <Pagination  className="pagemain" aria-label="Page navigation example">
  
  <PaginationItem disabled>
    <PaginationLink className="page-link"
      href="#"
      previous
    />
  </PaginationItem>
  <PaginationItem disabled>
    <PaginationLink  href="#">
      1
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      2
    </PaginationLink>
  </PaginationItem>
  <PaginationItem active>
    <PaginationLink href="#">
      3
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      4
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      5
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      next
    />
  </PaginationItem>

</Pagination>
            </div>

            </div>

        </Container>

    </section>

  );
};

export default Allstudents;
