import React from "react";
import { ITabWhenChildBornProps } from "./types";
import { images } from "../../../../../assets/images";
import {TabRight,DivBudget, Flex, Budget, LabelMoney, TextDetail, TextMoney, TextMoneyDesc, Button} from "../../styled";
import {TabDiagnosisLeft} from "../tab_diagnosis_left";
import {TabDisable} from "../tab_disable/tab_disable";

export const TabWhenChildBorn: React.FC<ITabWhenChildBornProps> = (
  props
): JSX.Element => {
  const { data } = props;

  return (
    <Flex>
        <TabDiagnosisLeft title={'子どもが生まれる時'} image={images.whenChildBornIcon}/>

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
                  <TextMoneyDesc>最大</TextMoneyDesc>
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
