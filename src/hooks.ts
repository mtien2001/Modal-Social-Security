import { useEffect, useState } from "react";
import { getModalSocialSecurityResult } from "./repositories/modal_social_security_repository";

export const useFetchModalDetial = (props: any) => {
  const { data: response, ...rest } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const data = getModalSocialSecurityResult();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return {
    data,
    isOpen,
    toggleModal,
    ...rest
  };
};
