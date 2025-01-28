import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/create" element={<h1>Create Restaurant</h1>} />
        <Route path="/restaurant" element={<h1>Restaurant</h1>} />
        <Route path="/restaurant/update" element={<h1>Restaurant Update</h1>} />
        <Route path="/user/update" element={<h1>Profile Update</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
