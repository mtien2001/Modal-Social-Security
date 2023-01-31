import React from "react";
import { ITabDiagnosisProps } from "./types";
import { WhenHeDied } from "../WhenHeDied";
import { WhenMedicalExpensesBecomeHigh } from "../WhenMedicalExpensesBecomeHigh";
import { WhenYouCanNotWork } from "../WhenYouCanNotWork";
import { WhenInTrouble } from "../WhenInTrouble";
import { WhenChildBorn } from "../WhenChildBorn";

export const TabDiagnosis = (props: ITabDiagnosisProps | undefined): JSX.Element => {
  // @ts-ignore
  const {data}  = props;

    return (
    <div>
      <WhenHeDied data={data?.whenHeDied} />
      <WhenMedicalExpensesBecomeHigh
        data={data?.whenMedicalExpensesBecomeHigh}
      />
      <WhenYouCanNotWork data={data?.whenYouCanNotWork} />
      <WhenInTrouble data={data?.whenInTrouble} />
      <WhenChildBorn data={data?.whenChildBorn} />
    </div>
  );
};
