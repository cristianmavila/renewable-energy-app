import { Heading, Button, Text, Stack } from "native-base";
import { ScrollView } from "react-native";
import { AppStackProps } from "../../../routes/App.routes";

type SignUpProps = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  terms: string;
};

const SignUpSuccess: React.FC = ({ navigation }: AppStackProps) => {
  return (
    <ScrollView automaticallyAdjustKeyboardInsets>
      <Stack space={4} paddingY={10} w="100%" maxW="375px" mx="auto">
        <Heading size="md" textAlign={"center"}>
          Account created with success
        </Heading>
        <Text textAlign={"center"} color={"gray.400"}>
          Congratulations, now you can go to the login screen!
        </Text>
        <Button size="md" mt={4} onPress={() => navigation.navigate("Login")}>
          Go back
        </Button>
      </Stack>
    </ScrollView>
  );
};

export default SignUpSuccess;
