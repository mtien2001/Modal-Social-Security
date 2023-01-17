import { AxiosError } from "axios";

export interface IModalData {
  isDisable?: boolean;
  budget?: string[];
  money?: number;
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
