interface IModalSocialSecurityData {
  isDisabled: boolean;
  labels: string[];
  money: string;
}

export interface IWhenInTroubleProps {
  data: IModalSocialSecurityData;
}
