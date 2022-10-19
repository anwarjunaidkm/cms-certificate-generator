import React from 'react'
import './AllcourseCategory.css'
import {Container,Table,Pagination,PaginationItem,PaginationLink} from 'reactstrap'
import {RiCloseFill} from 'react-icons/ri'
import {BiPencil} from 'react-icons/bi'


const AllcourseCategory = () => {
  return (
    <section className='allcourse-category-section'>
              <h5 style={{ paddingLeft: "170px", paddingTop: "15px" }}>ALL COURSES CATEGORY</h5>

        <Container className="container-allcourse-category">
            <div className='allcourse-category-box'style={{padding:'15px'}} >
            <Table  responsive>
            <thead>
              <tr style={{fontSize:'13px'}}>
                <th>#</th>
                <th>ID</th>
                <th>Course Category Name</th>
                <th>Designation</th>
                
                <th>Action</th>
              </tr>
            </thead>
            <tbody  style={{fontSize:'13px',color:'gray'}}>
              <tr>
                <th scope="row">1</th>
                <td>M1F2201FM01</td>
                <td>React</td>
                <td>Lorem, ipsum</td>
               
                <td style={{display:'flex'}}>
                     <div style={{color:'blue',fontSize:'18px' ,cursor:'pointer'}}><BiPencil /></div>
                     <div style={{color:'red',fontSize:'20px',cursor:'pointer'}}><RiCloseFill /></div>
                    
                
                
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>M1F2201FM01</td>
                <td>React</td>
                <td>Lorem, ipsum</td>
               
                <td style={{display:'flex'}}>
                     <div style={{color:'blue',fontSize:'18px' ,cursor:'pointer'}}><BiPencil /></div>
                     <div style={{color:'red',fontSize:'20px',cursor:'pointer'}}><RiCloseFill /></div>
                    
                
                
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>M1F2201FM01</td>
                <td>React</td>
                <td>Lorem, ipsum</td>
               
                <td style={{display:'flex'}}>
                     <div style={{color:'blue',fontSize:'18px' ,cursor:'pointer'}}><BiPencil /></div>
                     <div style={{color:'red',fontSize:'20px',cursor:'pointer'}}><RiCloseFill /></div>
                    
                
                
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>M1F2201FM01</td>
                <td>React</td>
                <td>Lorem, ipsum</td>
               
                <td style={{display:'flex'}}>
                     <div style={{color:'blue',fontSize:'18px' ,cursor:'pointer'}}><BiPencil /></div>
                     <div style={{color:'red',fontSize:'20px',cursor:'pointer'}}><RiCloseFill /></div>
                    
                
                
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>M1F2201FM01</td>
                <td>React</td>
                <td>Lorem, ipsum</td>
               
                <td style={{display:'flex'}}>
                     <div style={{color:'blue',fontSize:'18px' ,cursor:'pointer'}}><BiPencil /></div>
                     <div style={{color:'red',fontSize:'20px',cursor:'pointer'}}><RiCloseFill /></div>
                    
                
                
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>M1F2201FM01</td>
                <td>React</td>
                <td>Lorem, ipsum</td>
               
                <td style={{display:'flex'}}>
                     <div style={{color:'blue',fontSize:'18px' ,cursor:'pointer'}}><BiPencil /></div>
                     <div style={{color:'red',fontSize:'20px',cursor:'pointer'}}><RiCloseFill /></div>
                    
                
                
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>M1F2201FM01</td>
                <td>React</td>
                <td>Lorem, ipsum</td>
               
                <td style={{display:'flex'}}>
                     <div style={{color:'blue',fontSize:'18px' ,cursor:'pointer'}}><BiPencil /></div>
                     <div style={{color:'red',fontSize:'20px',cursor:'pointer'}}><RiCloseFill /></div>
                    
                
                
                </td>
              </tr>
              
              
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
   
  )
}

export default AllcourseCategory