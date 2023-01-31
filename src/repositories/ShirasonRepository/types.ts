export interface ISocialSecurityParams {}

export interface IModalData {
  isDisable: boolean;
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
