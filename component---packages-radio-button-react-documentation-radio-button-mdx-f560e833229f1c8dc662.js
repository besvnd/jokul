(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{bGYK:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("Eb4t"),r("Fdmb"),r("ZJc7");var n=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",r=crypto.getRandomValues(new Uint8Array(e));e--;){var n=63&r[e];t+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return t}},bxeP:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return m})),r.d(t,"default",(function(){return O}));r("abGl"),r("gZHo"),r("Fdmb"),r("Ir+3"),r("1c7q");var n=r("mXGw"),a=r.n(n),l=r("/FXl"),i=r("7XvJ"),o=(r("jr56"),r("8Jek")),s=r.n(o),d=r("bGYK"),p=function(e){var t=e.value,r=e.label,l=e.onChange,i=e.name,o=void 0===i?"":i,p=e.inline,u=void 0!==p&&p,v=e.checked,c=e.invalid,b=void 0!==c&&c,m=e.forceCompact,k=e.inverted,g=Object(n.useState)("jkl-radio-button-"+Object(d.a)(8))[0],f=s()("jkl-radio-button",{"jkl-radio-button--compact":m,"jkl-radio-button--inline":u,"jkl-radio-button--error":b,"jkl-radio-button--inverted":k});return a.a.createElement("div",{className:f},a.a.createElement("input",{id:g,className:"jkl-radio-button__input",type:"radio",name:o,value:t,onChange:l,checked:v}),a.a.createElement("label",{"data-testid":"jkl-radio-button__label-tag",htmlFor:g,className:"jkl-radio-button__label"},a.a.createElement("span",{"aria-hidden":!0,className:"jkl-radio-button__dot"}),a.a.createElement("span",{className:"jkl-radio-button__text"},r)))},u=r("XySe"),v=r("F5Dj"),c=function(e){var t=e.name,r=e.legend,n=e.choices,l=e.selectedValue,i=e.onChange,o=e.inline,s=void 0!==o&&o,d=e.helpLabel,c=e.errorLabel,b=e.variant,m=e.forceCompact,k=e.className,g=e.inverted;return a.a.createElement(u.a,{legend:r,helpLabel:d,errorLabel:c,variant:b,forceCompact:m,className:k},n.map(v.e).map((function(e){var r=e.label,n=e.value;return a.a.createElement(p,{key:n,name:t,value:n,label:r,inline:s,checked:n===l,onChange:i,invalid:!!c,forceCompact:m,inverted:g})})))},b=function(e){var t=e.boolValues,r=e.choiceValues,n=a.a.useState("Yes"),l=n[0],i=n[1],o=t&&t["Med feil"]?"Her er det noe feil":void 0,s=r&&r.Variant?r.Variant:"medium";return a.a.createElement(c,{legend:"Hvordan vil du bli kontaktet?",name:"likesradiobuttons",choices:["Jeg vil at dere skal ringe meg","Nei","Jeg vil at dere sender et brev til meg til min registrerte adresse fra folkeregisteret","Jeg vil at dere skal sende en e-post"],inline:t&&t.Inline,forceCompact:t&&t.Kompakt,selectedValue:l,onChange:function(e){return i(e.target.value)},helpLabel:"Hvis du trenger hjelp, kan du kontakte supporten vår",errorLabel:o,variant:s,inverted:t&&t.Invertert})};var m={},k=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},g=k("Ingress"),f=k("ComponentExample"),h={_frontmatter:m},j=i.a;function O(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["components"]);return Object(l.b)(j,Object.assign({},h,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)(g,{mdxType:"Ingress"},"Vi bruker radioknapper når vi vil at brukeren skal velge ett av flere alternativ. Bruk helst radioknapper for inntil fire alternativ. Hvis du trenger å gi brukeren flere muligheter enn det, er det ofte bedre med en nedtrekksliste."),Object(l.b)(f,{component:b,knobs:{boolProps:["Kompakt","Inline","Med feil","Invertert"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]},mdxType:"ComponentExample"}),Object(l.b)("p",null,"Over radioknappene setter vi inn en tydelig overskrift, som forteller hva det er brukeren skal velge mellom. I tillegg skal hver radioknapp ha en kort og tydelig ledetekst til høyre for knappen, som beskriver alternativet."),Object(l.b)("h2",null,"Bruk"),Object(l.b)("p",null,"En gruppe radioknapper kan enten settes opp under eller ved siden av hverandre. Det er mest brukervennlig å sette dem opp vertikalt."),Object(l.b)("p",null,"En av radioknappene bør alltid være valgt på forhånd. Det kan være det alternativet som de fleste vil velge, eller det som har minst følger for brukeren. I noen tilfeller kan det være viktig at brukeren selv velger, uten å bli påvirket av et forhåndsvalg. Da kan vi sette opp radioknapper uten forhåndsvalg. ",Object(l.b)("strong",{parentName:"p"},"Vis eksempler på det")),Object(l.b)("h2",null,"Tekst og validering"),Object(l.b)("p",null,"Bruk prinsippene for skjemadesign når du velger størrelse på overskriften til en gruppe radioknapper. Skriv en kort og tydelig overskrift, som forteller hva brukeren skal velge. Hvis det er behov for det, kan vi legge inn en hjelpetekst under gruppen, for å forklare mer."),Object(l.b)("p",null,"Hvis radioknappene ikke validerer, viser systemet en feilmelding som forklarer hva som er galt. Feilmeldingen erstatter en eventuell hjelpetekst, så den må eventuelt gjenta det viktigste fra hjelpeteksten."),Object(l.b)("p",null,"Eksempel fra helsevurdering:\n",Object(l.b)("strong",{parentName:"p"},"Hjelpetekst"),": ",Object(l.b)("em",{parentName:"p"},"Velg om du har hatt diagnosen de siste 5, 10 eller 15 årene"),". ",Object(l.b)("strong",{parentName:"p"},"Feilmelding"),": ",Object(l.b)("em",{parentName:"p"},"Du har ikke valgt hvor lenge du har hatt diagnosen"),"."))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-radio-button-react-documentation-radio-button-mdx-f560e833229f1c8dc662.js.map