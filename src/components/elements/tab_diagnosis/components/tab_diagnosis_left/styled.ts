import styled from "@emotion/styled";

export const TabLeft = styled.div`
  display: flex;
  align-items: center;
  background-color: #edf9f5;
  min-width: 315px;
  @media (max-width: 768px) {
    min-width: 100%;
    justify-content: center;
    border-bottom-left-radius: 0;
    border-top-right-radius: 12px;
    max-height: 70px;
  }
  width: 100%;
  height: 100%;
  box-shadow: 2px 4px 10px rgba(30, 38, 46, 0.08);
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
`;

export const DivLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: fit-content;
  padding: 16px;
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
