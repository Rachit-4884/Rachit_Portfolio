import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rachit H Maniar | Technical Product Owner & Program Manager",
  description:
    "Technical Product Owner & Program Manager with 5.5+ years leading analytics, AI, and connected vehicle platforms across Fortune 200 organizations.",
  keywords: [
    "Product Owner",
    "Program Manager",
    "Technical Product Management",
    "Analytics",
    "AI",
    "ML",
    "Enterprise",
    "PMP",
    "SAFe",
    "CSPO",
  ],
  authors: [{ name: "Rachit H Maniar" }],
  openGraph: {
    title: "Rachit H Maniar | Technical Product Owner & Program Manager",
    description:
      "Driving Enterprise Products from Strategy to Scalable Impact",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rachit H Maniar | Technical Product Owner & Program Manager",
    description:
      "Driving Enterprise Products from Strategy to Scalable Impact",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
