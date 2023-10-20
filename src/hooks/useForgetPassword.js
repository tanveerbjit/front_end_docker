
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import axiosInstance from '../util/axiosInstance'; // Import your axios instance
import { toast } from "react-toastify";


function useForgetPasswordForm() {
  const {
    handleSubmit,
    setError,
    formState: { errors },
    control,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log("data : ",data)
    try {
      const response = await axiosInstance.post('/auth/forget', data, {
        withCredentials: true, // Include cookies in the request
      });

      if (response.status === 200) {
        
        navigate('/mail');
        setIsSubmitting(false)
        toast.success("mail has been sent")
      

      } else {
        console.log(response.data.message)
         toast.error(response.data.message);
        setError('email', {
          type: 'manual',
          message: 'Invalid credentials', // Customize error message as needed
        });
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response.data.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    handleSubmit,
    control,
    errors,
    watch,
    isSubmitting,
    onSubmit,
  };
}

export default useForgetPasswordForm;
