import React from "react";
import { IWhenInTroubleProps } from "./types";
import { images } from "../../../assets/images";
import { Card } from "../Card";

export const WhenInTrouble = (props: IWhenInTroubleProps): JSX.Element => {
  const { labels, money, isDisabled } = props.data;

  return (
    <Card
      isDisabled={isDisabled}
      textDesc={"障害等級2級の場合、ひと月あたり"}
      image={images.whenInTroubleIcon}
      title={"障害状態になった時"}
      labels={labels}
      textMoney={money}
    />
  );
};
