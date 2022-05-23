"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[766],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},342:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:1},c="Overview",l={unversionedId:"filter/overview",id:"filter/overview",title:"Overview",description:"Demo of Focus Mode Extension",source:"@site/docs/filter/overview.md",sourceDirName:"filter",slug:"/filter/overview",permalink:"/dev/docs/filter/overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/filter/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Filter",permalink:"/dev/docs/category/filter"},next:{title:"Filtering Posts",permalink:"/dev/docs/filter/filtering-posts"}},u={},p=[{value:"Directory Structure",id:"directory-structure",level:2}],f={toc:p};function d(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Demo of Focus Mode Extension",src:r(3774).Z,width:"1883",height:"931"})),(0,i.kt)("p",null,"The Focus Mode extension parses posts in a user's Facebook feed, stores them in a list, then displays each post in a dialog box (as seen above) so that they can focus on one post at a time. The extension popup contains a toggle switch that enables or disables the focus mode."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hajingit/tbi-filter"},"GitHub Repo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://smart-tbi.github.io/studio/available-tools/newsfeed-filter.html"},"Webpage for the public"))),(0,i.kt)("h2",{id:"directory-structure"},"Directory Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"src\n|  background         // Contains a logging logic triggered when user closes the Facebook tab.\n|  content_scripts    // UI, parser, and main logging logic\n\u2502   \u2502   index.js\n\u2502   \u2502\n\u2502   \u2514\u2500\u2500\u2500components\n\u2502       \u2502   ExtensionContainer.js    // Top-most container that renders the BottomFloatingBar and filtering logic\n\u2502       \u2514\u2500\u2500\u2500PostsBox                 \n\u2502           \u2502   PostsBox.js          // Manipulates the visbility of posts in the feed based on the filtered result.\n\u2502           \u2502                        // Does not render any visible UIs.\n\u2502           \u2502   PostsBox.css\n\u2502           \u2502   BottomFloatingBar.js              // A parent container that renders all the button groups\n\u2502           \u2502   BottomFloatingBar.css\n\u2502           \u2502   FilterButtonGroup.js              // A component that renders the buttons for filtering\n\u2502           \u2502   FilterButtonGroup.css\n\u2502   \u2514\u2500\u2500\u2500utils\n\u2502       \u2502   LogDispatcher.js         // A library that provides logging functions\n\u2502       \u2502   PostParser.js            // A library that parses a DOM object of a Facebook post\n\u2502     \n|  popup              // Extension popup where user can enable/disable the focus mode.\n|  fonts\n|  img\n")))}d.isMDXComponent=!0},3774:function(e,t,r){t.Z=r.p+"assets/images/filter_demo-dfb0e940961b708216dd9422f31a1f8f.png"}}]);