import { IModalSocialSecurityResponse } from "./types";

export const dataMock: IModalSocialSecurityResponse = {
  data: {
    whenHeDied: {
      isDisable: true,
      budgets: undefined,
      money: undefined
    },
    whenMedicalExpensesBecomeHigh: {
      isDisable: false,
      budgets: ["high_medical_expenses_system"],
      money: "48"
    },
    whenYouCanNotWork: {
      isDisable: true,
      budgets: undefined,
      money: undefined
    },
    whenInTrouble: {
      isDisable: false,
      budgets: ["disability_basic_pension", "disability_welfare_pension"],
      money: "30"
    },
    whenChildBorn: {
      isDisable: false,
      budgets: [
        "childbirth_and_childcare_lump_sum_grant",
        "maternity_allowance",
        "childcare_leave_benefits"
      ],
      money: "260"
    }
  }
};
