import { useEffect, useState } from "react";
import { socialSecurityRepository } from "../../../../../repositories";
import { convertData } from "./convert";
import { IModalSecurityProps, ISocialSecurityData } from "./types";

export const useModalSocialSecurity = (props: IModalSecurityProps) => {
  const { data, isLoading } = useFetchSocialSecurity();
  return {
    data,
    isLoading,
    ...props
  };
};

const useFetchSocialSecurity = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ISocialSecurityData>();

  const fetch = async () => {
    setIsLoading(true);
    try {
      const response = await socialSecurityRepository.getSocialSecurityResult(
        {}
      );
      setTimeout(() => {
        setData(convertData(response));
        setIsLoading(false);
      }, 1500);
    } finally {
    }
  };

  useEffect(() => {
    fetch().then();
  }, []);

  return {
    data,
    isLoading
  };
};
