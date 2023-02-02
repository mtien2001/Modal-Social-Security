import styled from "@emotion/styled";

export const Flex =
  styled.div <
  any >
  `
  display: flex;
  flex-direction: row;
  width: ${props => props.width};
  gap: ${props => props.gap};
  min-height: ${props => props.minHeight};
  max-height: ${props => props.maxHeight};
  height: ${props => props.height};
  flex-wrap: ${props => props.flexWrap};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  max-width: ${props => props.maxWidth};
  box-shadow: ${props => props.boxShadow};
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.borderRadius};
  flex-direction: ${props => props.flexDirection};
  @media (max-width: 768px) {
    flex-direction: ${props => props.flexDirectionTablet};
    flex-wrap: ${props => props.flexWrapResponsive};
    border-radius: ${props => props.borderRadiusTablet};
    min-width: ${props => props.minWidthTablet};
    min-height: ${props => props.minHeightTablet};
    justify-content: ${props => props.justifyContentTablet};
    max-height: ${props => props.maxHeightTablet};
  };
  @media (max-width: 576px) {
    justify-content: ${props => props.justifyContentMobileHorizontal}
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

export const Img =
  styled.img <
  { displayResponsive?: string } >
  `
  width: ${props => props.width};
  @media (max-width: 576px) {
    display: ${props => props.displayResponsive};
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
