import React, { useEffect, useState } from "react";
import { StyledModal, FlexHeader, DivTag, Img, Text } from "../../../../styled";
import { IModalProps } from "../../../../types";
import { images } from "../../../../assets/images";
import { TabDiagnosis } from "../../../../components/elements/tab_diagnosis";

export const Modal: React.FC<IModalProps> = (props): JSX.Element => {
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
