import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormInput } from './common/FormInput';

const image = 'https://res.cloudinary.com/mashafrancis/image/upload/v1548817082/fast-food-fast/img_avatar.png';

const Signup = () => {
  return (
    <div className="user-forms">
      <div className="container-2">
        <div className="wrapper-2">
          <form>
            <div className="img-container">
              <img src={image} alt="Avatar" className="avatar" />
            </div>
            <div>
              <h3>Signup</h3>
              <FormInput
                inputType="username"
                inputName="username"
                placeholder="Enter username"
                label="Username"
              />
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
              <FormInput
                inputType="password"
                inputName="repeatPassword"
                placeholder="Retype the password"
                label="Confirm Password"
              />
              <hr />
              <button type="submit" className="btn btn-success btn-block">Submit</button>
              <hr />
              <p>Already have an account?</p>
              <NavLink to="/">Login</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
