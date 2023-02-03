export interface IWarrantyProps {
  labels: (string | undefined)[];
  textMoney: string;
  image: string;
  title: string;
  textDesc?: string;
  textDescMoney?: string;
}

export type TCardLeftProps = Pick<IWarrantyProps, "image" | "title">;

export type TNotWarrantyProps = Pick<IWarrantyProps, "image" | "title">;
