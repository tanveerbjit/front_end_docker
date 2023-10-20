import React, { useEffect, useState } from "react";
import Loader from "../common/Loader";
import { useForm, Controller } from "react-hook-form";
import axiosInstance from "../../util/axiosInstance";
import { toast } from "react-toastify";
import { useDispatch,useSelector } from "react-redux";
import {setMessage} from "../../store/slices/message/messageSlice";
import { v4 as uuidv4 } from "uuid";




function ProductReview({ id, info }) {
  const [rating_review, setRatingReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [update, setUpdate] = useState(false);
  const [error, setError] = useState(null);
  const [disableButtons, setDisableButtons] = useState(false);
  const message = useSelector((state)=>state.message)
  const dispatch = useDispatch();
  const [toggle,setToggle] = useState(false)

  console.log(info)
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      rating: "",
      review: "",
    },
  });
  const auth = localStorage.getItem("login");

  console.log(id)

  const deleteReviewRating = (type) => {
     setDisableButtons(true);
    if (type === "rating") {
      axiosInstance
        .delete(`/user/rating/destroy/${id}`) // Replace with your API endpoint
        .then((response) => {
          
          console.log(response)
          setValue("rating", "");
          toast.success("rating deleted successfully")
          setUpdate(!update);
          const uniqueId = uuidv4();
          dispatch(setMessage(uniqueId));
        })
        .catch((error) => {
           toast.error("something wrong");
          console.error(error);
        });
    }
    if (type === "review") {
      axiosInstance
      .delete(`/user/review/destroy/${id}`) // Replace with your API endpoint
        .then((response) => {
         
          setValue("review", "");
          console.log(response.data)
          setUpdate(!update);
           toast.success("review deleted successfully");
           const uniqueId = uuidv4();
           dispatch(setMessage(uniqueId));
        })
        .catch((error) => {
           toast.error("something wrong");
          console.error(error);
        });
    }
    setTimeout(() => {
      setDisableButtons(false);
    }, 2000);
    dispatch(setMessage(!message));
  };

  const handlerOnSubmit = () => {
    setDisableButtons(true);
    console.log("click the submit button")
    const rating = getValues("rating");
    const review = getValues("review");

    if (rating !== "" && rating > 0 && rating < 6) {
      axiosInstance
        .post(`/user/rating/store`, { productId: id, rating }) // Replace with your API endpoint
        .then((response) => {
          dispatch(setMessage(!message));
          setValue("rating", "");
          setUpdate(!update);
          toast.success("rating added successfully");
          const uniqueId = uuidv4();
          dispatch(setMessage(uniqueId));
        })
        .catch((error) => {
          console.error(error);
           toast.error("something wrong");
        });
    }
    if (review !== "") {
      axiosInstance
        .post(`/user/review/store`, { productId: id, review }) // Replace with your API endpoint
        .then((response) => {
          dispatch(setMessage(!message));
          setUpdate(!update);
          toast.success("review added successfully");
          const uniqueId = uuidv4();
          dispatch(setMessage(uniqueId));
        })
        .catch((error) => {
          console.error(error);
          toast.error("something wrong");
        });
    }
    setTimeout(() => {
      setDisableButtons(false);
    }, 2000);
    dispatch(setMessage(!message));

    /// api call and register
  };

  const fetchData = (id) => {
    axiosInstance
      .get(`/user/rating-reiew/${id}`)
      .then((response) => {
        console.log(response.data.data);
        setRatingReview(response.data.data);
        if (response.data.data.review) {
          setValue("review", response.data.data.review.review);
        }

        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (auth) {
      fetchData(id);
    }
  }, [update]);

  return (
    <div className="bg-light p-30">
      {/* Existing Reviews */}
      <div className="nav nav-tabs mb-4">
        <a className="nav-item nav-link text-dark">Reviews</a>
      </div>
      <div className="tab-content">
        <div className="tab-pane active">
          <div className="row">
            <div className="col-md-6">
              <h4 className="mb-4">
                {info && info.reviews.length > 0
                  ? `${info.reviews.length} review`
                  : ""}
              </h4>

              {info &&
                info.reviews.map((element) => (
                  <>
                    <div className="media mb-4">
                      <div className="media-body">
                        <h6>
                          {element.email}
                          <small>
                            {" "}
                            - <i>{element.updatedAt}</i>
                          </small>
                        </h6>
                        <p>{element.review}</p>
                      </div>
                    </div>
                    <hr />
                  </>
                ))}
            </div>

            {auth ? (
              isLoading ? (
                <Loader />
              ) : (
                <div className="col-md-6">
                  <h4 className="mb-4">Leave a review</h4>
                  <div className="d-flex my-3">
                    <p className="mb-0 mr-2">Your Rating :</p>
                    <div className="text-primary">
                      {rating_review.rating ? (
                        Array.from({ length: 5 }, (_, index) => (
                          <small
                            key={index}
                            className={`text-primary mr-1 ${
                              rating_review.rating.rating > index
                                ? "fa fa-star"
                                : "far fa-star"
                            }`}
                          ></small>
                        ))
                      ) : (
                        <>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </>
                      )}
                    </div>
                  </div>
                  <form onSubmit={handleSubmit(handlerOnSubmit)}>
                    <div className="form-group">
                      <Controller
                        name="rating"
                        control={control}
                        rules={{
                          min: {
                            value: 1,
                            message: "rating should be between 1 to 5",
                          },
                          max: {
                            value: 5,
                            message: "rating should be between 1 to 5",
                          },
                        }}
                        render={({ field }) => (
                          <div>
                            <label>Give you new rating (0-5)</label>

                            <input
                              type="number"
                              className="form-control col-5"
                              placeholder="give rating..."
                              {...field}
                            />
                          </div>
                        )}
                      />
                      {errors.rating && (
                        <p className="text-danger">{errors.rating.message}</p>
                      )}
                    </div>

                    <div className="form-group">
                      <Controller
                        name="review"
                        control={control}
                        rules={{
                          minLength: {
                            value: 1,
                            message:
                              "review should be between 1 to 1000 character",
                          },
                          maxLength: {
                            value: 1000,
                            message:
                              "review should be between 1 to 1000 character",
                          },
                        }}
                        render={({ field }) => (
                          <div>
                            <label>Your Review (you can edit this)</label>
                            <textarea
                              id="message"
                              {...field}
                              cols="30"
                              rows="5"
                              className="form-control"
                              placeholder="give your review..."
                            ></textarea>
                          </div>
                        )}
                      />
                      {errors.review && (
                        <p className="text-danger">{errors.review.message}</p>
                      )}
                    </div>

                    <div className="form-group mb-2">
                      <button
                        type="submit"
                        value="Leave Your Review & Rating"
                        className="btn btn-primary px-3"
                        disabled={disableButtons}
                      >
                        <i class="fa-solid fa-paper-plane"></i> Leave Your
                        Review and Rating
                      </button>
                    </div>
                    <span
                      onClick={() => deleteReviewRating("review")}
                      className={`btn btn-primary mr-2 ${
                        disableButtons ? "disabled" : ""
                      }`}
                    >
                      <i class="fa-solid fa-trash-can"></i> Delete Only Review
                    </span>
                    <span
                      onClick={() => deleteReviewRating("rating")}
                      className={`btn btn-primary mr-2 ${
                        disableButtons ? "disabled" : ""
                      } `}
                    >
                      <i class="fa-solid fa-trash-can"></i> Delete Only Rating
                    </span>
                  </form>
                </div>
              )
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductReview;
