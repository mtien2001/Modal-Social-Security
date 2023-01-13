import React from "react";
import { ITabWhenHeDiedProps } from "./types";
import { images } from "../../../../../assets/images";
import {TabRight,Flex, DivBudget, Budget, LabelMoney, TextDetail, TextMoney, TextMoneyDesc, Button} from "../../styled";
import {TabDiagnosisLeft} from "../tab_diagnosis_left";
import {TabDisable} from "../tab_disable/tab_disable";

export const TabWhenHeDied: React.FC<ITabWhenHeDiedProps> = (
  props
): JSX.Element => {
  const { data } = props;

  return (
    <Flex>
        <TabDiagnosisLeft title={'亡くなった時'} image={images.whenHeDiedIcon}/>

      {data.isDisable ? (
              <TabDisable />
      ) : (
          <TabRight>
            <DivBudget>
              {data?.budget?.map((item, index) => <Budget key={index}>{item}</Budget>)}
            </DivBudget>
            <LabelMoney>
              <TextDetail>
                ひと月あたり&nbsp;
                <TextMoney>{data?.money}</TextMoney>
                <TextMoneyDesc>万円</TextMoneyDesc>
              </TextDetail>
              <Button>詳しくみる</Button>
            </LabelMoney>
          </TabRight>
      )}
    </Flex>
  );
};
