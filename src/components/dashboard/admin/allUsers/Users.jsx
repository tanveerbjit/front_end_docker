import React, { useState, useEffect } from "react";
import axiosInstance from "../../../../util/axiosInstance";
import Loader from "../../../common/Loader";
import Toggle from "./Toogle";
import TableHeader from "../../../common/TableHeader"
import { userHeader } from "../../../../config/usersHeaderConfig";
import { toast } from "react-toastify";




const Users = () => {

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isClickDisabled, setIsClickDisabled] = useState(false);


  const role = localStorage.getItem("role");

  const handleSuspend = async (isChecked, id) => {
    try {
      setIsClickDisabled(true); // Disable clicks

      const response = await axiosInstance.put(`/admin/ban/update`, {
        userId: id,
        ban: isChecked,
      });

      if (response.status === 200) {
        const data = response.data;
        toast.success("data has been updated");
        console.log(data);
      } else {
         toast.error("Something wrong");
        console.error("Error fetching user profile:", response.statusText);
      }

      // Reset isClickDisabled to false after 2 seconds
      setTimeout(() => {
        setIsClickDisabled(false);
      }, 2000); // 2-second delay
    } catch (error) {
      toast.error("Something wrong");
      console.error("Error fetching user profile:", error);
    }
  };

  const handlePromote = async (isChecked, id) => {
    try {
      setIsClickDisabled(true); // Disable clicks

      const response = await axiosInstance.put(`/admin/membership/update`, {
        userId: id,
        premium: isChecked,
      });

      if (response.status === 200) {
        const data = response.data;
        toast.success("Data has been updated");
        console.log(data);
      } else {
        toast.error("Something wrong");
        console.error("Error fetching user profile:", response.statusText);
      }

      // Reset isClickDisabled to false after 2 seconds
      setTimeout(() => {
        setIsClickDisabled(false);
      }, 2000); // 2-second delay
    } catch (error) {
      toast.error("Something wrong");
      console.error("Error fetching user profile:", error);
    }
  };


  useEffect(() => {
    // Replace this with your API call to fetch user data
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await axiosInstance.get(`/admin/only-user`);

        if (response.status === 200) {
          const data = response.data.data;
          console.log(data);
          setUser(data);
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
      {" "}
      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader />
        </div>
      ) : user ? (
        <div className="container">
          <table className="table table-hover mt-4">
            <TableHeader data={userHeader} />
            <tbody>
              {user.length > 0 ? (
                user &&
                user.map((element) => (
                  <tr className="text-center">
                    <td className="border border-primary">
                      {element.first_name}
                    </td>
                    <td className="border border-primary">
                      {element.last_name}
                    </td>
                    <td className="border border-primary">
                      {element.user_name}
                    </td>
                    <td className="border border-primary">{element.email}</td>
                    <td className="border border-primary">{element.role}</td>

                    <td className="border border-primary">{element.amount}</td>
                    <td className="border border-primary">
                      <Toggle
                        onChange={handleSuspend}
                        userId={element.auth_data[0]._id}
                        checked={element.ban}
                        isDisabled={isClickDisabled}
                      />
                    </td>
                    <td className="border border-primary">
                      <Toggle
                        onChange={handlePromote}
                        userId={element.auth_data[0]._id}
                        checked={element.premium}
                        isDisabled={isClickDisabled}
                      />
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

export default Users;
