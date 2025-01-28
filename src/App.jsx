import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Error,
  CreateRestaurant,
  UpdateRestaurant,
  UpdateUser,
} from "./pages/index";

const App = () => {
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
