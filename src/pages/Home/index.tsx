import React, { useState } from "react";
import { ModalSocialSecurityDiagnosis } from "./components/modules/ModalSocialSecurity";

export const Home = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={() => onClose()}>Click !</button>
      <ModalSocialSecurityDiagnosis isOpen={isOpen} onClose={onClose} />
    </div>
  );
};
