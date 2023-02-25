import { Box, Text, Flex, Heading, Pressable } from "native-base";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList } from "react-native";
import Wind from "../Icons/Wind";
import Solar from "../Icons/Solar";
import NatureFood from "../Icons/NatureFood";
import VariantValue, { positiveCheck } from "../VariantValue";
import FundChart from "../FundChart";

interface CardFundProps {
  id?: number;
  type: "Wind" | "Solar" | "Nature";
  title: string;
  fund: string;
  value: {
    indicator: "positive" | "negative";
    percent: string;
  };
}

interface FundProps {
  data: CardFundProps[];
  onClick: NativeStackNavigationProp<any>;
}

const CardFund = ({ title, fund, value, type }: CardFundProps) => {
  return (
    <Flex
      borderColor={"light.200"}
      backgroundColor={"white"}
      borderWidth={1}
      width={155}
      height={145}
      padding={3}
      marginX={2}
      borderRadius={4}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Box>
        {type == "Wind" && <Wind width={16} height={16} />}
        {type == "Solar" && <Solar width={16} height={16} />}
        {type == "Nature" && <NatureFood width={16} height={16} />}
        <Text fontWeight={"semibold"} color={"black"}>
          {title}
        </Text>
      </Box>
      <FundChart
        height={50}
        top={0}
        bottom={0}
        color={positiveCheck(value.indicator)}
        strokeWidth={2}
      />
      <Flex flexDirection={"row"} alignItems={"flex-end"}>
        <Text
          fontSize={"md"}
          lineHeight={"md"}
          fontWeight={"light"}
          marginRight={0.5}
          color={"black"}
        >
          {fund}
        </Text>
        <VariantValue value={value.percent} type={value.indicator} />
      </Flex>
    </Flex>
  );
};

const Funds = ({ data, onClick }: FundProps) => {
  return (
    <Box>
      <Heading paddingX={4} paddingBottom={4}>
        Funds
      </Heading>
      <FlatList
        data={data}
        horizontal
        renderItem={({ item }) => {
          const { id, type, title, fund, value } = item;
          return (
            <Pressable
              key={id}
              onPress={() => onClick.navigate("Trade", { screen: "AuthTradeDetails" })}
            >
              <CardFund type={type} title={title} fund={fund} value={value} />
            </Pressable>
          );
        }}
        style={{ paddingLeft: 8, paddingBottom: 18 }}
      />
    </Box>
  );
};

export default Funds;
