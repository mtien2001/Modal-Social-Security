import React from "react";
import { ModalStyled as Modal, ModalHeader, ModalBody } from "./styled";
import { images } from "../../../assets/images";
import { TabDiagnosis } from "../../elements/TabDiagnosis";
import { useModalSocialSecurity } from "./hooks";
import { IModalSecurityProps } from "./types";
import { Spinner } from "@chakra-ui/react";
import { Text, Img } from "../../elements/Styled";

const Component = (
  props: ReturnType<typeof useModalSocialSecurity>
): JSX.Element => {
  const { data, isOpen, onClose, isLoading } = props;

  if (isLoading) {
    return (
      <Modal
        isOpen={isOpen}
        onBackgroundClick={onClose}
        onEscapeKeydown={onClose}
      >
        <ModalHeader>
          <Img
            width={"133.17px"}
            src={images.staffLeft}
            alt={""}
            displayMobileHorizontal={"none"}
          />
          <Text
            fontSize={"24px"}
            lineHeight={"100%"}
            color={"#fff"}
            fontFamily={"Zen Maru Gothic"}
            fontWeight={"500"}
          >
            あなたが公的保険で受け取れる金額
          </Text>
          <Img
            width={"130px"}
            src={images.staffRight}
            alt={""}
            displayMobileHorizontal={"none"}
          />
        </ModalHeader>
        <ModalBody>
          <center>
            <Spinner />
          </center>
        </ModalBody>
      </Modal>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onBackgroundClick={onClose}
      onEscapeKeydown={onClose}
    >
      <ModalHeader>
        <Img
          width={"133.17px"}
          src={images.staffLeft}
          alt={""}
          displayMobileHorizontal={"none"}
        />
        <Text
          fontSize={"24px"}
          lineHeight={"100%"}
          color={"#fff"}
          fontFamily={"Zen Maru Gothic"}
          fontWeight={"500"}
        >
          あなたが公的保険で受け取れる金額
        </Text>
        <Img
          width={"130px"}
          src={images.staffRight}
          alt={""}
          displayMobileHorizontal={"none"}
        />
      </ModalHeader>
      <ModalBody>{data && <TabDiagnosis data={data} />}</ModalBody>
    </Modal>
  );
};

export const ModalSocialSecurityDiagnosis = (
  props: IModalSecurityProps
): JSX.Element => {
  return <Component {...useModalSocialSecurity(props)} />;
};
