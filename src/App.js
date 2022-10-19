import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Home/Footer';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Login from './Components/Login/Login';
import Dashbord from './Components/Dashbord/Dashbord';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Allstudents from './Components/Dashbord/Allstudents';
import AllstudentsPage from './Pages/AllstudentsPage';
import UpdateStudentPage from './Pages/UpdateStudentPage';
import CreateStudentPage from './Pages/CreateStudentPage';
import AllcoursesPage from './Pages/AllcoursesPage';
import UpdateCoursesPage from './Pages/UpdateCoursesPage';
import { CreateCoursePage } from './Pages/CreateCoursePage';
import CreateCategoryPage from './Pages/CreateCategoryPage';
import UpdateCategoryPage from './Pages/UpdateCategoryPage'
import AllcourseCategoryPage from './Pages/AllcourseCategoryPage';
import Studentview from './Components/Dashbord/Studentview';



function App() {
  return (
    <div className="App">
      
      
      

       <Router>
        <Routes>

          <Route path='/' exact element={ <Home />   }></Route>          
          <Route path='login' element={<Login />}></Route>
          <Route path='dashbord' element={<Dashbord />}></Route>
          <Route path='allstudents' element={<AllstudentsPage />}></Route>
          <Route path='updatestudent' element={<UpdateStudentPage />}></Route>
          <Route path='createstudent' element={<CreateStudentPage />}></Route>
          <Route path='allcourses' element={<AllcoursesPage />}></Route>
          <Route path='updatecourses' element={<UpdateCoursesPage />}></Route>
          <Route path='createcourses' element={<CreateCoursePage />}></Route>
          <Route path='createcategory' element={<CreateCategoryPage />}></Route>
          <Route path='updatecategory' element={<UpdateCategoryPage />}></Route>
          <Route path='categorycourse' element={<AllcourseCategoryPage />}></Route>
          <Route path='studentview' element={<Studentview />}></Route>

          



        </Routes>


       </Router>

     
    </div>
  );
}

export default App;
