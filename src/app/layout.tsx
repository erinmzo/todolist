import QueryProvider from "@/providers/QueryProvider";
import type { Metadata } from "next";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "혼자살때",
  description: "설레이는 첫 자취를 시작한 자취생의 걱정을 덜어주는 커뮤니티 웹서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
