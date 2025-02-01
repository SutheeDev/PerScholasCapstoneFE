import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Card = ({ restaurant }) => {
  const navigate = useNavigate();

  const date = new Date(restaurant.visitDate);

  // Format date
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  const handleClick = (e) => {
    navigate(`/restaurant/${restaurant._id}`);
  };

  return (
    <Wrapper onClick={handleClick}>
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
  max-width: var(--card-width);
  /* max-height: var(--card-height); */
  border-radius: var(--card-radius);
  overflow: hidden;
  background-color: var(--bg-secondary-color);
  cursor: pointer;

  transition: all 0.1s ease;
  &:hover {
    transform: scale(1.01);
  }

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
    padding: 10px 15px;
    font-family: var(--primary-font-medium);
  }
  .card-content h4 {
    margin-bottom: 5px;
  }
  .card-content span {
    font-family: var(--primary-font-light);
  }
`;
