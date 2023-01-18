import styled from "@emotion/styled";
import Modal from "styled-react-modal";

export const ModalStyled = Modal.styled`
  max-width: 855px;
  width: 100%;
  max-height: 100%;
  background-color: #91C5B6;
  border-radius: 12px;
  margin: 0px;
  margin-left: 24px;
  margin-right: 24px;
  @media (max-width: 768px) {
     font-size: 20px;
     max-height: 692px;
     overflow-y: scroll;
  };
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  gap: 20px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const ModalBody = styled.div`
  padding: 0 24px 24px 24px;
`;

export const Img = styled.img`
  width: ${props => props.width};
  @media (max-width: 576px) {
    display: none;
  }
`;

export const Text = styled.h1<any>(
  {
    lineHeight: "100%",
    margin: "0px"
  },
  props => ({
    ...props
  })
);

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  width: 100%;
  margin-bottom: 12px;
  min-height: 102px;
`;
