import styled from "styled-components";
import { NavigationIcon } from "./";

// import icons
import { FiHome } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside>
      <SidebarContainer>
        <NavigationIcon icon={<FiHome />} destination="/" />
        <NavigationIcon icon={<FiPlusCircle />} destination="/create" />
      </SidebarContainer>
    </aside>
  );
};
export default Sidebar;

const SidebarContainer = styled.div`
  padding-left: var(--container-padding);
  padding-right: var(--container-padding);
  display: flex;
  flex-direction: column;
  row-gap: 48px;
`;
