import { Heading, Button, Text, Stack, Checkbox, FormControl } from "native-base";
import { ScrollView } from "react-native";
import Input from "../../../components/Input";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { AppStackProps } from "../../../routes/App.routes";

type SignUpProps = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  terms: string;
};

const SignUpSchema = Yup.object({
  firstname: Yup.string().trim().required("This field is required."),
  lastname: Yup.string().trim().required("This field is required."),
  email: Yup.string()
    .email("Please type a valid email.")
    .trim()
    .required("Please type a valid email."),
  password: Yup.string()
    .required("Please type a valid password.")
    .min(8, "The password must have at least 8 digits."),
  terms: Yup.string().required("Terms of service is a required field."),
});

const SignUp: React.FC = ({ navigation }: AppStackProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpProps>({
    resolver: yupResolver(SignUpSchema),
  });

  function handleSignUp(data: SignUpProps) {
    console.log(data);
    navigation.navigate("SignUpSuccess");
  }

  return (
    <ScrollView automaticallyAdjustKeyboardInsets>
      <Stack space={4} paddingY={10} w="100%" maxW="375px" mx="auto">
        <Heading size="md" textAlign={"center"}>
          Create your account
        </Heading>
        <Controller
          name="firstname"
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              title="First Name"
              placeholder="First Name"
              isRequired
              errorMessage={errors.firstname?.message}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          name="lastname"
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              title="Last Name"
              placeholder="Last Name"
              isRequired
              errorMessage={errors.lastname?.message}
              onChangeText={onChange}
            />
          )}
        />
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
              isRequired
              secureTextEntry
              errorMessage={errors.password?.message}
              onChangeText={onChange}
            />
          )}
        />

        <Controller
          name="terms"
          control={control}
          render={({ field: { onChange } }) => (
            <FormControl isInvalid={!!errors.terms?.message}>
              <Checkbox
                value={"yes"}
                onChange={onChange}
                fontSize={"sm"}
                display={"flex"}
                alignItems={"flex-start"}
                colorScheme={"purple"}
                isInvalid={!!errors.terms?.message}
              >
                <Text fontSize={"sm"} color={"gray.400"}>
                  I am over 18 years of age and I have read and agree to the Terms of Service and
                  Privacy policy.
                </Text>
              </Checkbox>
              <FormControl.ErrorMessage>{errors.terms?.message}</FormControl.ErrorMessage>
            </FormControl>
          )}
        />
        <Button size="md" onPress={handleSubmit(handleSignUp)} mt={4}>
          Create account
        </Button>
        <Text textAlign={"center"} color={"gray.400"}>
          Already have an account?{" "}
          <Button
            variant={"link"}
            padding={0}
            colorScheme={"gray"}
            textDecoration={"underline"}
            py={0}
            onPress={() => navigation.goBack()}
          >
            Log in Here
          </Button>
        </Text>
      </Stack>
    </ScrollView>
  );
};

export default SignUp;
