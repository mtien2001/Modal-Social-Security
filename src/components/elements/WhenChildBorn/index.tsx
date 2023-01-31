import React from "react";
import { IWhenChildBornProps } from "./types";
import { images } from "../../../assets/images";
import { Card } from "../Card";

export const WhenChildBorn = (props: IWhenChildBornProps): JSX.Element => {
  const { labels, money, isDisabled } = props.data;

  return (
    <Card
      isDisabled={isDisabled}
      textDesc={"すべての合計で"}
      image={images.whenChildBornIcon}
      title={"子どもが生まれる時"}
      labels={labels}
      textMoney={money}
      textDescMoney={"最大"}
    />
  );
};
