type IData = string[] | undefined;

export const getLabelsWhenHeDied = (data: IData) => {
  if (data) {
    return ["遺族基礎年金", "遺族厚生年金"];
  }
  return [];
};

export const getLabelsWhenMedicalExpensesBecomeHigh = (data: IData) => {
  if (data) {
    return ["高額療養費制度"];
  }
  return [];
};

export const getLabelsWhenYouCanNotWork = (data: IData) => {
  if (data) {
    return ["傷病手当金"];
  }
  return [];
};

export const getLabelsWhenInTrouble = (data: IData) => {
  if (data) {
    return ["障害基礎年金", "障害厚生年金"];
  }
  return [];
};

export const getLabelsWhenChildBorn = (data: IData) => {
  if (data) {
    return ["出産育児一時金", "出産手当金", "育児休業給付金"];
  }
  return [];
};
