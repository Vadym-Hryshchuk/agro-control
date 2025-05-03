import { useState } from "react";

import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { DeleteButton, List, Section } from "./ChemicalsList.styled";

export default function ChemicalsList({ chemicals, remove }) {
  const [chemicalToDelete, setChemicalToDelete] = useState(null);

  const handleDelete = () => {
    if (chemicalToDelete) {
      remove(chemicalToDelete._id);
      setChemicalToDelete(null);
    }
  };
  return (
    <Section>
      <p>Перелік ЗЗР</p>
      <List>
        {chemicals
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((chemical) => {
            return (
              <li key={chemical._id}>
                <span>{chemical.name}</span>
                <span>{chemical.unit}</span>
                <span>{chemical.initialBalances}</span>
                <span>{chemical.description}</span>
                <button
                  type="button"
                  onClick={() => setChemicalToDelete(chemical)}
                >
                  <DeleteButton />
                </button>
              </li>
            );
          })}
      </List>
      <ModalWrapper
        isOpen={chemicalToDelete !== null}
        onClose={() => setChemicalToDelete(null)}
        title="Видалити операцію?"
        footer={
          <>
            <button onClick={handleDelete}>Так, видалити</button>
            <button onClick={() => setChemicalToDelete(null)}>Скасувати</button>
          </>
        }
      >
        <p style={{ color: "black" }}>Ви дійсно хочете видалити цю операцію?</p>
      </ModalWrapper>
    </Section>
  );
}
