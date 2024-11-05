import getNavBar from "@/components/navbar/getNavBar"
import getCalendar from "@/components/calendar/getCalendar"
import getFooter from "@/components/footer/getFooter"
import { getAllLanguages, useTranslation } from "@/i18n";

export const generateStaticParams = () => {
  return getAllLanguages().map((lang) => ({ lang }));
}

export default function Legal({ params: { lang } }) {
  const { t } = useTranslation(lang);

  const navbar = getNavBar(lang);
  const calendar = getCalendar('https://calendar.google.com/calendar/appointments/schedules/AcZssZ3z5yaG6m7gUrmlGtObocrCZD_rg8v1_oRuv6Ll2C1PPrnKe34Ud3qJAubl5niFZp6QxKtKdRg3?gv=true');
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
          <section>
            <p className="text-lg mb-4">
              {t('contact.calendar')}
            </p>
            {calendar}
          </section>
        </div>
      </main>
      {footer}
    </div>
  );
}