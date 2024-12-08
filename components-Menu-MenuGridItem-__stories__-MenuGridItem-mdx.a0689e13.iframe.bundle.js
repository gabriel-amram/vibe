"use strict";(globalThis.webpackChunk_vibe_core=globalThis.webpackChunk_vibe_core||[]).push([[2357,2783],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Menu/MenuGridItem/__stories__/MenuGridItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InsideSubMenus:()=>InsideSubMenus,Overview:()=>Overview,WithDisabledStates:()=>WithDisabledStates,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MenuGridItem_stories_MenuGridItem_stories});__webpack_require__("../../node_modules/react/index.js");var createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),Menu=__webpack_require__("./src/components/Menu/Menu/Menu.tsx"),MenuItem=__webpack_require__("./src/components/Menu/MenuItem/MenuItem.tsx"),MenuTitle=__webpack_require__("./src/components/Menu/MenuTitle/MenuTitle.tsx"),DialogContentContainer=__webpack_require__("./src/components/DialogContentContainer/DialogContentContainer.tsx"),useGridKeyboardNavigationContext_stories_helpers=__webpack_require__("./src/components/GridKeyboardNavigationContext/__stories__/useGridKeyboardNavigationContext.stories.helpers.tsx"),Favorite=__webpack_require__("../icons/dist/react/Favorite.js"),Activity=__webpack_require__("../icons/dist/react/Activity.js"),Feedback=__webpack_require__("../icons/dist/react/Feedback.js"),Code=__webpack_require__("../icons/dist/react/Code.js"),Invite=__webpack_require__("../icons/dist/react/Invite.js"),Settings=__webpack_require__("../icons/dist/react/Settings.js"),MenuGridItem=__webpack_require__("./src/components/Menu/MenuGridItem/MenuGridItem.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),MenuGridItem_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/Menu/MenuGridItem/__stories__/MenuGridItem.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(MenuGridItem_stories.A,options);MenuGridItem_stories.A&&MenuGridItem_stories.A.locals&&MenuGridItem_stories.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var metaSettings=(0,createStoryMetaSettingsDecorator.B)({component:MenuGridItem.A});const MenuGridItem_stories_MenuGridItem_stories={parameters:{storySource:{source:'import React from "react";\nimport { createStoryMetaSettingsDecorator } from "../../../../storybook";\nimport { DialogContentContainer, Menu, MenuItem, MenuTitle } from "../../..";\nimport { DummyNavigableGrid } from "../../../GridKeyboardNavigationContext/__stories__/useGridKeyboardNavigationContext.stories.helpers";\nimport { Activity, Code, Favorite, Feedback, Invite, Settings } from "@vibe/icons";\nimport MenuGridItem, { MenuGridItemProps } from "../MenuGridItem";\nimport "./MenuGridItem.stories.scss";\n\nconst metaSettings = createStoryMetaSettingsDecorator({\n  component: MenuGridItem\n});\n\nexport default {\n  title: "Components/Menu/MenuGridItem",\n  component: MenuGridItem,\n  argTypes: metaSettings.argTypes,\n  decorators: metaSettings.decorators\n};\n\nconst menuGridItemTemplate = (args: MenuGridItemProps) => (\n  <Menu>\n    <MenuItem title="This is a menu button" />\n    <MenuTitle caption="Try keyboard navigation :)" />\n    <MenuGridItem {...args}>\n      <DummyNavigableGrid itemsCount={8} numberOfItemsInLine={3} withoutBorder />\n    </MenuGridItem>\n  </Menu>\n);\n\nexport const Overview = {\n  render: menuGridItemTemplate.bind({}),\n  name: "Overview"\n};\n\nexport const WithDisabledStates = {\n  render: () => (\n    <DialogContentContainer>\n      <Menu>\n        <MenuTitle caption="This grid has disabled items" />\n        <MenuGridItem>\n          <DummyNavigableGrid itemsCount={4} numberOfItemsInLine={2} disabledIndexes={[2]} withoutBorder />\n        </MenuGridItem>\n        <MenuItem title="I\'m a regular item" />\n        <MenuTitle caption="The grid below is disabled entirely" />\n        <MenuGridItem disabled>\n          <DummyNavigableGrid itemsCount={4} numberOfItemsInLine={2} withoutBorder />\n        </MenuGridItem>\n      </Menu>\n    </DialogContentContainer>\n  ),\n  name: "With disabled states"\n};\n\nexport const InsideSubMenus = {\n  render: () => (\n    <div className="storybook-menu-grid-item-long-story">\n      <DialogContentContainer>\n        <Menu>\n          <MenuItem title="Menu item" icon={Favorite} />\n          <MenuTitle caption="Top level grid item" />\n          <MenuItem title="Hover me to see the sub menu" icon={Activity}>\n            <Menu>\n              <MenuItem icon={Feedback} title="More info" />\n              <MenuTitle caption="1st level grid item" />\n              <MenuGridItem>\n                <DummyNavigableGrid itemsCount={6} numberOfItemsInLine={3} withoutBorder />\n              </MenuGridItem>\n              <MenuItem icon={Code} title="Hover me to see the sub menu">\n                <Menu>\n                  <MenuTitle caption="2nd level grid item" />\n                  <MenuGridItem>\n                    <DummyNavigableGrid itemsCount={6} numberOfItemsInLine={3} withoutBorder />\n                  </MenuGridItem>\n                  <MenuItem icon={Invite} title="Another sub sub item" />\n                  <MenuItem icon={Settings} title="More sub sub items" />\n                </Menu>\n              </MenuItem>\n            </Menu>\n          </MenuItem>\n          <MenuItem title="Another item" icon={Settings} />\n        </Menu>\n      </DialogContentContainer>\n    </div>\n  ),\n  name: "Inside sub-menus"\n};\n',locationsMap:{overview:{startLoc:{col:24,line:30},endLoc:{col:1,line:33},startBody:{col:24,line:30},endBody:{col:1,line:33}},"with-disabled-states":{startLoc:{col:34,line:35},endLoc:{col:1,line:52},startBody:{col:34,line:35},endBody:{col:1,line:52}},"inside-sub-menus":{startLoc:{col:30,line:54},endLoc:{col:1,line:86},startBody:{col:30,line:54},endBody:{col:1,line:86}}}}},title:"Components/Menu/MenuGridItem",component:MenuGridItem.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var menuGridItemTemplate=function menuGridItemTemplate(args){return(0,jsx_runtime.jsxs)(Menu.A,{children:[(0,jsx_runtime.jsx)(MenuItem.A,{title:"This is a menu button"}),(0,jsx_runtime.jsx)(MenuTitle.A,{caption:"Try keyboard navigation :)"}),(0,jsx_runtime.jsx)(MenuGridItem.A,_objectSpread(_objectSpread({},args),{},{children:(0,jsx_runtime.jsx)(useGridKeyboardNavigationContext_stories_helpers.i,{itemsCount:8,numberOfItemsInLine:3,withoutBorder:!0})}))]})};menuGridItemTemplate.displayName="menuGridItemTemplate";var Overview={render:menuGridItemTemplate.bind({}),name:"Overview"},WithDisabledStates={render:function render(){return(0,jsx_runtime.jsx)(DialogContentContainer.A,{children:(0,jsx_runtime.jsxs)(Menu.A,{children:[(0,jsx_runtime.jsx)(MenuTitle.A,{caption:"This grid has disabled items"}),(0,jsx_runtime.jsx)(MenuGridItem.A,{children:(0,jsx_runtime.jsx)(useGridKeyboardNavigationContext_stories_helpers.i,{itemsCount:4,numberOfItemsInLine:2,disabledIndexes:[2],withoutBorder:!0})}),(0,jsx_runtime.jsx)(MenuItem.A,{title:"I'm a regular item"}),(0,jsx_runtime.jsx)(MenuTitle.A,{caption:"The grid below is disabled entirely"}),(0,jsx_runtime.jsx)(MenuGridItem.A,{disabled:!0,children:(0,jsx_runtime.jsx)(useGridKeyboardNavigationContext_stories_helpers.i,{itemsCount:4,numberOfItemsInLine:2,withoutBorder:!0})})]})})},name:"With disabled states"},InsideSubMenus={render:function render(){return(0,jsx_runtime.jsx)("div",{className:"storybook-menu-grid-item-long-story",children:(0,jsx_runtime.jsx)(DialogContentContainer.A,{children:(0,jsx_runtime.jsxs)(Menu.A,{children:[(0,jsx_runtime.jsx)(MenuItem.A,{title:"Menu item",icon:Favorite.A}),(0,jsx_runtime.jsx)(MenuTitle.A,{caption:"Top level grid item"}),(0,jsx_runtime.jsx)(MenuItem.A,{title:"Hover me to see the sub menu",icon:Activity.A,children:(0,jsx_runtime.jsxs)(Menu.A,{children:[(0,jsx_runtime.jsx)(MenuItem.A,{icon:Feedback.A,title:"More info"}),(0,jsx_runtime.jsx)(MenuTitle.A,{caption:"1st level grid item"}),(0,jsx_runtime.jsx)(MenuGridItem.A,{children:(0,jsx_runtime.jsx)(useGridKeyboardNavigationContext_stories_helpers.i,{itemsCount:6,numberOfItemsInLine:3,withoutBorder:!0})}),(0,jsx_runtime.jsx)(MenuItem.A,{icon:Code.A,title:"Hover me to see the sub menu",children:(0,jsx_runtime.jsxs)(Menu.A,{children:[(0,jsx_runtime.jsx)(MenuTitle.A,{caption:"2nd level grid item"}),(0,jsx_runtime.jsx)(MenuGridItem.A,{children:(0,jsx_runtime.jsx)(useGridKeyboardNavigationContext_stories_helpers.i,{itemsCount:6,numberOfItemsInLine:3,withoutBorder:!0})}),(0,jsx_runtime.jsx)(MenuItem.A,{icon:Invite.A,title:"Another sub sub item"}),(0,jsx_runtime.jsx)(MenuItem.A,{icon:Settings.A,title:"More sub sub items"})]})})]})}),(0,jsx_runtime.jsx)(MenuItem.A,{title:"Another item",icon:Settings.A})]})})})},name:"Inside sub-menus"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: menuGridItemTemplate.bind({}),\n  name: "Overview"\n}',...Overview.parameters?.docs?.source}}},WithDisabledStates.parameters={...WithDisabledStates.parameters,docs:{...WithDisabledStates.parameters?.docs,source:{originalSource:'{\n  render: () => <DialogContentContainer>\n      <Menu>\n        <MenuTitle caption="This grid has disabled items" />\n        <MenuGridItem>\n          <DummyNavigableGrid itemsCount={4} numberOfItemsInLine={2} disabledIndexes={[2]} withoutBorder />\n        </MenuGridItem>\n        <MenuItem title="I\'m a regular item" />\n        <MenuTitle caption="The grid below is disabled entirely" />\n        <MenuGridItem disabled>\n          <DummyNavigableGrid itemsCount={4} numberOfItemsInLine={2} withoutBorder />\n        </MenuGridItem>\n      </Menu>\n    </DialogContentContainer>,\n  name: "With disabled states"\n}',...WithDisabledStates.parameters?.docs?.source}}},InsideSubMenus.parameters={...InsideSubMenus.parameters,docs:{...InsideSubMenus.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="storybook-menu-grid-item-long-story">\n      <DialogContentContainer>\n        <Menu>\n          <MenuItem title="Menu item" icon={Favorite} />\n          <MenuTitle caption="Top level grid item" />\n          <MenuItem title="Hover me to see the sub menu" icon={Activity}>\n            <Menu>\n              <MenuItem icon={Feedback} title="More info" />\n              <MenuTitle caption="1st level grid item" />\n              <MenuGridItem>\n                <DummyNavigableGrid itemsCount={6} numberOfItemsInLine={3} withoutBorder />\n              </MenuGridItem>\n              <MenuItem icon={Code} title="Hover me to see the sub menu">\n                <Menu>\n                  <MenuTitle caption="2nd level grid item" />\n                  <MenuGridItem>\n                    <DummyNavigableGrid itemsCount={6} numberOfItemsInLine={3} withoutBorder />\n                  </MenuGridItem>\n                  <MenuItem icon={Invite} title="Another sub sub item" />\n                  <MenuItem icon={Settings} title="More sub sub items" />\n                </Menu>\n              </MenuItem>\n            </Menu>\n          </MenuItem>\n          <MenuItem title="Another item" icon={Settings} />\n        </Menu>\n      </DialogContentContainer>\n    </div>,\n  name: "Inside sub-menus"\n}',...InsideSubMenus.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","WithDisabledStates","InsideSubMenus"]},"./src/components/Menu/MenuGridItem/__stories__/MenuGridItem.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MenuGridItem});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),tip=__webpack_require__("../storybook-blocks/dist/src/components/tip/tip.js"),TipOtherMenuItemComponents=function TipOtherMenuItemComponents(){return(0,jsx_runtime.jsxs)(tip.A,{title:"Looking for a single button in a menu?",children:["Check the ",(0,jsx_runtime.jsx)("code",{children:"MenuItem"})," or ",(0,jsx_runtime.jsx)("code",{children:"MenuItemButton"})," components"]})};TipOtherMenuItemComponents.displayName="TipOtherMenuItemComponents";var MenuGridItem_stories=__webpack_require__("./src/components/Menu/MenuGridItem/__stories__/MenuGridItem.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code"},(0,lib.RP)(),props.components),{PropsTable,UsageGuidelines,RelatedComponents}=_components;return PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),UsageGuidelines||_missingMdxReference("UsageGuidelines",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:MenuGridItem_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"menugriditem",children:"MenuGridItem"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("code",{children:"MenuGridItem"})," can be used to place a grid-like, keyboard navigable container, inside a Menu. The user will be\nable to interact and navigate into and from the grid in a natural way."]}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:MenuGridItem_stories.Overview}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Since ",(0,jsx_runtime.jsx)("code",{children:"MenuGridItem"})," should be used only inside a ",(0,jsx_runtime.jsx)("code",{children:"Menu"}),", almost all of the props below will be supplied automatically by the wrapping ",(0,jsx_runtime.jsx)("code",{children:"Menu"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"import",children:"Import"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'import { MenuGridItem } from "@vibe/core";\n'})}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(UsageGuidelines,{guidelines:["MenuGridItem should always be used inside a Menu component","A MenuGridItem can only have a single child","The child of MenuGridItem should use the useGridKeyboardNavigation hook","The child should use forwardRef, and have the same referenced element for useGridKeyboardNavigation.",(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Also, the referenced element should have a ",(0,jsx_runtime.jsx)(_components.code,{children:"tabIndex"})," value (probably -1)."]}),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["MenuGridItem will pass the ",(0,jsx_runtime.jsx)(_components.code,{children:"disabled"})," prop to the child. The child should handle this prop and disable interactions."]}),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:['To support a "disabled" mode, the child must have a prop named ',(0,jsx_runtime.jsx)(_components.code,{children:"disabled"})," (it will be automatically detected)."]}),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["NOTE: Due to technical limitations, ",(0,jsx_runtime.jsx)(_components.code,{children:"useDocumentEventListeners"})," is not fully supported."]})]}),"\n",(0,jsx_runtime.jsx)(TipOtherMenuItemComponents,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-disabled-states",children:"With disabled states"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'Disabled items will be "skipped" when using keyboard navigation. Try it for yourself!'}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:MenuGridItem_stories.WithDisabledStates}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"inside-sub-menus",children:"Inside sub-menus"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Keyboard navigation is also supported in sub-menus"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:MenuGridItem_stories.InsideSubMenus}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.sc,component_description_map.Rd]})]})}const MenuGridItem=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/Menu/MenuGridItem/__stories__/MenuGridItem.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".storybook-menu-grid-item-long-story{height:500px}","",{version:3,sources:["webpack://./src/components/Menu/MenuGridItem/__stories__/MenuGridItem.stories.scss"],names:[],mappings:"AAAA,qCACE,YAAA",sourcesContent:[".storybook-menu-grid-item-long-story {\n  height: 500px;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);