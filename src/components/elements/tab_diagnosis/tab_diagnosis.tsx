import React from "react";
import { ITabDiagnosisProps } from "./types";
import { TabWhenHeDied } from "./components/tab_when_he_died";
import { TabWhenMedicalExpensesBecomeHigh } from "./components/tab_when_medical_expenses_become_high";
import { TabWhenYouCanNotWork } from "./components/tab_when_you_can_not_work";
import { TabWhenInTrouble } from "./components/tab_when_in_trouble";
import { TabWhenChildBorn } from "./components/tab_when_child_born";

export const TabDiagnosis: React.FC<ITabDiagnosisProps> = (
  props
): JSX.Element => {
  const { data } = props;

  return (
    <div>
      <TabWhenHeDied data={data.whenHeDied} />
      <TabWhenMedicalExpensesBecomeHigh
        data={data.whenMedicalExpensesBecomeHigh}
      />
      <TabWhenYouCanNotWork data={data.whenYouCanNotWork} />
      <TabWhenInTrouble data={data.whenInTrouble} />
      <TabWhenChildBorn data={data.whenChildBorn} />
    </div>
  );
};
