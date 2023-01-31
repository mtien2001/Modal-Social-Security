import React from "react";
import { Flex, Text, Left, Right } from "./styled";
import { images } from "../../../assets/images";
import { INotWarrantyProps } from "./types";

export const NotWarranty = (props: INotWarrantyProps): JSX.Element => {
  const { image, title } = props;

  return (
    <Flex
      flexDirection={"row"}
      margin={"0 0 12px 0"}
      flexDirectionResponsive={"column"}
      minHeight={"102px"}
    >
      <Left>
        <img src={image} width={"48px"} alt={""} />
        <Text
          fontFamily={"Zen Maru Gothic"}
          fontWeight={"500"}
          fontSize={"20px"}
          lineHeight={"26px"}
          color={"#262e2c"}
          whiteSpace={"pre-line"}
          marginLeft={"12px"}
        >
          {title}
        </Text>
      </Left>
      <Right>
        <Flex
          alignItems={"center"}
          justifyContent={"start"}
          height={"fit-content"}
          padding={"16px 16px 8px 16px"}
        >
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
      </Right>
    </Flex>
  );
};
