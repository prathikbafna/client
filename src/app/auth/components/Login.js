import axios from "axios";
import React, { useState } from "react";

//dumb compnents
//stateless ===> hook ===> state of component==> useState
//=> state ==>email and password
//1. use state
//2. add event handlers
//3. print data to console from event handlers
//4. rest call

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  //formData.email formData.password
  //destructuring const email=formData.email
  const { email, password } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hello from login");
    console.log(JSON.stringify(formData));
    // axios
    //   .post("/api/users/login", formData)
    //   .then((res) => console.log(JSON.stringify(res.data)))
    //   .catch((err) => {
    //     setError(err.response.data);
    //     console.log(JSON.stringify(err.response.data));
    //   });
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your DevConnector account
              </p>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    onChange={onChange}
                  />
                </div>
                <div>{error.email}</div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    onChange={onChange}
                  />
                </div>
                <div>{error.password}</div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
