import { Input as NativeBaseInput, IInputProps, FormControl } from "native-base";

type Props = IInputProps & {
  errorMessage?: string | null;
  title?: string | null;
};

const Input = ({ title, errorMessage, isInvalid, ...rest }: Props) => {
  const invalid = !!errorMessage || isInvalid;
  return (
    <FormControl isInvalid={invalid}>
      {title && <FormControl.Label color={"muted.400"}>{title}</FormControl.Label>}
      <NativeBaseInput
        borderRadius={"sm"}
        px={3}
        py={15}
        borderColor={"warmGray.100"}
        bg={"warmGray.100"}
        shadow={"none"}
        borderWidth={2}
        focusOutlineColor={"warmGray.200"}
        isInvalid={invalid}
        _focus={{
          bgColor: "warmGray.100",
          borderColor: "warmGray.200",
          borderWidth: 2,
        }}
        _hover={{
          bgColor: "warmGray.100",
          borderColor: "warmGray.200",
          borderWidth: 2,
        }}
        _invalid={{
          borderWidth: 2,
          borderColor: "red.500",
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};

export default Input;
