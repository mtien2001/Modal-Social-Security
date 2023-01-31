import React from "react";
import { IWhenHeDiedProps } from "./types";
import { images } from "../../../assets/images";
import { Card } from "../Card";

export const WhenHeDied = (props: IWhenHeDiedProps): JSX.Element => {
  const { labels, money, isDisabled } = props.data;

  return (
    <Card
      isDisabled={isDisabled}
      textDesc={"ひと月あたり"}
      image={images.whenHeDiedIcon}
      title={"亡くなった時"}
      labels={labels}
      textMoney={money}
    />
  );
};
