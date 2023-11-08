import { Image, Text, View } from 'react-native';
import { Perfil } from '../assets/Perfil';

export function Header() {
  return (
    <View className="flex-row items-center">
      <Perfil />
      <Text className="font-extralight text-3xl ml-[18px]">Hi, Olivia!</Text>
    </View>
  );
}
