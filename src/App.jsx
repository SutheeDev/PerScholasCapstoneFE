import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Error,
  CreateRestaurant,
  UpdateRestaurant,
  UpdateUser,
} from "./pages/index";
import apiClient from "./utils/apiClient";

const userId = import.meta.env.VITE_USER_ID;

const App = () => {
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      const response = await apiClient.get(`/user/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateRestaurant />} />
        <Route path="/restaurant" element={<UpdateRestaurant />} />

        {/* Propably don't need this update route here, let's see*/}
        {/* <Route path="/restaurant/update" element={<UpdateRestaurant />} /> */}

        <Route path="/user/update" element={<UpdateUser />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
