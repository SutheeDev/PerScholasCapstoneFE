import styled from "styled-components";

const Card = ({ restaurant }) => {
  const date = new Date(restaurant.visitDate);

  // Format date
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return (
    <Wrapper>
      <div className="image">
        <img src={restaurant.image} alt={restaurant.name} />
      </div>
      <div className="card-content">
        <h4>{restaurant.name}</h4>
        <p>
          Visit Date : <span>{formattedDate}</span>
        </p>
      </div>
    </Wrapper>
  );
};
export default Card;

const Wrapper = styled.div`
  width: 408px;
  height: 304px;
  border-radius: 12px;
  overflow: hidden;
  background-color: wheat;

  .image {
    width: 100%;
  }

  img {
    min-width: 100%;
    min-height: 220px;
    max-height: 220px;
    object-fit: cover;
    background-color: red;
  }

  .card-content {
    padding: 15px;
    font-family: var(--primary-font-medium);
  }
  .card-content h4 {
    margin-bottom: 5px;
  }
  .card-content span {
    font-family: var(--primary-font-light);
  }
`;
