import React, { useState } from "react";
import { ModalSocialSecurityDiagnosis } from "./components/modules/ModalSocialSecurity";

export const Home = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={() => toggleModal()}>Click !</button>
      <ModalSocialSecurityDiagnosis isOpen={isOpen} toggleModal={toggleModal} />
    </div>
  );
};
