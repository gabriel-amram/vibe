"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[2549],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/storybook/stand-alone-documentaion/spacing/spacing.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>spacing_stories,spacingSizes:()=>spacingSizes});__webpack_require__("../../node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),spacing_component=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/storybook/stand-alone-documentaion/spacing/spacing-sizes/spacing-component/spacing-component.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(spacing_component.A,options);spacing_component.A&&spacing_component.A.locals&&spacing_component.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),SpacingComponent=function SpacingComponent(_ref){var title=_ref.title,sizeInPx=_ref.sizeInPx,spacingVariableName=_ref.spacingVariableName;return(0,jsx_runtime.jsxs)("div",{className:"spacing-component",children:[(0,jsx_runtime.jsx)("div",{className:classnames_default()(spacingVariableName,"spacing-component-visualizer")}),(0,jsx_runtime.jsxs)("div",{className:"spacing-component_description",children:[(0,jsx_runtime.jsxs)("div",{className:"spacing-component_title-container",children:[(0,jsx_runtime.jsx)("span",{className:"spacing-component_title",children:title}),(0,jsx_runtime.jsx)("span",{className:"spacing-component_px-size",children:sizeInPx})]}),(0,jsx_runtime.jsx)("span",{className:"spacing-component_variable-name",children:"var(--".concat(spacingVariableName,")")})]})]})};SpacingComponent.displayName="SpacingComponent";const spacing_sizes_spacing_component_spacing_component=SpacingComponent;SpacingComponent.__docgenInfo={description:"",methods:[],displayName:"SpacingComponent"};var spacing_sizes=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/storybook/stand-alone-documentaion/spacing/spacing-sizes/spacing-sizes.scss"),spacing_sizes_options={};spacing_sizes_options.styleTagTransform=styleTagTransform_default(),spacing_sizes_options.setAttributes=setAttributesWithoutAttributes_default(),spacing_sizes_options.insert=insertBySelector_default().bind(null,"head"),spacing_sizes_options.domAPI=styleDomAPI_default(),spacing_sizes_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(spacing_sizes.A,spacing_sizes_options);spacing_sizes.A&&spacing_sizes.A.locals&&spacing_sizes.A.locals;var SpacingSizes=function SpacingSizes(){return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-spacing-sizes",children:[(0,jsx_runtime.jsx)(spacing_sizes_spacing_component_spacing_component,{title:"XS",sizeInPx:"4px",spacingVariableName:"spacing-xs"}),(0,jsx_runtime.jsx)(spacing_sizes_spacing_component_spacing_component,{title:"S",sizeInPx:"8px",spacingVariableName:"spacing-small"}),(0,jsx_runtime.jsx)(spacing_sizes_spacing_component_spacing_component,{title:"MD",sizeInPx:"16px",spacingVariableName:"spacing-medium"}),(0,jsx_runtime.jsx)(spacing_sizes_spacing_component_spacing_component,{title:"L",sizeInPx:"24px",spacingVariableName:"spacing-large"}),(0,jsx_runtime.jsx)(spacing_sizes_spacing_component_spacing_component,{title:"XL",sizeInPx:"32px",spacingVariableName:"spacing-xl"}),(0,jsx_runtime.jsx)(spacing_sizes_spacing_component_spacing_component,{title:"XXL",sizeInPx:"48px",spacingVariableName:"spacing-xxl"}),(0,jsx_runtime.jsx)(spacing_sizes_spacing_component_spacing_component,{title:"XXXL",sizeInPx:"64px",spacingVariableName:"spacing-xxxl"})]})};SpacingSizes.displayName="SpacingSizes",SpacingSizes.__docgenInfo={description:"",methods:[],displayName:"SpacingSizes"};var component_name_decorator=__webpack_require__("./src/storybook/components/component-name/component-name-decorator.jsx"),frame_frame=__webpack_require__("../storybook-blocks/dist/src/components/frame/frame.js");const menuExample_namespaceObject=__webpack_require__.p+"static/media/menuExample.65083fb6.png",toolbarExample_namespaceObject=__webpack_require__.p+"static/media/toolbarExample.05fe91ba.png",tipseenExample_namespaceObject=__webpack_require__.p+"static/media/tipseenExample.5ae8bf69.png";var component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),tip=__webpack_require__("../storybook-blocks/dist/src/components/tip/tip.js"),TipApplyingSpacing=function TipApplyingSpacing(){return(0,jsx_runtime.jsx)(tip.A,{title:"Applying spacing",children:"Elements with more spacing around them perceived as more important because they get more focus on the page, while small spacing makes components look stacked and not stand out."})};TipApplyingSpacing.displayName="TipApplyingSpacing";var spacing=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/storybook/stand-alone-documentaion/spacing/spacing.scss"),spacing_options={};spacing_options.styleTagTransform=styleTagTransform_default(),spacing_options.setAttributes=setAttributesWithoutAttributes_default(),spacing_options.insert=insertBySelector_default().bind(null,"head"),spacing_options.domAPI=styleDomAPI_default(),spacing_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(spacing.A,spacing_options);spacing.A&&spacing.A.locals&&spacing.A.locals;function _createMdxContent(props){const _components=Object.assign({ul:"ul",li:"li",a:"a",h2:"h2",p:"p"},(0,lib.RP)(),props.components),{UsageGuidelines,RelatedComponents}=_components;return RelatedComponents||_missingMdxReference("RelatedComponents",!0),UsageGuidelines||_missingMdxReference("UsageGuidelines",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Foundations/Spacing"}),"\n",(0,jsx_runtime.jsx)(component_name_decorator.o,{withFoundationBackground:!0,children:"Spacing"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#spacing-sizes",children:"Spacing sizes"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage-and-examples",children:"Usage and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#up-next",children:"Up next"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Positioning UI should be with taught including the empty space between components.\nThis is what creates relationships and hierarchy withing the visual controls."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"spacing-sizes",children:"Spacing sizes"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Using the right sizes will create consistency and hierarchy in user interface."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Spacing sizes",children:(0,jsx_runtime.jsx)(SpacingSizes,{})})}),"\n",(0,jsx_runtime.jsx)(TipApplyingSpacing,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage-and-examples",children:"Usage and examples"}),"\n",(0,jsx_runtime.jsx)(UsageGuidelines,{guidelines:["You can double the sizes to create bigger spacings","Stay consistent with paddings and sizes across different UI components","Align all the elements to the same spacing within the components or a page"]}),"\n",(0,jsx_runtime.jsx)(frame_frame.A,{className:"monday-storybook-spacing_image-container",children:(0,jsx_runtime.jsx)("img",{className:"monday-storybook-spacing_image--menu",src:menuExample_namespaceObject,alt:""})}),"\n",(0,jsx_runtime.jsx)(frame_frame.A,{className:"monday-storybook-spacing_image-container",children:(0,jsx_runtime.jsx)("img",{className:"monday-storybook-spacing_image--toolbar",src:toolbarExample_namespaceObject,alt:""})}),"\n",(0,jsx_runtime.jsx)(frame_frame.A,{className:"monday-storybook-spacing_image-container ",children:(0,jsx_runtime.jsx)("img",{className:"monday-storybook-spacing_image--tipseen",src:tipseenExample_namespaceObject,alt:""})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"up-next",children:"Up next"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.K4,component_description_map.xc,component_description_map.lm]})]})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const spacingSizes=()=>(0,jsx_runtime.jsx)(SpacingSizes,{});spacingSizes.storyName="Spacing sizes",spacingSizes.parameters={storySource:{source:"<SpacingSizes />"}};const componentMeta={title:"Foundations/Spacing",tags:["stories-mdx"],includeStories:["spacingSizes"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const spacing_stories=componentMeta,__namedExportsOrder=["spacingSizes"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/storybook/stand-alone-documentaion/spacing/spacing-sizes/spacing-component/spacing-component.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".spacing-xs{height:var(--sb-spacing-xs)}.spacing-small{height:var(--sb-spacing-small)}.spacing-medium{height:var(--sb-spacing-medium)}.spacing-large{height:var(--sb-spacing-large)}.spacing-xl{height:var(--sb-spacing-xl)}.spacing-xxl{height:var(--sb-spacing-xxl)}.spacing-xxxl{height:var(--sb-spacing-xxxl)}.spacing-component-visualizer{background-color:var(--sb-negative-color-selected);width:75px}.spacing-component{display:flex;width:fit-content;flex-direction:column;margin:0 var(--sb-spacing-medium);align-items:center;justify-content:flex-end}.spacing-component_title-container{display:flex;justify-content:center;padding:var(--sb-spacing-medium) var(--sb-spacing-xs) var(--sb-spacing-medium) var(--sb-spacing-xs);color:var(--sb-primary-text-color);font-size:var(--sb-small-text-font-size)}.spacing-component_description{display:flex;justify-content:flex-end;flex-direction:column}.spacing-component_title{margin-right:var(--sb-spacing-small)}.spacing-component_variable-name{margin:0;font-size:11px;font-weight:500}","",{version:3,sources:["webpack://./src/storybook/stand-alone-documentaion/spacing/spacing-sizes/spacing-component/spacing-component.scss"],names:[],mappings:"AAAA,YACE,2BAAA,CAGF,eACE,8BAAA,CAGF,gBACE,+BAAA,CAGF,eACE,8BAAA,CAGF,YACE,2BAAA,CAGF,aACE,4BAAA,CAGF,cACE,6BAAA,CAGF,8BACE,kDAAA,CACA,UAAA,CAGF,mBACE,YAAA,CACA,iBAAA,CACA,qBAAA,CACA,iCAAA,CACA,kBAAA,CACA,wBAAA,CAEA,mCACE,YAAA,CACA,sBAAA,CACA,mGAAA,CACA,kCAAA,CACA,wCAAA,CAGF,+BACE,YAAA,CACA,wBAAA,CACA,qBAAA,CAGF,yBACE,oCAAA,CAGF,iCACE,QAAA,CACA,cAAA,CACA,eAAA",sourcesContent:[".spacing-xs {\n  height: var(--sb-spacing-xs);\n}\n\n.spacing-small {\n  height: var(--sb-spacing-small);\n}\n\n.spacing-medium {\n  height: var(--sb-spacing-medium);\n}\n\n.spacing-large {\n  height: var(--sb-spacing-large);\n}\n\n.spacing-xl {\n  height: var(--sb-spacing-xl);\n}\n\n.spacing-xxl {\n  height: var(--sb-spacing-xxl);\n}\n\n.spacing-xxxl {\n  height: var(--sb-spacing-xxxl);\n}\n\n.spacing-component-visualizer {\n  background-color: var(--sb-negative-color-selected);\n  width: 75px;\n}\n\n.spacing-component {\n  display: flex;\n  width: fit-content;\n  flex-direction: column;\n  margin: 0 var(--sb-spacing-medium);\n  align-items: center;\n  justify-content: flex-end;\n\n  &_title-container {\n    display: flex;\n    justify-content: center;\n    padding: var(--sb-spacing-medium) var(--sb-spacing-xs) var(--sb-spacing-medium) var(--sb-spacing-xs);\n    color: var(--sb-primary-text-color);\n    font-size: var(--sb-small-text-font-size);\n  }\n\n  &_description {\n    display: flex;\n    justify-content: flex-end;\n    flex-direction: column;\n  }\n\n  &_title {\n    margin-right: var(--sb-spacing-small);\n  }\n\n  &_variable-name {\n    margin: 0;\n    font-size: 11px;\n    font-weight: 500;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/storybook/stand-alone-documentaion/spacing/spacing-sizes/spacing-sizes.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-spacing-sizes{margin:var(--sb-spacing-between-section-items) 0;flex:1;display:grid;grid-template-columns:repeat(auto-fit, minmax(clamp(calc(12.5% - var(--sb-spacing-small)), 120px, 100%), 1fr));column-gap:var(--sb-spacing-small);row-gap:var(--sb-spacing-xl)}.monday-storybook-spacing-sizes>*{margin-right:auto;margin-left:auto}","",{version:3,sources:["webpack://./src/storybook/stand-alone-documentaion/spacing/spacing-sizes/spacing-sizes.scss","webpack://./../style/dist/mixins/_common.scss"],names:[],mappings:"AAOA,gCACE,gDAAA,CACA,MAAA,CC2BA,YAAA,CAUE,8GAAA,CAKA,kCDjDsB,CCkDtB,4BDjDmB,CAQrB,kCACE,iBAAA,CACA,gBAAA",sourcesContent:['@import "~monday-ui-style/dist/mixins";\n\n$spacing-grid-column-gap: var(--sb-spacing-small);\n$spacing-grid-row-gap: var(--sb-spacing-xl);\n$spacing-cell-min-width: $grid-auto-fit-cell-width-small;\n$spacing-grid-cell-array-calc: calc(12.5% - #{$spacing-grid-column-gap});\n\n.monday-storybook-spacing-sizes {\n  margin: var(--sb-spacing-between-section-items) 0;\n  flex: 1;\n\n  > * {\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  @include grid-auto-fit(\n    $grid-column-gap: $spacing-grid-column-gap,\n    $grid-row-gap: $spacing-grid-row-gap,\n    $grid-cell-min-width: $spacing-cell-min-width,\n    $grid-cell-array-calc: $spacing-grid-cell-array-calc\n  );\n}\n','$expand-animation-timing: cubic-bezier(0, 0, 0.35, 1);\n\n// Grid auto fit sizes\n$grid-auto-fit-cell-width-small: 120px;\n$grid-auto-fit-cell-width-medium: 180px;\n$grid-auto-fit-cell-width-large: 240px;\n$grid-auto-fit-cell-width-xl: 300px;\n\n@mixin hidden-element() {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n\n// Grid auto fit\n// - This mixin defines a grid with auto fit repeat cells using min-max funtion.\n// -- This allows grid to accommodate container width without media queries.\n// -- it uses a repeat grid function with auto fix and minmax.\n// -- grid adaptation is due to the min value along with auto-fit and 1fr max value.\n\n// @params:\n// - $grid-gap: null , defines grid "gap" attribute.\n// - $grid-column-gap: null,  defines grid "column-gap" attribute.\n// - $grid-row-gap: null,  defines grid "row-gap" attribute.\n// - $grid-cell-min-width: {mandatory}, defined min value in for grid-template-columns\n// - $grid-cell-array-calc: {mandatory}, defined max num of items using calc\n\n@mixin grid-auto-fit(\n  $grid-gap: null,\n  $grid-column-gap: null,\n  $grid-row-gap: null,\n  $grid-cell-min-width,\n  $grid-cell-array-calc: null,\n  $important: false\n) {\n  display: grid;\n  @if $important {\n    grid-template-columns: repeat(\n      auto-fit,\n      minmax(clamp(#{$grid-cell-array-calc}, #{$grid-cell-min-width}, 100%), 1fr)\n    ) !important;\n    gap: $grid-gap !important;\n    column-gap: $grid-column-gap !important;\n    row-gap: $grid-row-gap !important;\n  } @else {\n    grid-template-columns: repeat(\n      auto-fit,\n      minmax(clamp(#{$grid-cell-array-calc}, #{$grid-cell-min-width}, 100%), 1fr)\n    );\n    gap: $grid-gap;\n    column-gap: $grid-column-gap;\n    row-gap: $grid-row-gap;\n  }\n}\n\n@mixin scroller($width: 4px, $height: 6px, $color: var(--ui-border-color)) {\n  &::-webkit-scrollbar {\n    width: $width;\n    height: $height;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: $color;\n    border-radius: 4px;\n  }\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/storybook/stand-alone-documentaion/spacing/spacing.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-spacing_image-container{margin-top:40px;display:flex;justify-content:center}.monday-storybook-spacing_image--menu{height:334px;width:470px}.monday-storybook-spacing_image--toolbar{height:179px;width:527px}.monday-storybook-spacing_image--tipseen{height:306px;width:439px}","",{version:3,sources:["webpack://./src/storybook/stand-alone-documentaion/spacing/spacing.scss"],names:[],mappings:"AAEI,0CACE,eAAA,CACA,YAAA,CACA,sBAAA,CAGF,sCACE,YAAA,CACA,WAAA,CAGF,yCACE,YAAA,CACA,WAAA,CAGF,yCACE,YAAA,CACA,WAAA",sourcesContent:[".monday-storybook-spacing {\n  &_image {\n    &-container {\n      margin-top: 40px;\n      display: flex;\n      justify-content: center;\n    }\n\n    &--menu {\n      height: 334px;\n      width: 470px;\n    }\n\n    &--toolbar {\n      height: 179px;\n      width: 527px;\n    }\n\n    &--tipseen {\n      height: 306px;\n      width: 439px;\n    }\n  }\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);