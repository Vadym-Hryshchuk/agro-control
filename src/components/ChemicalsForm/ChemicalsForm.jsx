import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const chemicalsSchema = Yup.object().shape({
  name: Yup.string().required("This field is required"),
  description: Yup.string().required("This field is required"),
  initialBalances: Yup.number().min(1).required("This field is required"),
  unit: Yup.string().required("This field is required"),
});

export default function ChemicalsForm({ create }) {
  const initialValues = {
    name: "",
    unit: "",
    description: "",
    initialBalances: 0,
  };

  const handleSubmit = (values, { resetForm }) => {
    create(values);
    resetForm();
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
