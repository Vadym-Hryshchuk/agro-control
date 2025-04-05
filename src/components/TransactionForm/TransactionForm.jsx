import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AppWrapper from "../Wrapper/AppWrapper";

const UserSchema = Yup.object().shape({
  chemicalId: Yup.string().required("Please select a fertilizer"),
  type: Yup.string()
    .oneOf(["income", "expense"])
    .required("This field is required"),
  quantity: Yup.number().min(1).required("This field is required"),
  date: Yup.date().required("This field is required"),
});

export default function TransactionsForm({ create, options }) {
  const initialValues = {
    chemicalId: "",
    type: "income",
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
        validationSchema={UserSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors, values }) => (
          <Form autoComplete="off">
            <div>
              <label>Назва ЗЗР:</label>
              <Field as="select" name="chemicalId">
                <option value="">Оберіть ЗЗР</option>
                {options.map((option) => (
                  <option key={option._id} value={option._id}>
                    {option.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="chemicalId" component="span" />
            </div>
            <div>
              <label>Type:</label>
              <Field as="select" name="type">
                <option value="income">Прихід</option>
                <option value="expense">Розхід</option>
              </Field>
              <ErrorMessage name="type" component="span" />
            </div>

            <div>
              <label>Quantity:</label>
              <Field type="number" name="quantity" />
              <ErrorMessage name="quantity" component="span" />
            </div>
            <div>
              <label>Date:</label>
              <Field type="date" name="date" />
              <ErrorMessage name="date" component="span" />
            </div>
            <button type="submit">Додати</button>
          </Form>
        )}
      </Formik>
    </AppWrapper>
  );
}
