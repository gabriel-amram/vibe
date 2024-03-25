"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[9877,2511],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ButtonGroup/__stories__/buttonGroup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonGroupAsToggle:()=>ButtonGroupAsToggle,ButtonGroupInSettings:()=>ButtonGroupInSettings,Default:()=>Default,Disabled:()=>Disabled,DisabledSingeButton:()=>DisabledSingeButton,Overview:()=>Overview,Size:()=>Size,Tertiary:()=>Tertiary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ButtonGroup_stories_buttonGroup_stories});__webpack_require__("../../node_modules/react/index.js");var ButtonGroup=__webpack_require__("./src/components/ButtonGroup/ButtonGroup.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),createComponentTemplate=__webpack_require__("../storybook-blocks/dist/src/functions/createComponentTemplate.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),buttonGroup_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/ButtonGroup/__stories__/buttonGroup.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(buttonGroup_stories.A,options);buttonGroup_stories.A&&buttonGroup_stories.A.locals&&buttonGroup_stories.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),metaSettings=(0,createStoryMetaSettingsDecorator.B)({component:ButtonGroup.A,enumPropNamesArray:["kind","size"],actionPropsArray:["onSelect"]}),buttonGroupTemplate=(0,createComponentTemplate.M)(ButtonGroup.A);const ButtonGroup_stories_buttonGroup_stories={title:"Buttons/ButtonGroup",component:ButtonGroup.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:buttonGroupTemplate.bind({}),name:"Overview",args:{options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}],value:1}},Default={render:function render(){return(0,jsx_runtime.jsx)(ButtonGroup.A,{groupAriaLabel:"button group aria label",value:1,options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})},name:"Default"},Tertiary={render:function render(){return(0,jsx_runtime.jsx)(ButtonGroup.A,{groupAriaLabel:"button group aria label",value:1,kind:ButtonGroup.A.kinds.TERTIARY,options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})},name:"Tertiary"},Disabled={render:function render(){return(0,jsx_runtime.jsx)(ButtonGroup.A,{disabled:!0,groupAriaLabel:"button group aria label",options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})},name:"Disabled"},DisabledSingeButton={render:function render(){return(0,jsx_runtime.jsx)(ButtonGroup.A,{groupAriaLabel:"button group aria label",options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta",disabled:!0,tooltipContent:"I'm the worst variant ever"}]})},name:"Disabled - Singe Button"},Size={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-button-group_column",children:["Medium",(0,jsx_runtime.jsx)(ButtonGroup.A,{groupAriaLabel:"button group aria label",size:ButtonGroup.A.sizes.MEDIUM,value:1,options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})]}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-button-group_column",children:["Small",(0,jsx_runtime.jsx)(ButtonGroup.A,{groupAriaLabel:"button group aria label",size:ButtonGroup.A.sizes.SMALL,value:1,options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})]})]})},name:"Size"},ButtonGroupInSettings={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-button-group_column",children:["Function",(0,jsx_runtime.jsx)(ButtonGroup.A,{groupAriaLabel:"button group aria label",size:ButtonGroup.A.sizes.SMALL,value:1,options:[{value:1,text:"Sum"},{value:2,text:"Average"},{value:3,text:"Median"},{value:4,text:"Min"}]})]})},name:"Button group in settings"},ButtonGroupAsToggle={render:function render(){return(0,jsx_runtime.jsx)(ButtonGroup.A,{groupAriaLabel:"button group aria label",value:1,options:[{value:1,text:"Grid"},{value:2,text:"List"}]})},name:"Button group as toggle"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: buttonGroupTemplate.bind({}),\n  name: "Overview",\n  args: {\n    options: [{\n      value: 1,\n      text: "Alpha"\n    }, {\n      value: 2,\n      text: "Beta"\n    }, {\n      value: 3,\n      text: "Gamma"\n    }, {\n      value: 4,\n      text: "Delta"\n    }],\n    value: 1\n  }\n}',...Overview.parameters?.docs?.source}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <ButtonGroup groupAriaLabel="button group aria label" value={1} options={[{\n    value: 1,\n    text: "Alpha"\n  }, {\n    value: 2,\n    text: "Beta"\n  }, {\n    value: 3,\n    text: "Gamma"\n  }, {\n    value: 4,\n    text: "Delta"\n  }]} />,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},Tertiary.parameters={...Tertiary.parameters,docs:{...Tertiary.parameters?.docs,source:{originalSource:'{\n  render: () => <ButtonGroup groupAriaLabel="button group aria label" value={1} kind={ButtonGroup.kinds.TERTIARY} options={[{\n    value: 1,\n    text: "Alpha"\n  }, {\n    value: 2,\n    text: "Beta"\n  }, {\n    value: 3,\n    text: "Gamma"\n  }, {\n    value: 4,\n    text: "Delta"\n  }]} />,\n  name: "Tertiary"\n}',...Tertiary.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => <ButtonGroup disabled groupAriaLabel="button group aria label" options={[{\n    value: 1,\n    text: "Alpha"\n  }, {\n    value: 2,\n    text: "Beta"\n  }, {\n    value: 3,\n    text: "Gamma"\n  }, {\n    value: 4,\n    text: "Delta"\n  }]} />,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}},DisabledSingeButton.parameters={...DisabledSingeButton.parameters,docs:{...DisabledSingeButton.parameters?.docs,source:{originalSource:'{\n  render: () => <ButtonGroup groupAriaLabel="button group aria label" options={[{\n    value: 1,\n    text: "Alpha"\n  }, {\n    value: 2,\n    text: "Beta"\n  }, {\n    value: 3,\n    text: "Gamma"\n  }, {\n    value: 4,\n    text: "Delta",\n    disabled: true,\n    tooltipContent: "I\'m the worst variant ever"\n  }]} />,\n  name: "Disabled - Singe Button"\n}',...DisabledSingeButton.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <div className="monday-storybook-button-group_column">\n        Medium\n        <ButtonGroup groupAriaLabel="button group aria label" size={ButtonGroup.sizes.MEDIUM} value={1} options={[{\n        value: 1,\n        text: "Alpha"\n      }, {\n        value: 2,\n        text: "Beta"\n      }, {\n        value: 3,\n        text: "Gamma"\n      }, {\n        value: 4,\n        text: "Delta"\n      }]} />\n      </div>\n      <div className="monday-storybook-button-group_column">\n        Small\n        <ButtonGroup groupAriaLabel="button group aria label" size={ButtonGroup.sizes.SMALL} value={1} options={[{\n        value: 1,\n        text: "Alpha"\n      }, {\n        value: 2,\n        text: "Beta"\n      }, {\n        value: 3,\n        text: "Gamma"\n      }, {\n        value: 4,\n        text: "Delta"\n      }]} />\n      </div>\n    </>,\n  name: "Size"\n}',...Size.parameters?.docs?.source}}},ButtonGroupInSettings.parameters={...ButtonGroupInSettings.parameters,docs:{...ButtonGroupInSettings.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-button-group_column">\n      Function\n      <ButtonGroup groupAriaLabel="button group aria label" size={ButtonGroup.sizes.SMALL} value={1} options={[{\n      value: 1,\n      text: "Sum"\n    }, {\n      value: 2,\n      text: "Average"\n    }, {\n      value: 3,\n      text: "Median"\n    }, {\n      value: 4,\n      text: "Min"\n    }]} />\n    </div>,\n  name: "Button group in settings"\n}',...ButtonGroupInSettings.parameters?.docs?.source}}},ButtonGroupAsToggle.parameters={...ButtonGroupAsToggle.parameters,docs:{...ButtonGroupAsToggle.parameters?.docs,source:{originalSource:'{\n  render: () => <ButtonGroup groupAriaLabel="button group aria label" value={1} options={[{\n    value: 1,\n    text: "Grid"\n  }, {\n    value: 2,\n    text: "List"\n  }]} />,\n  name: "Button group as toggle"\n}',...ButtonGroupAsToggle.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Default","Tertiary","Disabled","DisabledSingeButton","Size","ButtonGroupInSettings","ButtonGroupAsToggle"]},"./src/components/ButtonGroup/__stories__/buttonGroup.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>buttonGroup});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),ButtonGroup=__webpack_require__("./src/components/ButtonGroup/ButtonGroup.tsx"),Mobile=__webpack_require__("./src/components/Icon/Icons/components/Mobile.tsx"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["size"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Desktop=function Desktop(_ref){var size=_ref.size,props=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsxs)("svg",_objectSpread(_objectSpread({xmlns:"http://www.w3.org/2000/svg",width:size||"20",height:size||"20",viewBox:"0 0 20 20",fill:"none"},props),{},{children:[(0,jsx_runtime.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.5 12.9626C17.5 13.6277 16.9163 14.1663 16.1957 14.1663H3.80435C3.08435 14.1663 2.5 13.6277 2.5 12.9626V4.53671C2.5 3.87227 3.08435 3.33301 3.80435 3.33301H16.1957C16.9163 3.33301 17.5 3.87227 17.5 4.53671V12.9626Z",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),(0,jsx_runtime.jsx)("path",{d:"M1.66797 16.666H18.3346",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}))};Desktop.displayName="Desktop",Desktop.displayName="Desktop";const assets_Desktop=Desktop;Desktop.__docgenInfo={description:"",methods:[],displayName:"Desktop",props:{size:{description:"",type:{name:"string"},required:!1}}};var tip=__webpack_require__("../storybook-blocks/dist/src/components/tip/tip.js"),storybook_link=__webpack_require__("../storybook-blocks/dist/src/components/storybook-link/storybook-link.js"),TipCheckYourself=function TipCheckYourself(){return(0,jsx_runtime.jsxs)(tip.A,{title:"Check yourself",children:["Button group will always have one button selected. If you need to display adjacent buttons without selected mode, use the"," ",(0,jsx_runtime.jsx)(storybook_link.A,{page:"Docs/Buttons/Button",size:storybook_link.A.sizes.SMALL,children:"Button"}),' component with "Flat" props.']})};TipCheckYourself.displayName="TipCheckYourself";var buttonGroup_stories=__webpack_require__("./src/components/ButtonGroup/__stories__/buttonGroup.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3",div:"div"},(0,lib.RP)(),props.components),{PropsTable,UsageGuidelines,StorybookLink,ComponentRules,RelatedComponents}=_components;return ComponentRules||_missingMdxReference("ComponentRules",!0),PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),StorybookLink||_missingMdxReference("StorybookLink",!0),UsageGuidelines||_missingMdxReference("UsageGuidelines",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:buttonGroup_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"buttongroup",children:"ButtonGroup"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#dos-and-donts",children:"Do’s and don’ts"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"ButtonGroup can be used to group related options. To emphasize groups of related toggle buttons, a group should share a common container."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:buttonGroup_stories.Overview})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(UsageGuidelines,{guidelines:["Group together calls to action that are related to each other.","Use when all the actions in the group take place immediately in one click. If one or more actions does not immediately happen in one click, either use a different component, or remove those actions from the group.","Only should be used in groups of up to six buttons if the buttons contain an icon with no text.","The main action of a button group will be in selected mode.",(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Keep the content short and actionable. For longer actions, use the"," ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Inputs/Dropdown",children:"Dropdown"})," component."]}),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Button group is used to display the same content in different view, if you need to present different content, use"," ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Navigation/Tabs/Tabs",children:"Tabs."})]})]}),"\n",(0,jsx_runtime.jsx)(TipCheckYourself,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:buttonGroup_stories.Default})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"tertiary",children:"Tertiary"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:buttonGroup_stories.Tertiary})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled---all-buttons",children:"Disabled - all buttons"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:buttonGroup_stories.Disabled})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled---single-button",children:"Disabled - single button"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:buttonGroup_stories.DisabledSingeButton})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:buttonGroup_stories.Size})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),"\n",(0,jsx_runtime.jsx)(ComponentRules,{rules:[{positive:{component:(0,jsx_runtime.jsx)(ButtonGroup.A,{groupAriaLabel:"button group aria label",value:1,options:[{value:1,text:"Month"},{value:2,text:"Week"},{value:3,text:"Year"}]}),description:"Use when all the actions in the group take place immediately in one click."},negative:{component:(0,jsx_runtime.jsx)(ButtonGroup.A,{groupAriaLabel:"button group aria label",value:1,options:[{value:1,text:"Main table"},{value:2,text:"Hadas view"},{value:3,text:"Chart view"}]}),description:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Don’t use a button group when switching between content or object pages. Use"," ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Navigation/Tabs/Tabs",children:"Tabs"})," instead."]})}},{positive:{component:(0,jsx_runtime.jsxs)(_components.div,{className:"monday-storybook-button-group_column",children:[(0,jsx_runtime.jsx)(ButtonGroup.A,{groupAriaLabel:"button group aria label",size:ButtonGroup.A.sizes.MEDIUM,value:1,options:[{value:1,leftIcon:assets_Desktop},{value:2,leftIcon:Mobile.A}]}),(0,jsx_runtime.jsx)(ButtonGroup.A,{groupAriaLabel:"button group aria label",size:ButtonGroup.A.sizes.MEDIUM,value:1,options:[{value:1,text:"Desktop"},{value:2,text:"Mobile"}]}),(0,jsx_runtime.jsx)(ButtonGroup.A,{groupAriaLabel:"button group aria label",size:ButtonGroup.A.sizes.MEDIUM,value:1,options:[{value:1,text:"Desktop",leftIcon:assets_Desktop},{value:2,text:"Mobile",leftIcon:Mobile.A}]})]}),description:"Always use buttons with a consistent style: Icons, text or icon with text."},negative:{component:(0,jsx_runtime.jsx)(ButtonGroup.A,{groupAriaLabel:"button group aria label",size:ButtonGroup.A.sizes.MEDIUM,value:1,options:[{value:1,text:"Desktop"},{value:2,icon:Mobile.A}]}),description:"Avoid combining text buttons with icon buttons within the same button group."}},{positive:{component:(0,jsx_runtime.jsx)(ButtonGroup.A,{groupAriaLabel:"button group aria label",value:1,options:[{value:1,text:"Yearly plan"},{value:2,text:"Monthly plan"},{value:3,text:"Annual Plan"}]}),description:"Keep button copy width as simillar as possible."},negative:{component:(0,jsx_runtime.jsx)(ButtonGroup.A,{groupAriaLabel:"button group aria label",value:1,options:[{value:1,text:"Yearly"},{value:2,text:"Monthly"},{value:3,text:"Annual-half year plan"}]}),description:"Avoid mixing long button copy and short copy."}}]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"button-group-in-settings",children:"Button group in settings"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"For example: on the views settings you can choose only one option."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:buttonGroup_stories.ButtonGroupInSettings})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"button-group-as-toggle",children:"Button group as toggle"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use button group as toggle for change the view between two states.\nFor on and off actions, use the ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Inputs/Toggle",children:"Toggle"})," component."]}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:buttonGroup_stories.ButtonGroupAsToggle})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.DF,component_description_map.n5,component_description_map.b_]})]})}const buttonGroup=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../storybook-blocks/dist/src/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/ButtonGroup/__stories__/buttonGroup.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-button-group_column{display:flex;flex-direction:column;gap:16px;margin-right:60px}","",{version:3,sources:["webpack://./src/components/ButtonGroup/__stories__/buttonGroup.stories.scss"],names:[],mappings:"AACE,sCACE,YAAA,CACA,qBAAA,CACA,QAAA,CACA,iBAAA",sourcesContent:[".monday-storybook-button-group {\n  &_column {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    margin-right: 60px;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);