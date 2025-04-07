import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import uk from "date-fns/locale/uk";
import { useFormikContext } from "formik";

registerLocale("uk", uk);

export default function DatePickerField({ field, className }) {
  const { setFieldValue } = useFormikContext();

  return (
    <DatePicker
      {...field}
      selected={field.value ? new Date(field.value) : null}
      onChange={(val) => setFieldValue(field.name, val)}
      placeholderText="Оберіть/введіть дату операції"
      dateFormat="dd.MM.yyyy"
      locale="uk"
      className={className}
    />
  );
}
