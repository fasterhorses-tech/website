import "./globals.css";

export const metadata = {
  title: "The Good Software Company",
  description: "We craft beautiful, intelligent software systems with love and care that fit your needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}