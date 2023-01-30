export const getLabels = (
  data: string[] | undefined | (string | undefined)[]
) => {
  if (data) {
    const labels = data.map((item: string | undefined) => {
      if (item === "survivors_basic_pension") return "遺族基礎年金";
      if (item === "survivors_welfare_pension") return "遺族厚生年金";
      if (item === "high_medical_expenses_system") return "高額療養費制度";
      if (item === "injury_and_sickness_allowance") return "傷病手当金";
      if (item === "disability_basic_pension") return "障害基礎年金";
      if (item === "disability_welfare_pension") return "障害厚生年金";
      if (item === "childbirth_and_childcare_lump_sum_grant")
        return "出産育児一時金";
      if (item === "maternity_allowance") return "出産手当金";
      if (item === "childcare_leave_benefits") return "育児休業給付金";
    });
    return labels;
  }
};
