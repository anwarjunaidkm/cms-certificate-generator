import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Container,Table,Button, Row,Col, Form ,Input,Label,FormGroup,Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap'
import { createcourseCategoryApi } from '../../Store/Category/useApi'


function CreateCategory() {

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const[input,setInput]=useState()
  

  const createCoursehandler =(e)=>{
    e.preventDefault()
    if(input){
      dispatch(createcourseCategoryApi(input,navigate))
      console.log(input);
    }


  }







  return (
    <section className='updateCategory-section'>
         <h5 style={{ paddingLeft: "170px", paddingTop: "15px" }}>
         CREATE COURSE CATEGORY
      </h5>
    <Container className="category-update-container">
        <div className='category-update-box'>


        <div>
            <Form onSubmit={createCoursehandler} style={{ padding: "18px" }}>
              <Row style={{height:'400px'}}>
                <Col md={6}>
                  <FormGroup>
                    <Label
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "#6C6C6C",
                      }}
                    >
                      Course Category :
                    </Label>
                    <Input
                      style={{ backgroundColor: "#c5c1c1d7" }}
                      name="course_category_name"
                    
                      type="text"
                      placeholder='Enter a course Category'
                      onChange={(e)=>setInput({...input,course_category_name:e.target.value})}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "#6C6C6C",
                      }}
                    >
                      Designation :
                    </Label>
                    <Input
                      style={{ backgroundColor: "#c5c1c1d7" }}
                      type="text"
                      placeholder='Enter a designation'
                      name='designation'
                      onChange={(e)=>setInput({...input,designation:e.target.value})}
                    />
                  </FormGroup>
                 

                  
                </Col>
               

              </Row>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingRight: "15px",
                  alignItems:'end'
                }}
              >
                <div style={{ paddingRight: "15px" }}>
                  <Button
                    style={{}}
                    className="back-btn-course-update"
                    color="secondary"
                    size=""
                  >
                    Back
                  </Button>
                </div>
                <div>
                  <Button
                    className="update-btn-course-update"
                    color="primary"
                    
                    type="submit"
                  >
                    Create
                  </Button>
                </div>
              </div>
              
            </Form>
          </div>
          

        </div>
    </Container>
    </section>
  )
}

export default CreateCategory