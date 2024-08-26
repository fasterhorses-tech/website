import { getAllLanguages, useTranslation } from '@/i18n';
import Footer from './Footer';

export default function getFooter(lang) {
  const { t, tURL } = useTranslation(lang);

  const links = [
    { url: tURL('/legal'), text: t('footer.legal') }
  ];

  return (<Footer
    links={links}
    lang={lang}
    languages={getAllLanguages().map((lang) => ({ code: lang, name: t(`language.${lang}`) }))} />);
};