import { getLabels } from "./ultis";
import { IModalSocialSecurityResponse } from "../../repositories/shirason_repository/types";

export const convertData = (data: IModalSocialSecurityResponse) => {
  return {
    whenHeDied: {
      isDisable: data.data.whenHeDied.isDisable,
      budget: getLabels(data.data.whenHeDied.budget),
      money: data.data.whenHeDied.money
    },
    whenMedicalExpensesBecomeHigh: {
      isDisable: data.data.whenMedicalExpensesBecomeHigh.isDisable,
      budget: getLabels(data.data.whenMedicalExpensesBecomeHigh.budget),
      money: data.data.whenMedicalExpensesBecomeHigh.money
    },
    whenYouCanNotWork: {
      isDisable: data.data.whenYouCanNotWork.isDisable,
      budget: getLabels(data.data.whenYouCanNotWork.budget),
      money: data.data.whenYouCanNotWork.money
    },
    whenInTrouble: {
      isDisable: data.data.whenInTrouble.isDisable,
      budget: getLabels(data.data.whenInTrouble.budget),
      money: data.data.whenInTrouble.money
    },
    whenChildBorn: {
      isDisable: data.data.whenChildBorn.isDisable,
      budget: getLabels(data.data.whenChildBorn.budget),
      money: data.data.whenChildBorn.money
    }
  };
};
