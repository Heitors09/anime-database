import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import AppWrapper from "./context/app-wrapper";
import Header from "./components/header/header";
import { Montserrat } from "next/font/google";

const poppins = Poppins({subsets:['latin'], weight: '500'})
const inter = Inter({subsets: ['latin']})
const montserrat = Montserrat({subsets: ['latin']})


export const metadata: Metadata = {
  icons: {
    icon: '/hard-drive.png',
  },
  title: "AnimeHub",
  description: "AnimeHub is a website that allows you to search for anime and get recommendations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AppWrapper>
          <div className=" w-full h-full">
            <Header/>
            <main>
              {children}
            </main>
          </div>  
        </AppWrapper>
      </body>
    </html>
  );
}
