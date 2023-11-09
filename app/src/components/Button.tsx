// import { TextProps } from 'react-native';

import { styled } from 'nativewind';
import { Text, TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native';

type Props = TouchableOpacityProps & {
  children: string;
};

export function ButtonStyled({ children, ...rest }: Props) {
  return (
    <TouchableOpacity
      className="w-full bg-green-500 h-[38px] rounded-[15px] justify-center items-center"
      {...rest}
    >
      <Text className="text-xl text-white">{children}</Text>
    </TouchableOpacity>
  );
}

const Button = styled(ButtonStyled);
export { Button };
