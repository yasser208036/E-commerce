import "./globals.css";
import Nav from "./components/Nav";
import { Montserrat } from "next/font/google";
import Categories_list from "./components/Categories_list";
import Footer from "./components/Fotter";

const bodyFont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Online Shop",
  description: "Generated by create next app",
  icons: {
    icon: "./shopping-bag.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`relative bg-white md:bg-slate-200 ${bodyFont.className}`}
      >
        <Nav />
        <Categories_list />
        <div className="h-[calc(100vh-128px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
