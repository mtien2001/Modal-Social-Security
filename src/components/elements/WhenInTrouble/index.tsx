import React from "react";
import { IWhenInTroubleProps } from "./types";
import { NotWarranty } from "../NotWarranty";
import { images } from "../../../assets/images";
import { Warranty } from "../Warranty";

const image = images.whenInTroubleIcon;
const title = "障害状態になった時";

export const WhenInTrouble = (props: IWhenInTroubleProps): JSX.Element => {
  const { isDisable } = props.data;

  if (isDisable) {
    return <NotWarranty image={image} title={title} />;
  }
  const { budgets, money } = props.data;

  return (
    <Warranty
      textDesc={"障害等級2級の場合、ひと月あたり"}
      image={image}
      title={title}
      budgets={budgets}
      money={money}
    />
  );
};
