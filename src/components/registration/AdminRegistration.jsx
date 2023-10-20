import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../login/login.css'; // Import your CSS file
import { useForm, Controller } from "react-hook-form";
import axiosInstance from '../../util/axiosInstance';


function AdminRegistrationForm() {
  
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

      const isPasswordValid = (value) => {
        // Define your pattern validation here
        const lowercaseRegex = /[a-z]/;
        const uppercaseRegex = /[A-Z]/;
        const numbersRegex = /\d/;
        const symbolsRegex = /[@$!%*?&]/;
    
        return (
          lowercaseRegex.test(value) &&
          uppercaseRegex.test(value) &&
          numbersRegex.test(value) &&
          symbolsRegex.test(value)
        );
      };

      const msg = ()=>{
        return "atleast one digit one character upper and lower and one special character minimum 8 character and max 20";
      }
    


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
              

            const response = await axiosInstance.post('/auth/admin/registration', userData , {
              withCredentials: true, // Include cookies in the request
            });
      
            if (response.status === 200) {
             
              /// Navigation Task
              navigate('/mail');
              setIsSubmitting(false)
              
      
            } else {
             
            }
          } catch (err) {
            console.error(err);
          }

    };

    
      return (
        <div className="wrapper">
          <form className="form-signin" onSubmit={handleSubmit(handlerOnSubmit)}>
            <h2 className="form-signin-heading">Please Register</h2>
            <Controller
              name="first_name"
              control={control}
              rules={{
                required: "First name is required",
                minLength: {
                  value: 3,
                  message: "Minimum length must be 3",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum length must be 20",
                },
              }}
              render={({ field }) => (
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    {...field}
                  />
                </div>
              )}
            />
            {errors.first_name && <p className="text-danger">{errors.first_name.message}</p>}
            <Controller
              name="last_name"
              control={control}
              rules={{
                required: "last name is required",
                minLength: {
                  value: 3,
                  message: "Minimum length must be 3",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum length must be 20",
                },
              }}
              render={({ field }) => (
                <div>
                  <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="Last Name"
                    {...field}
                  />
                </div>
              )}
            />
            {errors.last_name && <p className="text-danger">{errors.last_name.message}</p>}

            <Controller
              name="user_name"
              control={control}
              rules={{
                required: "user name is required",
                minLength: {
                  value: 3,
                  message: "Minimum length must be 3",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum length must be 20",
                },
              }}
              render={({ field }) => (
                <div>
                  <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="User Name"
                    {...field}
                  />
                  
                </div>
              )}
            /> 
         {errors.user_name && <p className="text-danger">{errors.user_name.message}</p>}


         <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              type="email"
              className="form-control mt-3"
              placeholder="Email Address"
              {...field}
            />
          )}
          ///// email validation
          rules={{
            required: 'Email is required',
            maxLength: {
                value: 50,
                message: "Maximum length must be 50",
              },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
        />

        {errors.email && <p className="text-danger">{errors.email.message}</p>}


        <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: msg(),
              },
              maxLength: {
                value: 20,
                message: msg(),
              },
              validate: (value) => isPasswordValid(value) || msg(),
            }}
            render={({ field }) => (
                <input
                type="password"
                className="form-control mt-3"
                placeholder="enter Password"
                {...field}
              />
            )}
          />
          {errors.password && <p className="text-danger">{errors.password.message}</p>}


          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: "Confirm Password is required",
              minLength: {
                value: 6,
                message: "Minimum length must be 6",
              },
              maxLength: {
                value: 20,
                message: "Max length must be 20",
              },
              validate: (value) =>
                value === watch("password") ||
                "Confirm password should match given password",
            }}
            render={({ field }) => (
                <input
                type="password"
                className="form-control"
                placeholder="enter Password again"
                {...field}
              />
            )}
          />
          {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}

          

            {/* Repeat the Controller for other fields */}
            <br />
            <button
              className="btn btn-lg btn-primary btn-block"
              type="submit"
              disabled={isSubmitting}
            >
            {isSubmitting ? 'Sending...' : 'Registration'}
              
            </button>
            <div
              style={{
                width: '100%',
                display: 'flex',
                paddingTop: '10px',
                justifyContent: 'flex-end',
              }}
            >
              
             
            </div>
          </form>
        </div>
      );

  
}

export default AdminRegistrationForm;
