import { AxiosError } from "axios";

export interface IModalData {
  isDisable: boolean;
  budget?: string[];
  money?: number;
}

export interface useModalSocialSecurityProps {
  data?: IModalSocialSecurityResponse;
  isLoading?: boolean;
  isOpen?: boolean;
  toggleModal?: () => void;
}

export interface IModalSocialSecurityResponse {
  data: {
    whenHeDied: IModalData;
    whenMedicalExpensesBecomeHigh: IModalData;
    whenYouCanNotWork: IModalData;
    whenInTrouble: IModalData;
    whenChildBorn: IModalData;
  };
}

export interface IUseFetchModalSocialSecurityDetailProps {
  onSuccess?: (data: IModalSocialSecurityResponse) => void;
  onError?: (error: AxiosError) => void;
}
