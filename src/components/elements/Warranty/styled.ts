import styled from "@emotion/styled";

export const BoxBudget = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px 16px 10px 16px;
  flex-wrap: wrap;
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

export const Box = styled.div`
  align-items: center;
  background-color: #ffffff;
  max-width: 492px;
  max-height: 102px;
  @media (max-width: 768px) {
    max-height: 100%;
    min-width: 100%;
    border-top-right-radius: 0;
    border-bottom-left-radius: 12px;
  }
  width: 100%;
  box-shadow: 2px 4px 10px rgba(30, 38, 46, 0.08);
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const Button = styled.p<any>(
  {
    lineHeight: "100%",
    margin: "0px",
    padding: "0px"
  },
  props => ({
    ...props
  })
);

export const Label = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 16px;
  align-items: baseline;
  padding-right: 16px;
  padding-left: 16px;
  @media (max-width: 576px) {
    justify-content: space-between;
  }
`;

export const Text = styled.p<any>(
  {
    lineHeight: "100%",
    margin: "0px",
    padding: "0px"
  },
  props => ({
    ...props
  })
);
