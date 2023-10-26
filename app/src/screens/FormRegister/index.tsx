import { Container, Form, FormGroup } from "./styles";
import { Text } from "../../components/Text";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function FormRegister() {
  return (
    <Container>
      <Text size={32} weight="800">
        Create Account
      </Text>

      <Form>
        <FormGroup>
          <Text size={25} weight="400">
            Username
          </Text>
          <Input />
        </FormGroup>

        <FormGroup>
          <Text size={25} weight="400">
            Email
          </Text>
          <Input secureTextEntry={true} />
        </FormGroup>

        <FormGroup>
          <Text size={25} weight="400">
            Password
          </Text>
          <Input secureTextEntry={true} />
        </FormGroup>

        <FormGroup>
          <Text size={25} weight="400">
            Confirm Password
          </Text>
          <Input secureTextEntry={true} />
        </FormGroup>
      </Form>
      <Button onPress={() => alert("Cadastro concluído")}>Sing in</Button>
    </Container>
  );
}
