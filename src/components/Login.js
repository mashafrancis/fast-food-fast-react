import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormInput } from './common/FormInput';

const image = "https://res.cloudinary.com/mashafrancis/image/upload/v1548817055/fast-food-fast/avatar.png";

const Login = () => {
  return (
    <div className="user-forms">
      <div className="container-2">
        <div className="wrapper-2">
          <form>
            <div className="img-container">
              <img src={image} alt="Avatar" className="avatar" />
            </div>
            <div>
              <h3>Login</h3>
              <FormInput
                inputType="email"
                inputName="email"
                placeholder="Enter email"
                label="Email"
              />
              <FormInput
                inputType="password"
                inputName="password"
                placeholder="Enter password"
                label="Password"
              />
              <hr />
              <button type="submit" className="btn btn-success btn-block">Submit</button>
              <hr />
              <p>Forgot Password?</p>
              <NavLink to="/"><p>Reset</p></NavLink>
              {/*<p>Don't have an account?</p>*/}
              <NavLink to="/">Register</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;
