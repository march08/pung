import styled from "styled-components";
import { Flex } from "./Flex";

export const Text = styled.span`
  color: var(--text-primary);
  font-weight: 300;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  letter-spacing: 0.04em;
`;

export const P = styled(Text).attrs((p) => {
  return {
    as: "p",
    ...p,
  };
})``;

export const TextContainer = styled(Flex).attrs((p) => {
  return {
    ...p,
    direction: "column",
  };
})`
  gap: 0.75rem;
`;

export const H3 = styled(Text)`
  font-size: 1.25rem;
  font-weight: 500;
`;
