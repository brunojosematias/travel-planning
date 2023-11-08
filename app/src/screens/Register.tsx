import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useState } from 'react';
import { api } from '../hooks/useApi';

export function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cpf, setCpf] = useState('');

  async function handleRegister() {
    console.log({ username, email, password, confirmPassword, cpf });

    try {
      await api.post('/api/auth/register/', {
        email,
        password,
        name: username,
        birthday: confirmPassword,
        cpf,
      });
    } catch (err) {
      console.log('error', err);
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <SafeAreaView className="flex-1 bg-mist-100  py-[86px] px-[25px]">
        <Text className="text-[32px] font-extrabold">Criar uma conta</Text>

        <View className="pt-[18px] gap-[4px] mb-[36px]">
          <View>
            <Text className="text-[18px] mb-[9px]">Username</Text>
            <Input onChangeText={setUsername} />
          </View>

          <View>
            <Text className="text-[18px] mb-[9px]">CPF</Text>
            <Input onChangeText={setCpf} />
          </View>

          <View>
            <Text className="text-[18px] mb-[9px]">E-mail</Text>
            <Input onChangeText={setEmail} />
          </View>

          <View>
            <Text className="text-[18px] mb-[9px]">Senha</Text>
            <Input onChangeText={setPassword} secureTextEntry={true} />
          </View>

          <View>
            <Text className="text-[18px] mb-[9px]">Confirmar senha</Text>
            <Input onChangeText={setConfirmPassword} secureTextEntry={true} />
          </View>
        </View>

        <Button onPress={handleRegister}>Cadastrar</Button>
      </SafeAreaView>
    </ScrollView>
  );
}
