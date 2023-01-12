// import './../src/styles/hiragino_sans.css'
// import './../src/styles/zen_maru_gothic.css'
import React from "react";
import { ModalSocialSecurity } from "./components/template/modal_social_security";
import { dataMock } from "./components/template/modal_social_security/modal_social_security.contants";

function App() {
  return (
    <div className="App">
      <ModalSocialSecurity data={dataMock} />
    </div>
  );
}

export default App;
