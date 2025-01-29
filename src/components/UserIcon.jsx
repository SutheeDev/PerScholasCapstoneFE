import { IoChevronDown } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
import styled from "styled-components";

const UserIcon = () => {
  return (
    <Wrapper>
      <div className="userIcon-container">
        <HiOutlineUserCircle />
      </div>
      <div className="down-arrow-container">
        <IoChevronDown />
      </div>
    </Wrapper>
  );
};
export default UserIcon;

const Wrapper = styled.div`
  width: 60px;
  display: flex;
  gap: 4px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  .userIcon-container {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    font-size: 40px;
  }

  .down-arrow-container {
    width: 16px;
    height: 16px;
  }
`;
