import styled from "@emotion/styled";
import Modal from "styled-react-modal";

export const ModalStyled = Modal.styled`
  max-width: 855px;
  width: 100%;
  max-height: 100%;
  min-height: 695px;
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
    @media (max-width: 576px) {
     margin-left: 16px;
     margin-right: 16px;
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
  min-height: 100px;
  @media (max-width: 576px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const ModalBody = styled.div`
  padding: 0 24px 24px 24px;
  @media (max-width: 576px) {
    padding: 0 16px 16px 16px;
  }
`;
