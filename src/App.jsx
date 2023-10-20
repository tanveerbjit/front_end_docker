import "./assets/css/margin_pading.scss";
import "./assets/css/row_col.scss";
import "./assets/css/font.scss";
import "./assets/css/test/custom/t_s.css";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/navTab.scss";
import "./assets/css/table.scss";
import "./assets/css/tag.scss";
import "./assets/css/button.scss";
import "./assets/css/dropdown.scss";
import "./assets/css/custom.scss";
import "./assets/css/global.scss";
import React, { useState, useEffect, createContext, useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  UNSAFE_DataRouterContext,
} from "react-router-dom";
import HomePage from "./components/pages/public/homePage";
import RegistrationPage from "./components/pages/public/registrationPage";
import LoginPage from "./components/pages/public/loginPage";
import ResetPage from "./components/pages/public/resetPage";
import ForgetPage from "./components/pages/public/forgetPage";
import DetailPage from "./components/pages/public/detailPage";
import CartPage from "./components/pages/public/cartPage";
import UserProfilePage from "./components/pages/common/UserProfilePage";
import UserOrderPage from "./components/pages/user/UserOrderPage";
import axiosInstance from "./util/axiosInstance";
import NotFoundPage from "./components/pages/public/NotFoundPage";
import Authenticate from "./components/auth/Authenticate";
import useFilterSortSearch from "./hooks/useFilterSortSearch";
import UserWalletPage from "./components/pages/user/UserWalletPage";
import AdminMantainProductPage from "./components/pages/admin/AdminMantainProductPage";
import AdminAddProductPage from "./components/pages/admin/AdminAddProductPage";
import AdminEditProductPage from "./components/pages/admin/AdminEditProductPage";
import AdminMantainUserPage from "./components/pages/admin/AdminMantainUserPage";
import VoucherPage from "./components/pages/public/VoucherPage";
import AdminRegistrationPage from "./components/pages/public/AdminRegistrationPage";
import MailSendPage from "./components/pages/public/MailSendpage";
import UnAuthenticate from "./components/auth/Unauthenticate";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

export const ProductContext = createContext(null);

function App() {
  const [book, setBook] = useState([]);
  const [cart, setCart] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [error, setError] = useState(null);
  const { filter_api } = useFilterSortSearch();
  const message = useSelector((state)=>state.message)


  const fetchData = () => {
    setIsDataLoading(true);
    axiosInstance
      .get(filter_api)
      .then((response) => {
        setBook(response.data.data);
        setError(null);
        setIsLoading(false);
        setIsDataLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
        setIsDataLoading(false);
      });
  };

  useEffect(() => {
    //// Debounce
    const timeoutId = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [filter_api, message]);

  return (
    <ProductContext.Provider
      value={{ book, isLoading, error, cart, setCart, isDataLoading }}
    >
      <ToastContainer />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/detail/:id" element={<DetailPage />} />

          <Route element={<UnAuthenticate />}>
            <Route path="/registration" element={<RegistrationPage />} />
            <Route
              path="/admin/registration"
              element={<AdminRegistrationPage />}
            />
            
            <Route path="/login" element={<LoginPage />} />
            <Route path="/mail" element={<MailSendPage />} />

            <Route
              path="/forget"
              element={<ForgetPage />}
            />
            <Route
              path="/reset/:token/:userId"
              element={<ResetPage />}
            />
          </Route>
          <Route element={<Authenticate />}>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/user" element={<UserProfilePage />} />
            <Route path="/user/purchase" element={<UserOrderPage />} />
            <Route path="/user/wallet" element={<UserWalletPage />} />
            <Route path="/user/voucher" element={<VoucherPage />} />

            <Route
              path="/user/all/product"
              element={<AdminMantainProductPage />}
            />
            <Route path="/user/all/user" element={<AdminMantainUserPage />} />
            <Route path="/user/product/add" element={<AdminAddProductPage />} />
            <Route
              path="/user/product/update/:id"
              element={<AdminEditProductPage />}
            />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  );
}

export default App;
