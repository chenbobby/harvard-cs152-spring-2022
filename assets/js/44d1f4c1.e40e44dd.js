"use strict";(self.webpackChunkharvard_cs_152_spring_2022=self.webpackChunkharvard_cs_152_spring_2022||[]).push([[29],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return h}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=n.createContext({}),l=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=l(e.components);return n.createElement(m.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(t),h=r,g=u["".concat(m,".").concat(h)]||u[h]||c[h]||i;return t?n.createElement(g,s(s({ref:a},p),{},{components:t})):n.createElement(g,s({ref:a},p))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var m in a)hasOwnProperty.call(a,m)&&(o[m]=a[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9954:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),s=["components"],o={},m="Introduction",l={unversionedId:"Lectures/Semantics/intro",id:"Lectures/Semantics/intro",title:"Introduction",description:"Week 1 - Tuesday",source:"@site/docs/02-Lectures/01-Semantics/01-intro.md",sourceDirName:"02-Lectures/01-Semantics",slug:"/Lectures/Semantics/intro",permalink:"/harvard-cs152-spring-2022/Lectures/Semantics/intro",editUrl:"https://github.com/chenbobby/harvard-cs152-spring-2022/edit/main/docs/02-Lectures/01-Semantics/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Home",permalink:"/harvard-cs152-spring-2022/"},next:{title:"Small-step Operational Semantics",permalink:"/harvard-cs152-spring-2022/Lectures/Semantics/small-step-semantics"}},p=[{value:"What are semantics?",id:"what-are-semantics",children:[{value:"Why are semantics important? \ud83e\udd37",id:"why-are-semantics-important-",children:[],level:3}],level:2},{value:"Types of Semantics",id:"types-of-semantics",children:[{value:"Operational Semantics \ud83d\udcbe",id:"operational-semantics-",children:[],level:3},{value:"Denotational Semantics \ud83d\udcda",id:"denotational-semantics-",children:[],level:3},{value:"Axiomatic Semantics \ud83e\udde0",id:"axiomatic-semantics-",children:[],level:3}],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],c={toc:p};function u(e){var a=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Week 1 - Tuesday"))),(0,i.kt)("h2",{id:"what-are-semantics"},"What are semantics?"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"semantics")," of a program is the ",(0,i.kt)("em",{parentName:"p"},"meaning")," of a program. This is in contrast to ",(0,i.kt)("em",{parentName:"p"},"syntax"),", which is the ",(0,i.kt)("em",{parentName:"p"},"structure")," of a program."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'You learn about syntax in CS 153 "Compilers". This class is more about semantics.'))),(0,i.kt)("p",null,"So, what is the meaning of a program?"),(0,i.kt)("p",null,"Maybe we can just ",(0,i.kt)("em",{parentName:"p"},"run the program")," to see what it does! But, there might be a mistake in the code that we wrote. There might also be a mistake in the ",(0,i.kt)("em",{parentName:"p"},"compiler")," or the ",(0,i.kt)("em",{parentName:"p"},"interpreter"),". Hmm, this is no good... \ud83d\ude13"),(0,i.kt)("p",null,"Maybe we can ",(0,i.kt)("em",{parentName:"p"},"read the programming language's manual"),"! But, a manual only describes a single programming language and we might want to implement our program in many different programming languages. Also, a manual will be written in some ",(0,i.kt)("em",{parentName:"p"},"natural language")," like English or Spanish, which can be imprecise in meaning and hard to understand for foreign speakers. This is also no good... \ud83d\ude29"),(0,i.kt)("p",null,"Instead, we want to use mathematical, ",(0,i.kt)("strong",{parentName:"p"},"formal language")," to describe the semantics of a program. Using a formal language has the following benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Less ambiguous.")," The behavior of the language is clearer, which is useful for anyone who needs to write programs in the language, implement a compiler or interpreter for the language, add a new feature to the language, etc.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"More concise.")," Mathematical concepts and notation can clearly and concisely describe a language and state restrictions on legal programs in the language. For example, the Java Language Specification (2rd edition) devotes a chapter (26 pages) to describing the concept of definite assignment, most of which is describing, in English, a dataflow analysis that can be expressed more succinctly using mathematics.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Formal arguments.")," Most importantly, a formal semantics allows us to state, and prove, program properties that we\u2019re interested in. For example: we can state and prove that all programs in a language are guaranteed to be free of certain run-time errors, or free of certain security violations; we can state the specification of a program and prove that the program meets the specification (i.e., that\nthe program is guaranteed to produce the correct output for all possible inputs)."))),(0,i.kt)("h3",{id:"why-are-semantics-important-"},"Why are semantics important? \ud83e\udd37"),(0,i.kt)("p",null,"When we build a program, we usually want to verify the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Will my program crash or not when I try to run it?"),(0,i.kt)("li",{parentName:"ul"},"Will my program do what I want it do? For example, will some input ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"x")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," be correctly transformed into some output ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"f"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"x"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(x)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")"))))),"?")),(0,i.kt)("p",null,"The questions above are about the ",(0,i.kt)("strong",{parentName:"p"},"correctness")," of a program. One way to verify the correctness of a program is by using ",(0,i.kt)("em",{parentName:"p"},"tests"),". Instead of using tests, this class will explore how you can ",(0,i.kt)("em",{parentName:"p"},"prove")," that your program is correct."),(0,i.kt)("h2",{id:"types-of-semantics"},"Types of Semantics"),(0,i.kt)("p",null,"The drawback of formal semantics is that they can lead to fairly complex mathematical models, especially if one attempts to describe all details in a full-featured modern language. Few real programming languages have a formal semantics, since modeling all the details of a real-world language is hard: real languages are complex, with many features."),(0,i.kt)("p",null,"In programming language theory, there are many ",(0,i.kt)("em",{parentName:"p"},"types")," of semantics, each with their own strengths and weaknesses. Here are a few that are explored in this class:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Operational Semantics"),(0,i.kt)("li",{parentName:"ul"},"Denotational Semantics"),(0,i.kt)("li",{parentName:"ul"},"Axiomatic Semantics")),(0,i.kt)("p",null,"Each of these types of semantics are briefly described below."),(0,i.kt)("h3",{id:"operational-semantics-"},"Operational Semantics \ud83d\udcbe"),(0,i.kt)("p",null,"Operational semantics is a way to describe the meaning of a program by constructing proofs from logical statements about its ",(0,i.kt)("strong",{parentName:"p"},"execution"),". A valid program is interpreted as a sequence of steps. These steps ",(0,i.kt)("em",{parentName:"p"},"are")," the meaning of the program."),(0,i.kt)("p",null,"You will learn about operational semantics in Week 1-2."),(0,i.kt)("p",null,"If you are interested, here is ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Operational_semantics"},"the Wikipedia article on operational semantics"),"."),(0,i.kt)("h3",{id:"denotational-semantics-"},"Denotational Semantics \ud83d\udcda"),(0,i.kt)("p",null,"Denotational semantics is a way to describe the meaning of a program by constructing ",(0,i.kt)("strong",{parentName:"p"},"mathematical objects"),' (called denotations). Denotational semantics is more "pure math-y" and abstract, while operational semantics is more concrete and intuitive to a programmer.'),(0,i.kt)("p",null,"You will learn about denotational semantics in Week 3."),(0,i.kt)("p",null,"If you are interested, here is ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Denotational_semantics"},"the Wikipedia article on denotational semantics"),"."),(0,i.kt)("h3",{id:"axiomatic-semantics-"},"Axiomatic Semantics \ud83e\udde0"),(0,i.kt)("p",null,"Axiomatic semantics is a way to describe the meaning of a program by using logical statements. In particular, you use ",(0,i.kt)("strong",{parentName:"p"},"predicates with variables"),", where the variables define the state of the program."),(0,i.kt)("p",null,"You will learn about axiomatic semantics in Week 10."),(0,i.kt)("p",null,"If you are interested, here is ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Axiomatic_semantics"},"the Wikipedia article on axiomatic semantics"),", although it is quite short."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In computer science, semantics allow you to understand the meaning of a program and verify that your program is correct, no matter which programming language you decide to implement it in."),(0,i.kt)("p",null,"There are many strategies for using a mathematical formal language to describe a program's semantics."),(0,i.kt)("p",null,"In the next lecture, you will learn about one form of operational semantics called ",(0,i.kt)("em",{parentName:"p"},"small-step semantics"),". \ud83d\udc76"))}u.isMDXComponent=!0}}]);