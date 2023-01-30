import { getLabels } from "./ultis";
import { ISocialSecurityResponse, ISocialSecurityValue } from "./types";

export const convertData = (
  data: ISocialSecurityResponse
): ISocialSecurityValue => {
  return {
    whenHeDied: {
      isDisable: data.data.whenHeDied.isDisable,
      labels: getLabels(data.data.whenHeDied.labels),
      money: data.data.whenHeDied.money
    },
    whenMedicalExpensesBecomeHigh: {
      isDisable: data.data.whenMedicalExpensesBecomeHigh.isDisable,
      labels: getLabels(data.data.whenMedicalExpensesBecomeHigh.labels),
      money: data.data.whenMedicalExpensesBecomeHigh.money
    },
    whenYouCanNotWork: {
      isDisable: data.data.whenYouCanNotWork.isDisable,
      labels: getLabels(data.data.whenYouCanNotWork.labels),
      money: data.data.whenYouCanNotWork.money
    },
    whenInTrouble: {
      isDisable: data.data.whenInTrouble.isDisable,
      labels: getLabels(data.data.whenInTrouble.labels),
      money: data.data.whenInTrouble.money
    },
    whenChildBorn: {
      isDisable: data.data.whenChildBorn.isDisable,
      labels: getLabels(data.data.whenChildBorn.labels),
      money: data.data.whenChildBorn.money
    }
  };
};
