interface IModalSocialSecurityData {
  isDisabled: boolean;
  labels: string[];
  money: string;
}

export interface ITabWhenYouCanNotWorkProps {
  data: IModalSocialSecurityData;
}
