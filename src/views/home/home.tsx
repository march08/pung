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
import { ServiceCard } from "./components/ServiceCard";
import { H3, P, Text, TextContainer } from "@pung/modules/ui/components/Text";
import { Ul } from "@pung/modules/ui/components/Ul/Ul";

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
  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
`;

const ServicesSection = styled(Container)`
  background: var(--bg-secondary);
  padding-top: max(7dvh, 4rem);
  padding-bottom: max(7dvh, 4rem);

  @media screen and (max-width: 768px) {
    padding: 0;
  }
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

const PAbout = styled.p`
  color: white;
  opacity: 0.8;
  letter-spacing: 0.05em;
  max-width: 640px;
  line-height: 1.7;
  text-align: center;
  font-weight: 400;
  font-size: 1rem;
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

const ServicesContainer = styled(Flex)`
  max-width: 1024px;
  width: 100%;
  gap: 2rem;
  & > * {
    width: 100%;
    flex-grow: 1;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const AboutSection = styled.section`
  padding: 2rem 2rem 20dvh 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const DashDivider = styled.div`
  width: max-content;
  color: white;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-top: 2rem;
  font-weight: 600;
  &::before,
  &:after {
    height: 1px;
    width: 70px;
    background: white;
    opacity: 0.5;
    content: "";
    position: absolute;
    top: 50%;
  }

  &:before {
    right: calc(100% + 1rem);
  }
  &:after {
    left: calc(100% + 1rem);
  }
`;

export const HomePage = () => {
  return (
    <>
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
          <Button
            style={{ minWidth: 220 }}
            as={LinkExternal}
            $hoverContent="@pung_airsoft"
            href={IG_HREF}
          >
            <BiLogoInstagramAlt />
            Naše práce
          </Button>
          <Button style={{ minWidth: 220 }} as={LinkExternal} href={MAIL_HREF}>
            <MdAlternateEmail />
            Napiš nám
          </Button>
        </Flex>
      </Container>
      <ServicesSection>
        <DashDivider>Nabízíme</DashDivider>
        <ServicesContainer>
          <ServiceCard
            style={{ background: "#5d4f3d" }}
            title={
              <>
                Kompletní <em>upgrade</em>
              </>
            }
          >
            <P>
              Potřebuješ nový pocit ze střílení? Okamžitou reakci na spoušť,
              brutální kadenci nebo výkon, se kterým na každe akci trefíš
              soupeře dřív, než se k tobě dostane? Doporučíme ti upgrade
              komponent, který ti bude vyhovovat a dorazí ti zbraň, proti které
              nebudeme chtít hrát ani my.
            </P>
            <TextContainer>
              <H3>V rámci upgradu provádíme</H3>
              <Ul>
                <li>
                  Dosažení požadovaného výkonu, ať už cílíš na 1.7J, 2.5J nebo
                  30 ran za sekundu.
                </li>
                <li>
                  Usazení a promazání vnitřních dílů vazelínami k tomu určenými.
                </li>
                <li>
                  Usazení ložišek, perfektní vypodložení kol pro hladší a tišší
                  chod a delší životnost dílů, korekce AOE a cyklu.
                </li>
                <li>
                  Dosazení vzduchotechniky mechaboxu, které zlepší efektivity
                  dílů pro dosažení cíleného a stabilního výkonu při použití
                  adekvátní pružiny.
                </li>
                <li>
                  Nainstalování hlavně a hop gumičky, perfektní zatěsnění a
                  správné dotlačení hop komory k mechaboxu k zamezení kolísání
                  výkonu.
                </li>
                <li>
                  Vyrovnání osy mechaboxu a komory, aby kuličky lítaly tam, kam
                  mají - rovně, pokud nefouká :)
                </li>
                <li>Instalace procesorové jednotky.</li>
              </Ul>
            </TextContainer>
          </ServiceCard>
          <ServiceCard
            title={
              <>
                Kompletní <em>Servis</em>
              </>
            }
          >
            <P>
              Kompletní servis je určen nejen pro zbraně, které již za sebou
              něco mají, ale také pro úplně nové. V rámci servisu zkontrolujeme,
              vyčistíme, promazáme a případně upravíme zbraň tak, aby byla v co
              nejlepším stavu a zajistila se co nejdelší životnost vnitřních
              dílů. V rámci servisu můžeme také zbraň částečně upgradovat, aby
              byla co nejvýkonnější a nejpřesnější v daném rozpočtu.
            </P>
            <TextContainer>
              <H3>V rámci servisu provádíme</H3>
              <Ul>
                <li>
                  Kompletní vyčištění od usazenin, nekvalitního maziva a jiného
                  bordelu.
                </li>
                <li>
                  Promazání vnitřních dílů kvalitními vazelínami s ruzným
                  určením, ať už je to vazelína na kola, těsnění, apod.
                </li>
                <li>
                  Přetěsnění vzduchotechniky včetně hop komory, které zlepší
                  efektivity dílů pro dosažení lepšího a stabilnějšího výkonu.
                </li>
                <li>
                  Perfektní vypodložení kol pro hladší chod a delší životnost
                  dílů, korekce AOE, korekce cyklu.
                </li>
                <li>Případná výměna opotřebených dílů.</li>
              </Ul>
            </TextContainer>
          </ServiceCard>
        </ServicesContainer>
        <div />
      </ServicesSection>

      <AboutSection>
        <DashDivider>Kdo jsme</DashDivider>
        <Flex direction="column" gap="elementsContainer" alignItems="center">
          <PAbout>
            Jsme dvojka nadšenců, co začala hrát airsoft dobrých patnáct let
            zpátky. Občás nás můžeš najít na Fénixu, akcích od Dynamite airsoft,
            na Profouskovi nebo na akcích v okolí Prahy :). Jako každý jsme
            chtěli mít co nejpřesnější, nejvýkonější, nejkonzistentnější,
            nejrychlejší, ... prostě nej nej nej airsoftku co jde postavit. A za
            ty roky jsme jich rozebrali nespočet. Zkoušíme testovat díly
            nejrůznějších výrobců, necháváme si posílat specialitky ze zahraničí
            a už víme co funguje a co ne. Ale samozřejmě, neusínáme na vavřínech
            a jakoukoliv novinku objednáváme a testujeme!
          </PAbout>
          <PAbout>
            A co nabízíme? Základní servis, údržbu airsoftek až po plný upgrade.
            Chceš přesně 1.7J, 2.5J? Co takhle 30 ran za sekundu? Něco se
            poškodilo nebo máš prostě vymáčknout ze své zbraně trošku víc? Dej
            vědět! Napiš nám na{" "}
            <LinkExternal href={MAIL_HREF}>email</LinkExternal> nebo rovnou na
            instagram <LinkExternal href={IG_HREF}>@pung_airsoft</LinkExternal>,
            kde najdeš i ukázky práce, zajímavosti z testování, naše doporučení
            apod.
          </PAbout>
          <PAbout>
            Stavíme zbraně, protože nás to baví a chceme, aby tu radost z dobře
            vyladěné sestavy měli i ostatní. Dostaneš od nás plný report. Pokud
            by něco bylo v nepořádku (například ulomené zuby na kolech), dáme ti
            hned vědět a poradíme vhodné řešení v případě, že by bylo potřeba
            měnit rozpočet. Co je ale podle nás důležitý - stavíme zbraně jako
            bychom si je stavěli sami pro sebe. Aby perfektně střílela,
            vydržela, hrálo se s ní jedna radost a aby to nebyla výmluva, když
            se prohrává :D. Ať už máš jakýkoliv rozpočet, napiš a vymyslíme
            nejlepší řešení. A kdyby cokoliv, furt máš u nás záruku.
          </PAbout>
        </Flex>
        <Flex
          direction="column"
          gap="elementsContainer"
          justifyContent="center"
        >
          <Photo
            width={300}
            height={300}
            objectFit="contain"
            src={fotka}
            alt="Petr Půlpán a Roman Nguyen"
          />
          <PAbout>– PUNG / Petr & Roman –</PAbout>
        </Flex>
      </AboutSection>
    </>
  );
};
