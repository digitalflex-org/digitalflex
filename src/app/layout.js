import { Geist, Geist_Mono, Work_Sans, Inter, Montserrat, Poppins, Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { AuthProvider } from "@/contexts/authContext";


//section headers h4
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
});


//headings h2/h3
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const inter = Inter({
  subsets: ['latin'],
  variable: "--font-inter",
})

const workSans = Work_Sans({
  subsets: ['latin'],
})
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
      <body className={geistSans.className} >
        <Nav />
        <AuthProvider>
          {children}
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
