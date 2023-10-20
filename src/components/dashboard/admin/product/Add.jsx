import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form"; // Import Controller
import { useDispatch } from "react-redux";
import Loader from "../../../common/Loader";
import axiosInstance from "../../../../util/axiosInstance";
import { Navigate, useNavigate } from "react-router-dom";
import FormFormInputField from "../../../common/FormInput";
import { fields } from "../../../../config/productAddConfig";
import { toast } from "react-toastify";
import Button from "../../../common/Button ";


function Add() {
  const dispatch = useDispatch();
  const [productCategory, setProductCategory] = useState([]);
  const [productAuthor, setProductAuthor] = useState([]);
  const [productPublisher, setProductPublisher] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    watch,
    setValue,
  } = useForm({ mode: "onChange" }); // Include formState

  const onSubmit = async (data) => {
    if (isSubmitting) return; // Don't allow multiple submissions

    setIsSubmitting(true); // Set the form to submitting state
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("stock", data.stock);
      formData.append("edition", data.edition);
      formData.append("number_of_pages", data.number_of_pages);

      // Append the arrays to formData
      formData.append("category[]", data.category);
      formData.append("author[]", data.author);
      formData.append("publisher[]", data.publisher);

      // Append the file (if available) to formData
      if (data.pic instanceof File) {
        formData.append("pic", data.pic);
      }

      const response = await axiosInstance.post(
        "/admin/product/store",
        formData
      );

      if (response.status === 200) {
        console.log("Data saved successfully");
        navigate("/user/all/product");
        toast.success("product has been added");
        console.log(response.data.data);
        // Handle success, e.g., show a success message or redirect
      } else {
        toast.error("something wrong");
        console.error("Error saving data:", response.statusText);
        // Handle error, e.g., display an error message
      }
      setTimeout(() => {
        setIsSubmitting(false); // Re-enable the button after 2 seconds
      }, 2000);
    } catch (error) {
      if (error.response.status === 422) {
        toast.error("May be file size or format is not matched file size less than 2MB and type JPG,JPEG,PNG");
      }
      console.error("Error saving data:", error);
      setIsSubmitting(false);
      // Handle error, e.g., display an error message
    }
  };

  useEffect(() => {
    // Replace this with your API call to fetch user data
    const fetchData = async () => {
      try {
        let response = await axiosInstance.get("/product/all");

        if (response.status === 200) {
          const data = response.data.data.filter_data;

          setProductCategory(data.category);
          setProductAuthor(data.author);
          setProductPublisher(data.publisher);

          /// setValue Task
          setIsLoading(false);
        } else {
          console.error("Error fetching user profile:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchData();
  }, []);

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
                className="btn text-capitalize mt-2 custom-input-file "
              >
                <span className="pr-2 ">Upload Photo</span>
                <span className="ms-2 ">
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
              Product Information
            </h4>
            <div className="row mt-lg-3 mt-1">
              {/* Name */}
              <div className="col-lg-4 col-12">
                <FormFormInputField
                  {...fields.name}
                  control={control}
                  errors={errors.name}
                />
              </div>

              {/* description */}
              <div className="col-lg-4 col-12 my-2 my-lg-0">
                <FormFormInputField
                  {...fields.description}
                  control={control}
                  errors={errors.description}
                />
              </div>

              {/* price */}
              <div className="col-lg-4 col-12">
                <FormFormInputField
                  {...fields.price}
                  control={control}
                  errors={errors.price}
                />
              </div>
            </div>

            <div className="row mt-lg-3 mt-1">
              {/* stock */}
              <div className="col-lg-4 col-12">
                <FormFormInputField
                  {...fields.stock}
                  control={control}
                  errors={errors.stock}
                />
              </div>

              {/* edition */}
              <div className="col-lg-4 col-12 my-2 my-lg-0">
                <FormFormInputField
                  {...fields.edition}
                  control={control}
                  errors={errors.edition}
                />
              </div>

              {/* number_of_pages */}
              <div className="col-lg-4 col-12">
                <FormFormInputField
                  {...fields.number_of_pages}
                  control={control}
                  errors={errors.number_of_pages}
                />
              </div>
            </div>

            {/* category, author, publisher */}
            <div className="row mt-2 mt-lg-3">
              <div className="col-lg-4 col-12">
                <label className="docboard-title text-gray-dark text-capitalize d-block mb-2">
                  Category
                </label>

                <Controller
                  name="category"
                  control={control}
                  rules={{
                    required: "Category is required",
                  }}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="border border-primary form-select field px-3 py-2 w-100 docboard-bg-soft"
                    >
                      <option value="">Select Category</option>
                      {productCategory.map((element) => (
                        <option key={element._id} value={element._id}>
                          {element.name}
                        </option>
                      ))}
                      {/* Add more category options as needed */}
                    </select>
                  )}
                />
                {errors.category && (
                  <p className="text-danger">{errors.category.message}</p>
                )}
              </div>

              <div className="col-lg-4 col-12">
                <label className="docboard-title text-gray-dark text-capitalize d-block mb-2">
                  Author
                </label>

                <Controller
                  name="author"
                  control={control}
                  rules={{ required: "author is required" }}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="border border-primary  form-select  field px-3 py-2 w-100 docboard-bg-soft"
                    >
                      <option value="">Select author</option>
                      {productAuthor.map((element) => (
                        <option key={element._id} value={element._id}>
                          {element.name}
                        </option>
                      ))}
                      {/* Add more author options as needed */}
                    </select>
                  )}
                />
                {errors.author && (
                  <p className="text-danger">{errors.author.message}</p>
                )}
              </div>

              <div className="col-lg-4 w-100">
                <label className="docboard-title text-gray-dark text-capitalize d-block mb-2 ">
                  Publisher
                </label>

                <Controller
                  name="publisher"
                  control={control}
                  rules={{ required: "publisher is required" }}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="border border-primary form-select  field px-3 py-2 w-100 docboard-bg-soft"
                    >
                      <option value="">Select publisher</option>
                      {productPublisher.map((element) => (
                        <option key={element._id} value={element._id}>
                          {element.name}
                        </option>
                      ))}
                      {/* Add more author options as needed */}
                    </select>
                  )}
                />
                {errors.publisher && (
                  <p className="text-danger">{errors.publisher.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Submit button */}
          <div className="w-100 d-flex justify-content-end p-3">
            <Button
              isSubmitting={isSubmitting}
              text={"Save"}
              className={"btn bg-primary"}
              style={{ backgroundColor: "#5887F2" }}
              disabled={isSubmitting}
            />
          </div>
        </form>
      )}
    </>
  );
}

export default Add;
