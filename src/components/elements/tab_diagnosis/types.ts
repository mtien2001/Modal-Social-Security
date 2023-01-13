import { IModalData } from "../../../pages/components/elements/modal/types";

export interface ITabDiagnosisProps {
  data: {
    whenHeDied: IModalData;
    whenMedicalExpensesBecomeHigh: IModalData;
    whenYouCanNotWork: IModalData;
    whenInTrouble: IModalData;
    whenChildBorn: IModalData;
  };
}
