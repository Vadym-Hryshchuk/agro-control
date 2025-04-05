import styled from "styled-components";
import { Field } from "formik";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const FieldStyled = styled(Field)`
  width: 300px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 2px solid #e3ffa8;
  outline: none;
  transition: border-color 0.3s ease;

  &.error {
    border-color: rgb(231, 74, 59);
  }

  &.correct {
    border-color: rgb(60, 188, 129);
  }

  @media screen and (min-width: 834px) {
    width: 380px;
  }
  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;
