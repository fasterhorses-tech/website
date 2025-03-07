const translations = {
  navbar: {
    contact: "Contact",
  },
  footer: {
    legal: "Legal",
  },
  language: {
    de: "DE",
    en: "EN",
  },
  home: {
    hero: [
      "We craft #[span.extra-bold beautiful], #[span.extra-bold intelligent]",
      "#[span.accent.bold software systems] with #[span.extra-bold expertise]",
      "and #[span.extra-bold care] that fit your needs.",
    ].join(" "),
    intro_cards: [
      {
        title: "What we do depends on you.",
        content: [
          "Our solutions are #[span.accent tailored to your needs].",
          "You have the processes - we have AI automations.",
          "You have the data - we have statistical analysis.",
          "You have the product idea - we innovate, together.",
        ].join(" "),
      },
      {
        title: "We hand-craft your solution.",
        content: [
          "High quality software requires a high level of #[span.accent artisanry], #[span.accent expertise] and #[span.accent care].",
          "That is our approach to creating intelligent software systems.",
          "Every module, every line of code is exactly as it should be.",
        ].join(" "),
      },
      {
        title: "We're small on purpose.",
        content: [
          "How can a tiny team build a complex software system?",
          "By combining decades of experience with the best AI tools available.",
          "You get the #[span.accent output of a 10 person team], without paying for the overhead.",
        ].join(" "),
      },
      {
        title: "Keep in touch with science.",
        content: [
          "Your business deserves the best technology available - seamlessly integrated.",
          "From #[span.accent machine learning] to #[span.accent generative AI] to modern web technologies.",
          "We are your link to the latest advancements.",
        ].join(" "),
      },
    ],
  },
  contact: {
    content: "Contact us at",
    email: "info@fasterhorses.tech",
    calendar: "Or schedule a meeting directly:",
  },
  legal: {
    imprint: {
      title: "Imprint",
      content: [
        "Operated by:",
        "",
        "&nbsp;&nbsp;&nbsp;&nbsp;Faster Horses Technologies SRL",
        "&nbsp;&nbsp;&nbsp;&nbsp;C. Bolliac 31, Ap. 1.",
        "&nbsp;&nbsp;&nbsp;&nbsp;300316 Timișoara, Romania",
        "",
        "&nbsp;&nbsp;&nbsp;&nbsp;EUID: ROONRCJ20240313450008",
        "&nbsp;&nbsp;&nbsp;&nbsp;Ident. Nr: RO 50703538",
        "",
        "&nbsp;&nbsp;&nbsp;&nbsp;Contact: <a href='mailto:info@fasterhorses.tech' className='text-orange-600 hover:underline'>info@fasterhorses.tech</a>",
      ].join("<br/>"),
    },
    privacy: {
      title: "Privacy",
      content:
        "We respect your privacy and ensure compliance with the General Data Protection Regulation (GDPR). Currently, we do not collect, process, or store personal data on this website. For more details, please contact us via the information provided in our contact section.",
    },
    cookies: {
      title: "Cookies",
      content: "No cookies are used.",
    },
    refunds: {
      title: "Refund and Dispute Policy",
      content: [
        "We are committed to delivering high-quality software development services",
        "that meet your project requirements. Before starting any project, we provide",
        "a detailed proposal outlining the scope of work, timeline, and pricing.",
        "Unless otherwise agreed, payment is structured in milestone-based installments.<br/><br/>",
        "In the event of any concerns, clients must report issues in writing within the contractually",
        "agreed timeframe after a project milestone delivery. We will review the concern and propose",
        "appropriate solutions, which may include corrections or modifications to ensure the project",
        "meets the originally agreed specifications. Refunds are not typically provided for projects in",
        "progress or completed work that meets the agreed-upon requirements. However, we are dedicated to",
        "client satisfaction and will work diligently to resolve any discrepancies.<br/><br/>",
        "For any disputes that cannot be resolved through direct communication, both parties agree",
        "to seek resolution through professional mediation. Our goal is to maintain transparency,",
        "quality, and mutual understanding throughout the development process.",
      ].join(" "),
    },
  },
};

export default translations;
