import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../login/login.css";
import FormFormInputField from "../common/FormInput";
import { resetConfig } from "../../config/resetConfig";
import { useForm } from "react-hook-form";
import axiosInstance from "../../util/axiosInstance"; // Import your axios instance
import { toast } from "react-toastify"; // Import toast for notifications
import Loader from "../common/Loader";
import Button from "../common/Button ";



function ResetForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      password: "",
      resetPassword: "",
    },
  });

  const { token, userId } = useParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValid, setIsValid] = useState(true); // Assume token is valid initially
  const [isLoad, setIsLoad] = useState(true);
 

  useEffect(() => {
    const tokenValid = async () => {
      try {
        const response = await axiosInstance.post(
          "/auth/token-validity-check",
          { token, userId },
          {
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          setIsValid(true);
          setIsLoad(false);
        } else {
          setIsValid(false);
          setIsLoad(false);
        }
      } catch (error) {
        setIsValid(false);
        setIsLoad(false);
      } finally {
        setIsLoad(false);
      }
    };

    tokenValid();
  }, [token, userId]);

  const handlerOnSubmit = async () => {
    try {
      setIsSubmitting(true);

      const userData = {
        token,
        userId,
        password: getValues("password"),
        resetPassword: getValues("resetPassword"),
      };

      if (userData.password !== userData.resetPassword) {
        toast.error("Passwords do not match");
        setIsSubmitting(false);
        return;
      }
      setIsSubmitting(true)

      const response = await axiosInstance.post("/auth/reset", userData, {
        withCredentials: true,
      });

      if (response.status === 200) {
        // Successful password reset
        navigate("/login");
        setIsSubmitting(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      setIsSubmitting(false);
      console.error(err);
      toast.error(err.response.data.message);
    }
  };

  const config = resetConfig(watch);
  const fields = config.fields;

  return (
    <div className="wrapper">
      {isLoad ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader />
        </div>
      ) : (
        isValid ? (<>
          <form
            className="form-signin"
            onSubmit={handleSubmit(handlerOnSubmit)}
          >
            <h2 className="form-signin-heading">Please Reset</h2>

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
              text={"submit"}
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
             
            </div>
          </form>
        </>):
          (
            <div style={{ display: "flex", justifyContent: "center" ,width:"60vw"}}>
              <h3>
                No Valid token find. <Link to="/forget">Go Back</Link>
              </h3>
              </div>)

        
        
      )}
    </div>
  );
}

export default ResetForm;
