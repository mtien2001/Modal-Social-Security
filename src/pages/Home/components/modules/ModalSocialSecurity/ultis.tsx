type IData = string[] | undefined | (string | undefined)[];

export const getLabelsWhenHeDied = (data: IData) => {
  if (data) {
    return data.map((item: string | undefined) => {
      if (item === "survivors_basic_pension") return "遺族基礎年金";
      if (item === "survivors_welfare_pension") return "遺族厚生年金";
    });
  }
  return undefined;
};

export const getLabelsWhenMedicalExpensesBecomeHigh = (data: IData) => {
  if (data) {
    return data.map((item: string | undefined) => {
      if (item === "high_medical_expenses_system") return "高額療養費制度";
    });
  }
  return undefined;
};

export const getLabelsWhenYouCanNotWork = (data: IData) => {
  if (data) {
    return data.map((item: string | undefined) => {
      if (item === "injury_and_sickness_allowance") return "傷病手当金";
    });
  }
  return undefined;
};

export const getLabelsWhenInTrouble = (data: IData) => {
  if (data) {
    return data.map((item: string | undefined) => {
      if (item === "disability_basic_pension") return "障害基礎年金";
      if (item === "disability_welfare_pension") return "障害厚生年金";
    });
  }
  return undefined;
};

export const getLabelsWhenChildBorn = (data: IData) => {
  if (data) {
    return data.map((item: string | undefined) => {
      if (item === "childbirth_and_childcare_lump_sum_grant")
        return "出産育児一時金";
      if (item === "maternity_allowance") return "出産手当金";
      if (item === "childcare_leave_benefits") return "育児休業給付金";
    });
  }
  return undefined;
};
