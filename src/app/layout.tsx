import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer/Footer";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <main>
            <NavBar />
            <div className="min-h-screen basis-full overflow-scroll flex flex-start">
              {children}
            </div>
            <Footer />
          </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
