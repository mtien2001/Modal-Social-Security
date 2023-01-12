import React, { useCallback } from "react";
import { ITabDiagnosisRight } from "./tab_diagnosis_right.types";
import { images } from "../../../../../assets/images";
import {
  Button,
  DivDiagnosisDisable,
  DivDiagnosisRight,
  TextLabelDisable,
  TextTitleDisable,
  FlexDiagnosis,
  Budget,
  FlexBudget,
  TextMoney,
  TextMoneyDesc,
  TextDetail,
  FlexLabelMoney,
  Text
} from "../../../../../styled";

export const TabDiagnosisRight: React.FC<ITabDiagnosisRight> = (
  props
): JSX.Element => {
  const { isDisable, money, budget, type } = props;

  const renderMoney = useCallback((type: string, money: number) => {
    switch (type) {
      case "whenHeDied": {
        return (
          <Text>
            ひと月あたり&nbsp;
            <TextMoney>{money}</TextMoney>
            <TextMoneyDesc>万円</TextMoneyDesc>
          </Text>
        );
      }
      case "whenMedicalExpensesBecomeHigh": {
        return (
          <TextDetail>
            ひと月あたり自己負担上限額&nbsp;
            <TextMoney>{money}</TextMoney>
            <TextMoneyDesc>万円</TextMoneyDesc>
          </TextDetail>
        );
      }
      case "whenYouCanNotWork": {
        return (
          <TextDetail>
            ひと月あたり&nbsp;
            <TextMoney>{money}</TextMoney>
            <TextMoneyDesc>万円</TextMoneyDesc>
          </TextDetail>
        );
      }
      case "whenInTrouble": {
        return (
          <TextDetail>
            障害等級2級の場合、ひと月あたり&nbsp;
            <TextMoney>{money}</TextMoney>
            <TextMoneyDesc>万円</TextMoneyDesc>
          </TextDetail>
        );
      }
      case "whenChildBorn": {
        return (
          <TextDetail>
            すべての合計で&nbsp;
            <TextMoneyDesc>
              万円
              <TextMoney>{money}</TextMoney>万円
            </TextMoneyDesc>
          </TextDetail>
        );
      }
    }
  }, []);

  if (isDisable) {
    return (
      <DivDiagnosisDisable>
        <FlexDiagnosis>
          <img width={"20px"} src={images.exclamationMarkIcon} alt={""} />
          <TextTitleDisable>保障の対象外です</TextTitleDisable>
        </FlexDiagnosis>
        <TextLabelDisable>
          入力内容と本シミュレーションの算出条件を考慮すると、対象外の可能性が高いです。
          ご家族の詳細情報やお住いの市区町村などの条件により、対象になる場合もあります。
          より正確な情報は、日本年金機構や加入している協会けんぽ又は健康保険組合等でご確認下さい。
        </TextLabelDisable>
      </DivDiagnosisDisable>
    );
  }

  return (
    <DivDiagnosisRight>
      <FlexBudget>
        {budget.map((item, index) => <Budget key={index}>{item}</Budget>)}
      </FlexBudget>
      <FlexLabelMoney>
        {renderMoney(type, money)}
        <Button>詳しくみる</Button>
      </FlexLabelMoney>
    </DivDiagnosisRight>
  );
};
