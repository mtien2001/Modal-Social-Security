interface INotWarrantyProps {
  isDisable: true;
}

interface IWarrantyProps {
  isDisable: false;
  labels: string[];
  money: string;
}

export interface IWhenInTroubleProps {
  data: IWarrantyProps | INotWarrantyProps;
}
