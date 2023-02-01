export interface IWarrantyProps {
  labels?: string[] | (string | undefined)[];
  textMoney?: string;
  image: string;
  title: string;
  textDesc?: string;
  textDescMoney?: string;
}

export interface ICardLeftProps {
  image: string;
  title: string;
}

export interface INotWarrantyProps {
  image: string;
  title: string;
}
