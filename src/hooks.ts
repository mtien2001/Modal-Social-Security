import { dataMock } from "./contants";
import { useEffect, useState } from "react";

export const useFetchModalDetial = (props: any) => {
  const { data: response, ...rest } = props
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const data = response ?? dataMock

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
