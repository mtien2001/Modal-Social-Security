import React from "react";
import { IWhenChildBornProps } from "./types";
import { images } from "../../../assets/images";
import { Card } from "../Warranty";

const image = images.whenChildBornIcon;
const title = "子どもが生まれる時";

export const WhenChildBorn = (props: IWhenChildBornProps): JSX.Element => {
  const { labels, money, isDisabled } = props.data;

  return (
    <Card
      isDisabled={isDisabled}
      textDesc={"すべての合計で"}
      image={image}
      title={title}
      labels={labels}
      textMoney={money}
      textDescMoney={"最大"}
    />
  );
};
