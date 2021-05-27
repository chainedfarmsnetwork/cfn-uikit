import React from "react";
import styled, { keyframes } from "styled-components";
import { SpinnerProps } from "./types";
import { Svg, SvgProps } from "../Svg";

// OLD: rotation
// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

const zoomInOut = keyframes`{
    0% {
        transform: scale(1,1);
    }
    50% {
        transform: scale(2,2);
    }
    100% {
        transform: scale(1,1);
    }
}`;

const SpinnerIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 96 96" {...props}>
      <image width="96" height="96" href={props.tokenImgLink} />
    </Svg>
  );
};

const Container = styled.div`
  position: relative;
`;

const RotatingPancakeIcon = styled(SpinnerIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${zoomInOut} 1s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128, tokenImgLink = "images/cfn/9.png" }) => {
  return (
    <Container>
      <RotatingPancakeIcon width={`${size * 0.5}px`} tokenImgLink={tokenImgLink} />
    </Container>
  );
};

export default Spinner;
