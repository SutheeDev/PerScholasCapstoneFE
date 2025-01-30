import { Card } from "../components/index";
import { useGlobalContext } from "../App";
import styled from "styled-components";

const Home = () => {
  const { user, restaurants } = useGlobalContext();

  return (
    <section>
      <CardsContainer>
        <h1 className="greeting">{`Welcome ${user.name}!`}</h1>
        <section className="cards">
          {restaurants.map((res) => (
            <Card key={res._id} restaurant={res} />
          ))}
        </section>
      </CardsContainer>
    </section>
  );
};
export default Home;

const CardsContainer = styled.div`
  padding-right: var(--container-padding);

  .greeting {
    font-size: 62px;
    margin-bottom: 50px;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
`;
