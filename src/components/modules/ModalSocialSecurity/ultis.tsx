import {ISocialSecurityResponse} from "../../../repositories/ShirasonRepository/types";
import {ISocialSecurityData} from "./types";

export const getLabelsWhenHeDied = (labels?: string[]) => {
    return labels?.map((item: string) => {
      if (item === "survivors_basic_pension") return "遺族基礎年金";
      if (item === "survivors_welfare_pension") return "遺族厚生年金";
    }).filter(Boolean);
};

export const getLabelsWhenMedicalExpensesBecomeHigh = (labels?: string[]) => {
    return labels?.map((item: string) => {
      if (item === "high_medical_expenses_system") return "高額療養費制度";
    }).filter(Boolean);
};

export const getLabelsWhenYouCanNotWork = (labels?: string[]) => {
    return labels?.map((item: string) => {
      if (item === "injury_and_sickness_allowance") return "傷病手当金";
    }).filter(Boolean);
};

export const getLabelsWhenInTrouble = (labels?: string[]) => {
    return labels?.map((item: string) => {
      if (item === "disability_basic_pension") return "障害基礎年金";
      if (item === "disability_welfare_pension") return "障害厚生年金";
    }).filter(Boolean);
};

export const getLabelsWhenChildBorn = (labels?: string[]) => {
    return labels?.map((item: string) => {
      if (item === "childbirth_and_childcare_lump_sum_grant")
        return "出産育児一時金";
      if (item === "maternity_allowance") return "出産手当金";
      if (item === "childcare_leave_benefits") return "育児休業給付金";
    }).filter(Boolean);
};

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