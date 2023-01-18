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

export const BoxLeft = styled.div`
  display: flex;
  align-items: center;
  background-color: #edf9f5;
  max-width: 315px;
  min-height: 102px;
  @media (max-width: 768px) {
    min-width: 100%;
    justify-content: center;
    border-bottom-left-radius: 0;
    border-top-right-radius: 12px;
    min-height: 70px;
  }
  width: 100%;
  height: 100%;
  box-shadow: 2px 4px 10px rgba(30, 38, 46, 0.08);
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  padding: 16px;
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
