import styled from "styled-components";

const colWidth = {
  12: (100 / 12) * 12,
  11: (100 / 12) * 11,
  10: (100 / 12) * 10,
  9: (100 / 12) * 9,
  8: (100 / 12) * 8,
  7: (100 / 12) * 7,
  6: (100 / 12) * 6,
  5: (100 / 12) * 5,
  4: (100 / 12) * 4,
  3: (100 / 12) * 3,
  2: (100 / 12) * 2,
  1: (100 / 12) * 1,
};

export const Wrapper = styled.div`
  width: 90%;
  margin: auto;
`;

export const CPHeading = styled.h1`
  font-size: 24px;
  text-align: center;
  color: #000000;
  margin-top: 20px;
  font-weight: normal;
  margin: 10px 0px;
`;
export const PhyHeading = styled.h1`
  font-size: 24px;
  text-align: centre;
  color: #000000;
  font-weight: normal;
  margin: 15px;
`;

export const Col = styled.div`
  width: ${(props) =>
    props.width ? props.width : `${colWidth[props.col]}%` || "100%"};
  position: relative;
  box-sizing: border-box;
  margin-left: ${(props) => props.ml};
  padding: ${(props) => props.p};
  border: ${(props) => props.border}px solid black;
  margin-left: ${(props) => props.ml || 0};
  margin-top: ${(props) => props.mt || 0};
`;

export const Wrapper2 = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const UL = styled.ul`
  list-style: none;
  li::before {
    content: "📌";
  }
`;


export const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 20;
`;
