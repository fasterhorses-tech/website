import { Josefin_Sans } from 'next/font/google'
import "./globals.css";

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin-sans',
})

export const metadata = {
  title: "The Good Software Company",
  description: "We craft beautiful, intelligent software systems with love and care that fit your needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={josefinSans.variable}>
      <body>{children}</body>
    </html>
  );
}