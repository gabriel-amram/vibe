"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[680,1192],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/TextField/__stories__/TextField.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InputFieldWithDate:()=>InputFieldWithDate,InputFieldWithDateAndTime:()=>InputFieldWithDateAndTime,InputFieldWithPlaceholderText:()=>InputFieldWithPlaceholderText,Overview:()=>Overview,RequiredInputField:()=>RequiredInputField,Sizes:()=>Sizes,States:()=>States,TextFieldInAForm:()=>TextFieldInAForm,Validation:()=>Validation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextField_stories_TextField_stories});__webpack_require__("../../node_modules/react/index.js");var TextField=__webpack_require__("./src/components/TextField/TextField.tsx"),TextFieldConstants=__webpack_require__("./src/components/TextField/TextFieldConstants.ts"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),createComponentTemplate=__webpack_require__("../../node_modules/vibe-storybook-components/dist/functions/createComponentTemplate.js"),Show=__webpack_require__("./src/components/Icon/Icons/components/Show.tsx"),Email=__webpack_require__("./src/components/Icon/Icons/components/Email.tsx"),Check=__webpack_require__("./src/components/Icon/Icons/components/Check.tsx"),CloseSmall=__webpack_require__("./src/components/Icon/Icons/components/CloseSmall.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),TextField_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/TextField/__stories__/TextField.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TextField_stories.c,options);TextField_stories.c&&TextField_stories.c.locals&&TextField_stories.c.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),metaSettings=(0,createStoryMetaSettingsDecorator.w)({component:TextField.c,enumPropNamesArray:["type","size"],iconPropNamesArray:["secondaryIconName","iconName","labelIconName"]});const TextField_stories_TextField_stories={title:"Inputs/TextField",component:TextField.c,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:(0,createComponentTemplate.q)(TextField.c).bind({}),name:"Overview",args:{title:"Name",iconName:Show.c,validation:{text:"Helper text"},wrapperClassName:"monday-storybook-text-field_size",showCharCount:!0,placeholder:"Placeholder text here"},parameters:{controls:{exclude:["withReadOnlyStyle"]}}},Sizes={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-text-field_column-wrapper",children:[(0,jsx_runtime.jsx)(TextField.c,{placeholder:"Small"}),(0,jsx_runtime.jsx)(TextField.c,{placeholder:"Medium",size:TextField.c.sizes.MEDIUM}),(0,jsx_runtime.jsx)(TextField.c,{placeholder:"Large",size:TextField.c.sizes.LARGE})]})},name:"Sizes"},States={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-text-field_wrapper",children:[(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-text-field_column-wrapper monday-storybook-text-field_spacing",children:[(0,jsx_runtime.jsx)(TextField.c,{placeholder:"Disabled",size:TextField.c.sizes.MEDIUM,disabled:!0}),(0,jsx_runtime.jsx)(TextField.c,{placeholder:"With icon",iconName:Email.c,size:TextField.c.sizes.MEDIUM}),(0,jsx_runtime.jsx)(TextField.c,{placeholder:"With clickable icon",iconName:Email.c,onIconClick:function onIconClick(){},size:TextField.c.sizes.MEDIUM})]}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-text-field_column-wrapper",children:[(0,jsx_runtime.jsx)(TextField.c,{placeholder:"With field label",title:"Name",size:TextField.c.sizes.MEDIUM}),(0,jsx_runtime.jsx)(TextField.c,{placeholder:"Success",validation:{status:"success"},iconName:Check.c,size:TextField.c.sizes.MEDIUM}),(0,jsx_runtime.jsx)(TextField.c,{placeholder:"Error",validation:{status:"error"},iconName:CloseSmall.c,size:TextField.c.sizes.MEDIUM})]})]})},name:"States"},Validation={render:function render(){return(0,jsx_runtime.jsx)("div",{className:"monday-storybook-text-field_column-wrapper",children:(0,jsx_runtime.jsx)(TextField.c,{placeholder:"Validate me",title:"Name",size:TextField.c.sizes.MEDIUM,validation:{status:"error",text:"Validation text"}})})},name:"Validation"},TextFieldInAForm={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-text-field_box",children:[(0,jsx_runtime.jsx)("h1",{children:"Dark Mode Feedback From"}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-text-field_box_wrapper",children:[(0,jsx_runtime.jsx)(TextField.c,{title:"Your Name",size:TextField.c.sizes.MEDIUM,placeholder:"John Doe"}),(0,jsx_runtime.jsx)(TextField.c,{title:"Email",size:TextField.c.sizes.MEDIUM,placeholder:"email@monday.com"})]})]})},name:"Text field in a form"},InputFieldWithPlaceholderText={render:function render(){return(0,jsx_runtime.jsx)("div",{className:"monday-storybook-text-field_size",children:(0,jsx_runtime.jsx)(TextField.c,{title:"Invite with email",labelIconName:Email.c,placeholder:"Enter one or more email",size:TextField.c.sizes.MEDIUM})})},name:"Input field with placeholder text"},RequiredInputField={render:function render(){return(0,jsx_runtime.jsx)("div",{className:"monday-storybook-text-field_column-wrapper",children:(0,jsx_runtime.jsx)(TextField.c,{placeholder:"Your email",title:"Email Address",size:TextField.c.sizes.MEDIUM,requiredAsterisk:!0})})},name:"Required input field"},InputFieldWithDate={render:function render(){return(0,jsx_runtime.jsx)("div",{className:"monday-storybook-text-field_size",children:(0,jsx_runtime.jsx)(TextField.c,{size:TextField.c.sizes.MEDIUM,type:TextFieldConstants.of.DATE})})},name:"Input field with date"},InputFieldWithDateAndTime={render:function render(){return(0,jsx_runtime.jsx)("div",{className:"monday-storybook-text-field_size",children:(0,jsx_runtime.jsx)(TextField.c,{size:TextField.c.sizes.MEDIUM,type:TextFieldConstants.of.DATE_TIME})})},name:"Input field with date and time"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: textFieldTemplate.bind({}),\n  name: "Overview",\n  args: {\n    title: "Name",\n    iconName: Show,\n    validation: {\n      text: "Helper text"\n    },\n    wrapperClassName: "monday-storybook-text-field_size",\n    showCharCount: true,\n    placeholder: "Placeholder text here"\n  },\n  parameters: {\n    controls: {\n      // TODO: remove exclusion when prop is removed in next major\n      exclude: ["withReadOnlyStyle"]\n    }\n  }\n}',...Overview.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-text-field_column-wrapper">\n      <TextField placeholder="Small" />\n      <TextField placeholder="Medium" size={TextField.sizes.MEDIUM} />\n      <TextField placeholder="Large" size={TextField.sizes.LARGE} />\n    </div>,\n  name: "Sizes"\n}',...Sizes.parameters?.docs?.source}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-text-field_wrapper">\n      <div className="monday-storybook-text-field_column-wrapper monday-storybook-text-field_spacing">\n        <TextField placeholder="Disabled" size={TextField.sizes.MEDIUM} disabled />\n        <TextField placeholder="With icon" iconName={Email} size={TextField.sizes.MEDIUM} />\n        <TextField placeholder="With clickable icon" iconName={Email} onIconClick={() => {}} size={TextField.sizes.MEDIUM} />\n      </div>\n      <div className="monday-storybook-text-field_column-wrapper">\n        <TextField placeholder="With field label" title="Name" size={TextField.sizes.MEDIUM} />\n        <TextField placeholder="Success" validation={{\n        status: "success"\n      }} iconName={Check} size={TextField.sizes.MEDIUM} />\n        <TextField placeholder="Error" validation={{\n        status: "error"\n      }} iconName={CloseSmall} size={TextField.sizes.MEDIUM} />\n      </div>\n    </div>,\n  name: "States"\n}',...States.parameters?.docs?.source}}},Validation.parameters={...Validation.parameters,docs:{...Validation.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-text-field_column-wrapper">\n      <TextField placeholder="Validate me" title="Name" size={TextField.sizes.MEDIUM} validation={{\n      status: "error",\n      text: "Validation text"\n    }} />\n    </div>,\n  name: "Validation"\n}',...Validation.parameters?.docs?.source}}},TextFieldInAForm.parameters={...TextFieldInAForm.parameters,docs:{...TextFieldInAForm.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-text-field_box">\n      <h1>Dark Mode Feedback From</h1>\n      <div className="monday-storybook-text-field_box_wrapper">\n        <TextField title="Your Name" size={TextField.sizes.MEDIUM} placeholder="John Doe" />\n        <TextField title="Email" size={TextField.sizes.MEDIUM} placeholder="email@monday.com" />\n      </div>\n    </div>,\n  name: "Text field in a form"\n}',...TextFieldInAForm.parameters?.docs?.source}}},InputFieldWithPlaceholderText.parameters={...InputFieldWithPlaceholderText.parameters,docs:{...InputFieldWithPlaceholderText.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-text-field_size">\n      <TextField title="Invite with email" labelIconName={Email} placeholder="Enter one or more email" size={TextField.sizes.MEDIUM} />\n    </div>,\n  name: "Input field with placeholder text"\n}',...InputFieldWithPlaceholderText.parameters?.docs?.source}}},RequiredInputField.parameters={...RequiredInputField.parameters,docs:{...RequiredInputField.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-text-field_column-wrapper">\n      <TextField placeholder="Your email" title="Email Address" size={TextField.sizes.MEDIUM} requiredAsterisk={true} />\n    </div>,\n  name: "Required input field"\n}',...RequiredInputField.parameters?.docs?.source}}},InputFieldWithDate.parameters={...InputFieldWithDate.parameters,docs:{...InputFieldWithDate.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-text-field_size">\n      <TextField size={TextField.sizes.MEDIUM} type={TextFieldTextType.DATE} />\n    </div>,\n  name: "Input field with date"\n}',...InputFieldWithDate.parameters?.docs?.source}}},InputFieldWithDateAndTime.parameters={...InputFieldWithDateAndTime.parameters,docs:{...InputFieldWithDateAndTime.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-text-field_size">\n      <TextField size={TextField.sizes.MEDIUM} type={TextFieldTextType.DATE_TIME} />\n    </div>,\n  name: "Input field with date and time"\n}',...InputFieldWithDateAndTime.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Sizes","States","Validation","TextFieldInAForm","InputFieldWithPlaceholderText","RequiredInputField","InputFieldWithDate","InputFieldWithDateAndTime"]},"./src/components/TextField/__stories__/TextField.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_TextField__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/TextField/TextField.tsx"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/usage-guidelines/usage-guidelines.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/component-rules/component-rules.js"),_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),_TextField_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/TextField/__stories__/TextField.stories.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3",div:"div"},(0,_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.MN)(),props.components),{PropsTable,RelatedComponents}=_components;return PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Qb,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"textfield",children:"TextField"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#dos-and-donts",children:"Do’s and don’ts"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"An input field includes a label and a text field users can type text into. They typically appear in forms and dialogs."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__._W,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_4__.Overview})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PropsTable,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_5__.c,{guidelines:["Always use placeholder in input field","Icons can be used to message alerts as well. Pair them with error messages to provide redundant alerts.","Character or word counters should be used if there is a character or word limit."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"There are three sizes available: Small (32px), Medium (40px) and Large (48px)."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__._W,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_4__.Sizes})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"states",children:"States"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__._W,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_4__.States})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"validation",children:"Validation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Use validation to give feedback to the user for a case where he has provided an invalid input. The validation error should appear when the user is done typing and getting out of the input’s focus."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"The validation object has two status states - error, success"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__._W,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_4__.Validation})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__.c,{rules:[{positive:{component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.div,{className:"monday-storybook-text-field_size",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_7__.c,{title:"Email",placeholder:"email@monday.com",size:_TextField__WEBPACK_IMPORTED_MODULE_7__.c.sizes.MEDIUM})}),description:"Make sure your text field has a short, descriptive label above it that describes what the user should type into the box below."},negative:{component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.div,{className:"monday-storybook-text-field_size",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_7__.c,{title:"What is your email address?",placeholder:"email@monday.com",size:_TextField__WEBPACK_IMPORTED_MODULE_7__.c.sizes.MEDIUM})}),description:"Avoid phrasing your labels as questions. Keep in mind that your label shouldn’t contain instructions. Reserve those for the helper text."}},{positive:{component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.div,{className:"monday-storybook-text-field_size",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_7__.c,{title:"Email",placeholder:"email@monday.com",size:_TextField__WEBPACK_IMPORTED_MODULE_7__.c.sizes.MEDIUM})}),description:"Use the help text description to convey requirements or to show any formatting examples that would help user comprehension."},negative:{component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.div,{className:"monday-storybook-text-field_size",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_7__.c,{title:"Email",placeholder:"email@monday.com",size:_TextField__WEBPACK_IMPORTED_MODULE_7__.c.sizes.MEDIUM}),"For example: email@monday.com"]}),description:"Avoid repeating the field label. If the field label provides sufficient context for completing the action, then you likely don’t need to add help text."}}]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"text-field-in-a-form",children:"Text field in a form"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Users can insert text."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__._W,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_4__.TextFieldInAForm})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"input-field-with-placeholder-text",children:"Input field with placeholder text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__._W,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_4__.InputFieldWithPlaceholderText})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"required-input-field",children:"Required input field"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"requiredAsterisk"})," prop to indicate that a field is required. When set to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"true"}),", an asterisk (*) will appear next to the label."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__._W,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_4__.RequiredInputField})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"input-field-with-date",children:"Input field with date"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__._W,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_4__.InputFieldWithDate})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"input-field-with-datetime",children:"Input field with datetime"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__._W,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_4__.InputFieldWithDateAndTime})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RelatedComponents,{componentsNames:[_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_8__.CE,_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_8__.uS,_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_8__.Qz]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.MN)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/TextField/__stories__/TextField.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-text-field_wrapper{display:flex}.monday-storybook-text-field_column-wrapper{display:flex;flex-direction:column;width:300px;gap:16px;margin-right:32px}.monday-storybook-text-field_size{width:300px}.monday-storybook-text-field_box{padding:4px;width:264px}.monday-storybook-text-field_box_wrapper{display:flex;flex-direction:column;gap:16px}.monday-storybook-text-field_spacing{padding-top:32px}","",{version:3,sources:["webpack://./src/components/TextField/__stories__/TextField.stories.scss"],names:[],mappings:"AACE,qCACE,YAAA,CAGF,4CACE,YAAA,CACA,qBAAA,CACA,WAAA,CACA,QAAA,CACA,iBAAA,CAGF,kCACE,WAAA,CAGF,iCACE,WAAA,CACA,WAAA,CAEA,yCACE,YAAA,CACA,qBAAA,CACA,QAAA,CAIJ,qCACE,gBAAA",sourcesContent:[".monday-storybook-text-field {\n  &_wrapper {\n    display: flex;\n  }\n\n  &_column-wrapper {\n    display: flex;\n    flex-direction: column;\n    width: 300px;\n    gap: 16px;\n    margin-right: 32px;\n  }\n\n  &_size {\n    width: 300px;\n  }\n\n  &_box {\n    padding: 4px;\n    width: 264px;\n\n    &_wrapper {\n      display: flex;\n      flex-direction: column;\n      gap: 16px;\n    }\n  }\n\n  &_spacing {\n    padding-top: 32px\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/vibe-storybook-components/dist/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}}]);