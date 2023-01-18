import { useEffect, useState } from "react";
import { modalSocialSecurityRepository } from "../../repositories";
import { convertData } from "./convert";

export const useModalSocialSecurity = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>(undefined);

  const fetchModalSocialSecurity = async () => {
    setIsLoading(true);
    try {
      const response = await modalSocialSecurityRepository.getModalSocialSecurityResult(
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
    isLoading
  };
};
