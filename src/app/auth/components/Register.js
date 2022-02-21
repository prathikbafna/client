/*import React, { Component } from "react";
import axios from "axios";
export default className Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("submit called");
    console.log(JSON.stringify(this.state));

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    axios
      .post("/api/users/register", newUser)
      .then((res) => console.log(JSON.stringify(res.data)))
      .catch((err) => {
        console.log(JSON.stringify(err.response.data));
        this.setState({ errors: err.response.data });
      });
  };

  onChange = (e) => {
    console.log(e.target.name + ":" + e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(JSON.stringify(this.state));
    const { errors } = this.state;
    //destructuring
    //const errors = this.state.errors;
    return (
      <div>
        (
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Sign Up</h1>
                <p className="lead text-center">
                  Create your DevConnector account{this.state.errors.email}
                </p>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div>{errors.name}</div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Email Address"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    <small className="form-text text-muted">
                      This site uses Gravatar so if you want a profile image,
                      use a Gravatar email
                    </small>
                  </div>
                  <div>{errors.email}</div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </div>
                  <div>{errors.password}</div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Confirm Password"
                      name="password2"
                      value={this.state.password2}
                      onChange={this.onChange}
                    />
                  </div>
                  <div>{errors.password2}</div>
                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        )
      </div>
    );
  }
}
*/
import React, { useState } from "react";
// import axios from "axios";
export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState({});
  const { name, email, password, password2 } = formData;
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hello from login");
    console.log(JSON.stringify(formData));
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your DevConnector account</p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Name"
                  name="name"
                  required
                  onChange={onChange}
                />
              </div>
              <div>{error.name}</div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email Address"
                  name="email"
                  onChange={onChange}
                />
                <small className="form-text text-muted">
                  This site uses Gravatar so if you want a profile image, use a
                  Gravatar email
                </small>
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
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Confirm Password"
                  name="password2"
                  onChange={onChange}
                />
              </div>
              <div>{error.password2}</div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
