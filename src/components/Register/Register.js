import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  onNameChange = e => this.setState({ name: e.target.value });

  onEmailChange = e => this.setState({ email: e.target.value });

  onPasswordChange = e => this.setState({ password: e.target.value });

  onRegister = () =>
    this.state.name && this.state.email && this.state.password
      ? fetch("http://localhost:5000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            user: {
              name: this.state.name,
              email: this.state.email,
              password: this.state.password
            }
          })
        })
          .then(res => res.json())
          .then(res => {
            if (res.status) {
              console.log(res);
              this.props.loadUser(res);
              this.props.onRouteChange("home");
            } else {
              alert("Unable to register!");
            }
          })
      : alert("All fields are required");

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="Register">
        <main className="pa4 black-80">
          <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="ph0 mh0 center">Register</legend>
              <div className="mt3">
                <label className="db lh-copy" htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mv3">
                <label className="db lh-copy" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db lh-copy" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                id="button"
                className="ph3 pv2 input-reset ba b--black bg-transparent grow pointer dib"
                type="submit"
                value="Register"
                onClick={e => {
                  e.preventDefault();
                  // onRouteChange("home");
                  this.onRegister();
                }}
              />
            </div>
            <div className="lh-copy mt3">
              <p
                className="link dim black db"
                onClick={() => onRouteChange("signIn")}
              >
                Sign In
              </p>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default Register;
