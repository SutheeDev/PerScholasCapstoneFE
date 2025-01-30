import { useState } from "react";
import styled from "styled-components";
import { TiStarFullOutline } from "react-icons/ti";

const RateRangeEl = () => {
  const [hover, setHover] = useState(0);

  const arr = [1, 2, 3, 4, 5];

  return (
    <RangeEl>
      {arr.map((star) => (
        <TiStarFullOutline
          key={star}
          className="star"
          color={
            star <= hover
              ? "var(--text-secondary-color)"
              : "var(--bg-secondary-color)"
          }
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
        />
      ))}
    </RangeEl>
  );
};
export default RateRangeEl;

const RangeEl = styled.div`
  .star {
    font-size: 20px;
    /* color: var(--bg-secondary-color); */
  }
`;
