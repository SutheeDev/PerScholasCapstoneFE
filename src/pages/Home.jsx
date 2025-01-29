import { Logo, UserIcon, NavigationIcon, Card } from "../components/index";
import styled from "styled-components";

const Home = () => {
  return (
    <main>
      <nav>
        <NavContainer>
          <Logo />
          <UserIcon />
        </NavContainer>
      </nav>

      <div>
        <aside>
          <div className="sidebar-container">
            <NavigationIcon />
            <NavigationIcon />
            <NavigationIcon />
          </div>
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
      </div>
    </main>
  );
};
export default Home;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--container-padding);
`;
