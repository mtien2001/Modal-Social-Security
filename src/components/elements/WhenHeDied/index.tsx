import React from "react";
import { IWhenHeDiedProps } from "./types";
import { images } from "../../../assets/images";
import { NotWarranty, Warranty } from "../Card";

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
      textMoney={money}
    />
  );
};
