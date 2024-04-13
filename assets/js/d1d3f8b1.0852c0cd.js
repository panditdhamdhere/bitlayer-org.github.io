"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[511],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?i.createElement(h,o(o({ref:t},c),{},{components:r})):i.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7724:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return m}});var i=r(7462),n=r(3366),a=(r(7294),r(3905)),o=["components"],s={sidebar_position:3},l="Bitlayer vs. Ethereum",p={unversionedId:"Introduction/BitlayerVsEth",id:"Introduction/BitlayerVsEth",title:"Bitlayer vs. Ethereum",description:"This document compares Bitlayer and Ethereum across several key aspects including gas prices, and support for EVM and Solidity versions, providing insights for both developers and users.",source:"@site/docs/Introduction/BitlayerVsEth.md",sourceDirName:"Introduction",slug:"/Introduction/BitlayerVsEth",permalink:"/docs/Introduction/BitlayerVsEth",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"About Bitlayer",permalink:"/docs/Introduction/AboutBitlayer"},next:{title:"Technical Architecture",permalink:"/docs/Introduction/TechnicalArchitecture"}},c={},u=[{value:"Gas Price",id:"gas-price",level:2},{value:"Bitlayer",id:"bitlayer",level:3},{value:"Ethereum",id:"ethereum",level:3},{value:"Supported EVM and Solidity Versions",id:"supported-evm-and-solidity-versions",level:2},{value:"Bitlayer",id:"bitlayer-1",level:3},{value:"EVM Support",id:"evm-support",level:4},{value:"Solidity Version",id:"solidity-version",level:4},{value:"Ethereum",id:"ethereum-1",level:3},{value:"EVM Support",id:"evm-support-1",level:4},{value:"Solidity Version",id:"solidity-version-1",level:4},{value:"Implications",id:"implications",level:2},{value:"For Developers",id:"for-developers",level:3},{value:"For Users",id:"for-users",level:3}],d={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bitlayer-vs-ethereum"},"Bitlayer vs. Ethereum"),(0,a.kt)("p",null,"This document compares Bitlayer and Ethereum across several key aspects including gas prices, and support for EVM and Solidity versions, providing insights for both developers and users."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Feature"),(0,a.kt)("th",{parentName:"tr",align:null},"Bitlayer"),(0,a.kt)("th",{parentName:"tr",align:null},"Ethereum"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Gas Price")),(0,a.kt)("td",{parentName:"tr",align:null},"Lower due to efficiency mechanisms."),(0,a.kt)("td",{parentName:"tr",align:null},"Variable, dependent on network demand. High demand can lead to increased gas prices.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"EVM Support")),(0,a.kt)("td",{parentName:"tr",align:null},"Supports EVM-compatible smart contracts through the Layered Virtual Machine (LVM)."),(0,a.kt)("td",{parentName:"tr",align:null},"Full EVM support as the native platform.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Solidity Support")),(0,a.kt)("td",{parentName:"tr",align:null},"Supports up to Solidity version v0.8.23. Future versions will be supported."),(0,a.kt)("td",{parentName:"tr",align:null},"Supports the latest versions of Solidity, with ongoing updates.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Developer Implications")),(0,a.kt)("td",{parentName:"tr",align:null},"Offers a platform leveraging Bitcoin's security. Easier transition for those familiar with Ethereum's EVM."),(0,a.kt)("td",{parentName:"tr",align:null},"Mature tooling and community support.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"User Implications")),(0,a.kt)("td",{parentName:"tr",align:null},"Access to innovative dApps leveraging Bitcoin's security."),(0,a.kt)("td",{parentName:"tr",align:null},"Vast ecosystem of dApps.")))),(0,a.kt)("h2",{id:"gas-price"},"Gas Price"),(0,a.kt)("h3",{id:"bitlayer"},"Bitlayer"),(0,a.kt)("p",null,"Bitlayer aims to offer lower transaction costs through innovative efficiency mechanisms. Leveraging technologies like optimistic execution, Bitlayer seeks to optimize transaction throughput, making it a potentially more economical choice for its users."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),(0,a.kt)("strong",{parentName:"h5"},"Important: About Gas Price on Bitlayer"))),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Bitlayer's native gas token is BTC, utilized with an 18-digit precision, diverging from Bitcoin's traditional 8-digit precision. This adjustment aligns with the default decimal precision of tokens on EVM-compatible chains, ensuring consistency across transactions."))),(0,a.kt)("p",null,"To accommodate transaction processing priorities, Bitlayer has established a minimum priority fee requirement. Developers can dynamically estimate the required gas price for transactions using ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_gasPrice")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_maxPriorityFeePerGas"),"."),(0,a.kt)("p",null,"For transactions on the Testnet, a minimum tip of 0.1 gwei is necessary. Typically, setting a ",(0,a.kt)("inlineCode",{parentName:"p"},"gasPrice")," of 0.11 gwei for legacy transactions or a ",(0,a.kt)("inlineCode",{parentName:"p"},"maxPriorityFeePerGas")," of 0.1 gwei (with an adequately set ",(0,a.kt)("inlineCode",{parentName:"p"},"maxFeePerGas"),") for EIP-1559 transactions should suffice for most operations."),(0,a.kt)("p",null,"Dapp developers are advised to programmatically set the ",(0,a.kt)("inlineCode",{parentName:"p"},"maxPriorityFeePerGas")," before initiating transactions via APIs, rather than relying on default strategies employed by wallets (like MetaMask) or SDKs, to ensure optimal transaction processing."),(0,a.kt)("h3",{id:"ethereum"},"Ethereum"),(0,a.kt)("p",null,"In contrast, Ethereum's gas prices fluctuate based on network demand. Users compete for computational resources, leading to variable gas prices that can spike significantly during periods of high demand, affecting cost-effectiveness."),(0,a.kt)("h2",{id:"supported-evm-and-solidity-versions"},"Supported EVM and Solidity Versions"),(0,a.kt)("h3",{id:"bitlayer-1"},"Bitlayer"),(0,a.kt)("h4",{id:"evm-support"},"EVM Support"),(0,a.kt)("p",null,"Bitlayer introduces the Layered Virtual Machine (LVM), which is fully compatible with Ethereum Virtual Machine (EVM) smart contracts. It supports EVM-compatible contracts up to the Shanghai update, with the exception of the PREVRANDAO opcode. The Cancun upgrade is expected to be supported in the next release. This enables developers to build applications on Bitcoin's secure network, mirroring the functionality available on Ethereum."),(0,a.kt)("h4",{id:"solidity-version"},"Solidity Version"),(0,a.kt)("p",null,"Currently, Bitlayer supports Solidity up to version v0.8.23, with a commitment to incorporating future versions. This stance ensures that developers have access to a stable and secure environment for their smart contracts."),(0,a.kt)("h3",{id:"ethereum-1"},"Ethereum"),(0,a.kt)("h4",{id:"evm-support-1"},"EVM Support"),(0,a.kt)("p",null,"Ethereum, as the origin of the EVM, offers support for the entire range of EVM functionalities. This allows for a wide spectrum of smart contract capabilities and decentralized application developments."),(0,a.kt)("h4",{id:"solidity-version-1"},"Solidity Version"),(0,a.kt)("p",null,"Ethereum consistently supports the latest versions of Solidity, providing developers with the newest features, optimizations, and security enhancements for smart contract development."),(0,a.kt)("h2",{id:"implications"},"Implications"),(0,a.kt)("h3",{id:"for-developers"},"For Developers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bitlayer")," emerges as an appealing platform for developers seeking to leverage Bitcoin's renowned security with the added benefit of potentially lower operational costs. The LVM's compatibility with EVM ensures a smooth transition for developers already familiar with Ethereum's ecosystem."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ethereum")," remains a cornerstone for smart contract and decentralized application development, supported by its extensive tooling and a vibrant community.")),(0,a.kt)("h3",{id:"for-users"},"For Users"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bitlayer")," offer more cost-effective interactions with decentralized applications, backed by the security of Bitcoin. This makes it an attractive platform for users prioritizing security and efficiency."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ethereum")," offers a broad and diverse ecosystem of dApps.")),(0,a.kt)("p",null,"In essence, Bitlayer introduces a strategic approach to integrating smart contract functionality within Bitcoin's secure and cost-effective framework, offering tangible benefits for both developers and users."))}m.isMDXComponent=!0}}]);