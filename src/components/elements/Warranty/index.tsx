import React from "react";
import {BoxBudget, Box, Budget, Button, Label, Text, Flex, Left} from "./styled";
import { IBoxActiveProps } from "./types";

export const Warranty = (props: IBoxActiveProps): JSX.Element => {
  const { budgets, money, title, image, textDesc, textDescMoney } = props;
  return (
    <Flex>
        <Left>
            <img src={image} width={"48px"} alt={""} />
            <Text
                fontFamily={"Zen Maru Gothic"}
                fontWeight={"500"}
                fontSize={"20px"}
                lineHeight={"26px"}
                color={"#262e2c"}
                whiteSpace={"pre-line"}
                marginLeft={"12px"}
            >
                {title}
            </Text>
        </Left>
        <Box>
            <BoxBudget>
                {budgets?.map((item, index) => <Budget key={index}>{item}</Budget>)}
            </BoxBudget>
            <Label>
                <Text
                    fontFamily={"Hiragino Sans"}
                    fontWeight={"300"}
                    fontSize={"14px"}
                    lineHeight={"100%"}
                    color={"#b4341"}
                >
                    {textDesc}&nbsp;
                </Text>
                {textDescMoney ? (
                  <Text
                    color={"#ba8620"}
                    fontFamily={"Zen Maru Gothic"}
                    fontWeight={"700"}
                    fontSize={"20px"}
                    lineHeight={"100%"}
                  >
                    {textDescMoney}
                  </Text>
                ) : (
                  <></>
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
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
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
    </Flex>
  );
};
