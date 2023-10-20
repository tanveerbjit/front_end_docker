import React, { useState,useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import axiosInstance from '../../../../util/axiosInstance';
import Loader from '../../../common/Loader';
import { toast } from 'react-toastify';



const Amount = () => {
  
const [update, setUpdate] = useState(false);
const [balance, setBalance] = useState(0);
const [isLoading, setIsLoading] = useState(true);  
const [disableButton, setDisableButton] = useState(false);  
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
          amount: "",
        },
      });



    const handlerOnSubmit = () => { 

        setDisableButton(true);

        const amount = getValues("amount");
   

          if(amount !==  "" && amount > 0 && amount < 5000)
          {

             axiosInstance
                .put(`/user/amount/update`, {amount}) // Replace with your API endpoint
                .then((response) => {
                    console.log(response.data.data)
                    setValue("amount","")
                    setUpdate(!update)
                    toast.success("amount added successfully")
                    
                })
                .catch((error) => {
                console.error(error);
                 toast.error("something wrong");
                });

          }else{
            toast.error("Amount Should be between 1 to 4999")
          }
          setTimeout(() => {
            setDisableButton(false);
          }, 2000);
    };

 

  const fetchData = () => {

    axiosInstance.get("/user/amount")
      .then((response) => {
        
        setBalance(response.data.data.amount)
        // setValue("amount",response.data.data.amount)
        setIsLoading(false);
      })
      .catch((error) => {
        //setError(error);
        setIsLoading(false);
      });
  };


  useEffect(()=>{
    
      fetchData()

  },[update])

  

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h4 className="mb-5 docboard-heading docboard-color-primary text-capitalize">
            Your Personal Wallet
          </h4>
          <form
            onSubmit={handleSubmit(handlerOnSubmit)}
            className="px-5 py-3 border border-primary mb-5"
          >
            <div className="form-group">
              <Controller
                name="amount"
                control={control}
                rules={{
                  minLength: {
                    value: 1,
                    message: "amount should be between 1 to 500000",
                  },
                  maxLength: {
                    value: 50000,
                    message: "amount should be between 1 to 500000",
                  },
                }}
                render={({ field }) => (
                  <div>
                    <h4>Your Current Balance: {balance}</h4>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="refill amount... max 4999"
                      {...field}
                    />
                  </div>
                )}
              />
              {errors.amount && (
                <p className="text-danger">{errors.amount.message}</p>
              )}
            </div>
            <div className="form-group mb-0">
              <input
                type="submit"
                value="Credit"
                className="btn btn-primary px-3"
                disabled={disableButton}
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Amount;
