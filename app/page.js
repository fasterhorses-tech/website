import { getDefaultLanguage } from "@/i18n"

export default function Page() {
  const lang = getDefaultLanguage()
  return (<head><meta httpEquiv='Refresh' content={`0; url='/${lang}'`} /></head>)
};