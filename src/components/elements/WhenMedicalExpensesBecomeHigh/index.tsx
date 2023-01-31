import React from "react";
import { IWhenMedicalExpensesBecomeHighProps } from "./types";
import { images } from "../../../assets/images";
import { NotWarranty, Warranty } from "../Warranty";

const image = images.whenMedicalExpensesBecomeHighIcon;
const title = "病気やケガで\n医療費が高額になった時";

export const WhenMedicalExpensesBecomeHigh = (
  props: IWhenMedicalExpensesBecomeHighProps
): JSX.Element => {
  const { isDisabled } = props.data;

  if (isDisabled) {
    return <NotWarranty image={image} title={title} />;
  }
  const { labels, money } = props.data;

  return (
    <Warranty
      textDesc={"ひと月あたり自己負担上限額"}
      labels={labels}
      textMoney={money}
      title={title}
      image={image}
    />
  );
};
