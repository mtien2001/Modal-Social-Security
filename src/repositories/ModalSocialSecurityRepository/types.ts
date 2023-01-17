import { IModalData } from "../../pages/components/elements/ModalSocialSecurity/types";

export interface IModalSocialSecurityParams {}

export interface IModalSocialSecurityResponse {
  data: {
    whenHeDied: IModalData;
    whenMedicalExpensesBecomeHigh: IModalData;
    whenYouCanNotWork: IModalData;
    whenInTrouble: IModalData;
    whenChildBorn: IModalData;
  };
}
