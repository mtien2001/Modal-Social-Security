interface INotWarrantyProps {
  isDisable: true;
}

interface IWarrantyProps {
  isDisable: false;
  budgets: string[];
  money: string;
}

export interface IWhenHeDiedProps {
  data: IWarrantyProps | INotWarrantyProps;
}
