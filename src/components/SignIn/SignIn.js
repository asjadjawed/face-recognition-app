import React from "react";
import "./SignIn.css";

const SignIn = ({ onRouteChange }) => (
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
              onRouteChange("home");
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

export default SignIn;
