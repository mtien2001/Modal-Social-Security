import React from "react";
import {BoxBudget, Box, Budget, Button, Label, Text} from "./styled";
import { IBoxActiveProps } from "./types";

export const Warranty: React.FC<IBoxActiveProps> = (props): JSX.Element => {
  const { budget, money, text, textDesc } = props;
  return (
    <Box>
      <BoxBudget>
        {budget?.map((item, index) => <Budget key={index}>{item}</Budget>)}
      </BoxBudget>
      <Label>
        <Text
          fontFamily={"Hiragino Sans"}
          fontWeight={"300"}
          fontSize={"14px"}
          lineHeight={"100%"}
          color={"#b4341"}
        >
          {text}&nbsp;
        </Text>
        {textDesc ? (
          <Text
            color={"#ba8620"}
            fontFamily={"Zen Maru Gothic"}
            fontWeight={"700"}
            fontSize={"20px"}
            lineHeight={"100%"}
          >
            {textDesc}
          </Text>
        ) : (
          undefined
        )}
        <Text
          color={"#ba8620"}
          fontFamily={"Zen Maru Gothic"}
          fontWeight={"700"}
          fontSize={"32px"}
          lineHeight={"100%"}
          margin={"0px 2px 0 2px"}
        >
          {money}
        </Text>
        <Text
          color={"#ba8620"}
          fontFamily={"Zen Maru Gothic"}
          fontWeight={"700"}
          fontSize={"20px"}
          lineHeight={"100%"}
        >
          万円
        </Text>

        <Button
          background={'linear-gradient(180deg, #d8ba81 0%, #ab8f5a 100%)'}
          minWidth={'140px'}
          width={'fit-content'}
          minHeight={'32px'}
          height={'fit-content'}
          border={'1px solid #c5b391'}
          borderRadius={'24px'}
          color={'#fff'}
          cursor={'pointer'}
          marginLeft={'16px'}
          fontSize={'16px'}
        >
            詳しくみる
        </Button>
      </Label>
    </Box>
  );
};
