import React from "react";
import { useState, useEffect } from "react";
import { Modal } from "../lib";

const App = () => {
  const [modalBool, setModalBool] = useState(false);

  const showModal = () => {
    setModalBool(!modalBool);
  };

  return (
    <React.StrictMode>
      <h1>Bonjour</h1>
      <button type="button" onClick={showModal}>
        Valider
      </button>
      {modalBool ? (
        <Modal
          defaultState={true}
          type={"success"}
          txt={"Un nouvel employé viens d'être crée !"}
          stateUPDT={showModal}
        />
      ) : (
        ""
      )}
    </React.StrictMode>
  );
};

export default App;
