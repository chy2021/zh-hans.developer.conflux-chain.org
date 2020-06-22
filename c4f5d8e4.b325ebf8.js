(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{154:function(e,t,n){"use strict";n.r(t),function(e){var a=n(2),r=n(0),i=n.n(r),l=n(184),c=n.n(l),o=n(170),s=n(169),u=n(167),m=n(164),d=n(165),g=n(155),h=n.n(g),f=[{title:i.a.createElement(i.a.Fragment,null,"Scalability"),imageUrl:{dark:"img/scalability-dark.svg",light:"img/scalability-light.svg"},description:i.a.createElement(i.a.Fragment,null,"By adopting an scalability consensus mechanism and safely retaining fork blocks, Conflux realized a high throughput rate of 3000-6000 TPS in our real-network testing.")},{title:i.a.createElement(i.a.Fragment,null,"Extensibility"),imageUrl:{dark:"img/extensive-dark.svg",light:"img/extensive-light.svg"},description:i.a.createElement(i.a.Fragment,null,"Blockchain oracle combined with cryptographic tools to realize powerful features such as external data feeding, confidential data control, and beyond.")},{title:i.a.createElement(i.a.Fragment,null,"Security"),imageUrl:{dark:"img/security-dark.svg",light:"img/security-light.svg"},description:i.a.createElement(i.a.Fragment,null,"Ensured by 2 Dimensional protection - Anti double-spend attack protection (consensus-level) and contract code proofreading (application-level).")}];function p(e){var t=e.imageUrl,n=e.title,a=e.description,r=Object(s.a)().isDarkTheme?"dark":"light",l=Object(d.a)(t[r]);return i.a.createElement("div",{className:c()("col col--4",h.a.feature)},l&&i.a.createElement("div",{className:"text--center"},i.a.createElement("img",{className:h.a.featureImage,src:l,alt:n})),i.a.createElement("h3",{className:"text--center"},n),i.a.createElement("p",{className:"text--center"},a))}t.default=function(){var t=Object(m.a)().siteConfig,n=void 0===t?{}:t;return i.a.createElement(o.a,{title:"Hello from "+n.title,description:"Description will go into a meta tag in <head />"},i.a.createElement("header",{className:c()("hero hero--primary",h.a.heroBanner)},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"hero__title"},n.title),i.a.createElement("p",{className:"hero__subtitle"},n.tagline),i.a.createElement("div",{className:h.a.buttons},i.a.createElement(u.a,{className:c()("button button--outline button--secondary button--lg",h.a.getStarted),to:Object(d.a)("/docs/introduction/"+("en"===e.env.CFX_LANG?"en/":"")+"conflux_overview")},"Get Started")))),i.a.createElement("main",null,f&&f.length&&i.a.createElement("section",{className:h.a.features},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},f.map((function(e,t){return i.a.createElement(p,Object(a.a)({key:t},e,{imageUrl:e.imageUrl}))})))))))}}.call(this,n(214))},214:function(e,t){var n,a,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{a="function"==typeof clearTimeout?clearTimeout:l}catch(e){a=l}}();var o,s=[],u=!1,m=-1;function d(){u&&o&&(u=!1,o.length?s=o.concat(s):m=-1,s.length&&g())}function g(){if(!u){var e=c(d);u=!0;for(var t=s.length;t;){for(o=s,s=[];++m<t;)o&&o[m].run();m=-1,t=s.length}o=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===l||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function f(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||u||c(g)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}}]);