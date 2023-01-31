import React from "react";
import { IWhenChildBornProps } from "./types";
import { NotWarranty } from "../NotWarranty";
import { images } from "../../../assets/images";
import { Warranty } from "../Warranty";

const image = images.whenChildBornIcon;
const title = "子どもが生まれる時";

export const WhenChildBorn = (props: IWhenChildBornProps): JSX.Element => {
  const { isDisabled } = props.data;

  if (isDisabled) {
    return <NotWarranty image={image} title={title} />;
  }
  const { labels, money } = props.data;

  return (
    <Warranty
      textDesc={"すべての合計で"}
      image={image}
      title={title}
      labels={labels}
      money={money}
      textDescMoney={"最大"}
    />
  );
};
