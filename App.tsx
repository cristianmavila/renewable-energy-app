import "react-native-gesture-handler";
import React, { useCallback } from "react";
import { NativeBaseProvider, View } from "native-base";
import { theme } from "./theme";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as StoreProvider } from "react-redux";
import store from "./store";
import * as SplashScreen from "expo-splash-screen";
import { useFonts, Sora_400Regular, Sora_600SemiBold, Sora_700Bold } from "@expo-google-fonts/sora";

SplashScreen.preventAutoHideAsync();

const themeNavigation = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_600SemiBold,
    Sora_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (!!fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <StoreProvider store={store}>
        <SafeAreaProvider style={{ flex: 1 }}>
          <NavigationContainer theme={themeNavigation}>
            <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
              <Routes />
            </View>
          </NavigationContainer>
        </SafeAreaProvider>
      </StoreProvider>
    </NativeBaseProvider>
  );
}
