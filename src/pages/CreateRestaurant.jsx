import styled from "styled-components";

const CreateRestaurant = () => {
  return (
    <section>
      <CardsContainer>
        <h1 className="heading">Create Entry</h1>
      </CardsContainer>
    </section>
  );
};
export default CreateRestaurant;

const CardsContainer = styled.div`
  padding-right: var(--container-padding);
`;
