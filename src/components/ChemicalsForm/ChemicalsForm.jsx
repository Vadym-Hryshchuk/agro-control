import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorText from "../InputMessage/ErrorText";
import SuccessText from "../InputMessage/SuccessText";
import { FieldStyled, SubButton, Wrapper } from "./ChemicalsForm.styled";
import AppWrapper from "../Wrapper/AppWrapper";

const chemicalsSchema = Yup.object().shape({
  name: Yup.string().required("Це поле обов'язкове"),
  description: Yup.string().required("Це поле обов'язкове"),
  initialBalances: Yup.number()
    .min(0, "Залишок не може бути від’ємним")
    .required("Це поле обов'язкове"),
  unit: Yup.string().required("Це поле обов'язкове"),
});

export default function ChemicalsForm({ create }) {
  const initialValues = {
    name: "",
    unit: "",
    initialBalances: "",
    description: "",
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      await create(values);
      resetForm();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AppWrapper>
    <Formik
      initialValues={initialValues}
      validationSchema={chemicalsSchema}
      onSubmit={handleSubmit}
    >
      {({ touched, errors, values }) => (
        <Form autoComplete="off">
          <Wrapper>
            <FieldStyled
              type="text"
              name="name"
              placeholder="Назва ЗЗР"
              className={
                touched.name && errors.name
                  ? "error"
                  : values.name !== ""
                  ? "correct"
                  : "normal"
              }
            />
            <ErrorMessage name="name" component={ErrorText} />
            {touched.name && !errors.name && (
              <SuccessText>Дані коректні</SuccessText>
            )}
          </Wrapper>
          <Wrapper>
            <FieldStyled
              type="text"
              name="unit"
              placeholder="Одиниця виміру"
              className={
                touched.unit && errors.unit
                  ? "error"
                  : values.unit !== ""
                  ? "correct"
                  : "normal"
              }
            />
            <ErrorMessage name="unit" component={ErrorText} />
            {touched.unit && !errors.unit && (
              <SuccessText>Дані коректні</SuccessText>
            )}
          </Wrapper>
          <Wrapper>
            <FieldStyled
              type="number"
              name="initialBalances"
              placeholder="Початковий залишок"
              className={
                touched.initialBalances && errors.initialBalances
                  ? "error"
                  : errors.initialBalances
                  ? "correct"
                  : "normal"
              }
            />
            <ErrorMessage name="initialBalances" component={ErrorText} />
            {touched.initialBalances && !errors.initialBalances && (
              <SuccessText>Дані коректні</SuccessText>
            )}
          </Wrapper>
          <Wrapper>
            <FieldStyled
              component="textarea"
              name="description"
              placeholder="Короткий опис"
              className={`textarea ${
                touched.description && errors.description
                  ? "error"
                  : touched.description && !errors.description
                  ? "correct"
                  : "normal"
              }`}
            />
            <ErrorMessage name="description" component={ErrorText} />
            {touched.description && !errors.description && (
              <SuccessText>Дані коректні</SuccessText>
            )}
          </Wrapper>
          <SubButton type="submit">Додати</SubButton>
        </Form>
      )}
    </Formik>
    </AppWrapper>
  );
}
