import React from "react";
import { Modal } from "./pages/components/elements/modal";
import { dataMock } from "./contants";

function App() {
  return (
    <div className="App">
      <Modal data={dataMock} />
    </div>
  );
}

export default App;
