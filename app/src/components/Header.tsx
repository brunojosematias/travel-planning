import { TouchableOpacityProps } from 'react-native';

import { Text, TouchableOpacity, View } from 'react-native';
import { Perfil } from '../assets/Perfil';

type ButtonProps = TouchableOpacityProps & {
  children: string;
  selectedButton?: boolean;
};

type HeaderProps = {
  selectedButton?: boolean;
  noButtons?: boolean;
};

function Button({ children, selectedButton = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className={`items-center justify-center py-3 w-[150px] rounded-[10px] shadow-lg ${
        selectedButton
          ? 'bg-green-500'
          : 'bg-white border-gray-400 border-[1px] text-gray-500'
      }`}
      {...rest}
    >
      <Text
        className={`text-[10px] font-semibold ${
          selectedButton ? 'text-white' : 'text-gray-500'
        }`}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

export function Header({
  selectedButton = true,
  noButtons = false,
}: HeaderProps) {
  return (
    <View>
      <View className="flex-row items-center">
        <Perfil />
        <Text className="font-extralight text-3xl ml-[18px]">Hi, Olivia!</Text>
      </View>

      {!noButtons && (
        <View className="flex-row justify-between mt-[46px]">
          <Button selectedButton={selectedButton}>Viagens em andamento</Button>

          <Button>Viagens concluidas</Button>
        </View>
      )}
    </View>
  );
}
