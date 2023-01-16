import React from "react";
import { WrapDisable, Flex, TitleDisable, TextDisable } from "./styled";
import { images } from "../../../assets/images";

export const BoxDisable = () => {
  return (
    <WrapDisable>
      <Flex>
        <img width={"20px"} src={images.exclamationMarkIcon} alt={""} />
        <TitleDisable>保障の対象外です</TitleDisable>
      </Flex>
      <TextDisable>
        入力内容と本シミュレーションの算出条件を考慮すると、対象外の可能性が高いです。
        ご家族の詳細情報やお住いの市区町村などの条件により、対象になる場合もあります。
        より正確な情報は、日本年金機構や加入している協会けんぽ又は健康保険組合等でご確認下さい。
      </TextDisable>
    </WrapDisable>
  );
};
