import styled from "styled-components";

const Logo = () => {
  return <Wrapper>The Dineary</Wrapper>;
};
export default Logo;

const Wrapper = styled.h1`
  font-size: var(--logo-size);
  color: var(--text-secondary-color);
`;
