export default function InventoryList({ inventory }) {
  return (
    <ul>
      {inventory.map(({ _id, chemicalId, currentStock }) => (
        <li key={_id}>
          <h3>Одиниця</h3>
          <span>{chemicalId.name}</span>
          <span>{currentStock}</span>
        </li>
      ))}
    </ul>
  );
}
//
