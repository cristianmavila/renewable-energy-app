import { createStackNavigator } from "@react-navigation/stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation, Octicons, Feather, AntDesign } from "@expo/vector-icons";
import { Box, Heading, Pressable, Text } from "native-base";
import Home from "../pages/Auth/Home";
import SingleAsset from "../pages/Auth/SingleAsset";
import Portfolio from "../pages/Auth/Portfolio";
import Trade from "../pages/Auth/Trade";

const AuthTabs = createBottomTabNavigator();

const AuthTradeStack = createStackNavigator();

export type AuthHomeList = {
  AuthHome: undefined;
  AuthTradeDetails: undefined;
  Home: undefined;
};

export type AppStackProps = NativeStackScreenProps<AuthHomeList>;

const AuthTradeRoutes: React.FC = () => (
  <AuthTradeStack.Navigator initialRouteName="AuthTradeHome">
    <AuthTradeStack.Screen
      name="AuthTradeHome"
      component={Trade}
      options={{
        title: "Trade",
      }}
    />
    <AuthTradeStack.Screen
      name="AuthTradeDetails"
      component={SingleAsset}
      options={({ navigation }) => ({
        headerTitle: () => (
          <Box>
            <Heading size={"sm"}>Wind Fund</Heading>
            <Text textAlign={"center"} color={"light.400"}>
              WFND
            </Text>
          </Box>
        ),
        headerLeft: () => (
          <Pressable
            style={{ borderRadius: 30, marginHorizontal: 10 }}
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: "Home" }],
              });
            }}
          >
            <AntDesign name="arrowleft" size={30} color="black" />
          </Pressable>
        ),
      })}
    />
  </AuthTradeStack.Navigator>
);

const AuthRoutes: React.FC = () => (
  <AuthTabs.Navigator
    id="MyTabs"
    initialRouteName="Home"
    screenOptions={{
      tabBarActiveTintColor: "#770FDF",
      tabBarInactiveTintColor: "black",
      tabBarStyle: { paddingTop: 15, height: 86 },
    }}
  >
    <AuthTabs.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Foundation
            name="home"
            color={color}
            size={size}
            style={{ marginBottom: 10, height: 25 }}
          />
        ),
      }}
    />
    <AuthTabs.Screen
      name="Trade"
      component={AuthTradeRoutes}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Octicons
            name="arrow-switch"
            color={color}
            size={size}
            style={{ marginBottom: 10, height: 25 }}
          />
        ),
        headerShown: false,
      }}
    />
    <AuthTabs.Screen
      name="Portfolio"
      component={Portfolio}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather
            name="pie-chart"
            color={color}
            size={size}
            style={{ marginBottom: 10, height: 25 }}
          />
        ),
      }}
    />
  </AuthTabs.Navigator>
);

export default AuthRoutes;
