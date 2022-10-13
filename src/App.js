import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Home/Footer';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Login from './Components/Login/Login';
import Dashbord from './Components/Dashbord/Dashbord';
import { ProSidebarProvider } from 'react-pro-sidebar';



function App() {
  return (
    <div className="App">
      
      
      

       <Router>
        <Routes>

          <Route path='/' exact element={ <Home />   }></Route>          
          <Route path='login' element={<Login />}></Route>
          <Route path='dashbord' element={<Dashbord />}></Route>



        </Routes>


       </Router>

     
    </div>
  );
}

export default App;
