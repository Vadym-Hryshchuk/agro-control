export default function InventoryList({ inventory }) {
  return (
    <>
      <p>Актуальні залишки засобів захисту рослин</p>
      <ul>
        {inventory
          .sort((a, b) => a.chemicalId.name.localeCompare(b.chemicalId.name))
          .map(({ _id, chemicalId, currentStock }) => {
            return (
              <li key={_id}>
                <span>{chemicalId.name}</span>
                {/* <span>{transactionType(type)}</span> */}
                <span>{currentStock}</span>
                {/* <span>{dateFormatting(date)}</span> */}
                {/* <button type="button" onClick={() => remove(_id)}>
                  Видалити
                </button> */}
              </li>
            );
          })}
      </ul>
    </>
  );
}
