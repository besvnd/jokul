(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{KYoB:function(e,t,n){"use strict";n.r(t);n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("5hJT");var r=n("mXGw"),a=n.n(r),o=n("/FXl"),i=n("7XvJ"),c=(n("hYEA"),n("bGYK")),l=n.n(c),s=n("+P0C"),u=n("Sj89"),d=n.n(u),f=n("GmB8"),p=n.n(f),m=n("8Jek"),h=n.n(m),v=n("nnXn"),g=/^(\d\d)\.(\d\d)\.(\d{4})/;function b(e){return(""+e.getDate()).padStart(2,"0")+"."+(""+(e.getMonth()+1)).padStart(2,"0")+"."+e.getFullYear()}function k(e){var t=e.label,n=void 0===t?"Velg dato":t,o=e.monthLabel,i=void 0===o?"Måned":o,c=e.yearLabel,u=void 0===c?"År":c,f=e.placeholder,m=void 0===f?"dd.mm.åååå":f,k=e.months,y=e.days,E=e.calendarButtonTitle,j=void 0===E?"Vis kalender":E,_=e.initialDate,w=e.onChange,O=e.extended,x=void 0!==O&&O,M=e.initialShow,N=void 0!==M&&M,C=e.className,S=void 0===C?"":C,D=e.errorLabel,A=e.helpLabel,L=e.variant,T=e.forceCompact,F=e.disableBeforeDate,I=e.disableAfterDate,V=Object(r.useRef)("jkl-datepicker-"+l()(8)).current,P=Object(r.useState)(_),R=P[0],K=P[1],Y=Object(r.useState)(!N),G=Y[0],H=Y[1],X=Object(r.useState)(_?b(_):""),U=X[0],J=X[1],B=h()("jkl-datepicker",{"jkl-datepicker--extended":x,"jkl-datepicker--open":!G},S),Z=h()("jkl-datepicker-text-input",{"jkl-datepicker--compact":T});Object(r.useEffect)((function(){I&&I.setHours(23,59,59,999);var e=new Date;I&&e>I&&K(I),F&&e<F&&K(F)}),[F,I]),Object(r.useEffect)((function(){J(_?b(_):""),K(_)}),[_]);function q(e,t){return!(e&&(n=e,r=t,n.getDate()===r.getDate()&&n.getMonth()===r.getMonth()&&n.getFullYear()===r.getFullYear()));var n,r}return a.a.createElement("div",{className:B},a.a.createElement(s.a,{htmlFor:V,standAlone:!0,variant:L,forceCompact:T},n),a.a.createElement("div",{className:Z},a.a.createElement("input",{id:V,placeholder:m,type:"text","aria-invalid":!!D,className:"jkl-datepicker-text-input__input","data-testid":"jkl-datepicker__input",value:U,onChange:function(e){var t=e.target.value,n=g.exec(t);if(n){var r=parseInt(n[1],10),a=parseInt(n[2],10)-1,o=parseInt(n[3],10),i=new Date(o,a,r,0,0,0);q(R,i)&&(K(i),w&&w(i))}else""===t&&(K(void 0),w&&w(void 0));J(t)}}),a.a.createElement(v.a,{className:"jkl-datepicker__action-button",iconType:"calendar",buttonTitle:j}),a.a.createElement(p.a,{popup:!0,hidden:G,onToggle:function(){return H(!G)},onToggleSelect:function(e){e.detail.classList.contains("jkl-datepicker__month-button")||(e.target.hidden=!0)}},a.a.createElement(d.a,{timestamp:R?R.getTime():new Date,months:k,days:y,onDatepickerClickDay:function(e){var t=e.target.date;q(R,t)&&(J(b(t)),K(t),w&&w(t))},className:"jkl-datepicker__calendar",disabled:function(e){return I&&e>I||F&&e<F}},x&&a.a.createElement("div",{className:"jkl-datepicker__calendar-navigation"},a.a.createElement("label",{className:"jkl-datepicker__year-selector"},a.a.createElement(s.a,{variant:"small"},u),a.a.createElement("input",{type:"year",className:"jkl-datepicker-text-input__input jkl-datepicker__year-value"})),a.a.createElement("label",{className:"jkl-select jkl-datepicker__month-selector"},a.a.createElement(s.a,{variant:"small"},i),a.a.createElement("select",{className:"jkl-select__value jkl-datepicker__month-value"}),a.a.createElement("span",{className:"jkl-select__chevron"}))),!x&&a.a.createElement("fieldset",{className:"jkl-datepicker__month-navigation"},a.a.createElement("button",{title:"forrige måned","aria-label":"forrige måned",className:"jkl-datepicker__month-button",value:"- 1 month"},a.a.createElement("span",{className:"jkl-datepicker__month-arrow jkl-datepicker__month-arrow--left"})),a.a.createElement("button",{title:"neste måned","aria-label":"neste måned",className:"jkl-datepicker__month-button jkl-datepicker__month-button--right",value:"+ 1 month"},a.a.createElement("span",{className:"jkl-datepicker__month-arrow jkl-datepicker__month-arrow--right"}))),a.a.createElement("table",{"data-testid":"jkl-datepicker-calendar"})))),a.a.createElement(s.c,{errorLabel:D,helpLabel:A,forceCompact:T}))}var y=function(e){var t=e.boolValues,n=e.choiceValues,r=t&&t["Med hjelpetekst"]?"Du vil være forsikret fra denne datoen":void 0,o=t&&t["Med feil"]?"Du kan ikke velge en dato som har vært":void 0,i=n&&n.Variant;return a.a.createElement(k,{label:"Velg startdato for forsikringen",extended:t&&t["Utvidet velger"],forceCompact:t&&t.Kompakt,variant:i,errorLabel:o,helpLabel:r})};n.d(t,"_frontmatter",(function(){return E})),n.d(t,"default",(function(){return M}));var E={},j=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},_=j("Ingress"),w=j("ComponentExample"),O={_frontmatter:E},x=i.a;function M(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(x,Object.assign({},O,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(_,{mdxType:"Ingress"},'Vi bruker datovelgeren til å gi brukerne mulighet til å skrive inn eller velge en dato. Ledeteksten beskriver hvilken dato brukeren skal fylle inn, for eksempel: "Oppgi datoen da skaden skjedde".'),Object(o.b)(w,{component:y,knobs:{boolProps:["Utvidet velger","Kompakt","Med feil","Med hjelpetekst"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]},mdxType:"ComponentExample"}),Object(o.b)("h2",null,"Typer og bruk"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Enkel datovelger:")," Når brukeren skal velge en dato, som er nær dagens dato."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Utvidet datovelger:")," Når brukeren skal velge en dato som ligger mer enn ett år frem eller tilbake i tid."),Object(o.b)("p",null,'Vi kan også bruke to datovelgere, når vi vil at brukeren skal angi en periode med fra- og tildato.\nEksempel: "Hvor lenge var du syk da du var på ferie? Velg dato fra og til".'),Object(o.b)("h2",null,"Tekst og validering"),Object(o.b)("p",null,"Velg størrelse på ledeteksten etter prinsippene for skjemadesign. Bruk en kort og tydelig ledetekst, som forteller hva brukeren skal velge. Hvis det trengs, kan du også gi mer forklaring med en hjelpetekst under feltet."),Object(o.b)("p",null,"Hvis datovelgeren ikke validerer, vises en feilmelding, som forteller hva som er galt. Merk at feilmeldingen erstatter en eventuell hjelpetekst, slik at den feilmeldingen du lager også må fortelle hva hjelpeteksten var."),Object(o.b)("p",null,'Eksempel:\nHjelpetekst for første kalender i en periode:\n"Velg datoen da du først ble syk". Feilmelding: "Du må velge datoen da du først ble syk."'))}M.isMDXComponent=!0},Sj89:function(e,t,n){"use strict";(function(t){n("GkPX"),n("asZ9"),n("75LO"),n("9ovy"),n("e2Kn"),n("Z8gF"),n("W1QL"),n("K/PF"),n("lQyR"),n("zx98"),n("4aJ6"),n("t91x"),n("LXYL"),n("1qKx");var r,a=(r=n("mXGw"))&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e,t,n){return(u=s()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&l(a,n.prototype),a}).apply(null,arguments)}function d(e){var t="function"==typeof Map?new Map:void 0;return(d=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return u(e,arguments,c(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,e)})(e)}function f(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var p="undefined"!=typeof window;p&&/(android)/i.test(navigator.userAgent),p&&/iPad|iPhone|iPod/.test(String(navigator.platform));p||t.HTMLElement||(t.HTMLElement=function(){return function e(){o(this,e)}}());var m,h,v=(m="undefined"==typeof window?{}:window.Element.prototype,h=m.matches||m.msMatchesSelector||m.webkitMatchesSelector,m.closest?function(e,t){return e.closest(t)}:function(e,t){for(e.correspondingUseElement&&(e=e.correspondingUseElement);e;e=e.parentElement)if(h.call(e,t))return e;return null});function g(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a="prevent_recursive_dispatch_maximum_callstack".concat(t);if(e[a])return!0;e[a]=!0,"function"==typeof window.CustomEvent?n=new window.CustomEvent(t,{bubbles:!0,cancelable:!0,detail:r}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,r);var o=e.dispatchEvent(n);return e[a]=null,o}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(e){if(e.nodeType)return[e];if("string"==typeof e)return[].slice.call(t.querySelectorAll(e));if(e.length)return[].slice.call(e)}return[]}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t||"undefined"!=typeof self&&self;var k=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){var n,r,a,o;e.exports=(n={year:"FullYear",month:"Month",week:"Date",day:"Date",hour:"Hours",minute:"Minutes",second:"Seconds"},r=/([+-]\s*\d+)\s*(second|minute|hour|day|week|month|year)|(mon)|(tue)|(wed)|(thu)|(fri)|(sat)|(sun)/g,a=/([-\dy]+)[-/.]([\dm]+)[-/.]([\dd]+)/,o=/([\dh]+):([\dm]+):?([\ds]+)?/,function(e,t){if(isFinite(e))return new Date(Number(e));var i=String(e).toLowerCase(),c=new Date(isFinite(t)&&-1===i.indexOf("now")?Number(t):Date.now()),l=i.match(a)||[],s=l[1];void 0===s&&(s="y");var u=l[2];void 0===u&&(u="m");var d=l[3];void 0===d&&(d="d");var f=i.match(o)||[],p=f[1];void 0===p&&(p="h");var m=f[2];void 0===m&&(m="m");var h=f[3];void 0===h&&(h="s");var v={year:s,month:u,day:d,hour:p,minute:m,second:h};Object.keys(v).forEach((function(e){var t="month"===e?1:0,r=String(c["get"+n[e]]()+t);v[e]=v[e].replace(/[^-\d]+/g,(function(e,t,n){return t?r.substr(r.length-n.length+t,e.length):r.substr(0,Math.max(0,r.length-n.length+e.length))}))-t}));var g=new Date(v.year,Math.min(12,v.month+1),0).getDate();for(c.setFullYear(v.year,Math.min(11,v.month),Math.max(1,Math.min(g,v.day))),c.setHours(Math.min(24,v.hour),Math.min(59,v.minute),Math.min(59,v.second));null!==(v=r.exec(i));){var b=v[2],k=String(v[1]).replace(/\s/g,"")*("week"===b?7:1),y=v.slice(2).indexOf(v[0]),E=c.getDate();b?c["set"+n[b]](c["get"+n[b]]()+k):c.setDate(c.getDate()-(c.getDay()||7)+y),"month"!==b&&"year"!==b||E===c.getDate()||c.setDate(0)}return c})})),y={year:"*-m-d",month:"y-*-d",day:"y-m-*",hour:"*:m",minute:"h:*",second:"h:m:*",timestamp:"*",null:"*"},E={33:"-1month",34:"+1month",35:"y-m-99",36:"y-m-1",37:"-1day",38:"-1week",39:"+1day",40:"+1week"},j=function(e){function t(){return o(this,t),f(this,c(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,a=[{key:"observedAttributes",get:function(){return["timestamp","months","days"]}}],(r=[{key:"connectedCallback",value:function(){var e,t,n,r,a=this;this._date=this.date,document.addEventListener("click",this),document.addEventListener("change",this),document.addEventListener("keydown",this),setTimeout((function(){return a.attributeChangedCallback()})),e=this.nodeName,t="".concat(this.nodeName,"{display:block}"),n="style-".concat(e.toLowerCase()),r=t.replace(/\/\*[^!][^*]*\*\//g,"").replace(/\s*(^|[:;,{}]|$)\s*/g,"$1"),document.getElementById(n)||document.head.insertAdjacentHTML("afterbegin",'<style id="'.concat(n,'">').concat(r,"</style>"))}},{key:"disconnectedCallback",value:function(){this._date=this._disabled=null,document.removeEventListener("click",this),document.removeEventListener("change",this),document.removeEventListener("keydown",this)}},{key:"attributeChangedCallback",value:function(){if(this._date){if(this.disabled(this.date)&&!this.disabled(this._date))return this.date=this._date;this.diff(this.date)&&g(this,"datepicker.change",this._date=this.date),w("button",this,O),w("select",this,N),w("input",this,x),w("table",this,M)}}},{key:"handleEvent",value:function(e){if(!(e.defaultPrevented||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||"keydown"===e.type&&!E[e.keyCode])&&(this.contains(e.target)||v(e.target,'[for="'.concat(this.id,'"]'))))if("change"===e.type)this.date=y[e.target.getAttribute("data-type")].replace("*",e.target.value);else if("click"===e.type){var t=v(e.target,"button[value]"),n=v(e.target,"table");t&&(this.date=t.value),t&&n&&g(this,"datepicker.click.day")}else"keydown"===e.type&&v(e.target,"table")&&(this.date=E[e.keyCode],this.querySelector("[autofocus]").focus(),e.preventDefault())}},{key:"diff",value:function(e){return this.parse(e).getTime()-this.timestamp}},{key:"parse",value:function(e,t){return k(e,t||this._date)}},{key:"disabled",get:function(){return this._disabled||Function.prototype},set:function(e){var t=this;this._disabled="function"==typeof e?function(n){return e(t.parse(n),t)}:function(){return e},this.attributeChangedCallback()}},{key:"timestamp",get:function(){return String(this._date.getTime())}},{key:"year",get:function(){return String(this._date.getFullYear())}},{key:"month",get:function(){return _(this._date.getMonth()+1)}},{key:"day",get:function(){return _(this._date.getDate())}},{key:"hour",get:function(){return _(this._date.getHours())}},{key:"minute",get:function(){return _(this._date.getMinutes())}},{key:"second",get:function(){return _(this._date.getSeconds())}},{key:"date",get:function(){return k(this.getAttribute("timestamp")||this._date||Date.now())},set:function(e){return this.setAttribute("timestamp",this.parse(e).getTime())}},{key:"months",set:function(e){this.setAttribute("months",[].concat(e).join(","))},get:function(){return(this.getAttribute("months")||"januar,februar,mars,april,mai,juni,juli,august,september,oktober,november,desember").split(/\s*,\s*/)}},{key:"days",set:function(e){this.setAttribute("days",[].concat(e).join(","))},get:function(){return(this.getAttribute("days")||"man,tirs,ons,tors,fre,lør,søn").split(/\s*,\s*/)}}])&&i(n.prototype,r),a&&i(n,a),t}(d(HTMLElement)),_=function(e){return"0".concat(e).slice(-2)},w=function(e,t,n){return[].forEach.call(document.getElementsByTagName(e),(function(e){(t.contains(e)||t.id===e.getAttribute(t.external))&&n(t,e)}))};function O(e,t){t.value&&(t.type="button",t.disabled=e.disabled(t.value))}function x(e,t){var n=t.getAttribute("data-type")||t.getAttribute("type");"radio"===n||"checkbox"===n?(t.disabled=e.disabled(t.value),t.checked=!e.diff(t.value)):y[n]&&(t.setAttribute("type","number"),t.setAttribute("data-type",n),t.value=e[n])}function M(e,t){t.firstElementChild||(t.innerHTML="\n    <caption></caption><thead><tr>".concat(Array(8).join("</th><th>"),"</tr></thead>\n    <tbody>").concat(Array(7).join("<tr>".concat(Array(8).join('<td><button type="button"></button></td>'),"</tr>")),"</tbody>"));var n=new Date,r=e.date.getMonth(),a=e.parse("y-m-1 mon");t.caption.textContent="".concat(e.months[r],", ").concat(e.year),b("th",t).forEach((function(t,n){return t.textContent=e.days[n]})),b("button",t).forEach((function(t){var o=!e.diff(a),i=a.getDate(),c=a.getMonth();t.textContent=i,t.value="".concat(a.getFullYear(),"-").concat(c+1,"-").concat(i),t.disabled=e.disabled(a),t.tabIndex=o-1,t.setAttribute("data-adjacent",r!==c),t.setAttribute("aria-label","".concat(i,". ").concat(e.months[c])),t.setAttribute("aria-current",a.getDate()===n.getDate()&&a.getMonth()===n.getMonth()&&a.getFullYear()===n.getFullYear()&&"date"),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:!this.hasAttribute(t);!n===e.hasAttribute(t)&&e[n?"setAttribute":"removeAttribute"](t,"")}(t,"autofocus",o),a.setDate(i+1)}))}function N(e,t){t.firstElementChild||(t._autofill=!0,t.innerHTML=e.months.map((function(e,t){return'<option value="y-'.concat(t+1,'-d"></option>')})).join("")),b(t.children).forEach((function(n,r){t._autofill&&(n.textContent=e.months[r]),n.disabled=e.disabled(n.value),n.selected=!e.diff(n.value)}))}var C=function(){var e="undefined"==typeof window?{}:window.Element.prototype,t=e.matches||e.msMatchesSelector||e.webkitMatchesSelector;return e.closest?function(e,t){return e.closest(t)}:function(e,n){for(;e;e=e.parentElement)if(t.call(e,n))return e;return null}}();var S=function(e,t){void 0===t&&(t={});var n=(e.name||String(e).match(/function ([^(]+)/)[1]).replace(/.[A-Z]/g,(function(e){return e[0]+"-"+e[1]})),r=t.props||[],o=t.customEvents||[],i=o.reduce((function(e,t){return e[t]="on"+t.replace(/(^|\.)./g,(function(e){return e.slice(-1).toUpperCase()})),e}),{}),c=r.concat("forwardRef",Object.keys(i).map((function(e){return i[e]}))),l=(n+"-"+(t.suffix||"react")).replace(/\W+/g,"-").toLowerCase();return function(t){function n(e){var n=this;t.call(this,e),this.ref=function(e){return"function"==typeof n.props.forwardRef?n.props.forwardRef(e):n.props.forwardRef&&(n.props.forwardRef.current=e),n.el=e},Object.keys(i).forEach((function(e){var t=i[e];n[e]=function(e){n.props[t]&&C(e.target,n.el.nodeName)===n.el&&n.props[t](e)}}))}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n.prototype.componentDidMount=function(){var t=this;window.customElements.get(l)||window.customElements.define(l,e),r.forEach((function(e){e in t.props&&(t.el[e]=t.props[e])})),o.forEach((function(e){t.el.addEventListener(e,t[e])}))},n.prototype.componentDidUpdate=function(e){var t=this;r.forEach((function(n){e[n]!==t.props[n]&&(t.el[n]=t.props[n])}))},n.prototype.componentWillUnmount=function(){var e=this;o.forEach((function(t){e.el.removeEventListener(t,e[t])}))},n.prototype.render=function(){var e=this;return a.createElement(l,Object.keys(this.props).reduce((function(t,n){return-1===c.indexOf(n)&&("className"===n?t.class=e.props[n]:!0===e.props[n]?t[n]="":!1!==e.props[n]&&(t[n]=e.props[n])),t}),{ref:this.ref}))},n}(a.Component)}(j,{props:["disabled"],customEvents:["datepicker.change","datepicker.click.day"],suffix:"3.0.8"});e.exports=S}).call(this,n("pCvA"))},SvMv:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},cb3D:function(e,t,n){var r=n("Sp5b"),a=n("p1Jl"),o=n("GCOZ");e.exports=function(e,t,n,i){var c=String(o(e)),l=c.length,s=void 0===n?" ":String(n),u=r(t);if(u<=l||""==s)return c;var d=u-l,f=a.call(s,Math.ceil(d/s.length));return f.length>d&&(f=f.slice(0,d)),i?f+c:c+f}},e2Kn:function(e,t,n){"use strict";var r=n("P56o"),a=n("ezc+"),o=n("n+VH"),i=n("jEou"),c=n("5MU4"),l=n("E7Vc"),s=n("zIds").f,u=n("1Tj+").f,d=n("U1KF").f,f=n("hGr/").trim,p=r.Number,m=p,h=p.prototype,v="Number"==o(n("Vx+c")(h)),g="trim"in String.prototype,b=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,o=(t=g?t.trim():f(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var i,l=t.slice(2),s=0,u=l.length;s<u;s++)if((i=l.charCodeAt(s))<48||i>a)return NaN;return parseInt(l,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(v?l((function(){h.valueOf.call(n)})):"Number"!=o(n))?i(new m(b(t)),n,p):b(t)};for(var k,y=n("GGqZ")?s(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;y.length>E;E++)a(m,k=y[E])&&!a(p,k)&&d(p,k,u(m,k));p.prototype=h,h.constructor=p,n("sU/p")(r,"Number",p)}},"hGr/":function(e,t,n){var r=n("X6VK"),a=n("GCOZ"),o=n("E7Vc"),i=n("SvMv"),c="["+i+"]",l=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),u=function(e,t,n){var a={},c=o((function(){return!!i[e]()||"​"!="​"[e]()})),l=a[e]=c?t(d):i[e];n&&(a[n]=l),r(r.P+r.F*c,"String",a)},d=u.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(s,"")),e};e.exports=u},hYEA:function(e,t,n){"use strict";var r=n("X6VK"),a=n("cb3D"),o=n("ROCd"),i=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*i,"String",{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},p1Jl:function(e,t,n){"use strict";var r=n("mvii"),a=n("GCOZ");e.exports=function(e){var t=String(a(this)),n="",o=r(e);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(n+=t);return n}}}]);
//# sourceMappingURL=component---packages-datepicker-react-documentation-datepicker-mdx-1f05e07740dd05767a0d.js.map