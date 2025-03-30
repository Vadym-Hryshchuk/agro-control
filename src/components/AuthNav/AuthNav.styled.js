import styled from "styled-components";
import { NavLink } from "react-router";

export const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const AuthNavLink = styled(NavLink)`
  margin-right: 4px;
  &:not(:first-child) {
    margin-left: 4px;
  }
`;
