import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Rewards = (props: SvgProps) => (
  <Svg width={14} height={10} fill="none" {...props}>
    <Path
      d="M7 .333c3.544 0 6.417 1.567 6.417 3.5v2.334c0 1.933-2.873 3.5-6.417 3.5C3.52 9.667.686 8.155.586 6.27l-.003-.103V3.833C.583 1.9 3.456.333 7 .333Zm0 7c-2.17 0-4.09-.587-5.25-1.487v.32C1.75 7.265 4.015 8.5 7 8.5c2.923 0 5.155-1.184 5.247-2.265l.003-.068v-.321c-1.16.9-3.08 1.487-5.25 1.487ZM7 1.5c-2.985 0-5.25 1.235-5.25 2.333S4.015 6.167 7 6.167s5.25-1.236 5.25-2.334S9.985 1.5 7 1.5Z"
      fill="#770FDF"
    />
  </Svg>
);

export default Rewards;
