import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { modalSocialSecurityQueryKey } from "../../../../repositories/ModalSocialSecurityRepository/query_key";
import { AxiosError } from "axios";
import {
  IUseFetchModalSocialSecurityDetailProps,
  useModalSocialSecurityProps
} from "./types";
import { modalSocialSecurityRepository } from "../../../../repositories";

export const useFetchModalDetail = (
  props: IUseFetchModalSocialSecurityDetailProps
) => {
  const { onSuccess = () => {}, onError = () => {} } = props;

  return useQuery(
    modalSocialSecurityQueryKey.getModalSocialSecurityResult(),
    () => modalSocialSecurityRepository.getModalSocialSecurityResult({}),
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

export const useModalSocialSecurity = (props: useModalSocialSecurityProps) => {
  const { data: response, ...rest } = props;
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
    toggleModal,
    ...rest
  };
};
