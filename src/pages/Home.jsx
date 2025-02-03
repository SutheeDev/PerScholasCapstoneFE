import { Card } from "../components/index";
import { useGlobalContext } from "../App";
import styled from "styled-components";

const Home = () => {
  const { user, restaurants } = useGlobalContext();

  return (
    <CardsContainer>
      <div className="page-wrapper">
        <h1 className="heading">{`Welcome ${user.name}!`}</h1>
        <section className="cards">
          {restaurants.map((res) => (
            <Card key={res._id} restaurant={res} />
          ))}
        </section>
      </div>
    </CardsContainer>
  );
};
export default Home;

const CardsContainer = styled.div`
  padding-right: var(--container-padding);
  padding-bottom: var(--container-padding);
  width: 100%;

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--cards-gap);
  }
`;
