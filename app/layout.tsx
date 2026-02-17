
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./Components/Home/Navbar/ResponsiveNav";


// Roboto font
const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

// Page metadata
export const metadata: Metadata = {
  title: "SureTrust App",
  description: "Banking made simple and secure with SureTrust App",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased bg-gray-50 text-gray-900`}>
        {/* Navbar (client component) */}
        <ResponsiveNav/> 

        {/* Main page content */}
        <main className="min-h-screen px-4 md:px-8 lg:px-16">
          {children}
        </main>
      </body>
    </html>
  );
}