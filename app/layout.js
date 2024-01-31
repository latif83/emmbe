import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EMMBE Design and Construction Enterprise | Quality Construction Services in Ghana ",
  description: "EMMBE Design and Construction Enterprise, a merger of Mensco Construction Company, brings over 8 years of experience to Ghana's construction industry. Specializing in Architectural and Structural Drawings, Project Estimation, Building and Road Construction, and more. Our mission is to set high standards by delivering top-quality projects within deadlines, prioritizing client satisfaction.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
