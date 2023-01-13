import { dataMock } from "./contants";
import { useEffect, useState } from "react";

export const useFetchModalDetial = () => {
  const data = dataMock;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return {
    data,
    isOpen,
    toggleModal
  };
};
