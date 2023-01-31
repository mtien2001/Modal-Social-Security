interface ISocialSecurityData {
  isDisabled: boolean;
  labels?: string[] | (string | undefined)[];
  money?: string;
}

export interface ITabDiagnosisProps {
  data?: {
    whenHeDied: ISocialSecurityData;
    whenMedicalExpensesBecomeHigh: ISocialSecurityData;
    whenYouCanNotWork: ISocialSecurityData;
    whenInTrouble: ISocialSecurityData;
    whenChildBorn: ISocialSecurityData;
  };
}
