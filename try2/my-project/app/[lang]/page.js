import Link from 'next/link';
import getNavBar from "@/components/navbar/getNavBar"
import getFooter from "@/components/footer/getFooter"
import { getAllLanguages, useTranslation } from "@/i18n";

export const generateStaticParams = () => {
  return getAllLanguages()
    .map((lang) => ({ params: { lang } }));
}

export default function Home({ params: { lang } }) {
  const { t, tURL} = useTranslation(lang);

  const navbar = getNavBar(lang);
  const footer = getFooter(lang);

  return (
    <div className="flex flex-col min-h-screen">
      {navbar}
      <main className="flex-grow flex items-center justify-center">
        <div className="container max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin leading-tight text-left">
            We craft <span className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">beautiful</span>, <span className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">intelligent</span> <span className="text-orange-600">software systems</span> with <span className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">love</span> and <span className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">care</span> that fit your needs
          </h1>
        </div>
      </main>
      {footer}
    </div>
  );
}