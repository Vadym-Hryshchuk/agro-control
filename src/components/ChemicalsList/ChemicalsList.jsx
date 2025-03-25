export default function ChemicalsList({ chemicals, remove }) {
  return (
    <>
      <p>Останні додані операції</p>
      <ul>
        {chemicals
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ _id, name, unit, description, initialBalances }) => {
            return (
              <li key={_id}>
                <span>{name}</span>
                <span>{unit}</span>
                <span>{initialBalances}</span>
                <span>{description}</span>
                <button type="button" onClick={() => remove(_id)}>
                  Видалити
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
}
