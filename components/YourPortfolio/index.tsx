import { Box, Heading, Text, Flex, HStack, Button } from "native-base";
import { Feather } from "@expo/vector-icons";
import VariantValue from "../VariantValue";

const YourPortfolio = () => {
  return (
    <Box paddingX={4} paddingY={6}>
      <Heading size={"md"} marginY={5}>
        <Feather
          name="pie-chart"
          color={"black"}
          size={20}
          style={{ marginBottom: 10, height: 25 }}
        />{" "}
        Your Portfolio
      </Heading>
      <Flex flexDirection={"row"} justifyContent={"space-between"}>
        <Heading>18 credits</Heading>
        <Heading>$328.14</Heading>
      </Flex>
      <Flex flexDirection={"row"} justifyContent={"space-between"} marginBottom={5}>
        <VariantValue value="8.41%" type="positive" />
        <Text color={"light.400"}>Last purchase 28d ago</Text>
      </Flex>
      <HStack space={4} width={"100%"} flexDirection={"row"} marginBottom={3}>
        <Button
          flex={1}
          variant={"ghost"}
          borderColor={"light.300"}
          borderWidth={1}
          _text={{ fontWeight: "bold", fontSize: "md" }}
        >
          Sell
        </Button>
        <Button
          flex={1}
          variant={"unstyled"}
          bgColor={"#0FDF8F"}
          _text={{ color: "white", fontWeight: "bold", fontSize: "md" }}
          _pressed={{ backgroundColor: "green.500" }}
        >
          Retire credits
        </Button>
      </HStack>
      <Text color={"light.400"} fontSize={"xs"}>
        You’ve previously retired 28 credits of this asset
      </Text>
      <Box borderRadius={4} bgColor={"light.100"} padding={3} marginY={10}>
        <Text fontSize={"xs"} color={"light.600"} marginBottom={2}>
          Please note that prices are for reference only and may vary at the time of excecuting a
          buy or sell order.
        </Text>
        <Text fontSize={"xs"} color={"light.600"}>
          The information provided is not investment advice, and should not be used as a
          recommendation to buy or sell assets.
        </Text>
      </Box>
      <Button marginX={3}>Buy</Button>
    </Box>
  );
};

export default YourPortfolio;
