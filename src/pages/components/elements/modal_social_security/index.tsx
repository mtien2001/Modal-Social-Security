import React from "react";
import {
  ModalStyled as Modal,
  ModalHeader,
  ModalBody,
  Img,
  Text
} from "../../../../styled";
import { images } from "../../../../assets/images";
import { TabDiagnosis } from "../../../../components/elements/tab_diagnosis";
import { useFetchModalDetial } from "../../../../hooks";

export const ModalSocialSecurity = (
  props: ReturnType<typeof useFetchModalDetial>
): JSX.Element => {
  const { data, isOpen, toggleModal } = props;

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <ModalHeader>
          <Img width={"133.17px"} src={images.staffLeft} alt={""} />
          <Text
            fontSize={"24px"}
            line-height={"100%"}
            color={"#fff"}
            font-family={"Zen Maru Gothic"}
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
    </div>
  );
};