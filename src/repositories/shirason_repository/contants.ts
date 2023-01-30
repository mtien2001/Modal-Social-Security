import { ISocialSecurityResponse } from "./types";

export const dataMock: ISocialSecurityResponse = {
  data: {
    whenHeDied: {
      isDisable: true,
      labels: undefined,
      money: undefined
    },
    whenMedicalExpensesBecomeHigh: {
      isDisable: false,
      labels: ["high_medical_expenses_system"],
      money: "48"
    },
    whenYouCanNotWork: {
      isDisable: true,
      labels: undefined,
      money: undefined
    },
    whenInTrouble: {
      isDisable: false,
      labels: ["disability_basic_pension", "disability_welfare_pension"],
      money: "30"
    },
    whenChildBorn: {
      isDisable: false,
      labels: [
        "childbirth_and_childcare_lump_sum_grant",
        "maternity_allowance",
        "childcare_leave_benefits"
      ],
      money: "260"
    }
  }
};
