(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+3ca":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return f}));n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("1c7q");var r=n("mXGw"),a=n.n(r),l=n("/FXl"),o=n("7XvJ"),i=(n("jr56"),n("8Jek")),s=n.n(i),c=n("bGYK");function k(e){var t=e.children,n=e.name,l=e.value,o=e.checked,i=e.invalid,k=e.onChange,m=e.className,b=e.inline,d=void 0!==b&&b,v=e.forceCompact,u=e.inverted,p=s()("jkl-checkbox",m,{"jkl-checkbox--compact":v,"jkl-checkbox--inline":d,"jkl-checkbox--error":i,"jkl-checkbox--inverted":u}),g=Object(r.useState)("jkl-checkbox-"+Object(c.a)(8))[0];return a.a.createElement("div",{className:p},a.a.createElement("input",{className:"jkl-checkbox__input","data-testid":"jkl-checkbox-input","aria-invalid":i,checked:o,type:"checkbox",name:n,value:l,onChange:k,id:g}),a.a.createElement("label",{htmlFor:g,className:"jkl-checkbox__label"},a.a.createElement("span",{className:"jkl-checkbox__check-mark"}),a.a.createElement("span",{className:"jkl-checkbox__check-text"},t)))}var m=function(e){var t=e.boolValues,n=a.a.useState(!1),r=n[0],l=n[1],o=a.a.useState(!1),i=o[0],s=o[1];return a.a.createElement("div",null,a.a.createElement(k,{name:"checklist",value:"checkbox",checked:r,invalid:t&&t["Med feil"],inverted:t&&t.Invertert,forceCompact:t&&t.Kompakt,onChange:function(){return l(!r)}},"Jeg vil bli kontaktet via telefon, i tillegg til at jeg vil motta brev på posten"),a.a.createElement(k,{name:"checklist",value:"checkbox2",checked:i,invalid:t&&t["Med feil"],inverted:t&&t.Invertert,forceCompact:t&&t.Kompakt,onChange:function(){return s(!i)}},"Jeg vil bli kontaktet via epost"))};var b={},d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},v=d("Ingress"),u=d("ComponentExample"),p={_frontmatter:b},g=o.a;function f(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(l.b)(g,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(v,{mdxType:"Ingress"},'Når en avmerkingsboks står alene, er det gjerne for å bekrefte noe, for eksempel: "Jeg bekrefter at opplysningene jeg har gitt er riktige". Vi bruker flere avmerkingsbokser sammen når vi vil gi brukerne en liste med valg, der de kan velge ett eller flere alternativer.'),Object(l.b)(u,{component:m,knobs:{boolProps:["Kompakt","Med feil","Invertert"]},mdxType:"ComponentExample"}),Object(l.b)("h2",null,"Bruk"),Object(l.b)("p",null,"En gruppe avmerkingsbokser må ha en god overskrift, og ledeteksten til hver avmerkingsboks må beskrive alternativet. En avmerkingsboks som står alene trenger ikke noen overskrift, så lenge ledeteksten er god og beskrivende."),Object(l.b)("p",null,"Du kan sette boksene under eller etter hverandre, men vi anbefaler at du plasserer dem under hverandre. Standard status for avmerkingsbokser er ",Object(l.b)("em",{parentName:"p"},"ikke valgt"),"."),Object(l.b)("h2",null,"Tekst og validering"),Object(l.b)("p",null,"Velg størrelse på overskriften til en gruppe avmerkingsbokser etter prinsippene for skjemadesign. Ha en kort og tydelig overskrift, som beskriver hva brukeren skal velge. Hvis du trenger å gi mer forklaring, kan du sette en hjelpetekst under gruppen."),Object(l.b)("p",null,"Hvis avmerkingsboksene ikke validerer, vises det en feilmelding som forklarer hva som er galt. Denne feilmeldingen erstatter en eventuell hjelpetekst du har der fra før, og bør formuleres slik at brukeren både får hjelp og får vite hva som er feil."),Object(l.b)("p",null,'Eksempel:\nHjelpetekst: "Oppgi fødselsnummeret ditt, 11 siffer". Feilmelding: "Du må oppgi fødselsnummeret ditt, 11 siffer".'))}f.isMDXComponent=!0},bGYK:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("Eb4t"),n("Fdmb"),n("ZJc7");var r=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t}}}]);
//# sourceMappingURL=component---packages-checkbox-react-documentation-checkbox-mdx-248f89b9a40e59fdb25f.js.map