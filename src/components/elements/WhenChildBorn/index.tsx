import React from "react";
import { IWhenChildBornProps } from "./types";
import { images } from "../../../assets/images";
import { NotWarranty, Warranty } from "../Card";

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
      textMoney={money}
      textDescMoney={"最大"}
    />
  );
};
