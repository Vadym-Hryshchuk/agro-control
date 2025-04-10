import styled from "styled-components";
import Icon from "../../icons/delete.svg";

export const List = styled.ul`
  li {
    padding: 4px 8px;
    border-radius: 12px;
    display: grid;
    grid-template-columns: 3fr 2fr 1fr 2fr auto;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    border-bottom: 1px solid rgb(227, 255, 168);

    &:nth-child(odd) {
      background-color: rgba(227, 255, 168, 0.3);
    }

    span {
      overflow: hidden;
    }
  }

  button {
    background: none;
  }
`;
export const DeleteButton = styled(Icon)`
  width: 20px;
  &:hover {
    fill: red;
  }
`;
