(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+n6y":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return _})),n.d(t,"default",(function(){return H}));n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("5hJT");var r=n("mXGw"),i=n.n(r),o=n("/FXl"),a=n("7XvJ");function l(e){return e.current&&(e.current.el||e.current)}n("oMRA"),n("6d4m");var c,u=function(){return"undefined"!=typeof window&&"undefined"!=typeof MutationObserver},s=function(){return"undefined"!=typeof window&&"undefined"!=typeof IntersectionObserver},m=(n("2Tod"),n("ABKx"),n("XQs+"),n("F5Dj"));function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(e){e.resized="WINDOW_RESIZED"}(c||(c={}));var p={resized:c.resized},k=function(e,t){return{isSmallDevice:e<m.d.small,isMediumDevice:e>m.d.small&&e<m.d.medium,isLargeDevice:e>m.d.medium&&e<m.d.large,isXlDevice:e>m.d.large,isPortrait:t>=e,isLandscape:t<e,inner:{height:t,width:e}}},j={isSmallDevice:!1,isMediumDevice:!1,isLargeDevice:!1,isXlDevice:!1,isLandscape:!1,isPortrait:!1,inner:{height:0,width:0}},y=function(){var e="undefined"!=typeof window?window.innerWidth:0,t="undefined"!=typeof window?window.innerHeight:0;return k(e,t)},v=function(e,t){var n=t.type,r=t.width,i=t.height;switch(n){case p.resized:return b(b({},e),k(r,i))}};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(){var e=Object(r.useReducer)(v,j,y),t=e[0],n=e[1],i=function(){return requestAnimationFrame((function(){return n({type:p.resized,width:window.innerWidth,height:window.innerHeight})}))};return Object(r.useEffect)((function(){return"undefined"!=typeof window&&window.addEventListener("resize",i),function(){"undefined"!=typeof window&&window.removeEventListener("resize",i)}}),[]),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t)},E=(n("ESim"),function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],o=function(e){var t=Object(r.useRef)(),n=Object(r.useRef)(),i=Object(r.useRef)(null),o=Object(r.useRef)(!0);function a(){var e=l(i);e&&e.removeAttribute("style")}var c=Object(r.useCallback)((function(){if(!o.current){var r=l(i);r&&(r.style.display="block",r.style.overflow="hidden",e?(r.style.height="0",r.style.height=r.scrollHeight+"px"):(r.style.height=r.scrollHeight+"px",t.current=requestAnimationFrame((function(){n.current=requestAnimationFrame((function(){r.style.height="0px"}))}))))}}),[e]);return Object(r.useLayoutEffect)((function(){c()}),[e,c]),Object(r.useEffect)((function(){var e=l(i);return e&&e.addEventListener("transitionend",a),function(){e&&e.removeEventListener("transitionend",a)}}),[e]),Object(r.useEffect)((function(){var e=t.current,r=n.current;return o.current=!1,function(){e&&cancelAnimationFrame(e),r&&cancelAnimationFrame(r)}}),[t,n]),[i,c]}(t)[0];return i.a.createElement("section",null,i.a.createElement("button",{className:"jkl-button jkl-button--secondary",onClick:function(){return n(!t)}},"Animate ",t?"Out":"In"),i.a.createElement("div",{className:"lorem-text-wrapper "+(t?"":"lorem-text-wrapper--hidden"),ref:o},i.a.createElement("div",{className:"lorem-text"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, aperiam asperiores aut beatae consequuntur cumque delectus dolore doloremque ea fugit inventore ipsam libero magnam officiis optio soluta veniam voluptatibus!")))});n("GkPX"),n("4aJ6"),n("lQyR"),n("YhIr"),n("+jjx");function w(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var A=function(){var e=Object(r.useState)([]),t=e[0],n=e[1],o=Object(r.useState)(!1),a=o[0],l=o[1],c=Object(r.useRef)(null),u=Object(r.useRef)();u.current=t;return function(e,t){function n(n){e&&e.current&&!e.current.contains(n.target)&&t()}i.a.useEffect((function(){return e&&document&&document.addEventListener("click",n),function(){e&&document&&document.removeEventListener("click",n)}}))}(c,(function(){a&&n([].concat(w(u.current||[]),["Klikk utenfor"]))})),i.a.createElement("section",{ref:c},i.a.createElement("p",{className:"jkl-body jkl-spacing--bottom-1"},"Klikk utenfor eksempelet for å se klikket listet opp under. Klikk inne i eksempelet vil ikke listes opp"),i.a.createElement("button",{className:"jkl-button jkl-button--secondary jkl-spacing--right-1",onClick:function(){return l(!a)}},a?"Skru av":"Skru på"),i.a.createElement("button",{className:"jkl-button jkl-button--tertiary",onClick:function(){return n([])}},"Nullstill liste"),0!==t.length&&i.a.createElement("ul",{className:"jkl-list jkl-list--unordered jkl-body"},t.map((function(e,t){return i.a.createElement("li",{className:"jkl-list__item",key:t},e)}))))};function S(){var e=Object(r.useState)(0),t=e[0],n=e[1],o=Object(r.useState)(!1),a=o[0],l=o[1],c=Object(r.useRef)(null);return function(e,t){function n(n){e&&e.current&&!e.current.contains(n.target)&&t()}i.a.useEffect((function(){return e&&document&&document.addEventListener("focusin",n),function(){e&&document&&document.removeEventListener("focusin",n)}}))}(c,(function(){a&&n(t+1)})),i.a.createElement("section",null,i.a.createElement("p",{className:"jkl-body jkl-spacing--bottom-1"},"Fokuser på et element utenfor kortet for å øke telleren. Når du flytter fokus tilbake vil ikke telleren øke."),i.a.createElement("div",{ref:c,className:"jkl-card focus-outside-example__card jkl-spacing--top-1"},"Antall fokus utenfor: ",i.a.createElement("strong",null,t),i.a.createElement("br",null),i.a.createElement("button",{className:"jkl-button jkl-button--secondary jkl-spacing--right-1",onClick:function(){return l(!a)}},a?"Deaktiver":"Aktiver"),i.a.createElement("button",{className:"jkl-button jkl-button--tertiary",onClick:function(){return n(0)}},"Nullstill teller")),i.a.createElement("button",{className:"jkl-button jkl-button--secondary jkl-spacing--top-2"},"Utenfor kortet"))}function D(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(){var e=Object(r.useState)([]),t=e[0],n=e[1],o=Object(r.useRef)(null),a=Object(r.useState)(!1),l=a[0],c=a[1];return function(e,t,n){function i(e){t&&!t.includes(e.key)||n(e)}"string"==typeof t&&(t=[t]),Object(r.useEffect)((function(){var t=e&&e.current;return t&&t.addEventListener("keydown",i),function(){t&&t.removeEventListener("keydown",i)}}))}(o,["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],(function(e){l&&n([].concat(D(t),[e.key]))})),i.a.createElement("section",null,i.a.createElement("p",{className:"jkl-body jkl-spacing--bottom-1"},"Flytt fokus til aktiver-knappen under med Tab eller ved å trykke på den. Trykk på piltastene vil nå listes opp under. Klikk utenfor knappen, eller flytt fokus med Tab, for å se at tastetrykkene ikke lenger registreres."),i.a.createElement("button",{ref:o,className:"jkl-button jkl-button--secondary jkl-spacing--right-1",onClick:function(){return c(!l)}},l?"Deaktiver":"Aktiver"),i.a.createElement("button",{className:"jkl-button jkl-button--tertiary",onClick:function(){return n([])}},"Nullstill liste"),0!==t.length&&i.a.createElement("ul",{className:"jkl-list jkl-list--unordered jkl-body"},t.map((function(e,t){return i.a.createElement("li",{key:t,className:"jkl-list__item"},e)}))))}function L(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var I=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],o=Object(r.useState)([]),a=o[0],l=o[1],c=Object(r.useRef)(null),s=Object(r.useRef)();s.current=a;return function(e,t,n){var i=Object(r.useRef)(null);Object(r.useEffect)((function(){var r=i.current;if(u()){var o=e.current;r&&r.disconnect(),r=new MutationObserver(t),o&&r.observe(o,n)}return function(){u()&&r&&r.disconnect()}}),[e,t,n])}(c,(function(e){l([].concat(L(s.current||[]),L(e.map((function(e){return e.target.textContent||""})))))}),{characterData:!0,subtree:!0}),i.a.createElement("section",null,i.a.createElement("button",{className:"jkl-button jkl-button--secondary jkl-spacing--right-1",onClick:function(){return n(!t)}},"Endre status"),i.a.createElement("button",{className:"jkl-button jkl-button--tertiary",onClick:function(){return l([])}},"Nullstill liste"),i.a.createElement("p",{ref:c,className:"jkl-spacing--top-1 jkl-body"},"Nåværende status: ",i.a.createElement("strong",null,t?"Åpen":"Lukket"),i.a.createElement("br",null),"Liste over endringer:"),0!==a.length&&i.a.createElement("ul",{className:"jkl-list jkl-list--unordered jkl-body"},a.map((function(e,t){return i.a.createElement("li",{className:"jkl-list__item",key:t},e)}))))},R=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],o=Object(r.useRef)(null);return function(e,t,n,i){var o=Object(r.useRef)(null);Object(r.useEffect)((function(){var r=o.current;if(s()){var a=e.current;r&&r.disconnect(),r=new IntersectionObserver(t,i),a&&r.observe(a)}else n();return function(){s()&&r&&r.disconnect()}}),[e,t,n,i])}(o,(function(e){n(e.some((function(e){return e.isIntersecting})))}),(function(){return console.log("IntersectionObserver not supported")}),{rootMargin:"0px",threshold:[0,1]}),i.a.createElement("div",{className:"jlk-intersection-example "+(t?"jlk-intersection-example--visible":"jlk-intersection-example--not-visible")},i.a.createElement("p",{className:"jkl-body jkl-spacing--all-2",style:{height:"100vh"}},"Scroll for å endre farge"),i.a.createElement("p",{className:"jkl-body jkl-spacing--all-2",ref:o},"Scroll tilbake for å endre fargen tilbake"))},M=i.a.createContext(j),T=function(){var e=Object(r.useContext)(M),t=e.isSmallDevice,n=e.isMediumDevice,o=e.isLargeDevice,a=e.isXlDevice,l=e.isLandscape,c=e.isPortrait,u=e.inner,s=u.width,m=u.height;return i.a.createElement("section",{className:"hooks-example key-listener-example jkl-spacing--bottom-3"},i.a.createElement("h2",{className:"jkl-h2 jkl-spacing--bottom-2"},"Din dings har en ",function(){switch(!0){case t:return"liten";case n:return"litt større";case o:return"ganske stor";case a:return"stor";default:return""}}()," skjerm"),i.a.createElement("h3",{className:"jkl-h3 jkl-spacing--bottom-2"},"Den er i "+(l?"landskaps":"")+(c?"portrett":"")+"modus"),i.a.createElement("p",{className:"jkl-p jkl-spacing--bottom-2"},s," x ",m))},F=function(){var e=h();return i.a.createElement(M.Provider,{value:e},i.a.createElement(T,null))};var X,_={},z=(X="ComponentExample",function(e){return console.warn("Component "+X+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),K={_frontmatter:_},q=a.a;function H(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(o.b)(q,Object.assign({},K,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("span",{className:"jkl-lead"},"Denne pakken innholder støttefunksjoner i form av React hooks.")),Object(o.b)("h2",null,"useAnimatedHeight"),Object(o.b)("p",null,"Animering av ting inn og ut av DOMet i React er ikke lett, men med useAnimatedHeight blir jobben en god del lettere."),Object(o.b)(z,{component:E,mdxType:"ComponentExample"}),Object(o.b)("h2",null,"useMutationObserver"),Object(o.b)("p",null,"Med ",Object(o.b)("inlineCode",{parentName:"p"},"useMutationObserver")," kan du lytte på endringer i DOMet. Dette er en tynn wrapper over MutationObserver APIet som gjør det lettere å ta det i bruk i React. Den er nyttig om du f.eks. ønsker å spore når en bruker trykker på et element der du ikke har tilgang på ",Object(o.b)("inlineCode",{parentName:"p"},"onChange"),"-funksjonen, som ",Object(o.b)("inlineCode",{parentName:"p"},"Accordion"),"."),Object(o.b)(z,{component:I,mdxType:"ComponentExample"}),Object(o.b)("h2",null,"useClickOutside"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useClickOutside")," lar deg lytte på klikk utenfor et element. Det kan være nyttig for å lukke modaler o.l."),Object(o.b)(z,{component:A,mdxType:"ComponentExample"}),Object(o.b)("h2",null,"useFocusOutside"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useFocusOutside")," lar deg lytte etter elementfokus utenfor et gitt element, for eksempel når du tabber ut av en datovelger, og utføre en gitt handling."),Object(o.b)(z,{component:S,mdxType:"ComponentExample"}),Object(o.b)("h2",null,"useKeyListener"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useKeyListener")," lar deg lytte etter spesifiserte tastetrykk når fokus er inne i et gitt element. Dette kan være nyttig for blandt annet søkefunksjonalitet i lister, og tastaturnavigasjon i karuseller o.l."),Object(o.b)(z,{component:C,mdxType:"ComponentExample"}),Object(o.b)("h2",null,"useIntersectionObserver"),Object(o.b)("p",null,"IntersectionObserver lar deg lytte på om et element er synlig eller ikke. Det gjør det mulig å animere innhold inn, eller prelaste innhold som er rett uten for viewporten. I eksemplet brukes det til å bytte bakgrunnsfarge når andre paragrafen kommer helt inn i visning."),Object(o.b)(z,{component:R,mdxType:"ComponentExample"}),Object(o.b)("h2",null,"useScreen"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useScreen")," lar deg få tilgang til de samme breakpoints som cssen bruker til media queries. Av og til er kan det være nødvendig å endre strukturen på innholdet bassert på hvor stor skjerm innholdet skal presenteres på. Anbefalt implementasjon er å legge ",Object(o.b)("inlineCode",{parentName:"p"},"useScreen")," så høyt oppe i applikasjonen din som du mener er nødvendig i en ",Object(o.b)("inlineCode",{parentName:"p"},"context"),", for å benytte den contexten når du trenger å plukke ut verdiene i en komponent. Dette er for å unngå å sette opp flere eventlyttere enn nødvendig. Om du bruker server side rendering bør denne brukes med forsiktighet, da serveren ikke vil vite hvilken size den skal rendre for."),Object(o.b)(F,{mdxType:"ScreenExample"}))}H.isMDXComponent=!0},ESim:function(e,t,n){}}]);
//# sourceMappingURL=component---packages-react-hooks-documentation-hooks-mdx-0114e500db92c73a76f4.js.map