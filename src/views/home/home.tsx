"use client";
import styled from "styled-components";

import pungLogo from "./logo.svg";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  min-height: 100dvh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem;
`;

const Name = styled.div`
  color: white;
  opacity: 0.8;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.2rem;
  span {
    opacity: 0.5;
  }
`;

export const HomePage = () => {
  return (
    <Container>
      <Image
        style={{ maxHeight: "80dvh", height: "300px" }}
        priority
        src={pungLogo}
        alt="Pung - Airsoft Workshop"
      />
      <Name>
        Petr Půlpán <span>&amp;</span> Roman Nguyen
      </Name>
    </Container>
  );
};
