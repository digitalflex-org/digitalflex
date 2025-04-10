import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav.jsx";
import Footer from "@/components/footer.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Digital Flex",
  authors: [{ name: "Digital Flex", url: "https://www.digitalflex.org" }],
  keywords: [
    "Digital Flex",
    "digital marketing",
    "Google Business Profile",
    "SEO",
    "online visibility",
    "business growth",
    "website development",
    "social media marketing",
    "content creation",
  ],
  description: "Digital Flex is a leading digital marketing agency specializing in Google Business Profile management and innovative digital marketing strategies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
