import React from "react";
import { ITabDiagnosis } from "./tab_diagnosis.types";
import { Flex } from "./tab_diagnosis.styled";
import { TabDiagnosisLeft } from "./components/tab_diagnosis_left";
import { TabDiagnosisRight } from "./components/tab_diagnosis_right";

export const TabDiagnosis: React.FC<ITabDiagnosis> = (props): JSX.Element => {
  const { data } = props;
  return (
    <div>
      {data.map((item: any, index: number) => {
        return (
          <Flex key={index}>
            <TabDiagnosisLeft type={item.type} />
            <TabDiagnosisRight
              type={item.type}
              money={item.money}
              budget={item.budget}
              isDisable={item.isDisable}
            />
          </Flex>
        );
      })}
    </div>
  );
};
