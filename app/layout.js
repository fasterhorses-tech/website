import "./globals.css";
import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: "Faster Horses Technologies",
  description: "We craft beautiful, intelligent software systems with expertise and care that fit your needs",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}