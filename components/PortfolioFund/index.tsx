import { Box, Text, Flex, Heading, Button } from "native-base";
import Rewards from "../Icons/Rewards";

interface PortfolioFund {
  fund: string;
  positive: string;
}

const PortfolioFund = ({ fund, positive }: PortfolioFund) => {
  return (
    <Flex
      flexDirection={"row"}
      paddingY={5}
      paddingX={4}
      borderBottomColor={"light.200"}
      borderBottomWidth={1}
      marginBottom={4}
      alignItems={"flex-end"}
    >
      <Box flex={1}>
        <Text>Portfolio</Text>
        <Heading>
          {fund}{" "}
          <Text fontSize={"sm"} fontWeight={"normal"} color={"green.500"}>
            {positive} %
          </Text>
        </Heading>
      </Box>
      <Box>
        <Button
          leftIcon={<Rewards width={14} height={10} />}
          variant="subtle"
          colorScheme="purple"
          py={2}
          px={3}
        >
          <Text color={"purple.900"}>Earn Rewards</Text>
        </Button>
      </Box>
    </Flex>
  );
};

export default PortfolioFund;
