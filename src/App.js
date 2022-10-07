import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Home/Footer';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Login from './Components/Login/Login';


function App() {
  return (
    <div className="App">
      
      
      

       <Router>
        <Routes>

          <Route path='/' exact element={ <Home />   }></Route>
          <Route path='home'  element={ <Footer />  }></Route>
          
          <Route path='login' element={<Login />}></Route>



        </Routes>


       </Router>

     
    </div>
  );
}

export default App;
