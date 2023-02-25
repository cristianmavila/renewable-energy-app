import { Button, Stack, Heading, Text } from "native-base";
import { AppStackProps } from "../../../routes/App.routes";
import Input from "../../../components/Input";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../../../actions/auth";

export type LoginDataProps = {
  email: string;
  password: string;
};

const LoginSchema = Yup.object({
  email: Yup.string().email().trim().required("Please type a valid email"),
  password: Yup.string()
    .required("Please type a valid password")
    .min(8, "The password must have at least 8 digits."),
});

const Login: React.FC = ({ navigation: { navigate } }: AppStackProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataProps>({
    resolver: yupResolver(LoginSchema),
  });

  const dispatch = useDispatch();

  async function handleLogin(data: LoginDataProps) {
    dispatch(login(data)).catch((error) => {
      console.log(error);
    });
  }

  return (
    <ScrollView automaticallyAdjustKeyboardInsets>
      <Stack space={3} paddingY={10} w="100%" maxW="375px" mx="auto">
        <Heading size="md" textAlign={"center"}>
          Login
        </Heading>

        <Controller
          name="email"
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              title="E-mail"
              placeholder="Enter email"
              isRequired
              autoCapitalize="none"
              autoCorrect={false}
              errorMessage={errors.email?.message}
              onChangeText={onChange}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              title="Password"
              placeholder="Minimum 8 characters"
              secureTextEntry
              isRequired
              errorMessage={errors.password?.message}
              onChangeText={onChange}
            />
          )}
        />

        <Button onPress={handleSubmit(handleLogin)} mt={4}>
          Login
        </Button>
        <Text textAlign={"center"} color={"gray.400"}>
          Don’t have an account?{" "}
          <Button
            variant={"link"}
            padding={0}
            colorScheme={"gray"}
            textDecoration={"underline"}
            py={0}
            onPress={() => navigate("SignUp")}
          >
            Sign up here
          </Button>
        </Text>
      </Stack>
    </ScrollView>
  );
};

export default Login;
