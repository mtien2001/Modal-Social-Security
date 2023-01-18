import React from "react";
import { Box, Flex, Text } from "./styled";
import { images } from "../../../assets/images";

export const NotWarranty = (): JSX.Element => {
  return (
    <Box>
      <Flex>
        <img width={"20px"} src={images.exclamationMarkIcon} alt={""} />
        <Text
          fontSize={"16px"}
          lineHeight={"100%"}
          color={"#fff"}
          fontFamily={"Zen Maru Gothic"}
          fontWeight={"500"}
          margin={"4px 0 0 6px"}
        >
          保障の対象外です
        </Text>
      </Flex>
      <Text
        fontFamily={"Zen Maru Gothic"}
        color={"#fff"}
        fontSize={"10px"}
        lineHeight={"150%"}
        fontWeight={"300"}
        padding={"0 16px 16px 16px"}
      >
        入力内容と本シミュレーションの算出条件を考慮すると、対象外の可能性が高いです。<br />
        ご家族の詳細情報やお住いの市区町村などの条件により、対象になる場合もあります。<br />
        より正確な情報は、日本年金機構や加入している協会けんぽ又は健康保険組合等でご確認下さい。
      </Text>
    </Box>
  );
};