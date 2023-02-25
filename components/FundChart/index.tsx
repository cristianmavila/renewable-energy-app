import { ClipPath, Defs, Rect } from "react-native-svg";
import { LineChart } from "react-native-svg-charts";

interface FundChartProps {
  height: number;
  top: number;
  bottom: number;
  color: string;
  strokeWidth: number;
}

const FundChart = ({ height, top, bottom, color, strokeWidth }: FundChartProps) => {
  const data = [0, 10, 70, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, 100];

  const indexToClipFrom = 30;

  const Clips = ({ x, width }) => (
    <Defs key={"clips"}>
      <ClipPath id="clip-path-1">
        <Rect x={"0"} y={"0"} width={x(indexToClipFrom)} height={"100%"} />
      </ClipPath>
      <ClipPath id={"clip-path-2"}>
        <Rect x={x(indexToClipFrom)} y={"0"} width={width - x(indexToClipFrom)} height={"100%"} />
      </ClipPath>
    </Defs>
  );

  return (
    <LineChart
      style={{ height: height }}
      data={data}
      contentInset={{ top: top, bottom: bottom }}
      svg={{
        stroke: color,
        strokeWidth: strokeWidth,
        clipPath: "url(#clip-path-1)",
      }}
    >
      <Clips x={undefined} width={undefined} />
    </LineChart>
  );
};

export default FundChart;
