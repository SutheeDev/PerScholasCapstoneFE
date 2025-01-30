import { useState } from "react";
import styled from "styled-components";
import { TiStarFullOutline } from "react-icons/ti";

const RateRangeEl = ({ Icon, num }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const arr = Array.from({ length: num }, (_, i) => i + 1);

  return (
    <RangeEl>
      {arr.map((el) => (
        <Icon
          key={el}
          className="el"
          color={
            el <= (hover || rating)
              ? "var(--text-secondary-color)"
              : "var(--bg-secondary-color)"
          }
          onMouseEnter={() => setHover(el)}
          onMouseLeave={() => setHover(0)}
          onClick={() => setRating(el)}
        />
      ))}
    </RangeEl>
  );
};
export default RateRangeEl;

const RangeEl = styled.div`
  .el {
    font-size: 20px;
    cursor: pointer;
  }
`;
