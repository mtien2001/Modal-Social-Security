import { useEffect, useState } from "react";
import { modalSocialSecurityRepository } from "../../repositories";
import { convertData } from "./convert";

class IDataReceive {}

export const useModalSocialSecurity = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IDataReceive | undefined>(undefined);

  const fetchModalSocialSecurity = async () => {
    setIsLoading(true);
    setIsOpen(false);
    try {
      const response = await modalSocialSecurityRepository.getModalSocialSecurityResult(
        {}
      );
      setData(convertData(response.data));
    } finally {
      setIsOpen(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchModalSocialSecurity().then();
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return {
    data,
    isLoading,
    isOpen,
    toggleModal
  };
};
