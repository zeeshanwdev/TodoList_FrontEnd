import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/sessionWrapper.js";
import Script from "next/script";  // Import Script from Next.js

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Todo APP",
  description: "Created By Muhammad Zeeshan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />

        <div className="min-h-[66vh] ">            
          <div className="absolute top-0 -z-10 h-full w-full bg-white">
            <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
          </div>
          
          {/* LordIcon Script using Next.js Script component */}
          <Script src="https://cdn.lordicon.com/lordicon.js" strategy="afterInteractive" />

          {children}
        </div>

        <Footer/>
      </body>
      </SessionWrapper>
    </html>
  );
}
