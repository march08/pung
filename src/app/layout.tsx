import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@pung/lib/styled-components/registry";
import { GlobalStylesheet } from "@pung/lib/styled-components/GlobalStylesheet";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PUNG Airsoft Workshop",
  description: "Airsoftový servis – Petr Půlpán & Roman Nguyen",
  metadataBase: new URL("https://pung.cz"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStylesheet />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
