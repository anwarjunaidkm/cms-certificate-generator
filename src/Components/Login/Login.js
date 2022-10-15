import React from "react";
import "./Login.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    
    <section className="section">
      <Container className="containerLogin">
        <div className="box">
        <Link to={'/'}>  <div className="edisonLogin ">EDISONVALLEY</div></Link>
          
          <div className="input ">
                <h3>Login</h3>
          <div class="form-outline mb-4">
            <label className="label">Username</label>
            <input type="text" placeholder="Username" class="form-control" />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label label">Password</label>
            <input
              type="password"
              placeholder="Password"
              class="form-control"

            />
            
            <button type="button" class="btn btn-primary loginBtn">Login</button>

            <p>You don’t have an account ? <span>Register</span> </p>


          </div>
          <footer className="footer">
        © 2020 Edisonvalley.  Design & Develop by Osperb 
        </footer>
        </div>
        </div>
       
         
      </Container>

    </section>
  );
};

export default Login;
