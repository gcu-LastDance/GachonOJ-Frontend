import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@providers/theme-provider";
import ReactQueryClient from "@/lib/ReactQueryClient";
import { useRouter } from "next/router";

export const metadata: Metadata = {
  title: "GachonOJ",
  description: "GachonOJ is an online judge system for Gachon University.",
  icons: {
    icon: "/GCOJ.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryClient>{children}</ReactQueryClient>
        </ThemeProvider>
      </body>
    </html>
  );
}
