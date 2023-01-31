import React from "react";
import { IWhenInTroubleProps } from "./types";
import { images } from "../../../assets/images";
import { NotWarranty, Warranty } from "../Warranty";

const image = images.whenInTroubleIcon;
const title = "障害状態になった時";

export const WhenInTrouble = (props: IWhenInTroubleProps): JSX.Element => {
  const { isDisabled } = props.data;

  if (isDisabled) {
    return <NotWarranty image={image} title={title} />;
  }
  const { labels, money } = props.data;

  return (
    <Warranty
      textDesc={"障害等級2級の場合、ひと月あたり"}
      image={image}
      title={title}
      labels={labels}
      textMoney={money}
    />
  );
};
