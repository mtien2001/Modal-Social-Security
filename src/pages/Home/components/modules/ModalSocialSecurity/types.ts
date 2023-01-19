export interface IModalSecurityProps {
  isOpen: boolean;
  toggleModal: () => void;
}

export interface IModalData {
  isDisable: boolean;
  budgets: string[] | undefined;
  money: string | undefined;
}

export interface IModalSocialSecurityValue {
  data: {
    whenHeDied: IModalData;
    whenMedicalExpensesBecomeHigh: IModalData;
    whenYouCanNotWork: IModalData;
    whenInTrouble: IModalData;
    whenChildBorn: IModalData;
  };
}
