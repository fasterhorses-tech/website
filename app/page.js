import { getDefaultLanguage } from "@/i18n"

export default function Page() {
  const lang = getDefaultLanguage()
  return (
    <head>
      <meta httpEquiv='cache-control' content='no-cache' />
      <meta httpEquiv='expires' content='0' />
      <meta httpEquiv='pragma' content='no-cache' />
      <meta httpEquiv='Refresh' content={`0; url='/${lang}'`} />
    </head>
  )
};