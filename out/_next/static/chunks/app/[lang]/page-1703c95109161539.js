(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{2165:function(e,t,n){Promise.resolve().then(n.bind(n,2872)),Promise.resolve().then(n.bind(n,9990)),Promise.resolve().then(n.bind(n,2635))},2872:function(e,t,n){"use strict";n.d(t,{default:function(){return b}});var r=n(7437),a=n(2265),s=n(4839),o=n(6164);function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.m6)((0,s.W)(t))}let l=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:i("rounded-lg border bg-card text-card-foreground shadow-sm",n),...a})});l.displayName="Card";let c=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:i("flex flex-col space-y-1.5 p-6",n),...a})});c.displayName="CardHeader";let d=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("h3",{ref:t,className:i("text-2xl font-semibold leading-none tracking-tight",n),...a})});d.displayName="CardTitle",a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("p",{ref:t,className:i("text-sm text-muted-foreground",n),...a})}).displayName="CardDescription";let u=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:i("p-6 pt-0",n),...a})});u.displayName="CardContent",a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:i("flex items-center p-6 pt-0",n),...a})}).displayName="CardFooter";var h=e=>{let{className:t="",triggerRotation:n,size:s="24px"}=e,[o]=(0,a.useState)(()=>360*Math.random()),[i,l]=(0,a.useState)(0);return(0,a.useEffect)(()=>{n&&l(60*Math.random()-30)},[n]),(0,r.jsx)("div",{className:"bg-orange-600 transition-transform duration-300 ease-in-out ".concat(t),style:{transform:"rotate(".concat(o+i,"deg)"),width:"".concat(s),height:"".concat(s),minWidth:"".concat(s),minHeight:"".concat(s)}})},m=n(6431);function b(e){let{cardData:t}=e;return(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16",children:t.map((e,t)=>{let[n,s]=(0,a.useState)(!1);return(0,r.jsxs)(l,{className:"p-4 border-l-0 border-orange-600 border-t-0 border-r-0 border-b-0 rounded-none shadow-none",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[(0,r.jsxs)(c,{className:"flex flex-row items-center gap-4",children:[(0,r.jsx)(h,{triggerRotation:n}),(0,r.jsx)(d,{children:e.title})]}),(0,r.jsx)(u,{children:(0,r.jsx)(m.ZP,{children:"<p>"+e.content+"</p>"})})]},t)})})}},9990:function(e,t,n){"use strict";n.d(t,{default:function(){return d}});var r=n(7437),a=n(7138),s=n(6463),o=n(5186),i=n(9512),l=n(4867);function c(){let{theme:e,setTheme:t}=(0,i.F)();return(0,r.jsx)("button",{onClick:()=>{t("dark"===e?"light":"dark")},className:"ml-4 p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 group","aria-label":"Toggle theme",children:(0,r.jsx)(l.aoh,{className:"w-4 h-4 group-hover:scale-x-[-1]"})})}function d(e){let{lang:t,languages:n,links:i}=e,l=RegExp("^/*".concat(t,"/*"),"g"),d=n.map(e=>{let{code:n,name:r}=e,{tURL:a}=(0,o.$G)(n);return{code:n,name:r,path:a((0,s.usePathname)().replace(l,"")),isCurrent:n===t}}).sort((e,t)=>e.name.localeCompare(t.name));return(0,r.jsx)("footer",{className:"container mx-auto px-4 fixed bottom-0 left-0 right-0 bg-gradient-to-b from-background/0 via-background/70 to-background/100 h-24 flex flex-col justify-end",children:(0,r.jsxs)("div",{className:"flex justify-between items-center text-sm pb-2",children:[(0,r.jsx)("div",{className:"flex space-x-4",children:i.map(e=>(0,r.jsx)(a.default,{href:e.url,className:"text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-600",children:e.text},e.url))}),(0,r.jsxs)("div",{className:"flex items-center text-gray-600 dark:text-gray-400",children:[d.map((e,t)=>{let{code:n,name:s,path:o,isCurrent:i}=e;return(0,r.jsxs)("div",{children:[t>0&&(0,r.jsx)("span",{className:"mx-1",children:"|"}),i?(0,r.jsx)("span",{className:"text-orange-600",children:s}):(0,r.jsx)(a.default,{href:o,className:"text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-600 ".concat(i?"font-bold":""),children:s})]},n)}),(0,r.jsx)(c,{})]})]})})}},2635:function(e,t,n){"use strict";n.d(t,{default:function(){return o}});var r=n(7437),a=n(7138),s=n(5186);function o(e){let{lang:t,links:n}=e,{tURL:o}=(0,s.$G)(t);return(0,r.jsx)("header",{className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-24 bg-gradient-to-b from-background/100 via-background/70 to-background/0",children:(0,r.jsx)("div",{className:"container mx-auto px-4 h-full",children:(0,r.jsxs)("nav",{className:"flex items-center justify-between h-16 absolute top-0 left-4 right-4",children:[(0,r.jsx)(a.default,{href:o("/"),className:"text-xl font-semibold leading-5 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-600",children:(0,r.jsxs)("div",{children:["faster",(0,r.jsx)("span",{className:"text-orange-600",children:"horses"}),(0,r.jsx)("span",{className:"font-thin",children:".tech"})]})}),(0,r.jsx)("div",{className:"flex items-center space-x-6",children:n.map(e=>(0,r.jsx)(a.default,{href:e.url,className:"text-lg hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-600",children:e.text},e.url))})]})})})}},5186:function(e,t,n){"use strict";n.d(t,{$G:function(){return a}});let r={en:{navbar:{info:"Info",contact:"Contact"},footer:{legal:"Legal"},language:{de:"DE",en:"EN"},home:{hero:{1:"We craft",2:"beautiful",3:"intelligent",4:"software systems",5:"with",6:"expertise",7:"and",8:"care",9:"that fit your needs"},intro_cards:[{title:"What we do depends on you.",content:"Our solutions are <em>tailored to your needs</em>. You have the processes - we have AI automations. You have the data - we have statistical analysis. You have the product idea - we innovate, together."},{title:"We hand-craft your solution.",content:"High quality software requires a high level of <em>artisanry</em>, <em>expertise</em> and <em>care</em>. That is our approach to creating intelligent software systems. Every module, every line of code is exactly as it should be."},{title:"We're small on purpose.",content:"How can a tiny team build a complex software system? By combining decades of experience with the best AI tools available. You get the <em>output of a 10 person team</em>, without paying for the overhead."},{title:"Keep in touch with science.",content:"Your business deserves the best technology available - seamlessly integrated. From <em>machine learning</em> to <em>generative AI</em> to modern web technologies. We are your link to the latest advancements."}]},contact:{content:"Contact us at",email:"info@fasterhorses.tech",calendar:"Or schedule a meeting directly:"},legal:{imprint:{title:"Imprint",content:"Operated by:<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;Faster Horses Technologies SRL<br/>&nbsp;&nbsp;&nbsp;&nbsp;C. Bolliac 31<br/>&nbsp;&nbsp;&nbsp;&nbsp;300316 Timișoara, Romania<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;EUID: ROONRCJ20240313450008<br/>&nbsp;&nbsp;&nbsp;&nbsp;Ident. Nr: RO 50703538"},privacy:{title:"Privacy",content:"We respect your privacy and ensure compliance with the General Data Protection Regulation (GDPR). Currently, we do not collect, process, or store personal data on this website. For more details, please contact us via the information provided in our contact section."},cookies:{title:"Cookies",content:"No cookies are used."}}},de:{navbar:{info:"Info",contact:"Kontakt"},footer:{legal:"Rechtliches"},language:{de:"DE",en:"EN"},home:{hero:{1:"Wir entwickeln",2:"sch\xf6ne",3:"intelligente",4:"Softwaresysteme",5:"mit",6:"Expertise",7:"und",8:"Sorgfalt",9:"die Ihren Bed\xfcrfnissen entsprechen"},intro_cards:[{title:"Was wir tun, h\xe4ngt von Ihnen ab.",content:"Unsere L\xf6sungen sind <em>auf Ihre Bed\xfcrfnisse zugeschnitten</em>. Sie haben die Prozesse - wir haben AI-Automatisierungen. Sie haben die Daten - wir haben statistische Analysen. Sie haben die Produktidee - wir bringen Innovation."},{title:"Wir fertigen Ihre L\xf6sung von Hand.",content:"Software hoher Qualit\xe4t erfordert ein hohes Ma\xdf an <em>Handwerk</em>, <em>Erfahrung</em> und <em>Sorgfalt</em>. Genau das ist unser Ansatz bei der Entwicklung intelligenter Softwaresysteme. Jedes Systemmodul, jede Zeile Code ist genau so, wie sie sein soll."},{title:"Wir sind eine Boutique - mit Absicht.",content:"Wie entwickelt ein kleines Team ein komplexes Softwaresystem? Indem wir Jahrzehnte an Erfahrung mit den besten AI-Tools kombinieren. Das bedeutet <em>Produktivit\xe4t von 10 Personen</em>, ohne die entsprechenden Overhead-Kosten."},{title:"Gehen Sie Richtung Zukunft.",content:"Ihr Unternehmen sollte Zugang zu den besten Technologien haben - mit nahtloser Integration. Von <em>maschinellem Lernen</em> \xfcber <em>generativer KI</em> zu modernen Webframeworks. Wir machen es m\xf6glich."}]},contact:{content:"Kontaktieren Sie uns gern unter",email:"info@fasterhorses.tech",calendar:"Oder vereinbaren Sie direkt einen Termin:"},legal:{imprint:{title:"Impressum",content:"Betrieben von:<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;Faster Horses Technologies SRL<br/>&nbsp;&nbsp;&nbsp;&nbsp;C. Bolliac 31<br/>&nbsp;&nbsp;&nbsp;&nbsp;300316 Timișoara, Rum\xe4nien<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;EUID: ROONRCJ20240313450008<br/>&nbsp;&nbsp;&nbsp;&nbsp;Ident. Nr: RO 50703538"},privacy:{title:"Datenschutz",content:"Wir respektieren Ihre Privatsph\xe4re und stellen die Einhaltung der Datenschutz-Grundverordnung (DSGVO) sicher. Derzeit erheben, verarbeiten oder speichern wir keine personenbezogenen Daten auf dieser Website. F\xfcr weitere Informationen kontaktieren Sie uns bitte \xfcber die im Kontakt bereitgestellten Angaben."},cookies:{title:"Cookies",content:"Es werden keine Cookies eingesetzt."}}}};function a(e){return{t:(t,n)=>{let a=t.split(".").reduce((e,t)=>e&&e[t]||null,r[e])||t;try{return Mustache.render(a,n)}catch(e){return a}},tURL:t=>t.startsWith("/")?"/".concat(e).concat(t):"/".concat(e,"/").concat(t)}}}},function(e){e.O(0,[310,977,39,971,23,744],function(){return e(e.s=2165)}),_N_E=e.O()}]);