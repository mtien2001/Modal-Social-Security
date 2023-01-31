import {
  getLabelsWhenChildBorn,
  getLabelsWhenHeDied,
  getLabelsWhenInTrouble,
  getLabelsWhenMedicalExpensesBecomeHigh,
  getLabelsWhenYouCanNotWork
} from "./ultis";
import { ISocialSecurityResponse } from "../../../../../repositories/ShirasonRepository/types";
import { ISocialSecurityData } from "./types";
export const convertData = (
  data: ISocialSecurityResponse
): ISocialSecurityData => {
  return {
    whenHeDied: {
      isDisabled: data.data.whenHeDied.isDisabled,
      labels: getLabelsWhenHeDied(data.data.whenHeDied.labels),
      money: data.data.whenHeDied.money
    },
    whenMedicalExpensesBecomeHigh: {
      isDisabled: data.data.whenMedicalExpensesBecomeHigh.isDisabled,
      labels: getLabelsWhenMedicalExpensesBecomeHigh(
        data.data.whenMedicalExpensesBecomeHigh.labels
      ),
      money: data.data.whenMedicalExpensesBecomeHigh.money
    },
    whenYouCanNotWork: {
      isDisabled: data.data.whenYouCanNotWork.isDisabled,
      labels: getLabelsWhenYouCanNotWork(data.data.whenYouCanNotWork.labels),
      money: data.data.whenYouCanNotWork.money
    },
    whenInTrouble: {
      isDisabled: data.data.whenInTrouble.isDisabled,
      labels: getLabelsWhenInTrouble(data.data.whenInTrouble.labels),
      money: data.data.whenInTrouble.money
    },
    whenChildBorn: {
      isDisabled: data.data.whenChildBorn.isDisabled,
      labels: getLabelsWhenChildBorn(data.data.whenChildBorn.labels),
      money: data.data.whenChildBorn.money
    }
  };
};
