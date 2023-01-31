import styled from "@emotion/styled";

export const Flex =
  styled.div <
  any >
  `
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: ${props => props.gap};
  min-height: ${props => props.minHeight};
  flex-wrap: ${props => props.flexWrap};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: ${props => props.flexDirectionResponsive}
  };
  @media (max-width: 576px) {
    justify-content: ${props => props.justifyContentResponsive}
  }
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

export const Right = styled.div`
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

export const Left = styled.div`
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
