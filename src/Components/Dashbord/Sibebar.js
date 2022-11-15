import React from 'react'
import './Sidebar.css'
import { NavDropdown } from 'react-bootstrap'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaHouseUser, FaUserCircle,FaBookReader } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';
import{Link} from 'react-router-dom'







function Sibebar() {
  return (
    // <div className="Container">
      <div className="sidebar">
     


        {/* <Sidebar className='side'>
        <h3 className='dashHedaing' style={{color:'gray'}}>Dashbord</h3>
      
          <Menu className='menu' >
        <SubMenu  label="Students  <FaHouseUser />" className='submenu1'>
              <MenuItem className='menuitem1'> All Students</MenuItem>
              <MenuItem className='menuitem1'> Update Student</MenuItem>
              <MenuItem className='menuitem1'> Create Student</MenuItem>
            </SubMenu>
            <SubMenu label="Courses" className='submenu2'>
              <MenuItem className='menuitem2'> All Courses </MenuItem>
              <MenuItem className='menuitem2'> Update Courses</MenuItem>
              <MenuItem className='menuitem2'> Create Courses</MenuItem>
            </SubMenu>
            <SubMenu label="Courses Category"className='submenu3' >
              <MenuItem className='menuitem3'> All Courses Category  </MenuItem>
              <MenuItem className='menuitem3'> Update Courses Category</MenuItem>
              <MenuItem className='menuitem3'> Create Courses Category</MenuItem>
            </SubMenu>
           
          
          </Menu>
        </Sidebar>
         */}
<Link to={"/dashbord"}> <h3 style={{textDecoration:'none'}} className='dashHedaing'><i><FaHouseUser /></i> Dashboard</h3></Link>


<ul className="list-items">
                 <li className='head-list'><a href="#"><i><FaUserCircle /> </i>Students</a></li>
                   <li className='sub-list'> <Link to={"/allstudents"}>All Students</Link></li>
                    {/* <li className='sub-list'><Link to={"/updatestudent"}>Update Student</Link></li> */}
                    <li className='sub-list'><Link to={"/createstudent"}>Create Student</Link></li>
           
               <li className='head-list'><a href="#"><i><FaBookReader /> </i>Courses</a></li>
                   <li className='sub-list'><Link to={"/allcourses"}>All Courses </Link></li>
                    {/* <li className='sub-list'><Link to={"/updatecourses"}>Update Courses</Link></li> */}
                    <li className='sub-list'><Link to={"/createcourses"}>Create Courses</Link></li>

               <li className='head-list'><Link to={"#"}><i><BiCategory /> </i>Courses Category</Link></li>
               <li className='sub-list'><Link to={"/categorycourse"}>All Courses Category  </Link></li>
                 {/* <li  className='sub-list'><Link to={"/updatecategory"}>Update Courses Category</Link></li> */}
                 <li className='sub-list'><Link to={"/createcategory"}>Create Courses Category</Link></li>
              
               
            </ul>
            

            









      </div>
      
     
    // </div>
  );
}

export default Sibebar