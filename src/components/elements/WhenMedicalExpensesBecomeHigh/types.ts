interface INotWarrantyProps {
  isDisabled: true;
}

interface IWarrantyProps {
  isDisabled: false;
  labels?: string[];
  money?: string;
}

export interface IWhenMedicalExpensesBecomeHighProps {
  data: IWarrantyProps | INotWarrantyProps;
}
