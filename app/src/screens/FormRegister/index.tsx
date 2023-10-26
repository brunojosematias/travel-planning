import { Container, Form, FormGroup } from "./styles";
import { Text } from "../../components/Text";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";

import { ScrollView } from "react-native";
import axios from "axios";

export function FormRegister() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [cpf, setCpf] = useState("");

  async function handleRegister() {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/register",
        {
          email,
          password,
          name,
          birthday,
          cpf,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <Container>
        <Text size={32} weight="800">
          Create Account
        </Text>

        <Form>
          <FormGroup>
            <Text size={25} weight="400">
              Username
            </Text>
            <Input onChangeText={setName} />
          </FormGroup>

          <FormGroup>
            <Text size={25} weight="400">
              Email
            </Text>
            <Input onChangeText={setEmail} />
          </FormGroup>

          <FormGroup>
            <Text size={25} weight="400">
              Birthday
            </Text>
            <Input onChangeText={setBirthday} />
          </FormGroup>

          <FormGroup>
            <Text size={25} weight="400">
              CPF
            </Text>
            <Input onChangeText={setCpf} />
          </FormGroup>

          <FormGroup>
            <Text size={25} weight="400">
              Password
            </Text>
            <Input secureTextEntry={true} onChangeText={setPassword} />
          </FormGroup>
        </Form>
        <Button onPress={handleRegister}>Sing in</Button>
      </Container>
    </ScrollView>
  );
}
