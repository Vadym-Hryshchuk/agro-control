export default function transactionType(type) {
  switch (type) {
    case "income":
      return "Надходження";
    case "expense":
      return "Видаток";
    default:
      return "Помилка. Не визначено";
  }
}
