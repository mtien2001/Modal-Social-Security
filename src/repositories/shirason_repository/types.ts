export interface IModalSocialSecurityParams {}

export interface IModalData {
  isDisable: boolean;
  budgets: string[] | undefined;
  money: string | undefined;
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
