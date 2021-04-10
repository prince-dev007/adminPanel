import { useState } from "react";
import "./Login.css";
import Admin from "../assets/img/undraw_Security_on_ff2u.svg";
import {useHistory} from 'react-router-dom';
function Login() {
    let history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handelInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const validation = {
    email: "admin123@gmail.com",
    password: "123456",
  };
  function userAuth(e) {
    e.preventDefault();
    if ( user.email === validation.email && user.password === validation.password){
        window.M.toast({html: 'Login Success'})
    history.push('/Dashboard');
  }
  else
  window.M.toast({html: 'Incorrect Credentials'})
  }

  return (
    <>
      <div className="container-fluid" id="loginSection1">
        <div className="row">
          <div className="col l6">
            <img src={Admin} class="responsive-img" alt="" />
          </div>
          <div className="col l6">
            <h2>Admin Login</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              consequatur ea.
            </p>
            <form onSubmit={userAuth} >
              <div class="input-field ">
                <input
                  id="email"
                  required
                  type="email"
                  name="email"
                  class="validate"
                  value={user.email}
                  onChange={handelInputs}
                  autocomplete="off"
                />
                <label for="email">Email</label>
              </div>
              <div class="input-field">
                <input
                  id="password"
                  required
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handelInputs}
                  class="validate"
                  autocomplete="off"
                />
                <label for="password">Password</label>
              </div>
              <button class="btn waves-effect" type="submit" name="action">
                Login
                <i class="material-icons right">send</i>
              </button>
             
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
