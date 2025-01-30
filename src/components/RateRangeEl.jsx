import { useState } from "react";
import styled from "styled-components";
import { TiStarFullOutline } from "react-icons/ti";

const RateRangeEl = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const arr = [1, 2, 3, 4, 5];

  return (
    <RangeEl>
      {arr.map((star) => (
        <TiStarFullOutline
          key={star}
          className="star"
          color={
            star <= (hover || rating)
              ? "var(--text-secondary-color)"
              : "var(--bg-secondary-color)"
          }
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          onClick={() => setRating(star)}
        />
      ))}
    </RangeEl>
  );
};
export default RateRangeEl;

const RangeEl = styled.div`
  .star {
    font-size: 20px;
    cursor: pointer;
    /* color: var(--bg-secondary-color); */
  }
`;
