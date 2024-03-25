"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[5307,2061],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Toggle/__stories__/toggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Overview:()=>Overview,States:()=>States,TurnOnOffAnAutomation:()=>TurnOnOffAnAutomation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var vibe_storybook_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../storybook-blocks/dist/src/functions/createComponentTemplate.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../storybook-blocks/dist/src/components/multiple-story-elements-wrapper/multiple-story-elements-wrapper.js"),_Toggle__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Toggle/Toggle.tsx"),_storybook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/components/Toggle/__stories__/toggle.stories.scss"),__webpack_require__("../../node_modules/react/jsx-runtime.js")),metaSettings=(0,_storybook__WEBPACK_IMPORTED_MODULE_3__.B)({component:_Toggle__WEBPACK_IMPORTED_MODULE_4__.A,enumPropNamesArray:[],iconPropNamesArray:[],actionPropsArray:["onChange"]});const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/Toggle",component:_Toggle__WEBPACK_IMPORTED_MODULE_4__.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:(0,vibe_storybook_components__WEBPACK_IMPORTED_MODULE_5__.M)(_Toggle__WEBPACK_IMPORTED_MODULE_4__.A).bind({}),name:"Overview"},States={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__.A,{className:"monday-storybook-toggle_column",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toggle__WEBPACK_IMPORTED_MODULE_4__.A,{isDefaultSelected:!1}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toggle__WEBPACK_IMPORTED_MODULE_4__.A,{})]})},name:"States"},Disabled={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__.A,{className:"monday-storybook-toggle_column",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toggle__WEBPACK_IMPORTED_MODULE_4__.A,{isDefaultSelected:!1,disabled:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toggle__WEBPACK_IMPORTED_MODULE_4__.A,{disabled:!0})]})},name:"Disabled"},TurnOnOffAnAutomation={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h5",{children:"Board automations"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toggle__WEBPACK_IMPORTED_MODULE_4__.A,{})]})},name:"Turn on/ off an automation"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: toggleTemplate.bind({}),\n  name: "Overview"\n}',...Overview.parameters?.docs?.source}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:'{\n  render: () => <MultipleStoryElementsWrapper className="monday-storybook-toggle_column">\n      <Toggle isDefaultSelected={false} />\n      <Toggle />\n    </MultipleStoryElementsWrapper>,\n  name: "States"\n}',...States.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => <MultipleStoryElementsWrapper className="monday-storybook-toggle_column">\n      <Toggle isDefaultSelected={false} disabled />\n      <Toggle disabled />\n    </MultipleStoryElementsWrapper>,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}},TurnOnOffAnAutomation.parameters={...TurnOnOffAnAutomation.parameters,docs:{...TurnOnOffAnAutomation.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <h5>Board automations</h5>\n      <Toggle />\n    </>,\n  name: "Turn on/ off an automation"\n}',...TurnOnOffAnAutomation.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","States","Disabled","TurnOnOffAnAutomation"]},"./src/components/Toggle/__stories__/toggle.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>toggle});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),Toggle=__webpack_require__("./src/components/Toggle/Toggle.tsx"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),usage_guidelines=__webpack_require__("../storybook-blocks/dist/src/components/usage-guidelines/usage-guidelines.js"),component_rules=__webpack_require__("../storybook-blocks/dist/src/components/component-rules/component-rules.js"),tip=__webpack_require__("../storybook-blocks/dist/src/components/tip/tip.js"),storybook_link=__webpack_require__("../storybook-blocks/dist/src/components/storybook-link/storybook-link.js"),TipOtherComponents=function TipOtherComponents(){return(0,jsx_runtime.jsxs)(tip.A,{children:["If the user needs to choose an item from a set of options, use"," ",(0,jsx_runtime.jsx)(storybook_link.A,{page:"Inputs/RadioButton",size:storybook_link.A.sizes.SMALL,children:"Radio button"})," ","or"," ",(0,jsx_runtime.jsx)(storybook_link.A,{page:"Inputs/Checkbox",size:storybook_link.A.sizes.SMALL,children:"Checkboxes"})," ","instead."]})};TipOtherComponents.displayName="TipOtherComponents";var toggle_stories=__webpack_require__("./src/components/Toggle/__stories__/toggle.stories.tsx");__webpack_require__("./src/components/Toggle/__stories__/toggle.stories.scss");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3",div:"div"},(0,lib.RP)(),props.components),{PropsTable,StorybookLink,RelatedComponents}=_components;return PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),StorybookLink||_missingMdxReference("StorybookLink",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:toggle_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"toggle",children:"Toggle"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#dos-and-donts",children:"Do’s and don’ts"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Allow users to turn an single option on or off. They are usually used to activate or deactivate a specific setting."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:toggle_stories.Overview})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(usage_guidelines.A,{guidelines:["Use toggles when your intent is to turn something on or off instantly.","Let users know what happens when the toggle is switched by using a tooltip.",(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Toggle can either be selected or not selected. They cannot be in an indeterminate state (unlike"," ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Inputs/Checkbox",children:"checkboxes"}),")."]}),"Use labels such as “on” and “off” or “enable” and “disable” to communicate the state of the toggle."]}),"\n",(0,jsx_runtime.jsx)(TipOtherComponents,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:toggle_stories.States})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:toggle_stories.Disabled})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),"\n",(0,jsx_runtime.jsx)(component_rules.A,{rules:[{positive:{component:(0,jsx_runtime.jsxs)(_components.div,{className:"monday-storybook-toggle_row",children:["Dark mode ",(0,jsx_runtime.jsx)(Toggle.A,{})]}),description:"Use toggle only for on and off actions. We recommend not to change these lables values."},negative:{component:(0,jsx_runtime.jsxs)(_components.div,{className:"monday-storybook-toggle_row",children:["Theme ",(0,jsx_runtime.jsx)(Toggle.A,{offOverrideText:"Light mode",onOverrideText:"Dark mode"})]}),description:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Don’t use toggle for configurations. Instead, use"," ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Inputs/Checkbox",children:"Checkboxes"})," or"," ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Inputs/RadioButton",children:"Radio buttons."})," "]})}},{positive:{component:(0,jsx_runtime.jsx)(Toggle.A,{}),description:"Toggle will always appear with labels"},negative:{component:(0,jsx_runtime.jsxs)(_components.div,{className:"monday-storybook-toggle_column",children:[(0,jsx_runtime.jsx)(Toggle.A,{offOverrideText:""}),(0,jsx_runtime.jsx)(Toggle.A,{areLabelsHidden:!0})]}),description:"Don’t remove toggle labels, since users would not know what state it represents. "}}]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"turn-on-off-an-automation",children:"Turn on/ off an automation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"In the automations center, a user can turn the automation on or off."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:toggle_stories.TurnOnOffAnAutomation})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.op,component_description_map.rT,component_description_map.z9]})]})}const toggle=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../storybook-blocks/dist/src/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Toggle/__stories__/toggle.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-toggle_column{display:flex;flex-direction:column;row-gap:15px;align-items:flex-start}.monday-storybook-toggle_row{display:flex;align-items:center;justify-content:center;column-gap:25px}","",{version:3,sources:["webpack://./src/components/Toggle/__stories__/toggle.stories.scss"],names:[],mappings:"AACE,gCACE,YAAA,CACA,qBAAA,CACA,YAAA,CACA,sBAAA,CAGF,6BACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA",sourcesContent:[".monday-storybook-toggle {\n  &_column {\n    display: flex;\n    flex-direction: column;\n    row-gap: 15px;\n    align-items: flex-start;\n  }\n\n  &_row {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    column-gap: 25px;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Toggle/__stories__/toggle.stories.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_3_toggle_stories_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Toggle/__stories__/toggle.stories.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_3_toggle_stories_scss__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_3_toggle_stories_scss__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_3_toggle_stories_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_3_toggle_stories_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals}}]);