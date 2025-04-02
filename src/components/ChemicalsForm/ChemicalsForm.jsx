import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
    description: "",
    initialBalances: "",
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
    <Formik
      initialValues={initialValues}
      validationSchema={chemicalsSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>Назва ЗЗР:</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label>Одиниця виміру:</label>
          <Field type="text" name="unit" />
          <ErrorMessage name="unit" component="span" />
        </div>
        <div>
          <label>Початковий залишок:</label>
          <Field type="number" name="initialBalances" />
          <ErrorMessage name="initialBalances" component="span" />
        </div>
        <div>
          <label>Короткий опис:</label>
          <Field type="text" name="description" />
          <ErrorMessage name="description" component="span" />
        </div>
        <button type="submit">Додати</button>
      </Form>
    </Formik>
  );
}
