import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components";
import styled from "styled-components";

const DashboardLayout = () => {
  return (
    <main>
      <Navbar />
      <Content>
        <Sidebar />
        <Outlet />
      </Content>
    </main>
  );
};
export default DashboardLayout;

const Content = styled.div`
  display: flex;
  min-height: calc(100vh - 137px);
  /* background-color: wheat; */
`;
