import styled from "styled-components/native";
import { Platform } from "react-native";

const isAndroid = Platform.OS === "android";


export const Input = styled.TextInput`
  background: #fff;
  border: 0.1px solid rgba(0, 0, 0, ${isAndroid ? 1 : 0.50});
  border: 0;
  border-radius: 5px;
  elevation: 2;
  padding: 10px 14px;
`;
