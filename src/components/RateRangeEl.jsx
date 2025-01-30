import styled from "styled-components";
import { TiStarFullOutline } from "react-icons/ti";

const RateRangeEl = () => {
  const arr = [1, 2, 3, 4, 5];

  return (
    <RangeEl>
      {arr.map((star) => (
        <TiStarFullOutline key={star} className="star" />
      ))}
    </RangeEl>
  );
};
export default RateRangeEl;

const RangeEl = styled.div`
  .star {
    font-size: 20px;
    color: var(--bg-secondary-color);
  }
`;
