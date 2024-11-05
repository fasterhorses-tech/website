import getNavBar from "@/components/navbar/getNavBar"
import getFooter from "@/components/footer/getFooter"
import { getAllLanguages, useTranslation } from "@/i18n";
import useDarkMode from "@/hooks/useDarkMode";

export const generateStaticParams = () => {
  return getAllLanguages().map((lang) => ({ lang }));
}

export default function Legal({ params: { lang } }) {
  const { t } = useTranslation(lang);

  const navbar = getNavBar(lang);
  const footer = getFooter(lang);

  console.log('wtf', useDarkMode);
  // const isDarkMode = useDarkMode();
  const isDarkMode = true;

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
            {/* Google Calendar Appointment Scheduling begin */}
            <p className="text-lg mb-4">
              {t('contact.calendar')}
            </p>
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3z5yaG6m7gUrmlGtObocrCZD_rg8v1_oRuv6Ll2C1PPrnKe34Ud3qJAubl5niFZp6QxKtKdRg3?gv=true"
              style={{
                border: '1px solid var(--orange-600)',
                borderRadius: '10px',
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
                backgroundColor: 'white',
                filter:isDarkMode ? 'invert(90%)' : 'none', 
              }}
              width="100%"
              height="600"
              frameBorder="0"
            ></iframe>
            {/* end Google Calendar Appointment Scheduling */}
          </section>
        </div>
      </main>
      {footer}
    </div>
  );
}