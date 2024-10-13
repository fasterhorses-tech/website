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
        <div className="container max-w-4xl mx-auto px-4">
          <section>
            <p className="text-lg">
              {t('contact.content')}{' '}
              <span className="text-lg">
                <a href={`mailto:${t('contact.email')}`} className="text-orange-600 hover:underline">
                  {t('contact.email')}
                </a>
              </span>
            </p>
          </section>
        </div>
      </main>
      {footer}
    </div>
  );
}