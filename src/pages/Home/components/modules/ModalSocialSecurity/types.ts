export interface IModalSecurityProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface IWarrantyProps {
  isDisabled: boolean;
  labels?: string[] | (string | undefined)[];
  money?: string;
}

export interface ISocialSecurityData {
  whenHeDied: IWarrantyProps;
  whenMedicalExpensesBecomeHigh: IWarrantyProps;
  whenYouCanNotWork: IWarrantyProps;
  whenInTrouble: IWarrantyProps;
  whenChildBorn: IWarrantyProps;
}
