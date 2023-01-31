import React from "react";
import { IWhenMedicalExpensesBecomeHighProps } from "./types";
import { images } from "../../../assets/images";
import { Card } from "../Warranty";

export const WhenMedicalExpensesBecomeHigh = (
  props: IWhenMedicalExpensesBecomeHighProps
): JSX.Element => {
  const { labels, money, isDisabled } = props.data;
  return (
    <Card
      isDisabled={isDisabled}
      textDesc={"ひと月あたり自己負担上限額"}
      labels={labels}
      textMoney={money}
      title={"病気やケガで\n医療費が高額になった時"}
      image={images.whenMedicalExpensesBecomeHighIcon}
    />
  );
};
