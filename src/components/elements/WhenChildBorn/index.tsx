import React from "react";
import { ITabWhenChildBornProps } from "./types";
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

export const WhenChildBorn: React.FC<ITabWhenChildBornProps> = (
  props
): JSX.Element => {
  const { data } = props;

  return (
    <Flex>
        <BoxLeft>
            <img src={images.whenChildBornIcon} width={"48px"} alt={""} />
            <Title>子どもが生まれる時</Title>
        </BoxLeft>

      {data.isDisable ? (
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
                <TextMoneyDesc>最大</TextMoneyDesc>
                <TextMoney>{data?.money}</TextMoney>
                <TextMoneyDesc>万円</TextMoneyDesc>

                <Button>詳しくみる</Button>
            </Label>
          </BoxRight>
      )}
    </Flex>
  );
};
