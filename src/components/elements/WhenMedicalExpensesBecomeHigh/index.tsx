import React from "react";
import { ITabWhenMedicalExpensesBecomeHighProps } from "./types";
import {
    Flex,
    Budget,
    Label,
    TextDetail,
    TextMoney,
    TextMoneyDesc,
    Button,
    BoxLeft,
    Title, BoxRight, BoxBudget
} from "./styled";
import {BoxDisable} from "../BoxDisable";
import {images} from "../../../assets/images";

export const WhenMedicalExpensesBecomeHigh: React.FC<ITabWhenMedicalExpensesBecomeHighProps> = (
  props
): JSX.Element => {
  const { data  } = props;

  return (
    <Flex>
        <BoxLeft>
            <img src={images.whenMedicalExpensesBecomeHighIcon} width={"48px"} alt={""} />
            <Title>
                病気やケガで
                <br />
                医療費が高額になった時
            </Title>
        </BoxLeft>

      {data?.isDisable ? (
              <BoxDisable />
      ) : (
          <BoxRight>
            <BoxBudget>
              {data?.budget?.map((item, index) => <Budget key={index}>{item}</Budget>)}
            </BoxBudget>
            <Label>
                <TextDetail>
                    ひと月あたり&nbsp;
                </TextDetail>
                <TextMoney>{data?.money}</TextMoney>
                <TextMoneyDesc>万円</TextMoneyDesc>

                <Button>詳しくみる</Button>
            </Label>
          </BoxRight>
      )}
    </Flex>
  );
};
