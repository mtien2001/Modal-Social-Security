import React from "react";
import { ITabDiagnosisProps } from "./types";
import { WhenHeDied } from "../molecules/when_he_died";
import { WhenMedicalExpensesBecomeHigh } from "../molecules/when_medical_expenses_become_high";
import { WhenYouCanNotWork } from "../molecules/when_you_can_not_work";
import { WhenInTrouble } from "../molecules/when_in_trouble";
import { WhenChildBorn } from "../molecules/when_child_born";
import { images } from "../../../assets/images";

export const TabDiagnosis: React.FC<ITabDiagnosisProps> = (
  props
): JSX.Element => {
  const { data } = props;

  return (
    <div>
      <WhenHeDied
        image={images.whenHeDiedIcon}
        title={"亡くなった時"}
        data={data.whenHeDied}
      />
      <WhenMedicalExpensesBecomeHigh
        title={"病気やケガで\n医療費が高額になった時"}
        image={images.whenMedicalExpensesBecomeHighIcon}
        data={data.whenMedicalExpensesBecomeHigh}
      />
      <WhenYouCanNotWork
        title={"働けなくなった時"}
        image={images.whenYouCanNotWorkIcon}
        data={data.whenYouCanNotWork}
      />
      <WhenInTrouble
        title={"障害状態になった時"}
        image={images.whenYouCanNotWorkIcon}
        data={data.whenInTrouble}
      />
      <WhenChildBorn
        title={"子どもが生まれる時"}
        image={images.whenChildBornIcon}
        data={data.whenChildBorn}
      />
    </div>
  );
};
