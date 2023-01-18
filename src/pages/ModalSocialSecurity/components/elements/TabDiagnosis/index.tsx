import React from "react";
import { ITabDiagnosisProps } from "./types";
import { WhenHeDied } from "../../../../../components/elements/WhenHeDied";
import { WhenMedicalExpensesBecomeHigh } from "../../../../../components/elements/WhenMedicalExpensesBecomeHigh";
import { WhenYouCanNotWork } from "../../../../../components/elements/WhenYouCanNotWork";
import { WhenInTrouble } from "../../../../../components/elements/WhenInTrouble";
import { WhenChildBorn } from "../../../../../components/elements/WhenChildBorn";

export const TabDiagnosis: React.FC<ITabDiagnosisProps> = (
  props
): JSX.Element => {
  const { data } = props;

  return (
    <div>
      <WhenHeDied data={data.whenHeDied} />
      <WhenMedicalExpensesBecomeHigh
        data={data.whenMedicalExpensesBecomeHigh}
      />
      <WhenYouCanNotWork data={data.whenYouCanNotWork} />
      <WhenInTrouble data={data.whenInTrouble} />
      <WhenChildBorn data={data.whenChildBorn} />
    </div>
  );
};
