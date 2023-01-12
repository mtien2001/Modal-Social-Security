import React, { useEffect, useState } from "react";
import {
  StyledModal,
  FlexHeader,
  DivTag,
  Img
} from "./modal_social_security.styled";
import { IModalSocialSecurity } from "./modal_social_security.types";
import { images } from "../../../assets/images";
import { TabDiagnosis } from "../../organisms/tab_diagnosis";
import { Text } from "../../organisms/tab_diagnosis/tab_diagnosis.styled";

export const ModalSocialSecurity: React.FC<IModalSocialSecurity> = (
  props
): JSX.Element => {
  const { data } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <FlexHeader>
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
        </FlexHeader>
        <DivTag>
          <TabDiagnosis data={data} />
        </DivTag>
      </StyledModal>
    </div>
  );
};
