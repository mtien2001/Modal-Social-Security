interface INotWarrantyProps {
  isDisabled: true;
}

interface IWarrantyProps {
  isDisabled: false;
  labels?: string[] | (string | undefined)[];
  money?: string;
}

export interface ITabDiagnosisProps {
  data?: {
    whenHeDied: IWarrantyProps | INotWarrantyProps;
    whenMedicalExpensesBecomeHigh: IWarrantyProps | INotWarrantyProps;
    whenYouCanNotWork: IWarrantyProps | INotWarrantyProps;
    whenInTrouble: IWarrantyProps | INotWarrantyProps;
    whenChildBorn: IWarrantyProps | INotWarrantyProps;
  };
}
