import React, { useEffect, useState } from 'react'
import './UpdateCategory.css'
import {Container,Table,Button, Row,Col, Form ,Input,Label,FormGroup,Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { singlecategoryApi, updatecategoryApi } from '../../Store/Category/useApi';


const UpdateCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params=useParams()
  const [store, setStore] = useState  ({});
  const catId = params.id;


  const {   singlecategory  } = useSelector((state) => ({
    singlecategory:state.CategoryReducer.singlecategory,
   
}));

// console.log(singlecategory);

  useEffect(()=>{
    dispatch(singlecategoryApi(params.id))
  },[]);
  useEffect(() => {
    setStore(singlecategory);
  }, [singlecategory]);

  const Handle = (e)=>{
    setStore({
      ...store,
      [e.target.name]:e.target.value
    })
  }
  
   const handleUpdate =(e) =>{
    e.preventDefault();
    dispatch(updatecategoryApi(catId,store,navigate));



   }




  



  return (
    <section className='updateCategory-section'>
         <h5 style={{ paddingLeft: "170px", paddingTop: "15px" }}>
         UPDATE COURSE CATEGORY
      </h5>
    <Container className="category-update-container">
        <div className='category-update-box'>


        <div>
            <Form  onSubmit={(e)=>handleUpdate(e)} style={{ padding: "18px" }}>
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
                      placeholder='Enter a course Category'
                      type="text"
                      value={store?.course_category_name}
                      name="course_category_name"
                      onChange={(e) => Handle(e)}
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
                      value={store?.designation}
                      name="designation"
                      onChange={(e) => Handle(e)}


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
          <Link to={"/categorycourse"}>       <Button
                    style={{}}
                    className="back-btn-course-update"
                    color="secondary"
                    size=""
                  >
                    Back
                  </Button>
                  </Link> 
                </div>
                <div>
                  <Button
                    className="update-btn-course-update"
                    color="primary"
                    size=""
                    type='submit'
                  >
                    Update
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

export default UpdateCategory