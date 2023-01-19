import React from "react";
import { IWhenChildBornProps } from "./types";
import { NotWarranty } from "../NotWarranty";
import { images } from "../../../assets/images";
import { Warranty } from "../Warranty";

const image = images.whenChildBornIcon;
const title = "子どもが生まれる時";

export const WhenChildBorn = (props: IWhenChildBornProps): JSX.Element => {
  const { isDisable } = props.data;

  if (isDisable) {
    return <NotWarranty image={image} title={title} />;
  }
  const { budgets, money } = props.data;

  return (
    <Warranty
      textDesc={"すべての合計で"}
      image={image}
      title={title}
      budgets={budgets}
      money={money}
      textDescMoney={"最大"}
    />
  );
};
