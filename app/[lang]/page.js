import getNavBar from "@/components/navbar/getNavBar"
import getFooter from "@/components/footer/getFooter"
import { getAllLanguages, useTranslation } from "@/i18n";

export const generateStaticParams = () => {
  return getAllLanguages()
    .map((lang) => ({ params: { lang } }));
}

export default function Page({ params: { lang } }) {
  const { t } = useTranslation(lang);

  const navbar = getNavBar(lang);
  const footer = getFooter(lang);

  return (
    <div className="flex flex-col min-h-screen">
      {navbar}
      <main className="flex-grow flex items-center justify-center">
        <div className="container max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin leading-tight text-left">
            {t('home.hero.1')} <span className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{t('home.hero.2')}</span>, <span className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{t('home.hero.3')}</span> <span className="font-bold text-orange-600">{t('home.hero.4')}</span> {t('home.hero.5')} <span className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{t('home.hero.6')}</span> {t('home.hero.7')} <span className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{t('home.hero.8')}</span> {t('home.hero.9')}
          </h1>
        </div>
      </main>
      {footer}
    </div>
  );
}