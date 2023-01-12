import { IModalSocialSecurityItem } from "./modal_social_security.types";

export const dataMock: IModalSocialSecurityItem[] = [
  {
    isDisable: true,
    budget: ["遺族基礎年金", "遺族厚生年金"],
    money: 50,
    type: "whenHeDied"
  },
  {
    isDisable: false,
    budget: ["高額療養費制度"],
    money: 48,
    type: "whenMedicalExpensesBecomeHigh"
  },
  {
    isDisable: true,
    budget: ["傷病手当金"],
    money: 9,
    type: "whenYouCanNotWork"
  },
  {
    isDisable: false,
    budget: ["障害基礎年金", "障害厚生年金"],
    money: 30,
    type: "whenInTrouble"
  },
  {
    isDisable: false,
    budget: ["出産育児一時金", "出産手当金", "育児休業給付金"],
    money: 260,
    type: "whenChildBorn"
  }
];
