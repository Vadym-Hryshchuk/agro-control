import styled from "styled-components";

export const List = styled.ul`
  li {
    padding: 8px 8px;
    border-radius: 12px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    gap: 4px;
    font-size: 16px;
    border-bottom: 1px solid rgb(227, 255, 168);

    &:nth-child(odd) {
      background-color: rgba(227, 255, 168, 0.3);
    }

    span {
      overflow: hidden;
      // white-space: nowrap;
    }
  }
`;
