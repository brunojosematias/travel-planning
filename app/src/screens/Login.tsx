import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  function handleScreenRegister() {
    navigation.navigate('register');
  }

  async function handleLogin() {
    navigation.navigate('user');

    console.log({ email, password });
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <SafeAreaView className="flex-1 bg-mist-100  py-[86px] px-[25px]">
        <Text className="text-[32px] font-extrabold">Login</Text>

        <View className="pt-[16px] gap-[4px] mb-[36px]">
          <View>
            <Text className="text-[18px] mb-[9px]">E-mail</Text>
            <Input onChangeText={setEmail} />
          </View>

          <View>
            <Text className="text-[18px] mb-[9px]">Senha</Text>
            <Input onChangeText={setPassword} secureTextEntry={true} />
          </View>
        </View>

        <Button onPress={handleLogin}>
          <Text className="text-white text-[20px]">Entrar</Text>
        </Button>

        <TouchableOpacity
          onPress={handleScreenRegister}
          className="justify-center items-center border-b-2 mx-20 mt-6 border-green-500"
        >
          <Text className="text-[16px]">Cadastre-se</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}
