import React from "react";
import { Button, Flex, Text, Img } from "../Styled";
import {ICardLeftProps, INotWarrantyProps, IWarrantyProps} from "./types";
import {images} from "../../../assets/images";

const CardLeft = ( props: ICardLeftProps ): JSX.Element => {
  const { image, title } = props
  return (
      <Flex alignItems={'center'} backgroundColor={'#edf9f5'} maxWidth={'315px'} width={'100%'} minHeight={'102px'}
            borderRadius={'12px 0 0 12px'} boxShadow={'2px 4px 10px rgba(30, 38, 46, 0.08)'} padding={'16px'}
            height={'100%'} borderRadiusTablet={'12px 12px 0 0'} minWidthTablet={'100%'} minHeightTablet={'70px'}
            justifyContentTablet={'center'}
      >
        <Img width={"48px"} src={image} alt={""} />
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
      </Flex>
  )
}

export const NotWarranty = (props: INotWarrantyProps): JSX.Element => {
    const { image, title } = props
  return (
      <Flex
          margin={"0 0 12px 0"}
          width={"100%"}
          flexDirectionTablet={"column"}
          minHeight={"102px"}
      >
          <CardLeft image={image} title={title} />
          <Flex
              backgroundColor={'#91b3a9'} boxShadow={'2px 4px 10px rgba(30, 38, 46, 0.08)'}
              maxHeight={'102px'} maxWidth={'492px'} width={'100%'} flexDirection={'column'}
              borderRadius={'0 12px 12px 0'} borderRadiusTablet={'0 0 12px 12px'}
              minWidthTablet={'100%'} maxHeightTablet={'100%'}
          >
              <Flex
                  alignItems={"center"}
                  justifyContent={"start"}
                  height={"fit-content"}
                  padding={"16px 16px 8px 16px"}
              >
                  <Img width={"20px"} src={images.exclamationMarkIcon} alt={""} />
                  <Text
                      fontSize={"16px"}
                      lineHeight={"100%"}
                      color={"#fff"}
                      fontFamily={"Zen Maru Gothic"}
                      fontWeight={"500"}
                      margin={"4px 0 0 6px"}
                  >
                      保障の対象外です
                  </Text>
              </Flex>
              <Text
                  fontFamily={"Zen Maru Gothic"}
                  color={"#fff"}
                  fontSize={"10px"}
                  lineHeight={"150%"}
                  fontWeight={"300"}
                  padding={"0 16px 16px 16px"}
              >
                  入力内容と本シミュレーションの算出条件を考慮すると、対象外の可能性が高いです。<br />
                  ご家族の詳細情報やお住いの市区町村などの条件により、対象になる場合もあります。<br />
                  より正確な情報は、日本年金機構や加入している協会けんぽ又は健康保険組合等でご確認下さい。
              </Text>
          </Flex>
      </Flex>
  )
}

export const Warranty = (props: IWarrantyProps): JSX.Element => {
  const { labels, textMoney, title, image, textDesc, textDescMoney } = props;
  return (
    <Flex
      margin={"0 0 12px 0"}
      width={"100%"}
      flexDirectionTablet={"column"}
      minHeight={"102px"}
    >
      <CardLeft image={image} title={title} />
        <Flex
            backgroundColor={'#fff'} boxShadow={'2px 4px 10px rgba(30, 38, 46, 0.08)'}
            maxHeight={'102px'} maxWidth={'492px'} width={'100%'} flexDirection={'column'}
            borderRadius={'0 12px 12px 0'} borderRadiusTablet={'0 0 12px 12px'}
            minWidthTablet={'100%'} maxHeightTablet={'100%'}
        >
            <Flex gap={"8px"} padding={"16px 16px 10px 16px"} flexWrap={"wrap"}>
                {labels?.map((item, index) =>
                    <Text
                        key={index} fontFamily={'Hiragino Sans'} color={'#BA8620'}
                        fontWeight={'300'} fontSize={'14px'} minWidth={'118px'}
                        minHeight={'26px'} backgroundColor={'#FFF6E3'} borderRadius={'27px'}
                        textAlign={'center'} padding={'6px 0'}
                    >
                        {item}
                    </Text>
                )}
            </Flex>
            <Flex
                flexWrapTablet={'wrap'}
                alignItems={"baseline"}
                padding={"0 16px 16px 16px"}
                justifyContent={"flex-end"}
                justifyContentMobileHorizontal={"center"}
            >
                <Text
                    fontFamily={"Hiragino Sans"}
                    fontWeight={"300"}
                    fontSize={"14px"}
                    lineHeight={"100%"}
                    color={"#b4341"}
                >
                    {textDesc}&nbsp;
                </Text>
                {textDescMoney && (
                    <Text
                        color={"#ba8620"}
                        fontFamily={"Zen Maru Gothic"}
                        fontWeight={"700"}
                        fontSize={"20px"}
                        lineHeight={"100%"}
                    >
                        {textDescMoney}
                    </Text>
                )}
                <Text
                    color={"#ba8620"}
                    fontFamily={"Zen Maru Gothic"}
                    fontWeight={"700"}
                    fontSize={"32px"}
                    lineHeight={"100%"}
                    margin={"0px 2px 0 2px"}
                >
                    {textMoney}
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
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    background={"linear-gradient(180deg, #d8ba81 0%, #ab8f5a 100%)"}
                    minWidth={"140px"}
                    width={"fit-content"}
                    minHeight={"32px"}
                    height={"fit-content"}
                    border={"1px solid #c5b391"}
                    borderRadius={"24px"}
                    color={"#fff"}
                    cursor={"pointer"}
                    marginLeft={"16px"}
                    fontSize={"16px"}
                >
                    詳しくみる
                </Button>
            </Flex>
        </Flex>
    </Flex>
  );
};
