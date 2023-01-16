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
    WrapLeft,
    Title, WrapRight, BoxBudget
} from "../../../../styled";
import {BoxDisable} from "../../molecules/box_disable";

export const WhenMedicalExpensesBecomeHigh: React.FC<ITabWhenMedicalExpensesBecomeHighProps> = (
  props
): JSX.Element => {
  const { data, title, image } = props;

  return (
    <Flex>
        <div>
            <WrapLeft>
                <BoxLeft>
                    <img src={image} width={"48px"} alt={""} />
                    <Title>{title}</Title>
                </BoxLeft>
            </WrapLeft>
        </div>

      {data.isDisable ? (
              <BoxDisable />
      ) : (
          <WrapRight>
            <BoxBudget>
              {data?.budget?.map((item, index) => <Budget key={index}>{item}</Budget>)}
            </BoxBudget>
            <Label>
              <TextDetail>
                ひと月あたり&nbsp;
                <TextMoney>{data?.money}</TextMoney>
                <TextMoneyDesc>万円</TextMoneyDesc>
              </TextDetail>

                <Button>詳しくみる</Button>
            </Label>
          </WrapRight>
      )}
    </Flex>
  );
};
