import { Logo, UserIcon } from "../components/index";
import styled from "styled-components";

const Navbar = () => {
  return (
    <nav>
      <NavContainer>
        <Logo />
        <UserIcon />
      </NavContainer>
    </nav>
  );
};
export default Navbar;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--container-padding);
`;
