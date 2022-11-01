import React, { useState } from "react";
import "./Login.css";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginApi } from "../../Store/Login/useApi";

const Login = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate()
  const { loginError, loading , userDetails } = useSelector((state) => ({
    // loginError: state.error,
    loading: state.LoginReducer.loading,
    //  userDetails:state.userDetails
}));
  const [input, setInput] = useState({username:"",password:""})

const Handle = (e) => {
 const Data= {...input}
 Data[e.target.name]= e.target.value
 setInput(Data)
 console.log(input);
 
 
}


  const handleSubmitLogin=(e)=>{
    e.preventDefault()
    dispatch(loginApi(input,navigate));
  }

return (
  <section className="section">
    <Container className="containerLogin">
      <div className="box">
        <form onSubmit={(e) => handleSubmitLogin(e)}>
          <Link to={"/"}>
            {" "}
            <div className="edisonLogin ">EDISONVALLEY</div>
          </Link>

          <div className="input ">
            <h3>Login</h3>
            <div className="form-outline mb-4">
              <label className="label" style={{ marginBottom: "8px" }}>
                Username
              </label>
              <input type="text" name="username" placeholder="Username"
              onChange={(e) => Handle(e)} className="form-control" />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label label">Password</label>
              <input
                type="password"
                placeholder="Password"
                class="form-control"
                name="password"
                onChange={(e) => Handle(e)}
              />

              <button type="submit" class="btn btn-primary loginBtn" >
                { loading ? "Loading..!" : "login"}
              </button>

              <p>
                You don’t have an account ? <span>Register</span>{" "}
              </p>
            </div>
            <footer className="footer">
              © 2020 Edisonvalley. Design & Develop by Osperb
            </footer>
          </div>
        </form>
      </div>
    </Container>
  </section>
);
};

export default Login;
