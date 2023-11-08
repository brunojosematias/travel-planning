import { styled } from 'nativewind';
import { Text, TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native';

type Props = TouchableOpacityProps & {
  children: string;
};

export function ButtonStyled({ children, ...rest }: Props) {
  return (
    <TouchableOpacity
      className="bg-green-500 w-full h-[38px] rounded-[15px] justify-center items-center"
      {...rest}
    >
      <Text className="text-white text-[20px]">{children}</Text>
    </TouchableOpacity>
  );
}

const Button = styled(ButtonStyled);
export { Button };
