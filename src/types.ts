export interface IModalItem {
  isDisable: boolean;
  budget: string[];
  money: number;
  type: string;
}

export interface IModalProps {
  data: IModalItem[];
}
