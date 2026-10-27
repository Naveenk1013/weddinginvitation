import type { Metadata, Viewport } from "next";
import { serifDevanagari, sansDevanagari, serifLatin } from "./fonts";
import "./globals.css";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { MotionProvider } from "@/components/motion/MotionProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://rachna-udit-wedding.in"),
  title: "रचना × उदित | शुभ विवाह सप्रेम आमंत्रण",
  description:
    "॥ श्री गणेशाय नमः ॥ रचना एवं उदित के शुभ विवाह उत्सव का डिजिटल सप्रेम आमंत्रण। शुभ तिलक: 25 नवंबर 2026, शुभ विवाह: 2 दिसंबर 2026।",
  keywords: ["रचना", "उदित", "शुभ विवाह", "शुभ तिलक", "Wedding Invitation", "Rachna", "Udit"],
  authors: [{ name: "Family of Rachna & Udit" }],
  openGraph: {
    title: "रचना × उदित | शुभ विवाह सप्रेम आमंत्रण",
    description: "॥ श्री गणेशाय नमः ॥ 25 नवंबर एवं 2 दिसंबर 2026। सप्रेम पधारें।",
    locale: "hi_IN",
    alternateLocale: ["en_IN"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "रचना × उदित | शुभ विवाह सप्रेम आमंत्रण",
    description: "॥ श्री गणेशाय नमः ॥ 25 नवंबर एवं 2 दिसंबर 2026।",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🪷</text></svg>",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FFF8ED",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="hi-IN"
      className={`${serifDevanagari.variable} ${sansDevanagari.variable} ${serifLatin.variable}`}
      suppressHydrationWarning
    >
      <body>
        <a href="#main-invitation" className="skip-link">
          सामग्री पर जाएँ / Skip to main content
        </a>
        <LocaleProvider>
          <MotionProvider>
            {children}
          </MotionProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
