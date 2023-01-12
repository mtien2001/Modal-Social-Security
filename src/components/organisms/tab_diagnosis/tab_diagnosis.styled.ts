import styled from "@emotion/styled";

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

export const FlexLabelMoney = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 16px;
  align-items: end;
  padding-right: 16px;
  padding-left: 16px;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const DivDiagnosisLeft = styled.div`
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

export const FlexDiagnosis = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: fit-content;
  padding: 16px;
  padding-bottom: 8px;
`;

export const FlexBudget = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px 16px 10px 16px;
  flex-wrap: wrap;
`;

export const FlexTabLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: fit-content;
  padding: 16px;
`;

export const DivDiagnosisRight = styled.div`
  align-items: center;
  background-color: #ffffff;
  max-width: 492px;
  @media (max-width: 768px) {
    min-width: 100%;
    border-top-right-radius: 0;
    border-bottom-left-radius: 12px;
  }
  width: 100%;
  box-shadow: 2px 4px 10px rgba(30, 38, 46, 0.08);
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
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

export const DivDiagnosisDisable = styled.div`
  background-color: #91b3a9;
  max-width: 492px;
  max-height: 102px;
  width: 100%;
  box-shadow: 2px 4px 10px rgba(30, 38, 46, 0.08);
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  @media (max-width: 768px) {
    min-width: 100%;
    border-top-right-radius: 0;
    border-bottom-left-radius: 12px;
  }
`;

export const TextLabelDisable = styled.p`
  font-family: Zen Maru Gothic;
  color: #fff;
  font-size: 10px;
  line-height: 150%;
  font-weight: 300;
  margin: 0px;
  padding: 0 16px 16px 16px;
`;

export const TextTitleDisable = styled.p`
  font-family: Zen Maru Gothic;
  color: #fff;
  font-size: 16px;
  line-height: 100%;
  font-weight: 500;
  margin: 0px;
  margin-left: 6px;
  margin-top: 4px;
`;

export const Button = styled.button`
  background: linear-gradient(180deg, #d8ba81 0%, #ab8f5a 100%);
  min-width: 140px;
  width: fit-content;
  min-height: 32px;
  height: fit-content;
  border: 1px solid #c5b391;
  border-radius: 24px;
  color: #ffffff;
  cursor: pointer;
  margin-left: 16px;
`;

export const Budget = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFF6E3;
  border-radius: 27px;
  min-width: 118px;
  min-height: 26px;
  color: #BA8620;
  font-family: 'Hiragino Sans;
  font-weight: 300;
  font-size: 14px;
  line-height: 100%;
`;

export const TextMoney = styled.span`
  color: #ba8620;
  font-family: Zen Maru Gothic;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  margin: 0px 2px 0 2px;
  @media (max-width: 960px) {
    font-size: 28px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

export const TextMoneyDesc = styled.span`
  color: #ba8620;
  font-family: Zen Maru Gothic;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  margin: 0px;
  @media (max-width: 960px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const TextDetail = styled.p`
  font-family: Hiragino Sans;
  font-weight: 300;
  font-size: 14px;
  line-height: 100%;
  margin: 0px;
  color: #3b4341;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 576px) {
    font-size: 10px;
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
