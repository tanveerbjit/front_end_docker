

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useForm } from "react-hook-form";
import useLoginForm from "../../hooks/useLoginForm";
import FormFormInputField from "../common/FormInput"; // Import the FormField component
import { emailField, passwordField } from "../../config/loginConfig"; // Import the field configurations
import Button from "../common/Button ";


function LoginForm() {
  const { handleSubmit, errors, isSubmitting, onSubmit, control } =
    useLoginForm();
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form-signin-heading">Please login</h2>
        <FormFormInputField
          {...emailField}
          errors={errors.email}
          control={control}
        />
        <FormFormInputField
          {...passwordField}
          errors={errors.password}
          control={control}
        />
        <Button
          isSubmitting={isSubmitting}
          text="Login"
          className={"btn btn-lg btn-primary btn-block"}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            paddingTop: "10px",
            justifyContent: "flex-end",
          }}
        >
          <p>
            {/* Need an account? <Link to="/registration">Sign up</Link> */}
            <br/>
            <Link to="/forget" style={{color:"#343a40"}}>Forget Password</Link>
           
          </p>
         
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

