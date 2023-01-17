import styled from "@emotion/styled";

export const Box = styled.div`
  background-color: #91b3a9;
  max-width: 492px;
  max-height: 102px;
  width: 100%;
  box-shadow: 2px 4px 10px rgba(30, 38, 46, 0.08);
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  @media (max-width: 768px) {
    min-width: 100%;
    max-height: 100%;
    border-top-right-radius: 0;
    border-bottom-left-radius: 12px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: fit-content;
  padding: 16px;
  padding-bottom: 8px;
`;

export const Title = styled.p`
  font-family: Zen Maru Gothic;
  color: #fff;
  font-size: 16px;
  line-height: 100%;
  font-weight: 500;
  margin: 0px;
  margin-left: 6px;
  margin-top: 4px;
`;

export const Text = styled.p`
  font-family: Zen Maru Gothic;
  color: #fff;
  font-size: 10px;
  line-height: 150%;
  font-weight: 300;
  margin: 0px;
  padding: 0 16px 16px 16px;
`;
