import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manage shopify at ease",
  description: "this is a tool that will help you to manage your shopify store at ease with no stress of any, from mobile app to web app you have everything under control",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
