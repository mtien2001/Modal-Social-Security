export interface IModalSocialSecurityParams {}

export interface IModalData {
  isDisable: boolean;
  budget: string[] | undefined;
  money: number | undefined;
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
