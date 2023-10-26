import { Container, Form, FormGroup } from "./styles";
import { Text } from "../../components/Text";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TouchableOpacity } from "react-native";

export function FormLogin() {
  return (
    <Container>
      <Text size={32} weight="800">
        Login Account
      </Text>

      <Form>
        <FormGroup>
          <Text size={25} weight="400">
            Email
          </Text>
          <Input />
        </FormGroup>

        <FormGroup>
          <Text size={25} weight="400">
            Password
          </Text>
          <Input secureTextEntry={true} />
        </FormGroup>
      </Form>

      <Button onPress={() => alert("Logou")}>Sing in</Button>

      <TouchableOpacity
        style={{
          alignItems: "center",
          marginTop: 12,
          borderBottomWidth: 1,
          borderBottomColor: "#31C292",
        }}
      >
        <Text size={20} weight="500" color="#31C292">
          Register
        </Text>
      </TouchableOpacity>
    </Container>
  );
}
