import { Flex, Text } from "native-base";
import { Feather } from "@expo/vector-icons";

interface VariantValueProps {
  type: "positive" | "negative";
  value: string;
}

export const positiveCheck = (type: string) => (type === "positive" ? "#0FDF8F" : "#EE8688");

const VariantValue = ({ type, value }: VariantValueProps) => {
  return (
    <Flex flexDirection={"row"} alignItems={"center"}>
      <Feather
        name={type === "positive" ? "arrow-up-right" : "arrow-down-right"}
        size={15}
        style={{ color: positiveCheck(type) }}
      />
      <Text fontWeight={"light"} color={positiveCheck(type)}>
        {value}
      </Text>
    </Flex>
  );
};

export default VariantValue;
