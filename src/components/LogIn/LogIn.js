import React from 'react';
import './LogIn.css';
import { Button, Form, FormGroup, Label, Input } from 'react-strap';
import { FacebookLoginButton } from 'react-social-login-buttons';

const LogIn = () => (
  <div className="LogIn">
    <Form>
      <h1>
        <span className="font-weight-bold">CHZPLZ</span>
      </h1>
      <img id="logo" alt="logo"></img>
      <FormGroup>
        <label>Email</label>
        <input type="text" placeholder="Email" />
      </FormGroup>

      <FormGroup>
        <label>Password</label>
        <input type="text" placeholder="Password" />
      </FormGroup>

      <Button className="btn-lg btn-dark btn-block">
        Log in
      </Button>

      <div className="text-center 3pt">
        Or continue with your social account
      </div>

      <FacebookLoginButton className="mt-3 mb-3"></FacebookLoginButton>
    </Form>
  </div>

)





export default LogIn;