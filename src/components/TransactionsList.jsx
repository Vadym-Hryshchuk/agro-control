import dateFormatting from "../utils/dateFormatting";
import transactionType from "../utils/transactionType";

export default function TransactionList({ transactions }) {
  return (
    <ul>
      {transactions.map(({ _id, chemicalId, type, quantity, date }) => {
        return (
          <li key={_id}>
            <span>{chemicalId.name}</span>
            <span>{transactionType(type)}</span>
            <span>{quantity}</span>
            <span>{dateFormatting(date)}</span>
          </li>
        );
      })}
    </ul>
  );
}
