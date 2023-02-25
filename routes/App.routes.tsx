import { createStackNavigator } from "@react-navigation/stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Login from "../pages/App/Login";
import SignUp from "../pages/App/SignUp";
import SignUpSuccess from "../pages/App/SignUpSuccess";
import { Box, Flex, Pressable } from "native-base";
import { AntDesign } from "@expo/vector-icons";

export type AppStackParamList = {
  Login: undefined;
  SignUp: undefined;
  SignUpSuccess: undefined;
};

export type AppStackProps = NativeStackScreenProps<AppStackParamList>;

const AppStack = createStackNavigator<AppStackParamList>();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Login"
      component={Login}
      options={{
        title: "",
      }}
    />
    <AppStack.Screen
      name="SignUp"
      component={SignUp}
      options={({ navigation }) => ({
        title: "",
        headerTitle: () => (
          <Flex flexDirection={"row"}>
            <Box width={50} height={2} borderRadius={5} bgColor={"light.100"} marginX={1}></Box>
            <Box width={50} height={2} borderRadius={5} bgColor={"light.100"} marginX={1}></Box>
            <Box width={50} height={2} borderRadius={5} bgColor={"light.100"} marginX={1}></Box>
          </Flex>
        ),
        headerLeft: () => (
          <Pressable
            style={{ borderRadius: 30, marginHorizontal: 10 }}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={30} color="black" />
          </Pressable>
        ),
      })}
    />
    <AppStack.Screen
      name="SignUpSuccess"
      component={SignUpSuccess}
      options={({ navigation }) => ({
        title: "",
        headerTitle: () => (
          <Flex flexDirection={"row"}>
            <Box width={50} height={2} borderRadius={5} bgColor={"light.100"} marginX={1}></Box>
            <Box width={50} height={2} borderRadius={5} bgColor={"light.100"} marginX={1}></Box>
            <Box width={50} height={2} borderRadius={5} bgColor={"light.100"} marginX={1}></Box>
          </Flex>
        ),
        headerLeft: () => (
          <Pressable
            style={{ borderRadius: 30, marginHorizontal: 10 }}
            onPress={() => navigation.navigate("Login")}
          >
            <AntDesign name="arrowleft" size={30} color="black" />
          </Pressable>
        ),
      })}
    />
  </AppStack.Navigator>
);

export default AppRoutes;
