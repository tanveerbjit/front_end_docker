import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../login/login.css'; // Import your CSS file
import { useForm, Controller } from "react-hook-form";
import axiosInstance from '../../util/axiosInstance';
import FormFormInputField from "../common/FormInput"; // Import the FormField component
import Button from "../common/Button ";
import { registrationConfig } from "../../config/regConfig"; // Import the field configurations
import { toast } from 'react-toastify';



function RegistrationForm() {
  
    const {
        handleSubmit,
        control,
        formState: { errors },
        getValues,
        watch,
        setValue,
      } = useForm({
        mode: "onChange",
        defaultValues: {
          first_name: "",
          last_name: "",
          user_name: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
      });

      const [isSubmitting, setIsSubmitting] = useState(false);

      const navigate = useNavigate();

      const config = registrationConfig(watch);
      const fields = config.fields;


    const handlerOnSubmit = async () => {

          try {

            setIsSubmitting(true)

            const userData = {
                first_name: getValues("first_name"),
                last_name: getValues("last_name"),
                user_name: getValues("user_name"),
                email: getValues("email"),
                password: getValues("password"),
              };
              

            const response = await axiosInstance.post('/auth/user/registration', userData , {
              withCredentials: true, // Include cookies in the request
            });
      
            if (response.status === 200) {
             
              /// Navigation Task
              navigate('/mail');
              setIsSubmitting(false)
              toast.success("mail has been sent")
              
      
            } else {
               toast.error("user already exist");
            }
          } catch (err) {
            setIsSubmitting(false);
            console.error(err);
            toast.error("user already exist");
          }

    };

    
      return (
        <div className="wrapper">
          <form
            className="form-signin"
            onSubmit={handleSubmit(handlerOnSubmit)}
          >
            <h2 className="form-signin-heading">Please Register</h2>

            {fields.map((field) => (
              <FormFormInputField
                key={field.name}
                {...field}
                control={control}
                errors={errors[field.name]}
              />
            ))}

            {/* Repeat the Controller for other fields */}
            <br />
            <Button
              isSubmitting={isSubmitting}
              text={"Registration"}
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
                Already have an account? <Link to="/login">login</Link>
              </p>
            </div>
          </form>
        </div>
      );

  
}

export default RegistrationForm;
