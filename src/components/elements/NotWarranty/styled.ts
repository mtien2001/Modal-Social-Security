import styled from "@emotion/styled";

export const Right = styled.div`
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

export const Flex =
  styled.div <
  any >
  `
  display: flex;
  width: 100%;
  flex-direction: ${props => props.flexDirection};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  margin: ${props => props.margin};
  height: ${props => props.height};
  padding: ${props => props.padding};
  min-height: ${props => props.minHeight};
  @media (max-width: 768px) {
    flex-direction: ${props => props.flexDirectionRespon}
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
