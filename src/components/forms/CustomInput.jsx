import {
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

const CustomInput = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  label,
  isRequired,
}) => {
  return (
    <FormControl isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default CustomInput;
