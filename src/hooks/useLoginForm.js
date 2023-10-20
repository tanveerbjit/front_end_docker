
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import axiosInstance from '../util/axiosInstance'; // Import your axios instance
import { toast } from "react-toastify";


function useLoginForm() {
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
      password: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axiosInstance.post('/auth/login', data, {
        withCredentials: true, // Include cookies in the request
      });

      if (response.status === 200) {
        
        console.log(response.data.data)
        localStorage.setItem('login', 'true');
        localStorage.setItem('role', response.data.data.role);
      

        /// Navigation Task
        navigate('/user');
        toast.success("successfully logged in");

      } else {
         toast.error("invalid credential");
        setError('email', {
          type: 'manual',
          message: 'Invalid credentials', // Customize error message as needed
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("invalid credential");
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

export default useLoginForm;
