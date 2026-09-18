import type { Metadata, Viewport } from "next";
import { Jost, Marcellus, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://planwithpinpoint.com"),
  title:
    "Pinpoint Financial — You don't need life insurance. You need what this does.",
  description:
    "Phil Isan designs properly structured, max-funded Indexed Universal Life policies for people with serious money: tax-advantaged growth, access to your money while it keeps growing, and a floor under every down year. No fee to you, ever.",
  openGraph: {
    title: "Pinpoint Financial",
    description:
      "Serious money, growing tax-advantaged, that you can still use — and that doesn't go down when the market does.",
    url: "https://planwithpinpoint.com",
    siteName: "Pinpoint Financial",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#082419",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${jost.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
