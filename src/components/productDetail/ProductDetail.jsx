import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import ProductImageCarousel from './ProductImageCarousel';
import ProductInfo from './ProductInfo';
import ProductReview from './ProductReview';
import Loader from '../common/Loader'
import { useLocation } from "react-router-dom";
import axiosInstance from '../../util/axiosInstance';
import baseurl from '../../util/baseurl';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";




function ProductDetails() {

  const [detail, setDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
   const message = useSelector((state) => state.message);

  const { id } = useParams();

  const pic = baseurl + (detail.pic && detail.pic.includes("public/") ? detail.pic.replace("public/", "") : detail.pic);


  
  const callDetailApi = async () => {
    
    try {
      
      const response = await fetch(`http://127.0.0.1:3000/api/v1/product/show/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
  
      if (response.ok) {
        const data = await response.json();
        setDetail(data.data);
        setIsLoading(true);
      } else {
        // Handle error if needed
      }
    } catch (err) {
      console.error(err);
      // Handle error if needed
    }
  };

  useEffect(() => {
    callDetailApi();
  }, [message]);
  
  return (
    <div className="container-fluid pb-5">
      {isLoading ? (
        <>
          <div className="row px-xl-5">
            <div className="col-lg-5">
            <img className="w-100 h-100" src={pic} alt="Image" />
              {/* <ProductImageCarousel img={pic}/> */}
            </div>
            <div className="col-lg-7 h-auto mb-30">
              <ProductInfo info={detail} id={id}/>
            </div>
          </div>
          <div className="row px-xl-5">
            <div className="col">
              <ProductReview id={id} info={detail}/>
            </div>
          </div>
        </>
      ) : (
        <div style={{width:"100vw",display:"flex",justifyContent:"center"}}>
        <Loader/>
        </div>
        // <div>Loading...</div>
      )}
    </div>
  );
}

export default ProductDetails;
