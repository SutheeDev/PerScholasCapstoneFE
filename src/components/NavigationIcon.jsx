import styled from "styled-components";

const NavigationIcon = ({ icon }) => {
  return <Wrapper>{icon}</Wrapper>;
};
export default NavigationIcon;

const Wrapper = styled.div`
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  font-size: 32px;
  color: var(--text-color);
  cursor: pointer;

  transition: all 0.1s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
