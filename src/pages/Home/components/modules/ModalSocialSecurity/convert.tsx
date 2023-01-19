import { getLabels } from "./ultis";
import { IModalSocialSecurityResponse } from "../../../../../repositories/shirason_repository/types";

export const convertData = (data: IModalSocialSecurityResponse) => {
  return {
    whenHeDied: {
      isDisable: data.data.whenHeDied.isDisable,
      budgets: getLabels(data.data.whenHeDied.budgets),
      money: data.data.whenHeDied.money
    },
    whenMedicalExpensesBecomeHigh: {
      isDisable: data.data.whenMedicalExpensesBecomeHigh.isDisable,
      budgets: getLabels(data.data.whenMedicalExpensesBecomeHigh.budgets),
      money: data.data.whenMedicalExpensesBecomeHigh.money
    },
    whenYouCanNotWork: {
      isDisable: data.data.whenYouCanNotWork.isDisable,
      budgets: getLabels(data.data.whenYouCanNotWork.budgets),
      money: data.data.whenYouCanNotWork.money
    },
    whenInTrouble: {
      isDisable: data.data.whenInTrouble.isDisable,
      budgets: getLabels(data.data.whenInTrouble.budgets),
      money: data.data.whenInTrouble.money
    },
    whenChildBorn: {
      isDisable: data.data.whenChildBorn.isDisable,
      budgets: getLabels(data.data.whenChildBorn.budgets),
      money: data.data.whenChildBorn.money
    }
  };
};
