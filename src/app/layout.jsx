import "./globals.css";
import Nav from "./components/Nav";
import { Montserrat } from "next/font/google";
import Categories_list from "./components/Categories_list";
import Footer from "./components/Fotter";
import Providers from "./redux/Providers";
import { Toaster } from "react-hot-toast";

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
        <Providers>
          <Nav />
          <Categories_list />
          <div className="my-1">
            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{
                duration: 1000,
              }}
            />
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
