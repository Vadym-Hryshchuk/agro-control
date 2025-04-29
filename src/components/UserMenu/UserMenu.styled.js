import styled from "styled-components";
import { NavLink } from "react-router";

import MyIcon from "../../icons/profile-circle.svg";

export const StyledIcon = styled(MyIcon)`
  width: 26px;
  height: 26px;
  
`;

export const StyledNavLink = styled(NavLink)`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 16px;
  border-bottom: 1px solid rgb(227, 255, 168);

  background-color: rgba(227, 255, 168, 0.3);

  &:not(:last-child) {
    margin-right: 4px;
  }
  &:hover {
    background-color: rgba(227, 255, 168, 0.5);
    color: rgb(227, 255, 168);
  }
  &.active {
    color: rgba(227, 255, 168, 0.8);
  }
`;