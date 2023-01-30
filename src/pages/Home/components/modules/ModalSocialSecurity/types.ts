export interface IModalSecurityProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface IModalData {
  isDisable: boolean;
  labels?: string[] | (string | undefined)[];
  money?: string;
}

export interface ISocialSecurityValue {
  whenHeDied: IModalData;
  whenMedicalExpensesBecomeHigh: IModalData;
  whenYouCanNotWork: IModalData;
  whenInTrouble: IModalData;
  whenChildBorn: IModalData;
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
