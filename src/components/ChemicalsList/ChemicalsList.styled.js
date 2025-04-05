import styled from "styled-components";
import Icon from "../../icons/delete.svg";

export const Section = styled.section`
  margin-top: 12px;
  padding: 10px;
  p {
    text-align: center;
    margin-bottom: 8px;
  }
`;
export const List = styled.ul`
  li {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 3fr auto;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    // border-bottom: 1px solid rgb(227, 255, 168);

    &:nth-child(odd) {
      background-color: rgba(227, 255, 168, 0.3);
    }

    span {
      overflow: hidden;
      // white-space: nowrap;
    }
  }

  button {
    background: none;
  }
`;
export const DeleteButton = styled(Icon)`
  &:hover {
    fill: red;
  }
`;
