export interface IModalSecurityProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
interface INotWarrantyProps {
  isDisabled: true;
}
interface IWarrantyProps {
  isDisabled: false;
  labels?: string[];
  money?: string;
}

export interface ISocialSecurityData {
  whenHeDied: IWarrantyProps | INotWarrantyProps;
  whenMedicalExpensesBecomeHigh: IWarrantyProps | INotWarrantyProps;
  whenYouCanNotWork: IWarrantyProps | INotWarrantyProps;
  whenInTrouble: IWarrantyProps | INotWarrantyProps;
  whenChildBorn: IWarrantyProps | INotWarrantyProps;
}
