import React from "react";
import { ModalSocialSecurityDiagnosis } from "../../components/modules/ModalSocialSecurity";
import { useDisclosure } from "../../hooks/UseDisclosure";

export const Home = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <button onClick={() => onOpen()}>Click !</button>
      <ModalSocialSecurityDiagnosis
        onOpen={onOpen}
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  );
};
