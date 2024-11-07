import getNavBar from "@/components/navbar/getNavBar"
import getFooter from "@/components/footer/getFooter"
import { getAllLanguages, useTranslation } from "@/i18n";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import CardGrid from '@/components/CardGrid';

export const generateStaticParams = () => {
  return getAllLanguages().map((lang) => ({ lang }));
}

export default function Page({ params: { lang } }) {
  const { t } = useTranslation(lang);

  const navbar = getNavBar(lang);
  const footer = getFooter(lang);

  const cardData = t('home.intro_cards')

  return (
    <div className="flex flex-col min-h-screen">
      {navbar}
      <main className="flex-grow flex flex-col">
        <section className="flex items-center justify-center min-h-screen relative overflow-hidden">
          <div className="container max-w-4xl z-10" style={{ marginLeft: 'calc(30% - 25vw)', marginRight: 'calc(30% - 10vw)', paddingLeft: '1rem', paddingRight: '1rem' }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin leading-tight text-left">
              {t('home.hero.1')} <span className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{t('home.hero.2')}</span>, <span className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{t('home.hero.3')}</span> <span className="font-bold text-orange-600">{t('home.hero.4')}</span> {t('home.hero.5')} <span className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{t('home.hero.6')}</span> {t('home.hero.7')} <span className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{t('home.hero.8')}</span> {t('home.hero.9')}
            </h1>
          </div>
          <div className="absolute -right-[-3%] bottom-[10%] w-[30vh] h-[30vh] bg-orange-600 transform rotate-[30deg] origin-bottom-right"></div>
        </section>
        
        <section className="py-24">
          <div className="container mx-auto px-8 sm:px-12 lg:px-16">
            <CardGrid cardData={cardData} />
          </div>
        </section>

        {/* <section className="py-24 bg-gray-100">
          <div className="container mx-auto px-8 sm:px-12 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <blockquote className="text-3xl font-light italic">
                  "Human rights are not a privilege conferred by government. They are every human being's entitlement by virtue of his humanity."
                  <footer className="text-xl mt-4">— Mother Teresa</footer>
                </blockquote>
              </div>
              <div className="lg:w-1/2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "Education", content: "Everyone has the right to education." },
                    { title: "Work", content: "Everyone has the right to work, to free choice of employment, to just and favorable conditions of work and to protection against unemployment." },
                    { title: "Rest", content: "Everyone has the right to rest and leisure, including reasonable limitation of working hours and periodic holidays with pay." }
                  ].map((card, index) => (
                    <Card key={index} className="border-l-0 border-orange-600 border-t-0 border-r-0 border-b-0 rounded-none shadow-none">
                      <CardHeader>
                        <CardTitle>{card.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{card.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      {footer}
    </div>
  );
}