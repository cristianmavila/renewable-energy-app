import { Box, Flex, Heading, Text } from "native-base";

const InfoStats = () => (
  <Box paddingX={4} paddingTop={6}>
    <Heading marginBottom={3} size={"md"}>
      Info & Stats
    </Heading>
    <Flex flexDirection={"row"} marginBottom={3}>
      <Box flex={1}>
        <Text color={"light.400"}>AUM</Text>
        <Text color={"black"}>$430.88m</Text>
      </Box>
      <Box flex={1}>
        <Text color={"light.400"}>Issue Date</Text>
        <Text color={"black"}>18/04/2022</Text>
      </Box>
    </Flex>
    <Flex flexDirection={"row"} marginBottom={3}>
      <Box flex={1}>
        <Text color={"light.400"}>Vintage Range</Text>
        <Text color={"black"}>2019 – 2022</Text>
      </Box>
      <Box flex={1}>
        <Text color={"light.400"}>TER</Text>
        <Text color={"black"}>0.15%</Text>
      </Box>
    </Flex>
    <Flex flexDirection={"row"} marginBottom={3}>
      <Box flex={1}>
        <Text color={"light.400"}>Price at Close</Text>
        <Text color={"black"}>$17.68</Text>
      </Box>
      <Box flex={1}>
        <Text color={"light.400"}>Price at Open</Text>
        <Text color={"black"}>$17.74</Text>
      </Box>
    </Flex>
  </Box>
);

export default InfoStats;
