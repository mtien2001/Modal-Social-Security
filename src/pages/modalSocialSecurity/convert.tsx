import { getLabels } from "./ultis";

export const convertData = (data: any) => {
  return {
    whenHeDied: {
      isDisable: data.whenHeDied.isDisable,
      budget: getLabels(data.whenHeDied.budget),
      money: data.whenHeDied.money
    },
    whenMedicalExpensesBecomeHigh: {
      isDisable: data.whenMedicalExpensesBecomeHigh.isDisable,
      budget: getLabels(data.whenMedicalExpensesBecomeHigh.budget),
      money: data.whenMedicalExpensesBecomeHigh.money
    },
    whenYouCanNotWork: {
      isDisable: data.whenYouCanNotWork.isDisable,
      budget: getLabels(data.whenYouCanNotWork.budget),
      money: data.whenYouCanNotWork.money
    },
    whenInTrouble: {
      isDisable: data.whenInTrouble.isDisable,
      budget: getLabels(data.whenInTrouble.budget),
      money: data.whenInTrouble.money
    },
    whenChildBorn: {
      isDisable: data.whenChildBorn.isDisable,
      budget: getLabels(data.whenChildBorn.budget),
      money: data.whenChildBorn.money
    }
  };
};
