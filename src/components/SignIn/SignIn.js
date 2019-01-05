import React, { Component } from "react";
import "./SignIn.css";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  onEmailChange = e => this.setState({ email: e.target.value });

  onPasswordChange = e => this.setState({ password: e.target.value });

  onSignIn = () =>
    fetch("http://localhost:5000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.status !== false) {
          console.log(res);
          this.props.loadUser(res);
          this.props.onRouteChange("home");
        } else {
          console.log(res);
          alert("Bad username/Password");
        }
      });

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="SignIn">
        <main className="pa4 black-80">
          <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="ph0 mh0 center">Sign In</legend>
              <div className="mt3">
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
                value="Sign In"
                onClick={e => {
                  e.preventDefault();
                  this.onSignIn();
                }}
              />
            </div>
            <div className="lh-copy mt3">
              <p
                className="link dim black db"
                onClick={() => onRouteChange("register")}
              >
                Register
              </p>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default SignIn;
