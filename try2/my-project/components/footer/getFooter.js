import { getAllLanguages, useTranslation } from '@/i18n';
import Footer from './Footer';

export default function getFooter(lang) {
  const { t, tURL } = useTranslation(lang);

  const links = [
    { url: tURL('/privacy'), text: t('footer.privacy') },
    { url: tURL('/imprint'), text: t('footer.imprint') }
  ];

  return (<Footer
    links={links}
    lang={lang}
    languages={getAllLanguages().map((lang) => ({ code: lang, name: t(`language.${lang}`) }))} />);
};