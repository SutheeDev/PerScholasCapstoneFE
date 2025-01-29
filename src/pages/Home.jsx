import { Logo, UserIcon, NavigationIcon, Card } from "../components/index";
import styled from "styled-components";

// home
import { FiHome } from "react-icons/fi";

// Create
import { FiPlusCircle } from "react-icons/fi";

const Home = () => {
  return (
    <main>
      <nav>
        <NavContainer>
          <Logo />
          <UserIcon />
        </NavContainer>
      </nav>

      <Content>
        <aside>
          <SidebarContainer>
            <NavigationIcon icon={<FiHome />} />
            <NavigationIcon icon={<FiPlusCircle />} />
          </SidebarContainer>
        </aside>

        <section>
          <div className="cards-container">
            <h1>Welcome Pete!</h1>
            <section className="cards">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </section>
          </div>
        </section>
      </Content>
    </main>
  );
};
export default Home;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--container-padding);
`;

const Content = styled.div`
  display: flex;
  height: calc(100vh - 137px);
  /* background-color: wheat; */
`;

const SidebarContainer = styled.div`
  padding-left: var(--container-padding);
  padding-right: var(--container-padding);
  display: flex;
  flex-direction: column;
  row-gap: 48px;
`;
