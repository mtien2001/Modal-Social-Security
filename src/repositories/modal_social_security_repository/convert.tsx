import {getLabels} from "./ultis";

export const convertData = (data: any) => {
    return {
        whenHeDied: {
            isDisable: data.when_he_hied.isDisable,
            budget: getLabels(data?.when_he_hied.budget),
            money: data.when_he_hied.money
        },
        whenMedicalExpensesBecomeHigh: {
            isDisable: data.when_medical_expenses_become_high.isDisable,
            budget: getLabels(data?.when_medical_expenses_become_high.budget),
            money: data.when_medical_expenses_become_high.money
        },
        whenYouCanNotWork: {
            isDisable: data.when_you_can_not_work.isDisable,
            budget: getLabels(data?.when_you_can_not_work.budget),
            money: data.when_you_can_not_work.money,
        },
        whenInTrouble: {
            isDisable: data.when_in_trouble.isDisable,
            budget: getLabels(data?.when_in_trouble.budget),
            money: data.when_in_trouble.money
        },
        whenChildBorn: {
            isDisable: data.when_child_born.isDisable,
            budget: getLabels(data?.when_child_born.budget),
            money: data.when_child_born.money
        }
    }
}