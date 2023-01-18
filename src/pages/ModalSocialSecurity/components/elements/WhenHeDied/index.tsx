import React, { useMemo } from "react";
import { ITabWhenHeDiedProps } from "./types";
import { Flex, Box, Text } from "./styled";
import { NotWarranty } from "../../../../../components/elements/NotWarranty";
import { images } from "../../../../../assets/images";
import { Warranty } from "../../../../../components/elements/Warranty";

export const WhenHeDied: React.FC<ITabWhenHeDiedProps> = (
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
          text={"ひと月あたり自己負担上限額"}
        />
      );
    },
    [data]
  );

  return (
    <Flex>
      <Box>
        <img src={images.whenHeDiedIcon} width={"48px"} alt={""} />
        <Text
          fontFamily={"Zen Maru Gothic"}
          fontWeight={"500"}
          fontSize={"20px"}
          lineHeight={"26px"}
          color={"#262e2c"}
          whiteSpace={"pre-line"}
          marginLeft={"12px"}
        >
          亡くなった時
        </Text>
      </Box>
      {renderBoxRight}
    </Flex>
  );
};
