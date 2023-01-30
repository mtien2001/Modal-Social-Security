interface INotWarrantyProps {
  isDisable: true;
}

interface IWarrantyProps {
  isDisable: false;
  labels: string[];
  money: string;
}

export interface ITabDiagnosisProps {
  data: {
    whenHeDied: IWarrantyProps | INotWarrantyProps;
    whenMedicalExpensesBecomeHigh: IWarrantyProps | INotWarrantyProps;
    whenYouCanNotWork: IWarrantyProps | INotWarrantyProps;
    whenInTrouble: IWarrantyProps | INotWarrantyProps;
    whenChildBorn: IWarrantyProps | INotWarrantyProps;
  };
}
