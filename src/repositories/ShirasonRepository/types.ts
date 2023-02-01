export interface ISocialSecurityParams {}

export interface IModalData {
  isDisabled: boolean;
  labels?: string[];
  money?: string;
}

export interface ISocialSecurityResponse {
  data: {
    whenHeDied: IModalData;
    whenMedicalExpensesBecomeHigh: IModalData;
    whenYouCanNotWork: IModalData;
    whenInTrouble: IModalData;
    whenChildBorn: IModalData;
  };
}
