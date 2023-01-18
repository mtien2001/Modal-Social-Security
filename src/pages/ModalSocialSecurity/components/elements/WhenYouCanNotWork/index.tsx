import React, { useMemo } from "react";
import { ITabWhenYouCanNotWorkProps } from "./types";
import { Flex, BoxLeft, Text } from "./styled";
import { NotWarranty } from "../../../../../components/elements/NotWarranty";
import { images } from "../../../../../assets/images";
import { Warranty } from "../../../../../components/elements/Warranty";

export const WhenYouCanNotWork: React.FC<ITabWhenYouCanNotWorkProps> = (
  props
): JSX.Element => {
  const { data } = props;

  const renderBoxRight = useMemo(
    () => {
      if (data.isDisable) {
        return <NotWarranty />;
      }
      return (
        <Warranty
          budget={data.budget}
          money={data.money}
          text={"ひと月あたり"}
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
          働けなくなった時
        </Text>
      </BoxLeft>
      {renderBoxRight}
    </Flex>
  );
};
