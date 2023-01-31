import React from "react";
import { ITabWhenYouCanNotWorkProps } from "./types";
import { images } from "../../../assets/images";
import { Card } from "../Card";

export const WhenYouCanNotWork = (
  props: ITabWhenYouCanNotWorkProps
): JSX.Element => {
  const { labels, money, isDisabled } = props.data;

  return (
    <Card
      isDisabled={isDisabled}
      textDesc={"ひと月あたり"}
      labels={labels}
      textMoney={money}
      title={"働けなくなった時"}
      image={images.whenYouCanNotWorkIcon}
    />
  );
};
