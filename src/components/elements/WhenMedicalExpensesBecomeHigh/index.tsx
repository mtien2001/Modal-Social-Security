import React from "react";
import { IWhenMedicalExpensesBecomeHighProps } from "./types";
import { NotWarranty } from "../NotWarranty";
import { images } from "../../../assets/images";
import { Warranty } from "../Warranty";

const title = "病気やケガで\n医療費が高額になった時";
const image = images.whenMedicalExpensesBecomeHighIcon;

export const WhenMedicalExpensesBecomeHigh = (
  props: IWhenMedicalExpensesBecomeHighProps
): JSX.Element => {
  const { isDisable } = props.data;

  if (isDisable) {
    return <NotWarranty image={image} title={title} />;
  }

  const { labels, money } = props.data;
  return (
    <Warranty
      textDesc={"ひと月あたり自己負担上限額"}
      labels={labels}
      money={money}
      title={title}
      image={image}
    />
  );
};
