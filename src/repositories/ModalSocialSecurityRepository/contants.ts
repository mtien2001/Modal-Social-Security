import { IModalSocialSecurityResponse } from "./types";

export const dataMock: IModalSocialSecurityResponse = {
  data: {
    whenHeDied: {
      isDisable: true,
      budget: undefined,
      money: undefined
    },
    whenMedicalExpensesBecomeHigh: {
      isDisable: false,
      budget: ["high_medical_expenses_system"],
      money: 48
    },
    whenYouCanNotWork: {
      isDisable: true,
      budget: undefined,
      money: undefined
    },
    whenInTrouble: {
      isDisable: false,
      budget: ["disability_basic_pension", "disability_welfare_pension"],
      money: 30
    },
    whenChildBorn: {
      isDisable: false,
      budget: [
        "childbirth_and_childcare_lump_sum_grant",
        "maternity_allowance",
        "childcare_leave_benefits"
      ],
      money: 260
    }
  }
};
