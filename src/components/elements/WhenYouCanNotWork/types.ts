interface INotWarrantyProps {
  isDisable: true;
}

interface IWarrantyProps {
  isDisable: false;
  budgets: string[];
  money: string;
}

export interface ITabWhenYouCanNotWorkProps {
  data: IWarrantyProps | INotWarrantyProps;
}
