export interface ICardProps {
  labels: string[];
  textMoney: string;
  image: string;
  title: string;
  textDesc?: string;
  textDescMoney?: string;
  isDisabled: boolean;
}

export interface ICardLeftProps {
  image: string;
  title: string;
}

export interface ICardRightProps {
  labels: string[];
  textMoney: string;
  textDesc?: string;
  textDescMoney?: string;
}
