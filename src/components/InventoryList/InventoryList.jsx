import { List } from "./InventoryList.styled";

export default function InventoryList({ inventory }) {
  return (
    <>
      <p>Актуальні залишки засобів захисту рослин</p>
      <List>
        {inventory
          .sort((a, b) => a.chemicalId.name.localeCompare(b.chemicalId.name))
          .map(({ _id, chemicalId, currentStock }) => {
            return (
              <li key={_id}>
                <span>{chemicalId.name}</span>
                <span>{currentStock}</span>
              </li>
            );
          })}
      </List>
    </>
  );
}
