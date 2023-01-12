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
