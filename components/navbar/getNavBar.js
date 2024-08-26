import { useTranslation } from '@/i18n';
import NavBar from './NavBar';

export default function getNavBar(lang) {
  const { t, tURL } = useTranslation(lang);

  const links = [
    { url: tURL('/info'), text: t('navbar.info') },
    { url: tURL('/contact'), text: t('navbar.contact') }
  ];

  return (<NavBar lang={lang} links={links} />);
};