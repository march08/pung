import { bigShoulderText } from "@pung/lib/fonts/bigShoulderText";
import { Flex } from "@pung/modules/ui/components/Flex";
import { TextContainer } from "@pung/modules/ui/components/Text";
import styled from "styled-components";

const Container = styled(Flex).attrs({
  gap: "sectionsShort",
  direction: "column",
})`
  background: var(--bg-primary);
  padding: 2rem;
  max-width: 960px;
  color: var(--text-primary);
  min-width: 320px;
`;

const Title = styled.h3`
  font-family: ${bigShoulderText.style.fontFamily};
  font-weight: 400;
  text-transform: uppercase;
  color: var(--app-primary);
  font-size: 2.25rem;
  letter-spacing: 0.1em;
  em {
    font-family: ${bigShoulderText.style.fontFamily};
    font-weight: 800;
    text-transform: uppercase;
    font-style: normal;
    color: var(--text-primary);
  }
`;

export const ServiceCard: React.FC<{
  title: React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ title, children, style }) => {
  return (
    <Container style={style}>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};
