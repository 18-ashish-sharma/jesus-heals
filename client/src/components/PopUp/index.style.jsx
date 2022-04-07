import styled from "styled-components";

export const PopupWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const QuarterInfo = styled.h5`
  font-size: 14px;
`;

export const ComplianceInfo = styled.p`
  font-size: 14px;
  color: white;
`;
export const ComplianceCount = styled.span`
  display: inline;
  margin-right: 5px;
`;
export const Popup = styled.div`
  display: ${({ display }) => display};
  flex-direction: column;
  width: 224px;
  height: 164px;
  position: absolute;
  color: white;
  background-color: #000000c1;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.993);
  top: 60px;
  margin-left: -100px;
  z-index: 5;
  & > * {
    margin-top: 0;
  }
`;

export const AssetWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
`;

export const AssetIconWrapper = styled.div`
  svg {
    filter: brightness(0) saturate(100%) invert(99%) sepia(59%) saturate(344%)
      hue-rotate(171deg) brightness(121%) contrast(100%);
  }
`;

export const AssetContent = styled.div`
  & > * {
    margin: 0;
  }
`;

export const AssetType = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;
export const FlexWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin: 20px;
`;
