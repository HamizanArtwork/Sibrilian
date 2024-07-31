import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SI BRILIAN",
  description: "Developed by Hamizan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Analytics/>
        <Footer/>
        </body>
    </html>
  );
}
