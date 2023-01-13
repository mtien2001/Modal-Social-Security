import React from "react";
import { TabLeft, DivLeft, Title } from "./styled";
import { ITableft } from "./types";

export const TabDiagnosisLeft: React.FC<ITableft> = (props): JSX.Element => {
  const { title, image } = props;

  return (
    <div>
      <TabLeft>
        <DivLeft>
          <img src={image} width={"48px"} alt={""} />
          <Title>{title}</Title>
        </DivLeft>
      </TabLeft>
    </div>
  );
};
