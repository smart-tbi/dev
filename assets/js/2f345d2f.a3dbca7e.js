"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[347],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},g),{},{components:n})):r.createElement(f,a({ref:t},g))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2151:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:1},l="Overview",c={unversionedId:"logging/overview",id:"logging/overview",title:"Overview",description:"For each extension, user's logs of interacting with the extension is logged in databases hosted in AWS DynamoDB. In addition, the general usage of Facebook (e.g. viewing post for x seconds) is also logged. For more details, see the Logging Schema below.",source:"@site/docs/logging/overview.md",sourceDirName:"logging",slug:"/logging/overview",permalink:"/dev/docs/logging/overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/logging/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Logging",permalink:"/dev/docs/category/logging"},next:{title:"Client-side Logging",permalink:"/dev/docs/logging/client-side-logging"}},g={},u=[{value:"Details on <code>LogDispatcher.js</code>",id:"details-on-logdispatcherjs",level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"For each extension, user's logs of interacting with the extension is logged in databases hosted in AWS DynamoDB. In addition, the general usage of Facebook (e.g. viewing post for ",(0,i.kt)("em",{parentName:"p"},"x")," seconds) is also logged. For more details, see the ",(0,i.kt)("strong",{parentName:"p"},"Logging Schema")," below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1zDn1mDz9FvZEJ2xk5kGZZWVu-dayy_RlgVVLIOgNbss/edit#gid=0"},"Logging Schema (Google Sheets)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://go.wisc.edu/aws"},"AWS Login"))),(0,i.kt)("h2",{id:"details-on-logdispatcherjs"},"Details on ",(0,i.kt)("inlineCode",{parentName:"h2"},"LogDispatcher.js")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For each extension, there is a library called ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"LogDispatcher"))," inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"contents_scripts/utils")," folder, which abstracts away logging of frequently performed activities (e.g. a button click). "),(0,i.kt)("li",{parentName:"ul"},"This is highly customizable for each extension's needs, but it would be a good idea in the future to make it a single universal library that can be shared across various extensions.")))}d.isMDXComponent=!0}}]);