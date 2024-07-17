import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "خانه",
  description: "تسک منظومه نگاران",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={`${inter.className} overflow-x-hidden`} dir="rtl">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
