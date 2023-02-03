interface INotWarrantyProps {
  isDisabled: true;
}

interface IWarrantyProps {
  isDisabled: false;
  labels: (string | undefined)[];
  money: string;
}

export interface IWhenHeDiedProps {
  data: IWarrantyProps | INotWarrantyProps;
}
