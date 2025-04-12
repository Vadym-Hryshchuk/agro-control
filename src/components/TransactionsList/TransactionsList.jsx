import dateFormatting from "../../utils/dateFormatting";
import transactionType from "../../utils/transactionType";
import {
  DeleteButton,
  List,
} from "../TransactionsList//TransactionsList.styled";

export default function TransactionList({ transactions, remove }) {
  return (
    <>
      <p>Останні додані операції</p>
      <List>
        {transactions
          .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
          .map(({ _id, chemicalId, type, quantity, date }) => {
            return (
              <li key={_id}>
                <span>
                  {chemicalId !== null ? chemicalId.name : "Видалена назва ЗЗР"}
                </span>
                <span>{transactionType(type)}</span>
                <span>{quantity}</span>
                <span>{dateFormatting(date)}</span>
                <button type="button" onClick={() => remove(_id)}>
                  <DeleteButton />
                </button>
              </li>
            );
          })}
      </List>
    </>
  );
}
