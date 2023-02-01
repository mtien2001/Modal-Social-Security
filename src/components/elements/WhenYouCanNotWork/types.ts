interface INotWarrantyProps {
  isDisabled: true;
}

interface IWarrantyProps {
  isDisabled: false;
  labels?: string[];
  money?: string;
}

export interface ITabWhenYouCanNotWorkProps {
  data: IWarrantyProps | INotWarrantyProps;
}
