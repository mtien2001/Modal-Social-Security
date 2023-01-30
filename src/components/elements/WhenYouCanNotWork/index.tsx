import React from "react";
import { ITabWhenYouCanNotWorkProps } from "./types";
import { NotWarranty } from "../NotWarranty";
import { images } from "../../../assets/images";
import { Warranty } from "../Warranty";

const image = images.whenYouCanNotWorkIcon;
const title = "働けなくなった時";

export const WhenYouCanNotWork = (
  props: ITabWhenYouCanNotWorkProps
): JSX.Element => {
  const { isDisable } = props.data;

  if (isDisable) {
    return <NotWarranty image={image} title={title} />;
  }

  const { labels, money } = props.data;

  return (
    <Warranty
      textDesc={"ひと月あたり"}
      labels={labels}
      money={money}
      title={title}
      image={image}
    />
  );
};
