interface INotWarrantyProps {
  isDisabled: true;
}

interface IWarrantyProps {
  isDisabled: false;
  labels: (string | undefined)[];
  money: string;
}

export interface IWhenChildBornProps {
  data: IWarrantyProps | INotWarrantyProps;
}
