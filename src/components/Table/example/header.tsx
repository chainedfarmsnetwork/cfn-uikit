import styled from "styled-components";

const StyledTh = styled.th`
  background: #eff4f5;
  padding: 8px;
  font-size: 18px;
  color: #8f80ba;

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding-left: 22px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-left-radius: 4px;
    padding-right: 22px;
  }
`;

export default StyledTh;
