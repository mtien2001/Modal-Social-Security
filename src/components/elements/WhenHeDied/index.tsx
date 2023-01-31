import React from "react";
import { IWhenHeDiedProps } from "./types";
import { NotWarranty } from "../NotWarranty";
import { images } from "../../../assets/images";
import { Warranty } from "../Warranty";

const image = images.whenHeDiedIcon;
const title = "亡くなった時";

export const WhenHeDied = (props: IWhenHeDiedProps): JSX.Element => {
  const { isDisabled } = props.data;
  if (isDisabled) {
    return <NotWarranty image={image} title={title} />;
  }

  const { labels, money } = props.data;

  return (
    <Warranty
      textDesc={"ひと月あたり"}
      image={image}
      title={title}
      labels={labels}
      money={money}
    />
  );
};
