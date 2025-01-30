import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const DashboardLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};
export default DashboardLayout;
