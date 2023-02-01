interface INotWarrantyProps {
  isDisabled: true;
}

interface IWarrantyProps {
  isDisabled: false;
  labels?: string[] | (string | undefined)[];
  money?: string;
}

export interface IWhenInTroubleProps {
  data: IWarrantyProps | INotWarrantyProps;
}
