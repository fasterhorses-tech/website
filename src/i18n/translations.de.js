const translations = {
  navbar: {
    contact: "Kontakt",
  },
  footer: {
    legal: "Rechtliches",
  },
  language: {
    de: "DE",
    en: "EN",
  },
  home: {
    hero: [
      "Wir entwickeln #[span.bold schöne], #[span.bold intelligente]",
      "#[span.accent Softwaresysteme] mit #[span.bold Expertise]",
      "und #[span.bold Sorgfalt] die Ihren Bedürfnissen entsprechen",
    ].join(" "),
    intro_cards: [
      {
        title: "Was wir tun, hängt von Ihnen ab.",
        content: [
          "Unsere Lösungen sind #[span.accent auf Ihre Bedürfnisse zugeschnitten].",
          "Sie haben die Prozesse - wir haben AI-Automatisierungen.",
          "Sie haben die Daten - wir haben statistische Analysen.",
          "Sie haben die Produktidee - wir bringen Innovation.",
        ].join(" "),
      },
      {
        title: "Wir fertigen Ihre Lösung von Hand.",
        content: [
          "Software hoher Qualität erfordert ein hohes Maß an #[span.accent Handwerk],",
          "#[span.accent Erfahrung] und #[span.accent Sorgfalt].",
          "Genau das ist unser Ansatz bei der Entwicklung intelligenter Softwaresysteme.",
          "Jedes Systemmodul, jede Zeile Code ist genau so, wie sie sein soll.",
        ].join(" "),
      },
      {
        title: "Wir sind eine Boutique - mit Absicht.",
        content: [
          "Wie entwickelt ein kleines Team ein komplexes Softwaresystem?",
          "Indem wir Jahrzehnte an Erfahrung mit den besten AI-Tools kombinieren.",
          "Das bedeutet #[span.accent Produktivität von 10 Personen],",
          "ohne die entsprechenden Overhead-Kosten.",
        ].join(" "),
      },
      {
        title: "Gehen Sie Richtung Zukunft.",
        content: [
          "Ihr Unternehmen sollte Zugang zu den besten Technologien haben - mit nahtloser Integration.",
          "Von #[span.accent maschinellem Lernen] über #[span.accent generativer KI] zu modernen Webframeworks.",
          "Wir machen es möglich.",
        ].join(" "),
      },
    ],
  },
  contact: {
    content: "Kontaktieren Sie uns gern unter",
    email: "info@fasterhorses.tech",
    calendar: "Oder vereinbaren Sie direkt einen Termin:",
  },
  legal: {
    imprint: {
      title: "Impressum",
      content: [
        "Betrieben von:",
        "",
        "&nbsp;&nbsp;&nbsp;&nbsp;Faster Horses Technologies SRL",
        "&nbsp;&nbsp;&nbsp;&nbsp;C. Bolliac 31, Ap. 1.",
        "&nbsp;&nbsp;&nbsp;&nbsp;300316 Timișoara, Rumänien",
        "",
        "&nbsp;&nbsp;&nbsp;&nbsp;EUID: ROONRCJ20240313450008",
        "&nbsp;&nbsp;&nbsp;&nbsp;Ident. Nr: RO 50703538",
        "",
        "&nbsp;&nbsp;&nbsp;&nbsp;Kontakt: <a href='mailto:info@fasterhorses.tech' className='text-orange-600 hover:underline'>info@fasterhorses.tech</a>",
      ].join("<br/>"),
    },
    privacy: {
      title: "Datenschutz",
      content:
        "Wir respektieren Ihre Privatsphäre und stellen die Einhaltung der Datenschutz-Grundverordnung (DSGVO) sicher. Derzeit erheben, verarbeiten oder speichern wir keine personenbezogenen Daten auf dieser Website. Für weitere Informationen kontaktieren Sie uns bitte über die im Kontakt bereitgestellten Angaben.",
    },
    cookies: {
      title: "Cookies",
      content: "Es werden keine Cookies eingesetzt.",
    },
    refunds: {
      title: "Rückerstattung und Streitbeilegung",
      content: [
        "Wir verpflichten uns zur Bereitstellung hochwertiger Softwareentwicklungsdienstleistungen,",
        "die Ihren Projektanforderungen entsprechen. Vor Projektbeginn erstellen wir",
        "einen detaillierten Vorschlag, der den Arbeitsumfang, Zeitplan und die Preisgestaltung umfasst.",
        "Sofern nicht anders vereinbart, erfolgt die Zahlung in meilensteinbasierten Raten.<br/><br/>",
        "Auftretende Beschwerden können Kunden innerhalb der vertraglich vereinbarten",
        "Frist nach Lieferung eines Projektmeilensteins schriftlich melden. Wir prüfen das Anliegen und schlagen",
        "geeignete Lösungen vor, die Korrekturen oder Änderungen umfassen können, um sicherzustellen, dass das Projekt",
        "den ursprünglich vereinbarten Spezifikationen entspricht. Rückerstattungen werden in der Regel nicht für laufende Projekte",
        "oder abgeschlossene Arbeiten gewährt, die den vereinbarten Anforderungen entsprechen. Wir sind jedoch der",
        "Kundenzufriedenheit verpflichtet und werden uns bemühen, etwaige Unstimmigkeiten zu beheben.<br/><br/>",
        "Bei Streitigkeiten, die nicht durch direkte Kommunikation gelöst werden können, stimmen beide Parteien zu,",
        "eine Lösung durch professionelle Mediation anzustreben. Unser Ziel ist es, während des gesamten Entwicklungsprozesses",
        "Transparenz, Qualität und gegenseitiges Verständnis zu gewährleisten.",
      ].join(" "),
    },
  },
};

export default translations;
