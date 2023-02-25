import { Box, Heading, Flex } from "native-base";
import { ScrollView } from "react-native";
import VariantValue, { positiveCheck } from "../../../components/VariantValue";
import InfoStats from "../../../components/InfoStats";
import YourPortfolio from "../../../components/YourPortfolio";
import FundBreakdown from "../../../components/FundBreakdown";
import FundChart from "../../../components/FundChart";

const SingleAsset: React.FC = () => (
  <ScrollView automaticallyAdjustKeyboardInsets>
    <Box paddingX={4} paddingTop={6}>
      <Flex flexDirection={"row"} justifyContent={"space-between"} marginBottom={2}>
        <Heading>$18.23</Heading>
        <Heading>2022</Heading>
      </Flex>
      <VariantValue value="3.51% ($1.21)" type="positive" />
    </Box>
    <FundChart
      height={150}
      strokeWidth={2}
      color={positiveCheck("positive")}
      top={20}
      bottom={20}
    />
    <InfoStats />
    <FundBreakdown />
    <YourPortfolio />
  </ScrollView>
);

export default SingleAsset;
