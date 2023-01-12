import Modal from "styled-react-modal";
import styled from "@emotion/styled";

export const StyledModal = Modal.styled`
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

export const FlexHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  gap: 20px;
  padding-left: 24px;
  padding-right: 24px;
  @media (max-width: 576px) {
    height: 80px;
  }
`;

export const DivTag = styled.div`
  padding: 0 24px 24px 24px;
`;

export const Img = styled.img`
  width: ${props => props.width};
  @media (max-width: 576px) {
    display: none;
  }
`;
