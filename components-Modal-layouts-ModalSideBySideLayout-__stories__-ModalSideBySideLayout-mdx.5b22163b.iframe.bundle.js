"use strict";(globalThis.webpackChunk_vibe_core=globalThis.webpackChunk_vibe_core||[]).push([[1323,8301,3501],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Modal/layouts/ModalSideBySideLayout/__stories__/ModalSideBySideLayout.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>ModalSideBySideLayout});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),ModalSideBySideLayout_stories=__webpack_require__("./src/components/Modal/layouts/ModalSideBySideLayout/__stories__/ModalSideBySideLayout.stories.tsx");const breakdown_do_namespaceObject=__webpack_require__.p+"static/media/breakdown-do.5b12fac6.png",breakdown_dont_namespaceObject=__webpack_require__.p+"static/media/breakdown-dont.1a4ae72d.png",columns_do_namespaceObject=__webpack_require__.p+"static/media/columns-do.8317ce59.png",columns_dont_namespaceObject=__webpack_require__.p+"static/media/columns-dont.c1086cbc.png",wizard_do_namespaceObject=__webpack_require__.p+"static/media/wizard-do.34eb5f20.png",wizard_dont_namespaceObject=__webpack_require__.p+"static/media/wizard-dont.21abe972.png";var Modal_stories_module=__webpack_require__("./src/components/Modal/Modal/__stories__/Modal.stories.module.scss"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),tip=__webpack_require__("../storybook-blocks/dist/src/components/tip/tip.js"),storybook_link=__webpack_require__("../storybook-blocks/dist/src/components/storybook-link/storybook-link.js"),SideBySideModalTip=function SideBySideModalTip(){return(0,jsx_runtime.jsx)("div",{style:{marginTop:40},children:(0,jsx_runtime.jsxs)(tip.A,{children:["If your content is scrollable consider using"," ",(0,jsx_runtime.jsx)(storybook_link.A,{page:"Components/Modal [New]/Basic modal",size:storybook_link.A.sizes.SMALL,children:"Basic modal"}),"."]})})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3",img:"img"},(0,lib.RP)(),props.components),{Canvas,PropsTable,UsageGuidelines,StorybookLink,ComponentRules,RelatedComponents}=_components;return Canvas||_missingMdxReference("Canvas",!0),ComponentRules||_missingMdxReference("ComponentRules",!0),PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),StorybookLink||_missingMdxReference("StorybookLink",!0),UsageGuidelines||_missingMdxReference("UsageGuidelines",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ModalSideBySideLayout_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"side-by-side-modal",children:"Side-by-side modal"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"do's-and-don'ts",children:"Do's and dont's"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The Side-by-side Modal offers a layout with two distinct sections. The left side is reserved for providing information or inputs, like text fields or dropdown. The right side is reserved for visual media that supports the content on the left, like an image that adds context. This layout works best when users need to reference visual elements alongside textual information."}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:ModalSideBySideLayout_stories.Overview}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(UsageGuidelines,{guidelines:["This modal emphasis the balance between the textual inputs and visual media, so one doesn’t overpower the other.","Use when you need to support textual inputs with visual media, like a visual diagram or set of instructions.","Use when users need to compare textual information with visual media, like a preview or data visualization."]}),"\n",(0,jsx_runtime.jsx)(SideBySideModalTip,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"wizard-footer",children:"Wizard footer"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"When multi steps modal, use the ModalFooterWizard."}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:ModalSideBySideLayout_stories.Wizard}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"header-with-extra-icon-button",children:"Header with extra icon button"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:['In case of a need of an icon button in the modal header, you can use our default header "Action slot".\nYou can also use it as a ',(0,jsx_runtime.jsx)(StorybookLink,{page:"Buttons/MenuButton",children:"menu button"})," component."]}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:ModalSideBySideLayout_stories.HeaderWithExtraIconButton}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"animation",children:"Animation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Each modal includes an animation type based on its entrance point, with wizard modals also featuring transition animations. The default is the element trigger animation, which can be replaced with a center pop animation if there's no specific trigger. Transition animation is used exclusively for wizard modals and cannot be changed or removed."}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:ModalSideBySideLayout_stories.Animation}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dos-and-donts",children:"Do's and don'ts"}),"\n",(0,jsx_runtime.jsx)(ComponentRules,{rules:[{componentContainerClassName:Modal_stories_module.A.largeComponentRule,positive:{component:(0,jsx_runtime.jsx)(_components.img,{src:breakdown_do_namespaceObject,alt:"modal without scroll and without much content in left side",style:{maxWidth:"100%"}}),description:"Split up processes with several tasks into distinct steps using our wizard modal footer."},negative:{component:(0,jsx_runtime.jsx)(_components.img,{src:breakdown_dont_namespaceObject,alt:"modal with scroll and with a lot of content in left side",style:{maxWidth:"100%"}}),description:"Don't use scrolling for side-by-side modals in case of several tasks."}},{componentContainerClassName:Modal_stories_module.A.largeComponentRule,positive:{component:(0,jsx_runtime.jsx)(_components.img,{src:columns_do_namespaceObject,alt:"modal with side by side layout without media content in its right side",style:{maxWidth:"100%"}}),description:"The right side of the modal is for media content. You can remove it if you don't need it."},negative:{component:(0,jsx_runtime.jsx)(_components.img,{src:columns_dont_namespaceObject,alt:"modal with side by side layout with extra content in its right side",style:{maxWidth:"100%"}}),description:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Don't turn this modal into a two-column grid. If you don't need an image, consider using the"," ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Components/Modal [New]/Basic modal",children:"basic modal"}),"."]})}},{componentContainerClassName:Modal_stories_module.A.largeComponentRule,positive:{component:(0,jsx_runtime.jsx)(_components.img,{src:wizard_do_namespaceObject,alt:"modal with a wizard footer with the last button enabled",style:{maxWidth:"100%"}}),description:"When using a wizard modal, allow the user to complete the process and close the modal by leaving the last CTA enabled. "},negative:{component:(0,jsx_runtime.jsx)(_components.img,{src:wizard_dont_namespaceObject,alt:"modal with a wizard footer with the last button disabled",style:{maxWidth:"100%"}}),description:"Don’t finish the Tipseen wizard process with a disabled CTA. Also, when in first step, make sure the “Back” button is disabled."}}]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.AT,component_description_map.mB,component_description_map.XN]})]})}SideBySideModalTip.displayName="SideBySideModalTip";const ModalSideBySideLayout=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"./src/components/Modal/Modal/__stories__/Modal.stories.helpers.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DG:()=>ModalTip,p1:()=>withOpenedModalPreview});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_Button_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Button/Button.tsx"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../storybook-blocks/dist/src/components/tip/tip.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../storybook-blocks/dist/src/components/storybook-link/storybook-link.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Modal_stories_module_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Modal/Modal/__stories__/Modal.stories.module.scss"),_helpers_typesciptCssModulesHelper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/helpers/typesciptCssModulesHelper.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var OpenedModalPreview=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref,ref){var onOpenModalClick=_ref.onOpenModalClick,isDocsView=_ref.isDocsView,_ref$size=_ref.size,size=void 0===_ref$size?"small":_ref$size,modal=_ref.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",_objectSpread(_objectSpread({className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Modal_stories_module_scss__WEBPACK_IMPORTED_MODULE_2__.A.preview,_defineProperty({},(0,_helpers_typesciptCssModulesHelper__WEBPACK_IMPORTED_MODULE_4__.g)(_Modal_stories_module_scss__WEBPACK_IMPORTED_MODULE_2__.A,size),isDocsView)),ref},isDocsView&&{"data-no-autofocus":!0}),{},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_5__.A,{onClick:onOpenModalClick,children:"Open Modal"}),modal]}))})),useRemoveModalScrollLock=function useRemoveModalScrollLock(show,isDocsView){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){show&&document.body.attributes.getNamedItem("data-scroll-locked")&&isDocsView&&requestAnimationFrame((function(){document.body.attributes.removeNamedItem("data-scroll-locked"),document.documentElement.addEventListener("wheel",(function(e){e.stopImmediatePropagation()}),!0)}))}),[show,isDocsView])};function withOpenedModalPreview(Story,_ref2){var size=_ref2.size,isDocsView=_ref2.isDocsView,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),2),show=_useState2[0],setShow=_useState2[1],container=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return useRemoveModalScrollLock(show,isDocsView),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(OpenedModalPreview,{size,onOpenModalClick:function onOpenModalClick(){return setShow(!0)},isDocsView,ref:function ref(element){container.current=isDocsView?element:document.body},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{show,setShow,container})})}withOpenedModalPreview.displayName="withOpenedModalPreview";var ModalTip=function ModalTip(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{marginTop:40},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__.A,{children:["Since the modal is used for short and non-frequent tasks, consider using the main flow for common tasks. For creating a popover positioned next to other components, like customized menus, check out our"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_7__.A,{page:"Popover/Dialog",size:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_7__.A.sizes.SMALL,children:"Dialog"})," ","component."]})})};ModalTip.displayName="ModalTip";try{OpenedModalPreview.displayName="OpenedModalPreview",OpenedModalPreview.__docgenInfo={description:"",displayName:"OpenedModalPreview",props:{onOpenModalClick:{defaultValue:null,description:"",name:"onOpenModalClick",required:!0,type:{name:"() => void"}},isDocsView:{defaultValue:null,description:"",name:"isDocsView",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/Modal/__stories__/Modal.stories.helpers.tsx#OpenedModalPreview"]={docgenInfo:OpenedModalPreview.__docgenInfo,name:"OpenedModalPreview",path:"src/components/Modal/Modal/__stories__/Modal.stories.helpers.tsx#OpenedModalPreview"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TransitionView/TransitionView.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TransitionView_TransitionView});var react=__webpack_require__("../../node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),AnimatePresence=__webpack_require__("../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),test_ids_utils=__webpack_require__("./src/tests/test-ids-utils.ts"),constants=__webpack_require__("./src/tests/constants.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),TransitionView_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/TransitionView/TransitionView.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TransitionView_module.A,options);const TransitionView_TransitionView_module=TransitionView_module.A&&TransitionView_module.A.locals?TransitionView_module.A.locals:void 0;var motion=__webpack_require__("../../node_modules/framer-motion/dist/es/render/dom/motion.mjs"),slideAnimationVariants={initial:function initial(direction){return{x:"forward"===direction?"3%":"-3%"}},enter:{x:0}},slideAnimationTransition={duration:.25,ease:[0,0,.4,1]},SlideTransition_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/SlideTransition/SlideTransition.module.scss"),SlideTransition_module_options={};SlideTransition_module_options.styleTagTransform=styleTagTransform_default(),SlideTransition_module_options.setAttributes=setAttributesWithoutAttributes_default(),SlideTransition_module_options.insert=insertBySelector_default().bind(null,"head"),SlideTransition_module_options.domAPI=styleDomAPI_default(),SlideTransition_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(SlideTransition_module.A,SlideTransition_module_options);const SlideTransition_SlideTransition_module=SlideTransition_module.A&&SlideTransition_module.A.locals?SlideTransition_module.A.locals:void 0;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),SlideTransition=(0,react.forwardRef)((function(_ref,ref){var direction=_ref.direction,style=_ref.style,children=_ref.children,className=_ref.className;return(0,jsx_runtime.jsx)(motion.P.div,{ref,custom:direction,variants:slideAnimationVariants,initial:"initial",animate:"enter",transition:slideAnimationTransition,className:classnames_default()(SlideTransition_SlideTransition_module.slide,className),style,children})}));const SlideTransition_SlideTransition=SlideTransition;try{SlideTransition.displayName="SlideTransition",SlideTransition.__docgenInfo={description:"",displayName:"SlideTransition",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"forward"'},{value:'"backward"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SlideTransition/SlideTransition.tsx#SlideTransition"]={docgenInfo:SlideTransition.__docgenInfo,name:"SlideTransition",path:"src/components/SlideTransition/SlideTransition.tsx#SlideTransition"})}catch(__react_docgen_typescript_loader_error){}var TransitionView=(0,react.forwardRef)((function(_ref,ref){var activeStep=_ref.activeStep,direction=_ref.direction,id=_ref.id,className=_ref.className,dataTestId=_ref["data-testid"],children=_ref.children;return(0,jsx_runtime.jsx)("div",{id,className:classnames_default()(TransitionView_TransitionView_module.slideshow,className),"data-testid":dataTestId||(0,test_ids_utils.G)(constants.w.TRANSITION_VIEW,id),ref,children:(0,jsx_runtime.jsx)(AnimatePresence.N,{initial:!1,custom:direction,exitBeforeEnter:!0,children:(0,jsx_runtime.jsx)(SlideTransition_SlideTransition,{direction,children:children[activeStep]},activeStep)})})}));const TransitionView_TransitionView=TransitionView;try{TransitionView.displayName="TransitionView",TransitionView.__docgenInfo={description:"",displayName:"TransitionView",props:{activeStep:{defaultValue:null,description:"",name:"activeStep",required:!0,type:{name:"number"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"forward"'},{value:'"backward"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TransitionView/TransitionView.tsx#TransitionView"]={docgenInfo:TransitionView.__docgenInfo,name:"TransitionView",path:"src/components/TransitionView/TransitionView.tsx#TransitionView"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/Modal/Modal/__stories__/Modal.stories.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Modal-stories-module_largeComponentRule{height:fit-content !important;width:fit-content;padding:var(--sb-spacing-large)}.Modal-stories-module_preview{padding-inline-start:32px;padding-block-start:40px;height:100vh;width:100%;container-type:inline-size}.Modal-stories-module_preview.Modal-stories-module_small{height:360px}.Modal-stories-module_preview.Modal-stories-module_medium{height:416px}.Modal-stories-module_preview.Modal-stories-module_large{height:530px}.Modal-stories-module_preview [aria-modal][role=dialog][class*=sizeSmall]{--modal-max-height: 50%;--modal-width: 480px}.Modal-stories-module_preview [aria-modal][role=dialog][class*=sizeMedium]{--modal-max-height: 80%;--modal-width: 580px}.Modal-stories-module_preview [aria-modal][role=dialog][class*=sizeLarge]{--modal-max-height: 80%;--modal-width: 840px}","",{version:3,sources:["webpack://./src/components/Modal/Modal/__stories__/Modal.stories.module.scss"],names:[],mappings:"AAAA,yCACE,6BAAA,CACA,iBAAA,CACA,+BAAA,CAGF,8BACE,yBAAA,CACA,wBAAA,CACA,YAAA,CACA,UAAA,CACA,0BAAA,CAEA,yDACE,YAAA,CAGF,0DACE,YAAA,CAGF,yDACE,YAAA,CASA,0EACE,uBAAA,CACA,oBAAA,CAGF,2EACE,uBAAA,CACA,oBAAA,CAGF,0EACE,uBAAA,CACA,oBAAA",sourcesContent:['.largeComponentRule {\n  height: fit-content !important;\n  width: fit-content;\n  padding: var(--sb-spacing-large);\n}\n\n.preview {\n  padding-inline-start: 32px;\n  padding-block-start: 40px;\n  height: 100vh;\n  width: 100%;\n  container-type: inline-size;\n\n  &.small {\n    height: 360px;\n  }\n\n  &.medium {\n    height: 416px;\n  }\n\n  &.large {\n    height: 530px;\n  }\n\n  /**\n    * The following css is to override the default dimensions of the modal component\n    * this is necessary because in the documentation, we\'re "trapping" the modal component inside the preview component\n    * so the modal component width and height be relative to the preview component and not the viewport\n   */\n  [aria-modal][role="dialog"] {\n    &[class*="sizeSmall"] {\n      --modal-max-height: 50%;\n      --modal-width: 480px;\n    }\n\n    &[class*="sizeMedium"] {\n      --modal-max-height: 80%;\n      --modal-width: 580px;\n    }\n\n    &[class*="sizeLarge"] {\n      --modal-max-height: 80%;\n      --modal-width: 840px;\n    }\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={largeComponentRule:"Modal-stories-module_largeComponentRule",preview:"Modal-stories-module_preview",small:"Modal-stories-module_small",medium:"Modal-stories-module_medium",large:"Modal-stories-module_large"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/SlideTransition/SlideTransition.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".SlideTransition-module_slide{height:100%;width:100%}","",{version:3,sources:["webpack://./src/components/SlideTransition/SlideTransition.module.scss"],names:[],mappings:"AAAA,8BACE,WAAA,CACA,UAAA",sourcesContent:[".slide {\n  height: 100%;\n  width: 100%;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={slide:"SlideTransition-module_slide"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/TransitionView/TransitionView.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".TransitionView-module_slideshow{width:100%;height:100%;min-height:0}","",{version:3,sources:["webpack://./src/components/TransitionView/TransitionView.module.scss"],names:[],mappings:"AAAA,iCACE,UAAA,CACA,WAAA,CACA,YAAA",sourcesContent:[".slideshow {\n  width: 100%;\n  height: 100%;\n  min-height: 0;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={slideshow:"TransitionView-module_slideshow"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Modal/Modal/__stories__/Modal.stories.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_16_use_3_Modal_stories_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/Modal/Modal/__stories__/Modal.stories.module.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_16_use_3_Modal_stories_module_scss__WEBPACK_IMPORTED_MODULE_6__.A,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_16_use_3_Modal_stories_module_scss__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_16_use_3_Modal_stories_module_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals?_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_16_use_3_Modal_stories_module_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals:void 0}}]);