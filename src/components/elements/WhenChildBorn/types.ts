interface INotWarrantyProps {
  isDisable: true;
}

interface IWarrantyProps {
  isDisable: false;
  budgets: string[];
  money: string;
}

export interface IWhenChildBornProps {
  data: IWarrantyProps | INotWarrantyProps;
}
