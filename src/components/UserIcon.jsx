import { useState } from "react";
import { ProfileDropdown } from "../components/index";
import { IoChevronDown } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
import styled from "styled-components";

const UserIcon = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(true);
  return (
    <Wrapper onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
      <div className="userIcon-container">
        <HiOutlineUserCircle />
      </div>
      <div className="down-arrow-container">
        <IoChevronDown />
      </div>
      {isProfileDropdownOpen && <ProfileDropdown />}
    </Wrapper>
  );
};
export default UserIcon;

const Wrapper = styled.div`
  width: 40px;
  display: flex;
  gap: 4px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  position: relative;

  .userIcon-container {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    font-size: 40px;
  }

  .userIcon-container svg {
    width: var(--user-icon-size);
  }

  .down-arrow-container {
    width: 16px;
    height: 16px;
  }

  svg {
    color: var(--text-color);
  }
`;
