import React, { useState, useEffect } from "react";
import "./modal.css";
import axiosInstance from "../../../../util/axiosInstance";
import Loader from "../../../common/Loader";
import {
  dataTableHeader,
  modalTableHeader,
} from "../../../../config/dataTableheaderConfig";
import TableHeader from "../../../common/TableHeader";

const DataTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchaseData, setPurchaseData] = useState([]);
  const [individualPurchaseData, setIndividualPurchaseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const role = localStorage.getItem("role");

  const openModal = (id) => {
    console.log(id);
    setIsModalOpen(true);
    fetchIndividualData(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchData = () => {
    setIsLoading(true);
    let url = "";
    if (role === "a") {
      url = "/admin/receipts";
    } else if (role === "u") {
      url = "/user/receipts";
    }
    axiosInstance
      .get(url)
      .then((response) => {
        console.log(response.data.data);
        setPurchaseData(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        //setError(error);
        setIsLoading(false);
      });
  };

  const fetchIndividualData = (id) => {
    setIsLoading(true);

    let url = "";
    if (role === "a") {
      url = `/admin/receipts/${id}`;
    } else if (role === "u") {
      url = `/user/receipts/${id}`;
    }

    axiosInstance
      .get(url)
      .then((response) => {
        console.log(response.data.data);
        setIndividualPurchaseData(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        //setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    //// Debounce
    const timeoutId = setTimeout(() => {
      fetchData();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container">
        <table className="table table-hover mt-4">
          <TableHeader data={dataTableHeader} />

          <tbody>
          
            {
              isLoading ? (<>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Loader />
                </div>
              </>):(
                purchaseData &&purchaseData.map((element) => (
                  <>
                    <tr className="text-center">
                      <td className="border border-primary">{element._id}</td>
                      <td className="border border-primary">
                        {element.updatedAt}
                      </td>
                      <td className="border border-primary">
                        {element.totalValue}
                      </td>
                      <td className="border border-primary">
                        <i
                          class="fa-regular fa-eye btn"
                          onClick={() => openModal(element._id)}
                        ></i>
                      </td>
                    </tr>
                  </>
                ))
              )

            }

          
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modals">
          <div className="modals-content">
            <span className="closes" onClick={closeModal}>
              &times;
            </span>
            <div className="container">
              <table className="table table-hover mt-4">
                <TableHeader data={modalTableHeader} />

                <tbody>
                  {isLoading ? (
                    <>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Loader />
                      </div>
                    </>
                  ) : individualPurchaseData.length > 0 ? (
                    individualPurchaseData[0].orderItems.map((element) => (
                      <>
                        <tr className="text-center">
                          <td className="border border-primary">
                            {element.productDetails.name}
                          </td>
                          <td className="border border-primary">
                            {element.productDetails.price}
                          </td>
                          <td className="border border-primary">
                            {element.quantity}
                          </td>
                          <td className="border border-primary">
                            {element.productDetails.price * element.quantity}
                          </td>
                        </tr>
                      </>
                    ))
                  ) : (
                    ""
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DataTable;
