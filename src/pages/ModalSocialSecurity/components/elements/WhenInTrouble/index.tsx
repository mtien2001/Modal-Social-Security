import React, { useMemo } from "react";
import { ITabWhenInTroubleProps } from "./types";
import { Flex, BoxLeft, Text } from "./styled";
import { BoxDisable } from "../../../../../components/elements/BoxDisable";
import { images } from "../../../../../assets/images";
import { BoxActive } from "../../../../../components/elements/BoxActive";

export const WhenInTrouble: React.FC<ITabWhenInTroubleProps> = (
  props
): JSX.Element => {
  const { data } = props;

  const renderBoxRight = useMemo(
    () => {
      if (data.isDisable) {
        return <BoxDisable />;
      }
      return (
        <BoxActive
          budget={data.budget}
          money={data.money}
          text={"障害等級2級の場合、ひと月あたり"}
        />
      );
    },
    [data]
  );

  return (
    <Flex>
      <BoxLeft>
        <img src={images.whenYouCanNotWorkIcon} width={"48px"} alt={""} />
        <Text
          fontFamily={"Zen Maru Gothic"}
          fontWeight={"500"}
          fontSize={"20px"}
          lineHeight={"26px"}
          color={"#262e2c"}
          whiteSpace={"pre-line"}
          marginLeft={"12px"}
        >
          障害状態になった時
        </Text>
      </BoxLeft>
      {renderBoxRight}
    </Flex>
  );
};
