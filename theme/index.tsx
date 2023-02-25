import { extendTheme } from "native-base";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },
  components: {
    Button: {
      baseStyle: {
        rounded: "sm",
      },
      defaultProps: {
        colorScheme: "purple",
        size: "md",
        py: 4,
      },
    },
  },
  colors: {
    primary: {
      100: "#770FDF",
    },
  },
  fontConfig: {
    Sora: {
      100: {
        normal: "Sora_400Regular",
      },
      300: {
        normal: "Sora_400Regular",
      },
      400: {
        normal: "Sora_400Regular",
      },
      600: {
        normal: "Sora_600SemiBold",
      },
      700: {
        normal: "Sora_600SemiBold",
      },
    },
  },
  fonts: {
    heading: "Sora",
    body: "Sora",
  },
});
