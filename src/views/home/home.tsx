"use client";
import styled from "styled-components";

import pungLogo from "./logo.svg";
import fotka from "./fotka.jpg";
import Image from "next/image";
import { Flex } from "@pung/modules/ui/components/Flex";
import { Button } from "@pung/modules/ui/components/Button";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { LinkExternal } from "@pung/modules/ui/components/LinkExternal";

const IG_HREF = "https://www.instagram.com/pung_airsoft";
const MAIL_HREF = "mailto:workshop@pung.cz";

const Container = styled.div`
  display: flex;
  min-height: 100dvh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  padding: 20dvh 2rem;
`;

const Name = styled.div`
  color: white;
  opacity: 0.8;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.2rem;
  line-height: 1.35em;
  text-align: center;
  line-height: 1.5em;
  span {
    opacity: 0.5;
  }
`;

const Title = styled(Name)`
  font-size: 1.25rem;
  opacity: 0.9;
  font-weight: 600;
  text-align: center;
`;

const P = styled.p`
  color: white;
  opacity: 0.8;
  letter-spacing: 0.05em;
  max-width: 640px;
  line-height: 1.7;
  text-align: center;
  font-weight: 400;
  font-size: 1.25rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
  a {
    color: #bb9c76;
  }
`;

const Photo = styled(Image)`
  border-radius: 50%;
  max-width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
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
      <Flex direction="column" gap="elementsContainer" alignItems="center">
        <Title as="h1">Servis, údržba a upgrade airsoftových zbraní.</Title>
        <Name>
          Petr Půlpán <span>&amp;</span> Roman Nguyen
        </Name>
      </Flex>
      <Flex gap="elementsContainer" flexWrap="wrap" justifyContent="center">
        <Button as={LinkExternal} $hoverContent="@pung_airsoft" href={IG_HREF}>
          <BiLogoInstagramAlt />
          Naše práce
        </Button>
        <Button as={LinkExternal} href={MAIL_HREF}>
          <MdAlternateEmail />
          Napiš nám
        </Button>
      </Flex>
      <div />

      <Flex direction="column" gap="elementsContainer" alignItems="center">
        <P>
          Jsme dvojka nadšenců, co začala hrát airsoft dobrých patnáct let
          zpátky. Občás nás můžeš najít na Fénixu, akcích od Dynamite airsoft,
          na Profouskovi nebo na akcích v okolí Prahy :). Jako každý jsme chtěli
          mít co nejpřesnější, nejvýkonější, nejkonzistentnější, nejrychlejší,
          ... prostě nej nej nej airsoftku co jde postavit. A za ty roky jsme
          jich rozebrali nespočet. Zkoušíme testovat díly nejrůznějších výrobců,
          necháváme si posílat specialitky ze zahraničí a už víme co funguje a
          co ne. Ale samozřejmě, neusínáme na vavřínech a jakoukoliv novinku
          objednáváme a testujeme!
        </P>
        <P>
          A co nabízíme? Základní servis, údržbu airsoftek až po plný upgrade.
          Chceš přesně 1.7J, 2.5J? Co takhle 30 ran za sekundu? Něco se
          poškodilo nebo máš prostě vymáčknout ze své zbraně trošku víc? Dej
          vědět! Napiš nám na{" "}
          <LinkExternal href={MAIL_HREF}>email</LinkExternal> nebo rovnou na
          instagram <LinkExternal href={IG_HREF}>@pung_airsoft</LinkExternal>,
          kde najdeš i ukázky práce, zajímavosti z testování, naše doporučení
          apod.
        </P>
        <P>
          Stavíme zbraně, protože nás to baví a chceme, aby tu radost z dobře
          vyladěné sestavy měli i ostatní. Dostaneš od nás plný report. Pokud by
          něco bylo v nepořádku (například ulomené zuby na kolech), dáme ti hned
          vědět a poradíme vhodné řešení v případě, že by bylo potřeba měnit
          rozpočet. Co je ale podle nás důležitý - stavíme zbraně jako bychom si
          je stavěli sami pro sebe. Aby perfektně střílela, vydržela, hrálo se s
          ní jedna radost a aby to nebyla výmluva, když se prohrává :D. Ať už
          máš jakýkoliv rozpočet, napiš a vymyslíme nejlepší řešení. A kdyby
          cokoliv, furt máš u nás záruku.
        </P>
      </Flex>
      <Flex direction="column" gap="elementsContainer" justifyContent="center">
        <Photo
          width={300}
          height={300}
          objectFit="contain"
          src={fotka}
          alt="Petr Půlpán a Roman Nguyen"
        />
        <P>– PUNG / Petr & Roman –</P>
      </Flex>
    </Container>
  );
};
