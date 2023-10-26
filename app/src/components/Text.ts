import styled from "styled-components/native";

interface TextProps {
  weight?: "200" | "400" | "500" | "600" | "800";
  color?: string;
  size?: number;
  opacity?: number;
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ weight }: any) => weight ? `Inter-${weight}` : "Inter-400"};
  color: ${({ color }: any) => color || "#333"};
  font-size: ${({ size }: any) => size ? `${size}px` : "16px"};
  opacity: ${({ opacity }: any) => opacity || 1};
`;
