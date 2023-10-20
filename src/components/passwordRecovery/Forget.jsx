import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../login/login.css";
import useForgetPasswordForm from "../../hooks/useForgetPassword";
import FormFormInputField from "../common/FormInput"; // Import the FormField component
import { emailField, passwordField } from "../../config/loginConfig"; // Import the field configurations
import Button from "../common/Button ";


function ForgetForm() {
  const { handleSubmit, errors, isSubmitting, onSubmit, control } =
    useForgetPasswordForm();
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form-signin-heading">Forget password</h2>
        <FormFormInputField
          {...emailField}
          errors={errors.email}
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
            <Link to="/login" style={{color:"black"}}>Back to login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default ForgetForm;

