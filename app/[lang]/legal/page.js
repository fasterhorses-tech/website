import getNavBar from "@/components/navbar/getNavBar"
import getFooter from "@/components/footer/getFooter"
import { getAllLanguages, useTranslation } from "@/i18n";

export const generateStaticParams = () => {
  return getAllLanguages().map((lang) => ({ lang }));
}

export default function Legal({ params: { lang } }) {
  const { t } = useTranslation(lang);

  const navbar = getNavBar(lang);
  const footer = getFooter(lang);

  return (
    <div className="flex flex-col min-h-screen">
      {navbar}
      <main className="flex-grow flex items-center justify-center">
        <div className="container max-w-4xl mx-auto px-4 py-16">
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{t('legal.imprint.title')}</h2>
            <p className="text-lg">{t('legal.imprint.content')}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{t('legal.privacy.title')}</h2>
            <p className="text-lg">{t('legal.privacy.content')}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{t('legal.cookies.title')}</h2>
            <p className="text-lg">{t('legal.cookies.content')}</p>
          </section>
        </div>
      </main>
      {footer}
    </div>
  );
}
