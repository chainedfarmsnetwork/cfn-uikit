import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const tokenImgLink: string = props.tokenImgLink || "images/cfn/9.png";

  return (
    <Svg viewBox="0 0 90 90" {...props}>
      <image width={90} height={90} href={ tokenImgLink } />
    </Svg>
  );
};

export default Icon;
