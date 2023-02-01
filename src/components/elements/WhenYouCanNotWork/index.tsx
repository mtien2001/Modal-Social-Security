import React from "react";
import { ITabWhenYouCanNotWorkProps } from "./types";
import { images } from "../../../assets/images";
import { NotWarranty, Warranty } from "../Card";

const image = images.whenYouCanNotWorkIcon;
const title = "働けなくなった時";

export const WhenYouCanNotWork = (
  props: ITabWhenYouCanNotWorkProps
): JSX.Element => {
  const { isDisabled } = props.data;

  if (isDisabled) {
    return <NotWarranty image={image} title={title} />;
  }
  const { labels, money } = props.data;

  return (
    <Warranty
      textDesc={"ひと月あたり"}
      labels={labels}
      textMoney={money}
      title={title}
      image={image}
    />
  );
};
