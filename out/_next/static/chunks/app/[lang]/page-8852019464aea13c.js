(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{4029:function(e,t,r){Promise.resolve().then(r.bind(r,2872)),Promise.resolve().then(r.bind(r,9990)),Promise.resolve().then(r.bind(r,2635))},2872:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(7437),a=r(2265),s=r(4839),o=r(6164);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.m6)((0,s.W)(t))}let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:i("rounded-lg border bg-card text-card-foreground shadow-sm",r),...a})});l.displayName="Card";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:i("flex flex-col space-y-1.5 p-6",r),...a})});c.displayName="CardHeader";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("h3",{ref:t,className:i("text-2xl font-semibold leading-none tracking-tight",r),...a})});d.displayName="CardTitle",a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("p",{ref:t,className:i("text-sm text-muted-foreground",r),...a})}).displayName="CardDescription";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:i("p-6 pt-0",r),...a})});u.displayName="CardContent",a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:i("flex items-center p-6 pt-0",r),...a})}).displayName="CardFooter";var f=e=>{let{className:t="",triggerRotation:r,size:s="24px"}=e,[o]=(0,a.useState)(()=>360*Math.random()),[i,l]=(0,a.useState)(0);return(0,a.useEffect)(()=>{r&&l(60*Math.random()-30)},[r]),(0,n.jsx)("div",{className:"bg-orange-600 transition-transform duration-300 ease-in-out ".concat(t),style:{transform:"rotate(".concat(o+i,"deg)"),width:"".concat(s),height:"".concat(s),minWidth:"".concat(s),minHeight:"".concat(s)}})};function h(e){let{cardData:t}=e;return(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16",children:t.map((e,t)=>{let[r,s]=(0,a.useState)(!1);return(0,n.jsxs)(l,{className:"p-4 border-l-0 border-orange-600 border-t-0 border-r-0 border-b-0 rounded-none shadow-none",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[(0,n.jsxs)(c,{className:"flex flex-row items-center gap-4",children:[(0,n.jsx)(f,{triggerRotation:r}),(0,n.jsx)(d,{children:e.title})]}),(0,n.jsx)(u,{children:(0,n.jsx)("p",{children:e.content})})]},t)})})}},9990:function(e,t,r){"use strict";r.d(t,{default:function(){return d}});var n=r(7437),a=r(7138),s=r(6463),o=r(5186),i=r(9512),l=r(4867);function c(){let{theme:e,setTheme:t}=(0,i.F)();return(0,n.jsx)("button",{onClick:()=>{t("dark"===e?"light":"dark")},className:"ml-4 p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 group","aria-label":"Toggle theme",children:(0,n.jsx)(l.aoh,{className:"w-4 h-4 group-hover:scale-x-[-1]"})})}function d(e){let{lang:t,languages:r,links:i}=e,l=RegExp("^/*".concat(t,"/*"),"g"),d=r.map(e=>{let{code:r,name:n}=e,{tURL:a}=(0,o.$G)(r);return{code:r,name:n,path:a((0,s.usePathname)().replace(l,"")),isCurrent:r===t}}).sort((e,t)=>e.name.localeCompare(t.name));return(0,n.jsx)("footer",{className:"container mx-auto px-4 fixed bottom-0 left-0 right-0 bg-gradient-to-b from-background/0 via-background/70 to-background/100 h-24 flex flex-col justify-end",children:(0,n.jsxs)("div",{className:"flex justify-between items-center text-sm pb-2",children:[(0,n.jsx)("div",{className:"flex space-x-4",children:i.map(e=>(0,n.jsx)(a.default,{href:e.url,className:"text-gray-600 hover:text-orange-600 dark:text-gray-400",children:e.text},e.url))}),(0,n.jsxs)("div",{className:"flex items-center text-gray-600 dark:text-gray-400",children:[d.map((e,t)=>{let{code:r,name:s,path:o,isCurrent:i}=e;return(0,n.jsxs)("div",{children:[t>0&&(0,n.jsx)("span",{className:"mx-1",children:"|"}),i?(0,n.jsx)("span",{className:"text-orange-600",children:s}):(0,n.jsx)(a.default,{href:o,className:"text-gray-600 hover:text-orange-600 dark:text-gray-400 ".concat(i?"font-bold":""),children:s})]},r)}),(0,n.jsx)(c,{})]})]})})}},2635:function(e,t,r){"use strict";r.d(t,{default:function(){return o}});var n=r(7437),a=r(7138),s=r(5186);function o(e){let{lang:t,links:r}=e,{tURL:o}=(0,s.$G)(t);return(0,n.jsx)("header",{className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-24 bg-gradient-to-b from-background/100 via-background/70 to-background/0",children:(0,n.jsx)("div",{className:"container mx-auto px-4 h-full",children:(0,n.jsxs)("nav",{className:"flex items-center justify-between h-16 absolute top-0 left-4 right-4",children:[(0,n.jsx)(a.default,{href:o("/"),className:"text-xl font-semibold leading-5 hover:text-orange-600 dark:text-white",children:(0,n.jsxs)("div",{children:["faster",(0,n.jsx)("span",{className:"text-orange-600",children:"horses"}),(0,n.jsx)("span",{className:"font-thin",children:".tech"})]})}),(0,n.jsx)("div",{className:"flex items-center space-x-6",children:r.map(e=>(0,n.jsx)(a.default,{href:e.url,className:"hover:text-orange-600 text-lg dark:text-gray-300 dark:hover:text-orange-500",children:e.text},e.url))})]})})})}},5186:function(e,t,r){"use strict";r.d(t,{$G:function(){return a}});let n={en:{navbar:{info:"Info",contact:"Contact"},footer:{legal:"Legal"},language:{de:"DE",en:"EN"},home:{hero:{1:"We craft",2:"beautiful",3:"intelligent",4:"software systems",5:"with",6:"expertise",7:"and",8:"care",9:"that fit your needs"}},contact:{content:"Contact us at",email:"info@fasterhorses.tech",calendar:"Or schedule a meeting directly:"},legal:{imprint:{title:"Imprint",content:"Operated by:<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;Faster Horses Technologies SRL<br/>&nbsp;&nbsp;&nbsp;&nbsp;C. Bolliac 31<br/>&nbsp;&nbsp;&nbsp;&nbsp;300316 Timișoara, Romania"},privacy:{title:"Privacy",content:"No personal data is processed."},cookies:{title:"Cookies",content:"No cookies are used."}}},de:{navbar:{info:"Info",contact:"Kontakt"},footer:{legal:"Rechtliches"},language:{de:"DE",en:"EN"},home:{hero:{1:"Wir entwickeln",2:"sch\xf6ne",3:"intelligente",4:"Softwaresysteme",5:"mit",6:"Expertise",7:"und",8:"Sorgfalt",9:"die Ihren Bed\xfcrfnissen entsprechen"}},contact:{content:"Kontaktieren Sie uns gern unter",email:"info@fasterhorses.tech",calendar:"Oder vereinbaren Sie direkt einen Termin:"},legal:{imprint:{title:"Impressum",content:"Betrieben von:<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;Faster Horses Technologies SRL<br/>&nbsp;&nbsp;&nbsp;&nbsp;C. Bolliac 31<br/>&nbsp;&nbsp;&nbsp;&nbsp;300316 Timișoara, Rum\xe4nien"},privacy:{title:"Datenschutz",content:"Es findet keine personenbezogene Datenverarbeitung statt."},cookies:{title:"Cookies",content:"Es werden keine Cookies eingesetzt."}}}};function a(e){return{t:(t,r)=>{let a=t.split(".").reduce((e,t)=>e&&e[t]||null,n[e])||t;try{return Mustache.render(a,r)}catch(e){return a}},tURL:t=>t.startsWith("/")?"/".concat(e).concat(t):"/".concat(e,"/").concat(t)}}}},function(e){e.O(0,[310,977,868,971,23,744],function(){return e(e.s=4029)}),_N_E=e.O()}]);