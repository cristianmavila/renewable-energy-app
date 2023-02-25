import { Box, Heading, FlatList, Pressable, Text, Image } from "native-base";

const dataFundBreakdown = [
  {
    id: 1,
    title:
      "Aspira is building a modular, direct air capture system with the energy supply integrated into the modules",
  },
  {
    id: 2,
    title:
      "Aspira is building a modular, direct air capture system with the energy supply integrated into the modules",
  },
];

const FundBreakdown = () => (
  <>
    <Box marginTop={5} paddingX={4}>
      <Heading marginBottom={3} size={"md"}>
        Fund Breakdown
      </Heading>
    </Box>
    <FlatList
      data={dataFundBreakdown}
      horizontal
      renderItem={({ item }) => {
        return (
          <Pressable key={item.id} onPress={() => console.log("Clicking in the card")}>
            <Box
              borderRadius={5}
              borderWidth={1}
              borderColor={"light.200"}
              width={220}
              height={240}
              marginX={2}
            >
              <Image source={require("./assets/news.png")} alt="Image news" />
              <Box padding={3}>
                <Text>{item.title}</Text>
              </Box>
            </Box>
          </Pressable>
        );
      }}
      style={{ paddingLeft: 10, paddingBottom: 10 }}
    />
  </>
);

export default FundBreakdown;
