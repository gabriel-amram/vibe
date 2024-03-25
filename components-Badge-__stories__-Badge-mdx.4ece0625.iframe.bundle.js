"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[3733,5967],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Badge/__stories__/Badge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AvatarStory:()=>AvatarStory,ButtonStory:()=>ButtonStory,InlineElements:()=>InlineElements,Overview:()=>Overview,States:()=>States,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _Badge__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Badge/Badge.tsx"),_assets_person_png__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/Badge/__stories__/assets/person.png"),_Icon_Icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Icon/Icons/components/WhatsNew.tsx"),_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/Icon/Icons/components/ExternalPage.tsx"),_Link_Link__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/Link/Link.tsx"),_Button_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Button/Button.tsx"),_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Flex/Flex.tsx"),_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/Avatar/Avatar.tsx"),_storybook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../storybook-blocks/dist/src/functions/createComponentTemplate.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../storybook-blocks/dist/src/components/story-description/story-description.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),metaSettings=(0,_storybook__WEBPACK_IMPORTED_MODULE_2__.B)({component:_Badge__WEBPACK_IMPORTED_MODULE_3__.A,enumPropNamesArray:["anchor","alignment","type"],iconPropNamesArray:[],actionPropsArray:[],ignoreControlsPropNamesArray:["children"]}),badgeTemplate=(0,vibe_storybook_components__WEBPACK_IMPORTED_MODULE_4__.M)(_Badge__WEBPACK_IMPORTED_MODULE_3__.A);const __WEBPACK_DEFAULT_EXPORT__={title:"Feedback/Badge",component:_Badge__WEBPACK_IMPORTED_MODULE_3__.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:badgeTemplate.bind({}),name:"Overview",args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_5__.A,{leftIcon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_6__.A,children:"What's new"})}},States={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__.A,{gap:_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__.A.gaps.LARGE,style:{flex:1},justify:_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__.A.justify.START,align:_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__.A.align.START,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_8__.A,{description:"Indicator",vertical:!0,align:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_8__.A.align.START,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_3__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_5__.A,{leftIcon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_6__.A,children:"What's new"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_8__.A,{description:"Counter",vertical:!0,align:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_8__.A.align.START,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_3__.A,{type:_Badge__WEBPACK_IMPORTED_MODULE_3__.A.types.COUNTER,count:100,maxDigits:2,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_5__.A,{leftIcon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_6__.A,children:"What's new"})})})]})},name:"States"},ButtonStory={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_3__.A,{alignment:_Badge__WEBPACK_IMPORTED_MODULE_3__.A.alignments.RECTANGULAR,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_5__.A,{leftIcon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.A,children:"Button"})})},name:"Button"},AvatarStory={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_3__.A,{alignment:_Badge__WEBPACK_IMPORTED_MODULE_3__.A.alignments.CIRCULAR,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__.A,{size:_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__.A.sizes.LARGE,src:_assets_person_png__WEBPACK_IMPORTED_MODULE_11__,type:_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__.A.types.IMG})})},name:"Avatar"},InlineElements={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__.A,{direction:_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__.A.directions.COLUMN,gap:_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__.A.gaps.MEDIUM,align:_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__.A.align.START,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_3__.A,{alignment:_Badge__WEBPACK_IMPORTED_MODULE_3__.A.alignments.OUTSIDE,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Link_Link__WEBPACK_IMPORTED_MODULE_12__.A,{text:"Read more"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_3__.A,{alignment:_Badge__WEBPACK_IMPORTED_MODULE_3__.A.alignments.OUTSIDE,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Link_Link__WEBPACK_IMPORTED_MODULE_12__.A,{text:"What's new",iconPosition:_Link_Link__WEBPACK_IMPORTED_MODULE_12__.A.iconPositions.START,icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_6__.A})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_3__.A,{alignment:_Badge__WEBPACK_IMPORTED_MODULE_3__.A.alignments.OUTSIDE,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Link_Link__WEBPACK_IMPORTED_MODULE_12__.A,{text:"Learn more",iconPosition:_Link_Link__WEBPACK_IMPORTED_MODULE_12__.A.iconPositions.END,icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.A})})]})},name:"Inline elements"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: badgeTemplate.bind({}),\n  name: "Overview",\n  args: {\n    children: <Button leftIcon={WhatsNew}>{"What\'s new"}</Button>\n  }\n}',...Overview.parameters?.docs?.source}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:'{\n  render: () => <Flex gap={Flex.gaps.LARGE} style={{\n    flex: 1\n  }} justify={Flex.justify.START} align={Flex.align.START}>\n      <StoryDescription description="Indicator" vertical align={StoryDescription.align.START}>\n        <Badge>\n          <Button leftIcon={WhatsNew}>{"What\'s new"}</Button>\n        </Badge>\n      </StoryDescription>\n      <StoryDescription description="Counter" vertical align={StoryDescription.align.START}>\n        <Badge type={Badge.types.COUNTER} count={100} maxDigits={2}>\n          <Button leftIcon={WhatsNew}>{"What\'s new"}</Button>\n        </Badge>\n      </StoryDescription>\n    </Flex>,\n  name: "States"\n}',...States.parameters?.docs?.source}}},ButtonStory.parameters={...ButtonStory.parameters,docs:{...ButtonStory.parameters?.docs,source:{originalSource:'{\n  render: () => <Badge alignment={Badge.alignments.RECTANGULAR}>\n      <Button leftIcon={ExternalPage}>Button</Button>\n    </Badge>,\n  name: "Button"\n}',...ButtonStory.parameters?.docs?.source}}},AvatarStory.parameters={...AvatarStory.parameters,docs:{...AvatarStory.parameters?.docs,source:{originalSource:'{\n  render: () => <Badge alignment={Badge.alignments.CIRCULAR}>\n      <Avatar size={Avatar.sizes.LARGE} src={person} type={Avatar.types.IMG} />\n    </Badge>,\n  name: "Avatar"\n}',...AvatarStory.parameters?.docs?.source}}},InlineElements.parameters={...InlineElements.parameters,docs:{...InlineElements.parameters?.docs,source:{originalSource:'{\n  render: () => <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM} align={Flex.align.START}>\n      <Badge alignment={Badge.alignments.OUTSIDE}>\n        <Link text="Read more" />\n      </Badge>\n      <Badge alignment={Badge.alignments.OUTSIDE}>\n        <Link text="What\'s new" iconPosition={Link.iconPositions.START} icon={WhatsNew} />\n      </Badge>\n      <Badge alignment={Badge.alignments.OUTSIDE}>\n        <Link text="Learn more" iconPosition={Link.iconPositions.END} icon={ExternalPage} />\n      </Badge>\n    </Flex>,\n  name: "Inline elements"\n}',...InlineElements.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","States","ButtonStory","AvatarStory","InlineElements"]},"./src/components/Badge/__stories__/Badge.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_Badge__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Badge/Badge.tsx"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_assets_person_png__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/Badge/__stories__/assets/person.png"),_Icon_Icons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/Icon/Icons/components/WhatsNew.tsx"),_Link_Link__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Link/Link.tsx"),_Button_Button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Button/Button.tsx"),_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/Avatar/Avatar.tsx"),_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),_Indicator_Indicator__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/Badge/Indicator/Indicator.tsx"),_Badge_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Badge/__stories__/Badge.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3"},(0,_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components),{PropsTable,ComponentRules,RelatedComponents}=_components;return ComponentRules||_missingMdxReference("ComponentRules",!0),PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"badge",children:"Badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#dos-and-donts",children:"Do’s and don’ts"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Badge component is responsible for layout an indicator/counter on a child component"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gG,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_4__.Overview})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PropsTable,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"states",children:"States"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Badge can be of type Indicator or type Counter"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gG,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_4__.States})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"button",children:"Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"When using Badge on a Button element, use alignment of RECTANGULAR in order to attach it to the element"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gG,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_4__.ButtonStory})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"avatar",children:"Avatar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"When using Badge on an Avatar element, use alignment of CIRCULAR in order to attach it to the element"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gG,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_4__.AvatarStory})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"inline-elements",children:"Inline elements"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"When using Badge on an inline element, use alignment of OUTSIDE in order to attach it to the element"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gG,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_4__.InlineElements})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ComponentRules,{rules:[{positive:{component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_5__.A,{alignment:_Badge__WEBPACK_IMPORTED_MODULE_5__.A.alignments.OUTSIDE,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Link_Link__WEBPACK_IMPORTED_MODULE_6__.A,{text:"Read more"})}),description:"When using the badge on an inline component, apply OUTSIDE alignment to it"},negative:{component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_5__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Link_Link__WEBPACK_IMPORTED_MODULE_6__.A,{text:"Read more"})}),description:"Do not leave the indicator inside the element boundaries"}},{positive:{component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_5__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_7__.A,{leftIcon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_8__.A,children:"What's new"})}),description:"Choose a color that does not blend with the one of the child component"},negative:{component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_5__.A,{color:_Indicator_Indicator__WEBPACK_IMPORTED_MODULE_9__.A.colors.PRIMARY,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_7__.A,{leftIcon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_8__.A,children:"What's new"})}),description:"Do not use a color that blends with the child component"}},{positive:{component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_5__.A,{alignment:_Badge__WEBPACK_IMPORTED_MODULE_5__.A.alignments.CIRCULAR,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__.A,{size:_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__.A.sizes.MEDIUM,src:_assets_person_png__WEBPACK_IMPORTED_MODULE_11__,type:_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__.A.types.IMG})}),description:"When using Indicator badge, anchor it at the top-right edge"},negative:{component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_5__.A,{alignment:_Badge__WEBPACK_IMPORTED_MODULE_5__.A.alignments.CIRCULAR,anchor:_Badge__WEBPACK_IMPORTED_MODULE_5__.A.anchors.TOP_START,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__.A,{size:_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__.A.sizes.MEDIUM,src:_assets_person_png__WEBPACK_IMPORTED_MODULE_11__,type:_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__.A.types.IMG})}),description:"Do not place it on any other edge"}}]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RelatedComponents,{componentsNames:[_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_12__.ps,_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_12__.n5,_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_12__.Bv]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../storybook-blocks/dist/src/components/story-description/story-description.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>p});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),withStaticProps=__webpack_require__("../storybook-blocks/dist/src/types/withStaticProps.js"),FlexConstants=__webpack_require__("../storybook-blocks/dist/src/helpers/components/Flex/FlexConstants.js"),Flex=__webpack_require__("../storybook-blocks/dist/src/helpers/components/Flex/Flex.js"),e_description="story-description-module_description__yFjQO",e_vertical="story-description-module_vertical__C1SJj";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key),key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var p=(0,withStaticProps.N)((function m(t){var o,l,n,_t$description=t.description,a=void 0===_t$description?"":_t$description,p=t.headerStyle,u=t.children,_t$vertical=t.vertical,v=void 0!==_t$vertical&&_t$vertical,f=t.className,j=t.align,_t$justify=t.justify,g=void 0===_t$justify?null===(o=m.justify)||void 0===o?void 0:o.START:_t$justify,h=t.headerAlign,y=t.headerJustify,x=(0,react.useMemo)((function(){var i,s;return v?null===(i=m.directions)||void 0===i?void 0:i.COLUMN:null===(s=m.directions)||void 0===s?void 0:s.ROW}),[v]);return(0,jsx_runtime.jsxs)(Flex.A,{direction:x,gap:null===(l=m.gaps)||void 0===l?void 0:l.MEDIUM,justify:g,align:j||void 0,className:f,children:[(0,jsx_runtime.jsx)(Flex.A,{className:classnames_default()(e_description,_defineProperty({},e_vertical,v)),style:Object.assign({width:"120px"},p),justify:y,align:h||(null===(n=m.align)||void 0===n?void 0:n.CENTER),children:a}),u]})}),{justify:FlexConstants.aP,align:FlexConstants.xB,gaps:FlexConstants.Us,directions:FlexConstants.bo})},"../storybook-blocks/dist/src/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}},"./src/components/Badge/__stories__/assets/person.png":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/person.3661bfe5.png"}}]);