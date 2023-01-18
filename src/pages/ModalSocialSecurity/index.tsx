import React, { useState } from "react";
import {
  ModalStyled as Modal,
  ModalHeader,
  ModalBody,
  Img,
  Text
} from "./styled";
import { images } from "../../assets/images";
import { TabDiagnosis } from "./components/elements/TabDiagnosis";
import { useModalSocialSecurity } from "./hooks";

const Component = (
  props: ReturnType<typeof useModalSocialSecurity>
): JSX.Element => {
  const { data } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Modal
      isOpen={isOpen}
      onBackgroundClick={onClose}
      onEscapeKeydown={onClose}
    >
      <ModalHeader>
        <Img width={"133.17px"} src={images.staffLeft} alt={""} />
        <Text
          fontSize={"24px"}
          lineHeight={"100%"}
          color={"#fff"}
          fontFamily={"Zen Maru Gothic"}
          fontWeight={"500"}
        >
          あなたが公的保険で受け取れる金額
        </Text>
        <Img width={"130px"} src={images.staffRight} alt={""} />
      </ModalHeader>
      <ModalBody>
        <TabDiagnosis data={data} />
      </ModalBody>
    </Modal>
  );
};

export const ModalSocialSecurityDiagnosis = (): JSX.Element => {
  return <Component {...useModalSocialSecurity()} />;
};
