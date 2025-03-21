export default function InventoryList({ inventory }) {
  return (
    <ul>
      {inventory.map(({ _id, chemicalId, currentStock }) => (
        <li key={_id}>
          <span>{chemicalId.name}</span>
          <span>{currentStock}</span>
        </li>
      ))}
    </ul>
  );
}
