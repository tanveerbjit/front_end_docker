import React, { useEffect,useState } from 'react';
import { useForm, Controller } from 'react-hook-form'; // Import Controller
import Loader from '../../../common/Loader';
import axiosInstance from "../../../../util/axiosInstance";
import base_url from '../../../../util/baseurl';
import { useDispatch } from 'react-redux';
import { setPic }  from '../../../../store/slices/user/profile/userProfileSlice';
import { toast } from 'react-toastify';



function UserProfile() {

  const dispatch = useDispatch();
  const [disableButton, setDisableButton] = useState(false);
  
  


  const { 
    handleSubmit, 
    control,
    formState: { errors },
    getValues,
    watch,
    setValue,
   } = useForm({mode: "onChange"}); // Include formState
  const [isLoading, setIsLoading] = useState(true);
  const [pic, setUserPic] = useState("");

  const [picSrc, setPicSrc] = useState('https://valerehealthcare.co/web/front/assets/images/icon/default.png');
  const role = localStorage.getItem("role");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPicSrc(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  useEffect(() => {
    // Replace this with your API call to fetch user data
    const fetchData = async () => {
      try {
        
        let response;
        if(role === 'a'){ response = await axiosInstance.get('/admin/profile');}
        else if(role === 'u'){ response = await axiosInstance.get('/user/profile');}
     
        if (response.status === 200) {
         
          const data = response.data.data;;
          console.log(data)
        
         /// setValue Task
          setValue('first_name', data.first_name);
          setValue('last_name', data.last_name);
          setValue('phone', data.phone);
          setValue('email', data.email);
          setValue('user_name', data.user_name);
          setValue('address', data.address);
          if(data.pic){
            data.pic = data.pic.replace("public/", "")
            dispatch(setPic(data.pic));
            setUserPic(base_url+data.pic)
          }
          
          
          setIsLoading(false);
          
        } else {
          
          console.error('Error fetching user profile:', response.statusText);
        }
      } catch (error) {
        
        console.error('Error fetching user profile:', error);
      }
    };

    fetchData();
  }, [setValue]);

const onSubmit = async (data) => {
  try {
    setIsLoading(true);
    setDisableButton(true); // Disable the button
    console.log(data);
    const formData = new FormData(); // Create a FormData object

    // Append data fields to formData
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("user_name", data.user_name);
    formData.append("address", data.address);

    // Append the file (if available) to formData
    if (data.pic instanceof File) {
      formData.append("pic", data.pic);
    }

    // Send a POST request with Axios
    let response;
    if (role === "a") {
      response = await axiosInstance.patch("/admin/profile/update", formData);
    } else if (role === "u") {
      response = await axiosInstance.patch("/user/profile/update", formData);
    }

    if (response.status === 200) {
      const responseData = response.data.data;
      toast.success("data updated successfully");
      console.log("Profile updated successfully");
      console.log(responseData); // Log the parsed response data
      if (responseData.pic) {
        responseData.pic = responseData.pic.replace("public/", "");
      }
      console.log(responseData.pic);
      setUserPic("http://127.0.0.1:3000/" + responseData.pic);
      dispatch(setPic(responseData.pic)); ///////////////////////////// sending pic to store
      setIsLoading(false);
    } else {
      toast.success(
        "file size or type doesnot match file size 2MB and type jpg, jpeg, and png"
      );
      console.error("Error updating profile:", response.statusText);
      setIsLoading(false);
    }
  } catch (error) {
    if (error.response.status === 422) {
      toast.error(
        "May be file size or format is not matched file size less than 2MB and type JPG,JPEG,PNG"
      );
    }
    setIsLoading(false);
    console.error('Error updating profile:', error);
  }
   setTimeout(() => {
     setDisableButton(false);
   }, 2000);
};


  return (
    <>
      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader />
        </div>
      ) : (
        <form
          className="row container-fluid"
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <div className="col-lg-3 col-12">
            {/* File input for profile image */}
            <div className="text-center">
              <div>
                <img
                  src={
                    pic !== ""
                      ? pic
                      : "https://valerehealthcare.co/web/front/assets/images/icon/default.png"
                  }
                  alt="Image"
                  className="docboard-avater"
                  id="image_output"
                />
              </div>
              <input
                type="file"
                className="input-file"
                id="upload"
                name="pic"
                hidden
                accept="image/*"
                onChange={(e) => {
                  const selectedFile = e.target.files[0];
                  setValue("pic", selectedFile);
                  handleFileChange;
                }}
              />
              <label
                htmlFor="upload"
                className="btn text-capitalize mt-2 custom-input-file"
              >
                <span className="pr-2">Upload Photo</span>
                <span className="ms-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cloud-upload"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                    ></path>
                  </svg>
                </span>
              </label>
            </div>
          </div>

          <div className="col-lg-9 col-12 mt-3 mt-lg-0">
            <h4 className="mb-0 docboard-heading docboard-color-primary text-capitalize">
              Personal Information
            </h4>
            <div className="row mt-lg-3 mt-1">
              {/* First Name */}
              <div className="col-lg-4 col-12">
                <label className="docboard-title text-gray-dark text-capitalize d-block mb-2">
                  First Name{" "}
                </label>
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
                    <input
                      type="text"
                      {...field}
                      autoComplete="off"
                      className="border border-primary docboard-bg-soft docboard-field form-control field"
                      placeholder="First Name"
                    />
                  )}
                />
                {errors.first_name && (
                  <p className="text-danger">{errors.first_name.message}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="col-lg-4 col-12 my-2 my-lg-0">
                <label className="docboard-title text-gray-dark text-capitalize d-block mb-2">
                  Last Name{" "}
                </label>
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
                    <input
                      type="text"
                      {...field}
                      autoComplete="off"
                      className="border border-primary docboard-bg-soft docboard-field form-control field"
                      placeholder="Last Name"
                    />
                  )}
                />
                {errors.last_name && (
                  <p className="text-danger">{errors.last_name.message}</p>
                )}
              </div>

              {/* Phone */}
              <div className="col-lg-4 col-12">
                <label className="docboard-title text-gray-dark text-capitalize d-block mb-2">
                  Phone
                </label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: "phone is required",
                    maxLength: {
                      value: 50,
                      message: "Maximum length must be 50",
                    },
                    pattern: {
                      value: /^(?:\+88|88)?(01[3-9]\d{8})$/,
                      message:
                        "Invalid phone only bangladeshi number is acceptable",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      type="text"
                      {...field}
                      className="border border-primary docboard-bg-soft docboard-field form-control field"
                      placeholder="phone"
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-danger">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Email  */}
            <div className="row mt-2 mt-lg-3">
              <div className="col-lg-4">
                <label
                  htmlFor="email"
                  className="docboard-title text-gray-dark text-capitalize d-block mb-2"
                >
                  Email Address{" "}
                  <span className="text-danger fw-bold">(NE)</span>
                </label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="email"
                      {...field}
                      id="emailField"
                      autoComplete="off"
                      className="border border-primary docboard-bg-soft docboard-field form-control field"
                      readOnly
                    />
                  )}
                />
              </div>

              {/* user name */}
              <div className="col-lg-4">
                <label className="docboard-title text-gray-dark text-capitalize d-block mb-2">
                  User Name{" "}
                  <span className="text-danger fw-bold">(NE)</span>
                </label>
                <Controller
                  name="user_name"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="text"
                      {...field}
                      autoComplete="off"
                      className="border border-primary docboard-bg-soft docboard-field form-control field"
                      readOnly
                    />
                  )}
                />
              </div>
            </div>

            {/* Address */}
            <div className="row mt-2 mt-lg-3">
              <div className="col-lg-12">
                <label className="docboard-title text-gray-dark text-capitalize d-block mb-2">
                  Address{" "}
                </label>
                <Controller
                  name="address"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      className="docboard-bg-soft docboard-field form-control field border border-primary"
                      placeholder="Address"
                    />
                  )}
                />
              </div>
            </div>
          </div>

          {/* Submit button */}
          <div className="w-100 d-flex justify-content-end p-3">
            <button
              type="submit"
              className="btn bg-primary"
              style={{ backgroundColor: "#5887F2" }}
              disabled={disableButton}
            >
              Save
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default UserProfile;

