import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://www.blueskypainter.co.nz";
const title = "Blue Sky Painter | Professional Painters in Auckland";
const description =
  "Blue Sky Painter provides professional interior and exterior painting for homes and businesses across Auckland. Request a free, no-obligation quote today.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "painters Auckland",
    "house painting Auckland",
    "interior painting",
    "exterior painting",
    "commercial painting Auckland",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Blue Sky Painter",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "/images/hero/paintbrush.png",
        width: 1400,
        height: 1100,
        alt: "Paint rollers and freshly painted colour swatches in soft sky blue and clay tones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero/paintbrush.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NZ" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-navy">
        {children}
      </body>
    </html>
  );
}
