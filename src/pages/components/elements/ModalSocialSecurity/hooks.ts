import { useEffect, useState } from "react";
import { ModalSocialSecurityRepository } from "../../../../repositories/ModalSocialSecurityRepository";
import { useQuery } from "@tanstack/react-query";
import { modalSocialSecurityQueryKey } from "../../../../repositories/ModalSocialSecurityRepository/query_key";
import { AxiosError } from "axios";
import { IUseFetchModalSocialSecurityDetailProps } from "./types";

export const useFetchModalDetail = (
  props: IUseFetchModalSocialSecurityDetailProps
) => {
  const { onSuccess = () => {}, onError = () => {} } = props;

  return useQuery(
    modalSocialSecurityQueryKey.getModalSocialSecurityResult(),
    () => ModalSocialSecurityRepository.getModalSocialSecurityResult({}),
    {
      onSuccess: data => {
        onSuccess(data);
      },
      onError: (error: AxiosError) => {
        onError(error);
      }
    }
  );
};

export const useModalSocialSecurity = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data, isLoading } = useFetchModalDetail({});

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return {
    data,
    isLoading,
    isOpen,
    toggleModal
  };
};
