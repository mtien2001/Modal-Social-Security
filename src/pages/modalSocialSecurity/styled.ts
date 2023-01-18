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
  @media (max-width: 576px) {
    height: 80px;
  }
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
    "@media(max-width: 960px)": {
      fontSize: 22
    },
    "@media(max-width: 768px)": {
      fontSize: 20
    },
    "@media(max-width: 576px)": {
      fontSize: 18
    },
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

export const Title = styled.p`
  font-family: Zen Maru Gothic;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #262e2c;
  white-space: pre-line;
  margin: 0;
  margin-left: 12px;
  @media (max-width: 960px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
