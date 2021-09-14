import React, { Component } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import Button from "../button/button";
import FormInput from "../form-input/form-input";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // console.log(auth, email, password);
      this.setState({ auth, emial: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button type="button" onClick={signInWithGoogle} isGoogleSignIn>
              {" "}
              Sign In With Google{" "}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
