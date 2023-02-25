import { Text, Pressable, Box, HStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/auth";
import { useEffect } from "react";
import { AppStackProps } from "../../../routes/Auth.routes";
import { ScrollView } from "react-native";
import BannerBusinessStatistics from "../../../components/BannerBusinessStatistics";
import PortfolioFund from "../../../components/PortfolioFund";
import Funds from "../../../components/Funds";

const Home: React.FC = ({ navigation }: AppStackProps) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const dataList = [
    {
      id: 1,
      type: "Wind",
      title: "Wind Fund",
      fund: "$1032.23",
      value: {
        indicator: "positive",
        percent: "3.51 %",
      },
    },
    {
      id: 2,
      type: "Solar",
      title: "Solar Fund",
      fund: "$986.61",
      value: {
        indicator: "negative",
        percent: "0.13 %",
      },
    },
    {
      id: 3,
      type: "Nature",
      title: "Nature Fund",
      fund: "$1122",
      value: {
        indicator: "positive",
        percent: "0.13 %",
      },
    },
  ];

  useEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
      headerLeft: () => (
        <Pressable
          style={{ borderRadius: 30, marginHorizontal: 10 }}
          onPress={handleLogout}
          bgColor={"light.100"}
        >
          <AntDesign
            name="user"
            size={24}
            color="black"
            style={{ paddingHorizontal: 10, paddingVertical: 10, backgroundColor: "light.200" }}
          />
        </Pressable>
      ),
      headerTitle: "Account: $1,457.23",
      headerRight: () => (
        <AntDesign
          name="bells"
          size={24}
          style={{ paddingHorizontal: 10, paddingVertical: 10 }}
          color="black"
        />
      ),
    });
  });

  return (
    <ScrollView automaticallyAdjustKeyboardInsets>
      <PortfolioFund fund="$1,245.23" positive="31.82" />
      <Funds data={dataList} onClick={navigation} />
      <Box paddingX={4}>
        <BannerBusinessStatistics />
        <HStack space={4} marginY={4} flexDirection={"row"} w="100%">
          <Box
            bgColor={"light.100"}
            flex={1}
            height={250}
            borderRadius={10}
            fontWeight={"semibold"}
            padding={4}
          >
            <Text>Why should you invest here?</Text>
          </Box>
          <Box bgColor={"light.100"} flex={1} height={250} borderRadius={10}></Box>
        </HStack>
      </Box>
    </ScrollView>
  );
};

export default Home;
