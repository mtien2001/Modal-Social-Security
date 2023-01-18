import React, { useMemo } from "react";
import { ITabWhenChildBornProps } from "./types";
import { Flex, BoxLeft, Text } from "./styled";
import { NotWarranty } from "../../../../../components/elements/NotWarranty";
import { images } from "../../../../../assets/images";
import { Warranty } from "../../../../../components/elements/Warranty";

export const WhenChildBorn: React.FC<ITabWhenChildBornProps> = (
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
          text={"すべての合計で"}
          textDesc={"最大"}
        />
      );
    },
    [data]
  );

  return (
    <Flex>
      <BoxLeft>
        <img src={images.whenChildBornIcon} width={"48px"} alt={""} />
        <Text
          fontFamily={"Zen Maru Gothic"}
          fontWeight={"500"}
          fontSize={"20px"}
          lineHeight={"26px"}
          color={"#262e2c"}
          whiteSpace={"pre-line"}
          marginLeft={"12px"}
        >
          子どもが生まれる時
        </Text>
      </BoxLeft>
      {renderBoxRight}
    </Flex>
  );
};
