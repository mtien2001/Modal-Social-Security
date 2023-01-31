import { useEffect, useState } from "react";
import { socialSecurityRepository } from "../../../../../repositories";
import { convertData } from "./convert";
import { IModalSecurityProps, ITabDiagnosisValue } from "./types";

export const useModalSocialSecurity = (props: IModalSecurityProps) => {
  const { isOpen, onClose } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ITabDiagnosisValue | undefined>(undefined);

  const fetchModalSocialSecurity = async () => {
    setIsLoading(true);
    try {
      const response = await socialSecurityRepository.getSocialSecurityResult(
        {}
      );
      setData(convertData(response));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchModalSocialSecurity().then();
  }, []);

  return {
    data,
    isLoading,
    isOpen,
    onClose
  };
};
