import React, { useMemo } from "react";
import { ITabWhenInTroubleProps } from "./types";
import { Flex, Box, Text } from "./styled";
import { NotWarranty } from "../../../../../components/elements/NotWarranty";
import { images } from "../../../../../assets/images";
import { Warranty } from "../../../../../components/elements/Warranty";

export const WhenInTrouble: React.FC<ITabWhenInTroubleProps> = (
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
          text={"障害等級2級の場合、ひと月あたり"}
        />
      );
    },
    [data]
  );

  return (
    <Flex>
      <Box>
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
      </Box>
      {renderBoxRight}
    </Flex>
  );
};
