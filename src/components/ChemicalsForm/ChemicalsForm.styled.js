import { Field } from "formik";
import styled from "styled-components";

// export const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 20px;
// `;
// export const FieldStyled = styled(Field)`
//   width: 300px;
//   padding: 8px 10px;
//   border-radius: 12px;
//   border: 2px solid #e3ffa8;
//   outline: none;
//   transition: border-color 0.3s ease;

//   &.error {
//     border-color: rgb(231, 74, 59);
//   }

//   &.correct {
//     border-color: rgb(60, 188, 129);
//   }
//   &.textarea {
//     min-height: 65px;
//     max-height: 300px;
//     overflow-y: hidden;
//     resize: none;
//   }
//   @media screen and (min-width: 834px) {
//     width: 380px;
//   }
//   @media screen and (min-width: 1440px) {
//     width: 244px;
//   }
// `;
export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: start;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FieldStyled = styled(Field)`
  width: 100%;
  padding: 10px 14px;
  border-radius: var(--radius-md);
  border: 1.5px solid var(--color-border);
  background-color: var(--color-surface-2);
  color: var(--color-text);
  font-size: 14px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.18s ease, background-color 0.18s ease;
  -webkit-appearance: none;

  &::placeholder {
    color: var(--color-text-secondary);
  }

  &:hover {
    border-color: var(--color-border-hover);
  }

  &:focus {
    border-color: var(--color-accent);
    background-color: rgba(163, 220, 80, 0.04);
  }

  &.error {
    border-color: var(--color-error);
    background-color: var(--color-error-bg);
  }

  &.correct {
    border-color: var(--color-success);
  }

  &.textarea {
    min-height: 80px;
    max-height: 200px;
    resize: vertical;
    line-height: 1.5;
  }
`;

export const FormFooter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
`;