import React, { useState,useEffect } from 'react';
import "../../common/order/modal.css"
import Loader from "../../../common/Loader"
import axiosInstance from '../../../../util/axiosInstance';
import { Link } from 'react-router-dom';
import { productHeader } from '../../../../config/productHeaderConfic';
import TableHeader from "../../../common/TableHeader"
import { toast } from 'react-toastify';




const Mantain = () => {
 
  const [product,setProduct] = useState({}) 
  const [isLoading, setIsLoading] = useState(true);
  const [isDelete, setIsDelete] = useState(false);

  
   const role = localStorage.getItem("role");

   const handleDelete = async (id)=>{

    setIsLoading(true);
    const response = await axiosInstance.delete(`/admin/product/destroy/${id}`);
  
      if (response.status === 200) {
        setIsDelete(!isDelete)
        setIsLoading(false);
        toast.success("product deleted succesfully")
      } else {
        toast.error("something wrong");
        console.error('Error updating profile:', response.statusText);
        setIsLoading(false);
      }
  }

    useEffect(() => {
    // Replace this with your API call to fetch user data
    const fetchData = async () => {
      try {
        
        let response = await axiosInstance.get('/product/all');

        if (response.status === 200) {
          const data = response.data.data;
          console.log(data)
          setProduct(data)
         /// setValue Task
          setIsLoading(false);
          
        } else {
          console.error('Error fetching user profile:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchData();
  }, [isDelete]);


  

  return (
    <>
      {" "}
      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader />
        </div>
      ) : product ? (
        <div className="ml-4 mt-2">
          <Link to={"/user/product/add"} className="btn btn-primary">
            Add <i class="fa-solid fa-plus"></i>
          </Link>
          <table className="table table-hover mt-4">
            <TableHeader data={productHeader} />
            <tbody>
              {product.products.length > 0 ? (
                product.products.map((element) => (
                  <tr className="text-center">
                    
                    <td className="border border-primary">{element.name}</td>
                    <td className="border border-primary">{element.price}</td>
                    <td className="border border-primary">{element.stock}</td>
                    
                    <td className="border border-primary">
                      {element.categoryInfo[0].name}
                    </td>
                    <td className="border border-primary">
                      {element.authorInfo[0].firstName +
                        " " +
                        element.authorInfo[0].lastName}
                    </td>
                    <td className="border border-primary">
                      {element.publisherInfo[0].name}
                    </td>
                    
                    <td className="border border-primary">
                      <Link to={`/user/product/update/${element._id}`}>
                        <i class="fa-solid fa-pen-to-square btn"></i>
                      </Link>
                    </td>
                    <td className="border border-primary">
                      <i
                        class="fa-solid fa-trash-can btn"
                        onClick={() => {
                          handleDelete(element._id);
                        }}
                      ></i>
                    </td>
                  </tr>
                ))
              ) : (
                <p>No data found</p>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No Data Found</p>
      )}
    </>
  );
};

export default Mantain;
