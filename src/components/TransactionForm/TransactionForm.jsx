import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import AppWrapper from "../Wrapper/AppWrapper";
import ErrorText from "../InputMessage/ErrorText";
import SuccessText from "../InputMessage/SuccessText";
import { FieldStyled, Wrapper } from "./TransactionForm.styled";
import ButtonSubmit from "./../ButtonSubmit/ButtonSubmit";
import DatePickerField from "./../DatePickerField/DatePickerField";

const TransactionsSchema = Yup.object().shape({
  chemicalId: Yup.string().required("Будь ласка, оберіть ЗЗР"),
  type: Yup.string()
    .oneOf(["income", "expense"])
    .required("Це поле обов'язкове"),
  quantity: Yup.number()
    .min(1, "Це поле не може бути < чи = 0")
    .required("Це поле обов'язкове"),
  date: Yup.date().required("Це поле обов'язкове"),
});

export default function TransactionsForm({ create, options }) {
  const initialValues = {
    chemicalId: "",
    type: "",
    quantity: "",
    date: "",
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      await create(values);
      resetForm({ values: initialValues });
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
        validationSchema={TransactionsSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors, values }) => {
          return (
            <Form autoComplete="off">
              <Wrapper>
                <FieldStyled
                  component="select"
                  name="chemicalId"
                  className={
                    touched.chemicalId && errors.chemicalId
                      ? "error"
                      : values.chemicalId !== ""
                      ? "correct"
                      : "normal"
                  }
                >
                  <option value="">Оберіть ЗЗР із списку</option>
                  {options
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((option) => (
                      <option key={option._id} value={option._id}>
                        {option.name}
                      </option>
                    ))}
                </FieldStyled>
                <ErrorMessage name="chemicalId" component={ErrorText} />
                {touched.chemicalId && !errors.chemicalId && (
                  <SuccessText>Дані коректні</SuccessText>
                )}
              </Wrapper>

              <Wrapper>
                <FieldStyled
                  component="select"
                  name="type"
                  className={
                    touched.type && errors.type
                      ? "error"
                      : values.type !== ""
                      ? "correct"
                      : "normal"
                  }
                >
                  <option value="">Оберіть вид операції</option>
                  <option value="income">Прихід</option>
                  <option value="expense">Розхід</option>
                </FieldStyled>
                <ErrorMessage name="type" component={ErrorText} />
                {touched.type && !errors.type && (
                  <SuccessText>Дані коректні</SuccessText>
                )}
              </Wrapper>

              <Wrapper>
                <FieldStyled
                  type="number"
                  name="quantity"
                  placeholder="Кількість"
                  className={
                    touched.quantity && errors.quantity
                      ? "error"
                      : values.quantity !== ""
                      ? "correct"
                      : "normal"
                  }
                />
                <ErrorMessage name="quantity" component={ErrorText} />
                {touched.quantity && !errors.quantity && (
                  <SuccessText>Дані коректні</SuccessText>
                )}
              </Wrapper>

              <Wrapper>
                <FieldStyled
                  type="date"
                  name="date"
                  component={DatePickerField}
                  className={
                    touched.date && errors.date
                      ? "error"
                      : values.date !== ""
                      ? "correct"
                      : "normal"
                  }
                />
                <ErrorMessage name="date" component={ErrorText} />
                {touched.date && !errors.date && (
                  <SuccessText>Дані коректні</SuccessText>
                )}
              </Wrapper>
              <ButtonSubmit type="submit">Додати</ButtonSubmit>
            </Form>
          );
        }}
      </Formik>
    </AppWrapper>
  );
}
