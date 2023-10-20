import React, { useState, useEffect } from "react";
import Loader from "../common/Loader";
import axiosInstance from "../../util/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { voucherHeader } from "../../config/voucherHeaderConfig";
import TableHeader from "../common/TableHeader";
import VoucherTableRow from "../common/VoucherTableRow";
import Button from "../common/Button ";

const Voucher = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [voucherData, setVoucherData] = useState([]);
  const [individualPurchaseData, setIndividualPurchaseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCheckoutDisabled, setIsCheckoutDisabled] = useState(false); // New state to control button's disabled state

  const navigate = useNavigate();

  const checkout = async () => {
    if (isCheckoutDisabled) {
      return; // Do nothing if the button is disabled
    }

    try {
      setIsCheckoutDisabled(true); // Disable the button
      const response = await axiosInstance.post("/user/checkout");

      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        navigate("/user/purchase");
        toast.success("Products Checked Out");
      } else {
        toast.error("Something Wrong");
        console.error("Error fetching user profile:", response.statusText);
      }
    } catch (error) {
      if (error.response.status === 402) {
        toast.error("Insufficient balance, Please Recharge");
      } else {
        toast.error("Something Wrong");
      }
      
      console.error("Error fetching user profile:", error);
    } finally {
      // Re-enable the button after 2 seconds
      setTimeout(() => {
        setIsCheckoutDisabled(false);
      }, 2000);
    }
  };

  const fetchData = () => {
    axiosInstance
      .get("/user/voucher")
      .then((response) => {
        console.log(response.data.data);
        setVoucherData(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        // setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <h3>Voucher</h3>
        <h6>No: {voucherData && voucherData._id}</h6>
        <table className="table table-hover mt-4">
          <TableHeader data={voucherHeader} />
          <tbody>
            {isLoading ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Loader />
              </div>
            ) : voucherData && voucherData.orderItems ? (
              <VoucherTableRow row={voucherData.orderItems} />
            ) : (
              "No data found"
            )}
            <tr className="text-center">
              <td colSpan="4" className="border border-primary">
                Total
              </td>
              <td className="border border-primary">
                {voucherData.totalValue}
              </td>
            </tr>
          </tbody>
        </table>
        <Button
          className={
            "btn btn-block btn-primary font-weight-bold my-3 py-3 h-25 w-25"
          }
          onClick={checkout}
          text={"Proceed To Checkout"}
          disabled={isCheckoutDisabled} // Pass the disabled state to the button
        />
      </div>
    </>
  );
};

export default Voucher;
