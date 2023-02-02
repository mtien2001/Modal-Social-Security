export interface IWarrantyProps {
  labels?: (string | undefined)[];
  textMoney?: string;
  image: string;
  title: string;
  textDesc?: string;
  textDescMoney?: string;
}

export interface ICardLeftProps extends IWarrantyProps {}

export interface INotWarrantyProps extends IWarrantyProps {}
