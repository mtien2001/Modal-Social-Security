export interface IModalSecurityProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface IModalData {
  isDisable: boolean;
  labels?: string[] | undefined;
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

interface INotWarrantyProps {
  isDisable: true;
}

interface IWarrantyProps {
  isDisable: false;
  labels?: string[] | (string | undefined)[];
  money?: string;
}

export interface ITabDiagnosisValue {
  data: {
    whenHeDied: IWarrantyProps | INotWarrantyProps;
    whenMedicalExpensesBecomeHigh: IWarrantyProps | INotWarrantyProps;
    whenYouCanNotWork: IWarrantyProps | INotWarrantyProps;
    whenInTrouble: IWarrantyProps | INotWarrantyProps;
    whenChildBorn: IWarrantyProps | INotWarrantyProps;
  };
}
