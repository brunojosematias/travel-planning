import { Text } from "../Text";
import { Container } from "./styles";

interface ButtonProps {
  children: string;
  onPress: () => void;
}

export function Button({ children, onPress }: ButtonProps) {
  return (
    <Container onPress={onPress}>
      <Text size={20} weight="400a" color="#fff">
        {children}
      </Text>
    </Container>
  );
}
