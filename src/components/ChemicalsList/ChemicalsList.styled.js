// import styled from "styled-components";
// import Icon from "../../icons/delete.svg";

// export const Section = styled.section`
//   margin-top: 12px;
//   padding: 10px;
//   p {
//     text-align: center;
//     margin-bottom: 8px;
//   }
// `;
// export const List = styled.ul`
//   li {
//     display: grid;
//     grid-template-columns: 2fr 1fr 1fr 3fr auto;
//     align-items: center;
//     gap: 4px;
//     padding: 4px 8px;
//     font-size: 14px;
//     border-radius: 12px;
//     border-bottom: 1px solid rgb(227, 255, 168);

//     &:nth-child(odd) {
//       background-color: rgba(227, 255, 168, 0.3);
//     }

//     span {
//       overflow: hidden;
//       // white-space: nowrap;
//     }
//   }

//   button {
//     background: none;
//   }
// `;
// export const DeleteButton = styled(Icon)`
//   &:hover {
//     fill: red;
//   }
// `;
import styled from "styled-components";
import Icon from "../../icons/delete.svg";

export const Section = styled.section`
  margin-top: 24px;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 3fr 40px;
  gap: 8px;
  padding: 8px 16px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-secondary);

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;

  li {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 3fr 40px;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    font-size: 13px;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    background-color: var(--color-surface);
    transition: border-color 0.15s ease, background-color 0.15s ease;

    &:hover {
      border-color: var(--color-border-hover);
      background-color: var(--color-surface-2);
    }

    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--color-text);
    }

    span:last-of-type {
      white-space: normal;
      overflow: visible;
      color: var(--color-text-secondary);
      font-size: 12px;
    }

    @media screen and (min-width: 768px) {
      font-size: 14px;
      padding: 14px 16px;
    }
  }
`;

export const EmptyState = styled.p`
  text-align: center;
  color: var(--color-text-secondary);
  padding: 40px 16px;
  font-size: 15px;
`;

export const DeleteButton = styled(Icon)`
  width: 18px;
  height: 18px;
  color: var(--color-text-secondary);
  transition: color 0.15s ease;
  flex-shrink: 0;

  &:hover {
    color: var(--color-error);
  }
`;
