import {getLabels} from "./ultis";

export const convertData = (data: any) => {
    return {
        whenHeDied: {
            isDisable: data.when_he_hied.isDisable,
            budget: getLabels(data?.whenHeDied.budget),
            money: data.whenHeDied.money
        },
        whenMedicalExpensesBecomeHigh: {
            isDisable: data.when_medical_expenses_become_high.isDisable,
            budget: getLabels(data?.whenMedicalExpensesBecomeHigh.budget),
            money: data.whenMedicalExpensesBecomeHigh.money
        },
        whenYouCanNotWork: {
            isDisable: data.when_you_can_not_work.isDisable,
            budget: getLabels(data?.whenYouCanNotWork.budget),
            money: data.whenYouCanNotWork.money,
        },
        whenInTrouble: {
            isDisable: data.when_in_trouble.isDisable,
            budget: getLabels(data?.whenInTrouble.budget),
            money: data.whenInTrouble.money
        },
        whenChildBorn: {
            isDisable: data.when_child_born.isDisable,
            budget: getLabels(data?.whenChildBorn.budget),
            money: data.whenChildBorn.money
        }
    }
}